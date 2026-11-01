"use client";

import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Convenience alias for {@link useLanguage}.
 */
export function useTranslation() {
  return useLanguage();
}
