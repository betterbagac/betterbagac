"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

interface StatCard {
  href: string;
  icon: string;
  /** Plain value shown as-is (numbers are language neutral). */
  value?: string;
  /** Translation key for values that need translating. */
  valueKey?: string;
  labelKey: string;
  sourceKey: string;
}

const stats: StatCard[] = [
  {
    href: "/statistics",
    icon: "bi-people-fill",
    value: "32,799",
    labelKey: "quickstats-population",
    sourceKey: "quickstats-population-source",
  },
  {
    href: "/government",
    icon: "bi-geo-alt-fill",
    value: "14",
    labelKey: "quickstats-barangays",
    sourceKey: "quickstats-barangays-source",
  },
  {
    href: "/budget",
    icon: "bi-award-fill",
    valueKey: "quickstats-class-value",
    labelKey: "quickstats-class",
    sourceKey: "quickstats-class-source",
  },
  {
    href: "/statistics",
    icon: "bi-rulers",
    value: "231.20 km²",
    labelKey: "quickstats-area",
    sourceKey: "quickstats-area-source",
  },
];

export default function QuickStats() {
  const { t } = useLanguage();

  return (
    <section className="home-stats-v2">
      <div className="container">
        <div className="home-stats-v2-header">
          <h2>{t("quickstats-title")}</h2>
          <Link href="/statistics" className="home-section-link">
            {t("quickstats-view")} <i className="bi bi-arrow-right" />
          </Link>
        </div>
        <div className="home-stats-v2-grid">
          {stats.map((stat) => (
            <Link
              key={stat.labelKey}
              href={stat.href}
              className="home-stat-card"
            >
              <div className="home-stat-card-icon">
                <i className={`bi ${stat.icon}`} />
              </div>
              <div className="home-stat-card-content">
                <span className="home-stat-card-value">
                  {stat.valueKey ? t(stat.valueKey) : stat.value}
                </span>
                <span className="home-stat-card-label">{t(stat.labelKey)}</span>
                <span className="home-stat-card-source">
                  {t(stat.sourceKey)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
