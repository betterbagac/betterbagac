"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { localizeServiceCopy } from "@/data/i18n/content/categoriesFil";
import { highlightMatch, useSearch } from "@/hooks/useSearch";

interface SearchAutocompleteProps {
  placeholder?: string;
  className?: string;
  onResultClick?: () => void;
}

const optionId = (group: string, index: number) =>
  `search-option-${group}-${index}`;

export default function SearchAutocomplete({
  placeholder,
  className = "",
  onResultClick,
}: SearchAutocompleteProps) {
  const router = useRouter();
  const { t, language } = useLanguage();
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const {
    query,
    setQuery,
    results,
    suggestions,
    isOpen,
    setIsOpen,
    selectedIndex,
    handleKeyDown,
    handleSuggestionClick,
    clearRecentSearches,
    addRecentSearch,
  } = useSearch();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [setIsOpen]);

  const handleResultClick = (url: string) => {
    addRecentSearch(query);
    setIsOpen(false);
    onResultClick?.();
    // A few catalog entries (Filipizen billing) live on another host; they must
    // not be pushed as an in-app route.
    if (/^https?:\/\//.test(url)) {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }
    router.push(url);
  };

  const handleSuggestion = (suggestion: string) => {
    handleSuggestionClick(suggestion);
  };

  const showDropdown =
    isOpen &&
    (results.length > 0 ||
      suggestions.suggestions.length > 0 ||
      suggestions.recent.length > 0 ||
      suggestions.popular.length > 0);

  const optionIds = useMemo(() => {
    const ids: string[] = [];
    if (query.length < 2) {
      suggestions.recent.forEach((_, i) => {
        ids.push(optionId("recent", i));
      });
      suggestions.popular.forEach((_, i) => {
        ids.push(optionId("popular", i));
      });
    } else if (results.length === 0) {
      suggestions.suggestions.slice(0, 5).forEach((_, i) => {
        ids.push(optionId("suggestion", i));
      });
    }
    results.forEach((_, i) => {
      ids.push(optionId("result", i));
    });
    return ids;
  }, [query, results, suggestions]);

  const activeDescendant =
    selectedIndex >= 0 ? optionIds[selectedIndex] : undefined;

  // Search data is English; swap in the catalog's Filipino copy when active.
  const localizedResults = useMemo(
    () =>
      results.map((result) =>
        localizeServiceCopy(
          { ...result, description: result.description ?? "" },
          language,
        ),
      ),
    [results, language],
  );

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    handleKeyDown(e);
    if (e.key !== "Enter" || e.defaultPrevented || selectedIndex < 0) return;

    if (query.length < 2) {
      const recentCount = suggestions.recent.length;
      if (selectedIndex < recentCount) {
        e.preventDefault();
        handleSuggestion(suggestions.recent[selectedIndex]);
      } else {
        const popular = suggestions.popular[selectedIndex - recentCount];
        if (popular !== undefined) {
          e.preventDefault();
          handleSuggestion(popular);
        }
      }
      return;
    }

    if (results.length === 0) {
      const suggestion = suggestions.suggestions[selectedIndex];
      if (suggestion !== undefined) {
        e.preventDefault();
        handleSuggestion(suggestion);
      }
    }
  };

  return (
    <div className={`search-autocomplete-wrapper ${className}`}>
      <input
        ref={inputRef}
        type="search"
        className="service-search-input"
        placeholder={placeholder ?? t("hero-search-placeholder")}
        aria-label={t("hero-search-aria")}
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={showDropdown}
        aria-controls="search-autocomplete-listbox"
        aria-activedescendant={activeDescendant}
        autoComplete="off"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleInputKeyDown}
      />

      {showDropdown && (
        <div
          ref={dropdownRef}
          id="search-autocomplete-listbox"
          role="listbox"
          aria-label={t("svc-search-results-aria")}
          className="search-autocomplete"
        >
          <div className="search-filters" aria-hidden="true">
            <button
              type="button"
              className="search-filter-btn active"
              data-category=""
              tabIndex={-1}
            >
              {t("svc-filter-all")}
            </button>
            <button
              type="button"
              className="search-filter-btn"
              data-category="certificates"
              tabIndex={-1}
            >
              {t("svc-filter-certificates")}
            </button>
            <button
              type="button"
              className="search-filter-btn"
              data-category="business"
              tabIndex={-1}
            >
              {t("svc-filter-business")}
            </button>
            <button
              type="button"
              className="search-filter-btn"
              data-category="social"
              tabIndex={-1}
            >
              {t("svc-filter-social")}
            </button>
            <button
              type="button"
              className="search-filter-btn"
              data-category="health"
              tabIndex={-1}
            >
              {t("svc-filter-health")}
            </button>
            <button
              type="button"
              className="search-filter-btn"
              data-category="taxation"
              tabIndex={-1}
            >
              {t("svc-filter-taxation")}
            </button>
          </div>

          {/* Recent Searches */}
          {query.length < 2 && suggestions.recent.length > 0 && (
            <div className="search-section">
              <div className="search-section-header">
                <span>
                  <i className="bi bi-clock-history"></i>{" "}
                  {t("svc-recent-searches")}
                </span>
                <button
                  className="search-clear-recent"
                  type="button"
                  onClick={() => {
                    clearRecentSearches();
                    setIsOpen(false);
                  }}
                >
                  {t("svc-clear")}
                </button>
              </div>
              {suggestions.recent.map((term, idx) => (
                <button
                  key={`recent-${idx}`}
                  id={optionId("recent", idx)}
                  role="option"
                  aria-selected={selectedIndex === idx}
                  className={`search-suggestion-item ${selectedIndex === idx ? "selected" : ""}`}
                  onClick={() => handleSuggestion(term)}
                  type="button"
                >
                  <i
                    className="bi bi-arrow-counterclockwise"
                    aria-hidden="true"
                  ></i>{" "}
                  {term}
                </button>
              ))}
            </div>
          )}

          {/* Popular Searches */}
          {query.length < 2 && suggestions.popular.length > 0 && (
            <div className="search-section">
              <div className="search-section-header">
                <span>
                  <i className="bi bi-fire"></i> {t("svc-popular-searches")}
                </span>
              </div>
              {suggestions.popular.map((term, idx) => (
                <button
                  key={`popular-${idx}`}
                  id={optionId("popular", idx)}
                  role="option"
                  aria-selected={
                    selectedIndex === suggestions.recent.length + idx
                  }
                  className={`search-suggestion-item ${selectedIndex === suggestions.recent.length + idx ? "selected" : ""}`}
                  onClick={() => handleSuggestion(term)}
                  type="button"
                >
                  <i className="bi bi-search" aria-hidden="true"></i> {term}
                </button>
              ))}
            </div>
          )}

          {/* Autocomplete Suggestions */}
          {query.length >= 2 &&
            suggestions.suggestions.length > 0 &&
            results.length === 0 && (
              <div className="search-section">
                <div className="search-section-header">
                  <span>
                    <i className="bi bi-lightbulb"></i> {t("svc-did-you-mean")}
                  </span>
                </div>
                {suggestions.suggestions.slice(0, 5).map((term, idx) => (
                  <button
                    key={`suggestion-${idx}`}
                    id={optionId("suggestion", idx)}
                    role="option"
                    aria-selected={selectedIndex === idx}
                    className={`search-suggestion-item ${selectedIndex === idx ? "selected" : ""}`}
                    onClick={() => handleSuggestion(term)}
                    type="button"
                  >
                    <i className="bi bi-search" aria-hidden="true"></i> {term}
                  </button>
                ))}
              </div>
            )}

          {/* No Results */}
          {query.length >= 2 &&
            results.length === 0 &&
            suggestions.suggestions.length === 0 && (
              <div className="search-no-results">
                <i className="bi bi-search"></i>
                <p>{t("svc-no-results")}</p>
                <small>{t("svc-no-results-hint")}</small>
              </div>
            )}

          {/* Search Results */}
          {localizedResults.map((result, index) => (
            <button
              key={result.id}
              id={optionId("result", index)}
              role="option"
              aria-selected={selectedIndex === index}
              className={`search-result-item ${selectedIndex === index ? "selected" : ""}`}
              onClick={() => handleResultClick(result.url)}
              type="button"
            >
              <div className="search-result-title">
                <span
                  dangerouslySetInnerHTML={{
                    __html: highlightMatch(result.title, query),
                  }}
                />
                {result.processingTime?.toLowerCase().includes("same day") && (
                  <span className="search-result-badge">{t("svc-fast")}</span>
                )}
              </div>
              <div className="search-result-meta">
                <span className="search-result-category">
                  <i className="bi bi-folder"></i> {result.category}
                </span>
                {result.fee && (
                  <span className="search-result-fee">
                    <i className="bi bi-cash"></i> {result.fee}
                  </span>
                )}
                {result.processingTime && (
                  <span className="search-result-time">
                    <i className="bi bi-clock"></i> {result.processingTime}
                  </span>
                )}
              </div>
              {result.office && (
                <div className="search-result-office">
                  <i className="bi bi-building"></i> {result.office}
                </div>
              )}
              {result.description && (
                <div className="search-result-desc">{result.description}</div>
              )}
            </button>
          ))}

          {/* Footer */}
          {results.length > 0 && (
            <div className="search-footer">
              <span className="search-footer-count" role="status">
                {results.length === 1
                  ? t("svc-results-count-one", { count: results.length })
                  : t("svc-results-count-other", { count: results.length })}
              </span>
              <span className="search-keyboard-hint">
                <span>
                  <kbd>↑</kbd>
                  <kbd>↓</kbd> {t("svc-key-hint-navigate")}
                </span>
                <span>
                  <kbd>Enter</kbd> {t("svc-key-hint-select")}
                </span>
                <span>
                  <kbd>Esc</kbd> {t("svc-key-hint-close")}
                </span>
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
