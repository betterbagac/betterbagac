"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import servicesData from "@/data/services.json";

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryId?: string;
  keywords: string[];
  office?: string;
  fee?: string;
  processingTime?: string;
  url: string;
}

interface SearchResult extends Service {
  score: number;
  _query: string;
}

interface SearchSuggestions {
  popular: string[];
  recent: string[];
  suggestions: string[];
}

const RECENT_SEARCHES_KEY = "betterbagac_recent_searches";
const MAX_RECENT_SEARCHES = 10;
const MAX_RESULTS = 10;

/** Filter ids; must match `categoryId` in services.json. */
export type ServiceCategoryFilter =
  | ""
  | "certificates"
  | "business"
  | "social-services"
  | "health"
  | "tax-payments";

const CURATED_POPULAR = [
  "birth certificate",
  "business permit",
  "cedula",
  "real property tax",
  "senior citizen id",
  "pwd id",
  "barangay clearance",
  "building permit",
  "marriage certificate",
  "death certificate",
  "tricycle franchise",
  "property declaration",
  "online payment",
  "mswdo",
  "slaughterhouse",
];

// Tokenize text into searchable words
function tokenize(text: string): string[] {
  if (!text) return [];
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length >= 2);
}

// Levenshtein distance for fuzzy matching
function levenshteinDistance(a: string, b: string): number {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1,
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

// Check if terms are similar (fuzzy match)
function isFuzzyMatch(term: string, target: string, threshold = 0.3): boolean {
  if (target.includes(term) || term.includes(target)) return true;
  if (target.startsWith(term) || term.startsWith(target)) return true;

  const distance = levenshteinDistance(term, target);
  const maxLen = Math.max(term.length, target.length);
  const similarity = 1 - distance / maxLen;

  return similarity >= 1 - threshold;
}

// Calculate search score
function calculateScore(
  service: Service,
  searchTerms: string[],
  originalQuery: string,
): number {
  let score = 0;
  const titleLower = service.title.toLowerCase();
  const categoryLower = service.category.toLowerCase();
  const descLower = (service.description || "").toLowerCase();
  const officeLower = (service.office || "").toLowerCase();
  const processingTime = (service.processingTime || "").toLowerCase();
  const keywords = service.keywords || [];
  const queryLower = originalQuery.toLowerCase();

  // Exact full query match in title (highest priority)
  if (titleLower === queryLower) score += 200;
  else if (titleLower.includes(queryLower)) score += 100;

  searchTerms.forEach((term) => {
    // Title scoring
    if (titleLower === term) score += 80;
    else if (titleLower.startsWith(term)) score += 60;
    else if (titleLower.includes(term)) score += 40;
    else if (isFuzzyMatch(term, titleLower, 0.25)) score += 20;

    // Keyword scoring
    keywords.forEach((keyword) => {
      const kw = keyword.toLowerCase();
      if (kw === term) score += 35;
      else if (kw.includes(term)) score += 20;
      else if (isFuzzyMatch(term, kw, 0.3)) score += 10;
    });

    // Category scoring
    if (categoryLower.includes(term)) score += 15;
    else if (isFuzzyMatch(term, categoryLower, 0.3)) score += 8;

    // Description scoring
    if (descLower.includes(term)) score += 10;

    // Office scoring
    if (officeLower.includes(term)) score += 12;
    else if (isFuzzyMatch(term, officeLower, 0.3)) score += 6;

    // Processing time scoring
    if (processingTime.includes(term)) score += 8;
  });

  // Only boost complete records when something already matched.
  if (score > 0) {
    if (service.fee) score += 2;
    if (service.processingTime) score += 2;
    if (service.description) score += 1;
  }

  return score;
}

// Get recent searches from localStorage
function getRecentSearches(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

// Add to recent searches
function addRecentSearch(query: string): void {
  if (typeof window === "undefined" || !query || query.length < 2) return;

  try {
    let recent = getRecentSearches();
    recent = recent.filter((q) => q.toLowerCase() !== query.toLowerCase());
    recent.unshift(query);
    recent = recent.slice(0, MAX_RECENT_SEARCHES);
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(recent));
  } catch {
    // localStorage not available
  }
}

// Clear recent searches
function clearRecentSearchesStorage(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(RECENT_SEARCHES_KEY);
  } catch {
    // localStorage not available
  }
}

export function useSearch() {
  const [query, setQueryState] = useState("");
  const [category, setCategoryState] = useState<ServiceCategoryFilter>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<SearchSuggestions>({
    popular: [],
    recent: [],
    suggestions: [],
  });
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const services = useMemo(() => servicesData.services as Service[], []);

  // Lists the whole category when there is no query.
  const search = useCallback(
    (rawQuery: string, activeCategory: ServiceCategoryFilter = "") => {
      const trimmedQuery = rawQuery.trim();
      const searchTerms = tokenize(trimmedQuery);
      const hasQuery = trimmedQuery.length >= 2 && searchTerms.length > 0;

      if (!hasQuery && !activeCategory) {
        setResults([]);
        return [];
      }

      const searchResults: SearchResult[] = [];

      services.forEach((service) => {
        if (activeCategory && service.categoryId !== activeCategory) return;

        if (!hasQuery) {
          searchResults.push({ ...service, score: 0, _query: trimmedQuery });
          return;
        }

        const score = calculateScore(service, searchTerms, trimmedQuery);
        if (score > 0) {
          searchResults.push({ ...service, score, _query: trimmedQuery });
        }
      });

      const sorted = searchResults
        .sort((a, b) =>
          hasQuery ? b.score - a.score : a.title.localeCompare(b.title),
        )
        .slice(0, MAX_RESULTS);

      setResults(sorted);
      return sorted;
    },
    [services],
  );

  // Get suggestions
  const getSuggestions = useCallback(
    (searchQuery: string): SearchSuggestions => {
      if (!searchQuery || searchQuery.length < 1) {
        return {
          popular: CURATED_POPULAR.slice(0, 4),
          recent: getRecentSearches().slice(0, 3),
          suggestions: [],
        };
      }

      const queryLower = searchQuery.toLowerCase();
      const suggestionSet = new Set<string>();

      // Add matching service titles
      services.forEach((service) => {
        if (service.title.toLowerCase().includes(queryLower)) {
          suggestionSet.add(service.title);
        }
      });

      // Add fuzzy matches from popular searches
      CURATED_POPULAR.forEach((term) => {
        if (term.includes(queryLower) || isFuzzyMatch(queryLower, term, 0.4)) {
          suggestionSet.add(term);
        }
      });

      return {
        popular: [],
        recent: [],
        suggestions: Array.from(suggestionSet).slice(0, 8),
      };
    },
    [services],
  );

  // Update suggestions when query changes
  useEffect(() => {
    const newSuggestions = getSuggestions(query);
    setSuggestions(newSuggestions);
  }, [query, getSuggestions]);

  // Handle query change
  const setQuery = useCallback(
    (newQuery: string) => {
      setQueryState(newQuery);
      setSelectedIndex(-1);
      setIsOpen(true);
      search(newQuery, category);
    },
    [search, category],
  );

  // Handle category filter change
  const setCategory = useCallback(
    (nextCategory: ServiceCategoryFilter) => {
      setCategoryState(nextCategory);
      setSelectedIndex(-1);
      setIsOpen(true);
      search(query, nextCategory);
    },
    [search, query],
  );

  // Handle suggestion click
  const handleSuggestionClick = useCallback(
    (suggestion: string) => {
      setQueryState(suggestion);
      setSelectedIndex(-1);
      setIsOpen(true);
      search(suggestion, category);
      addRecentSearch(suggestion);
    },
    [search, category],
  );

  const clearRecentSearches = useCallback(() => {
    clearRecentSearchesStorage();
    setSuggestions((prev) => ({ ...prev, recent: [] }));
  }, []);

  return {
    query,
    setQuery,
    category,
    setCategory,
    results,
    suggestions,
    isOpen,
    setIsOpen,
    selectedIndex,
    setSelectedIndex,
    search,
    handleSuggestionClick,
    clearRecentSearches,
    addRecentSearch,
  };
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export interface HighlightSegment {
  text: string;
  match: boolean;
  start: number;
}

/** Splits text into segments so matches can be highlighted as React nodes. */
export function highlightMatch(
  text: string,
  query: string,
): HighlightSegment[] {
  const terms = tokenize(query).filter((term) => term.length >= 2);
  if (terms.length === 0) return [{ text, match: false, start: 0 }];

  const alternatives = terms.map(escapeRegExp).join("|");
  const pattern = new RegExp(`(${alternatives})`, "gi");
  const isMatch = new RegExp(`^(?:${alternatives})$`, "i");

  let cursor = 0;
  return text
    .split(pattern)
    .filter((part) => part !== "")
    .map((part) => {
      const segment = { text: part, match: isMatch.test(part), start: cursor };
      cursor += part.length;
      return segment;
    });
}
