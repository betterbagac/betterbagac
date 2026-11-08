"use client";

import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Keyboard escape hatch past the nav. Kept as its own client component so the
 * label can follow the active language without making the root layout a client
 * component.
 */
export default function SkipLink() {
  const { t } = useLanguage();

  return (
    <a href="#main-content" className="skip-link">
      {t("shell-skip-link")}
    </a>
  );
}
