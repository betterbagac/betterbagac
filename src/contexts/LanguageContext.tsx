"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  LANGUAGE_STORAGE_KEY,
  LEGACY_LANGUAGE_STORAGE_KEY,
  translations,
} from "@/data/translations";
import type { Language } from "@/types";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  /** Translate a key, replacing `{name}` placeholders when `params` is given. */
  t: (key: string, params?: TranslationParams) => string;
}

type TranslationParams = Record<string, string | number>;

const SUPPORTED_LANGUAGES: readonly Language[] = ["en", "fil"];

function isLanguage(value: unknown): value is Language {
  return (
    typeof value === "string" && SUPPORTED_LANGUAGES.includes(value as Language)
  );
}

/**
 * Resolve the language to start with. A `?lang=` query param wins so shared
 * links keep their language, then the persisted preference (new key, then the
 * legacy key written by older builds).
 */
function resolveInitialLanguage(): Language | null {
  if (typeof window === "undefined") return null;

  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (isLanguage(fromUrl)) return fromUrl;

  const stored =
    localStorage.getItem(LANGUAGE_STORAGE_KEY) ??
    localStorage.getItem(LEGACY_LANGUAGE_STORAGE_KEY);
  return isLanguage(stored) ? stored : null;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  // Restore the saved/URL language after mount (localStorage is client-only).
  useEffect(() => {
    const initial = resolveInitialLanguage();
    if (initial) setLanguageState(initial);
  }, []);

  // Keep the document language in sync so screen readers and SEO see it.
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    localStorage.removeItem(LEGACY_LANGUAGE_STORAGE_KEY);

    // Reflect the choice in the URL so links can be shared/bookmarked.
    const url = new URL(window.location.href);
    if (lang === "en") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", lang);
    }
    window.history.replaceState({}, "", url.toString());
  }, []);

  const t = useCallback(
    (key: string, params?: TranslationParams): string => {
      const template =
        translations[language]?.[key] ?? translations.en[key] ?? key;
      if (!params) return template;
      return template.replace(/\{(\w+)\}/g, (match, name: string) =>
        params[name] === undefined ? match : String(params[name]),
      );
    },
    [language],
  );

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
