import type { TranslationDictionary } from "@/data/i18n/types";
import { siteConfig } from "@/data/site.config";

/**
 * Privacy policy and terms of use pages.
 *
 * Only the page chrome is translated here. The statutory body text stays in
 * English until an official Filipino version is published, so the two
 * language variants never contradict each other legally.
 */
export const legalPages: TranslationDictionary = {
  en: {
    "legal-toc-title": "Contents",
    "privacy-badge": "Privacy",
    "privacy-subtitle": "How we collect, use, and protect your information",
    "terms-badge": "Legal",
    "terms-subtitle": `Guidelines for using ${siteConfig.fullName}`,
  },
  fil: {
    "legal-toc-title": "Nilalaman",
    "privacy-badge": "Privacy",
    "privacy-subtitle":
      "Paano namin kinokolekta, ginagamit, at pinoprotektahan ang iyong impormasyon",
    "terms-badge": "Legal",
    "terms-subtitle": `Mga gabay sa paggamit ng ${siteConfig.fullName}`,
  },
};
