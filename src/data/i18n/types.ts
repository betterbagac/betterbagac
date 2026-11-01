import type { Language, TranslationKeys } from "@/types";

/**
 * A page-scoped slice of the translation dictionary.
 *
 * Each page keeps its own module under `src/data/i18n/` so forks only touch the
 * pages they actually change. `src/data/translations.ts` merges them all.
 */
export type TranslationDictionary = Record<Language, TranslationKeys>;
