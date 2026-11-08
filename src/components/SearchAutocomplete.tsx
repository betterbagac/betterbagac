"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { localizeServiceCopy } from "@/data/i18n/content/categoriesFil";
import type { ServiceCategoryFilter } from "@/hooks/useSearch";
import { highlightMatch, useSearch } from "@/hooks/useSearch";

interface SearchAutocompleteProps {
  placeholder?: string;
  className?: string;
  onResultClick?: () => void;
}

const optionId = (group: string, index: number) =>
  `search-option-${group}-${index}`;

// Must match `categoryId` in services.json.
const CATEGORY_FILTERS: {
  id: ServiceCategoryFilter;
  labelKey: string;
}[] = [
  { id: "", labelKey: "svc-filter-all" },
  { id: "certificates", labelKey: "svc-filter-certificates" },
  { id: "business", labelKey: "svc-filter-business" },
  { id: "social-services", labelKey: "svc-filter-social" },
  { id: "health", labelKey: "svc-filter-health" },
  { id: "tax-payments", labelKey: "svc-filter-taxation" },
];

export default function SearchAutocomplete({
  placeholder,
  className = "",
  onResultClick,
}: SearchAutocompleteProps) {
  const router = useRouter();
  const { t, language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalBodyRef = useRef<HTMLDivElement>(null);

  const {
    query,
    setQuery,
    category,
    setCategory,
    results,
    suggestions,
    setIsOpen,
    selectedIndex,
    setSelectedIndex,
    handleSuggestionClick,
    clearRecentSearches,
    addRecentSearch,
  } = useSearch();

  const openModal = useCallback(() => {
    setIsOpen(true);
    setIsModalOpen(true);
  }, [setIsOpen]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setIsOpen(false);
    setSelectedIndex(-1);
  }, [setIsOpen, setSelectedIndex]);

  // Lock page scrolling while the dialog is open.
  useEffect(() => {
    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (!isModalOpen) return;

    const focusInput = () => {
      const el = modalInputRef.current;
      if (el && document.activeElement !== el) el.focus();
    };

    focusInput();
    const frame = window.requestAnimationFrame(focusInput);
    const timer = window.setTimeout(focusInput, 50);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [isModalOpen]);

  const handleResultClick = useCallback(
    (url: string) => {
      addRecentSearch(query);
      closeModal();
      onResultClick?.();
      // A few catalog entries (Filipizen billing) live on another host; they must
      // not be pushed as an in-app route.
      if (/^https?:\/\//.test(url)) {
        window.open(url, "_blank", "noopener,noreferrer");
        return;
      }
      router.push(url);
    },
    [addRecentSearch, closeModal, onResultClick, query, router],
  );

  const handleSuggestion = useCallback(
    (suggestion: string) => {
      handleSuggestionClick(suggestion);
    },
    [handleSuggestionClick],
  );

  // One flat, ordered list of everything the keyboard can reach.
  const navEntries = useMemo(() => {
    const entries: {
      id: string;
      kind: "suggestion" | "result";
      value: string;
    }[] = [];

    if (query.length < 2) {
      suggestions.recent.forEach((term, i) => {
        entries.push({
          id: optionId("recent", i),
          kind: "suggestion",
          value: term,
        });
      });
      suggestions.popular.forEach((term, i) => {
        entries.push({
          id: optionId("popular", i),
          kind: "suggestion",
          value: term,
        });
      });
    } else if (results.length === 0) {
      suggestions.suggestions.slice(0, 5).forEach((term, i) => {
        entries.push({
          id: optionId("suggestion", i),
          kind: "suggestion",
          value: term,
        });
      });
    }

    results.forEach((result, i) => {
      entries.push({
        id: optionId("result", i),
        kind: "result",
        value: result.url,
      });
    });

    return entries;
  }, [query, results, suggestions]);

  // Keep the active option inside the results pane.
  useEffect(() => {
    if (!isModalOpen || selectedIndex < 0) return;

    const body = modalBodyRef.current;
    const entry = navEntries[selectedIndex];
    if (!body || !entry) return;

    const option = document.getElementById(entry.id);
    if (!option || !body.contains(option)) return;

    const bodyRect = body.getBoundingClientRect();
    const optionRect = option.getBoundingClientRect();
    const padding = 8;

    if (optionRect.top < bodyRect.top + padding) {
      body.scrollTop -= bodyRect.top + padding - optionRect.top;
    } else if (optionRect.bottom > bodyRect.bottom - padding) {
      body.scrollTop += optionRect.bottom - (bodyRect.bottom - padding);
    }
  }, [isModalOpen, selectedIndex, navEntries]);

  const activeDescendant =
    selectedIndex >= 0 ? navEntries[selectedIndex]?.id : undefined;

  // Suggestions can render above the results.
  const resultOffset = navEntries.length - results.length;

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

  // Keyboard works even when focus is lost to the page body.
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
        return;
      }

      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const delta = e.key === "ArrowDown" ? 1 : -1;

        setSelectedIndex((prev) => {
          const next = prev + delta;
          return next < -1 ? -1 : Math.min(next, navEntries.length - 1);
        });
        return;
      }

      if (e.key !== "Enter") return;

      const target = e.target as HTMLElement | null;
      // Let buttons and links handle their own Enter.
      if (target?.closest("button, a")) return;

      e.preventDefault();

      const entry = selectedIndex >= 0 ? navEntries[selectedIndex] : undefined;
      if (entry?.kind === "result") handleResultClick(entry.value);
      else if (entry) handleSuggestion(entry.value);
      else if (results.length > 0) handleResultClick(results[0].url);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [
    isModalOpen,
    closeModal,
    navEntries,
    selectedIndex,
    results,
    handleResultClick,
    handleSuggestion,
    setSelectedIndex,
  ]);

  const handleModalKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Tab" || !modalRef.current) return;

    const focusable = Array.from(
      modalRef.current.querySelectorAll<HTMLElement>(
        "button:not([disabled]), input:not([disabled]), a[href]",
      ),
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <>
      <div className={`search-autocomplete-wrapper ${className}`}>
        <input
          type="text"
          className="service-search-input search-trigger-input"
          placeholder={placeholder ?? t("hero-search-placeholder")}
          aria-label={t("hero-search-aria")}
          aria-haspopup="dialog"
          autoComplete="off"
          readOnly
          value=""
          onClick={openModal}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openModal();
            }
          }}
        />
      </div>

      {isModalOpen &&
        createPortal(
          <div className="search-modal-overlay">
            <button
              type="button"
              className="search-modal-backdrop"
              aria-label={t("svc-close-search")}
              onClick={closeModal}
            />
            <div
              ref={modalRef}
              className="search-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="search-modal-title"
              onKeyDown={handleModalKeyDown}
            >
              <h2 id="search-modal-title" className="sr-only">
                {t("svc-search-modal-title")}
              </h2>

              <div className="search-modal-header">
                <div className="search-modal-input">
                  <i
                    className="bi bi-search search-modal-icon"
                    aria-hidden="true"
                  ></i>
                  <input
                    ref={modalInputRef}
                    type="search"
                    className="service-search-input"
                    placeholder={placeholder ?? t("hero-search-placeholder")}
                    aria-label={t("hero-search-aria")}
                    role="combobox"
                    aria-autocomplete="list"
                    aria-expanded="true"
                    aria-controls="search-autocomplete-listbox"
                    aria-activedescendant={activeDescendant}
                    autoComplete="off"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="search-modal-close"
                  onClick={closeModal}
                  aria-label={t("svc-close-search")}
                >
                  <i className="bi bi-x-lg" aria-hidden="true"></i>
                </button>
              </div>

              <fieldset className="search-filters">
                <legend className="sr-only">
                  {t("svc-filter-group-aria")}
                </legend>
                {CATEGORY_FILTERS.map(({ id, labelKey }) => (
                  <button
                    key={labelKey}
                    type="button"
                    className={`search-filter-btn ${category === id ? "active" : ""}`}
                    aria-pressed={category === id}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => setCategory(id)}
                  >
                    {t(labelKey)}
                  </button>
                ))}
              </fieldset>

              <div className="search-modal-body" ref={modalBodyRef}>
                <div
                  id="search-autocomplete-listbox"
                  role="listbox"
                  aria-label={t("svc-search-results-aria")}
                >
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
                          }}
                        >
                          {t("svc-clear")}
                        </button>
                      </div>
                      {suggestions.recent.map((term, idx) => (
                        <button
                          key={term}
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
                          <i className="bi bi-fire"></i>{" "}
                          {t("svc-popular-searches")}
                        </span>
                      </div>
                      {suggestions.popular.map((term, idx) => (
                        <button
                          key={term}
                          id={optionId("popular", idx)}
                          role="option"
                          aria-selected={
                            selectedIndex === suggestions.recent.length + idx
                          }
                          className={`search-suggestion-item ${selectedIndex === suggestions.recent.length + idx ? "selected" : ""}`}
                          onClick={() => handleSuggestion(term)}
                          type="button"
                        >
                          <i className="bi bi-search" aria-hidden="true"></i>{" "}
                          {term}
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
                            <i className="bi bi-lightbulb"></i>{" "}
                            {t("svc-did-you-mean")}
                          </span>
                        </div>
                        {suggestions.suggestions
                          .slice(0, 5)
                          .map((term, idx) => (
                            <button
                              key={term}
                              id={optionId("suggestion", idx)}
                              role="option"
                              aria-selected={selectedIndex === idx}
                              className={`search-suggestion-item ${selectedIndex === idx ? "selected" : ""}`}
                              onClick={() => handleSuggestion(term)}
                              type="button"
                            >
                              <i
                                className="bi bi-search"
                                aria-hidden="true"
                              ></i>{" "}
                              {term}
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
                  {localizedResults.map((result, index) => {
                    const navIndex = resultOffset + index;
                    return (
                      <button
                        key={result.id}
                        id={optionId("result", index)}
                        role="option"
                        aria-selected={selectedIndex === navIndex}
                        className={`search-result-item ${selectedIndex === navIndex ? "selected" : ""}`}
                        onClick={() => handleResultClick(result.url)}
                        type="button"
                      >
                        <div className="search-result-title">
                          <span>
                            {highlightMatch(result.title, query).map(
                              (segment) =>
                                segment.match ? (
                                  <mark key={segment.start}>
                                    {segment.text}
                                  </mark>
                                ) : (
                                  <span key={segment.start}>
                                    {segment.text}
                                  </span>
                                ),
                            )}
                          </span>
                          {result.processingTime
                            ?.toLowerCase()
                            .includes("same day") && (
                            <span className="search-result-badge">
                              {t("svc-fast")}
                            </span>
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
                              <i className="bi bi-clock"></i>{" "}
                              {result.processingTime}
                            </span>
                          )}
                        </div>
                        {result.office && (
                          <div className="search-result-office">
                            <i className="bi bi-building"></i> {result.office}
                          </div>
                        )}
                        {result.description && (
                          <div className="search-result-desc">
                            {result.description}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

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
          </div>,
          document.body,
        )}
    </>
  );
}
