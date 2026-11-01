"use client";

import { useCallback, useEffect, useState } from "react";
import {
  LANGUAGE_STORAGE_KEY,
  LEGACY_LANGUAGE_STORAGE_KEY,
  translations,
} from "@/data/translations";
import type { Language } from "@/types";

export function useTranslation() {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // Load saved language preference
    const saved = (localStorage.getItem(LANGUAGE_STORAGE_KEY) ??
      localStorage.getItem(LEGACY_LANGUAGE_STORAGE_KEY)) as Language | null;
    if (saved && ["en", "fil"].includes(saved)) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    localStorage.removeItem(LEGACY_LANGUAGE_STORAGE_KEY);
    // Update URL param for SEO
    const url = new URL(window.location.href);
    if (lang === "en") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", lang);
    }
    window.history.replaceState({}, "", url.toString());
  }, []);

  const t = useCallback(
    (key: string, fallback?: string): string => {
      const langTranslations = translations[language] || translations.en;
      return langTranslations[key] || translations.en[key] || fallback || key;
    },
    [language],
  );

  return { t, language, setLanguage };
}
