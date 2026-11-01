"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NewsPage() {
  const { t } = useLanguage();

  const newsItems = [
    {
      id: 1,
      titleKey: "news-item-1-title",
      descKey: "news-item-1-desc",
      date: "Feb 2, 2026",
      badgeKey: "home-news-advisory",
      badgeClass: "home-news-badge--warning",
    },
    {
      id: 2,
      titleKey: "news-item-2-title",
      descKey: "news-item-2-desc",
      date: "Aug 25, 2025",
      badgeKey: "news-badge-event",
      badgeClass: "home-news-badge--info",
    },
    {
      id: 3,
      titleKey: "news-item-3-title",
      descKey: "news-item-3-desc",
      date: "Apr 29, 2025",
      badgeKey: "home-news-program",
      badgeClass: "home-news-badge--success",
    },
    {
      id: 4,
      titleKey: "news-item-4-title",
      descKey: "news-item-4-desc",
      date: "2023",
      badgeKey: "home-news-recognition",
      badgeClass: "home-news-badge--success",
    },
    {
      id: 5,
      titleKey: "news-item-5-title",
      descKey: "news-item-5-desc",
      date: "Sep 21, 2024",
      badgeKey: "news-badge-environment",
      badgeClass: "home-news-badge--info",
    },
  ];

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label={t("svc-breadcrumb")}>
          <Link href="/">{t("nav-home")}</Link>
          <span>/</span>
          <span aria-current="page">{t("news-title")}</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge">
              <i className="bi bi-newspaper"></i> {t("news-badge")}
            </span>
            <h1>{t("news-title")}</h1>
            <p className="page-header-desc">{t("news-subtitle")}</p>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="section">
        <div className="container">
          <div className="news-list">
            {newsItems.map((item) => (
              <article key={item.id} className="news-card">
                <div className="news-card-meta">
                  <span className={`home-news-badge ${item.badgeClass}`}>
                    {t(item.badgeKey)}
                  </span>
                  <span className="news-card-date">
                    <i className="bi bi-calendar3"></i> {item.date}
                  </span>
                </div>
                <h2 className="news-card-title">{t(item.titleKey)}</h2>
                <p className="news-card-desc">{t(item.descKey)}</p>
                <Link href={`/news/${item.id}`} className="news-card-link">
                  {t("news-read-more")} <i className="bi bi-arrow-right"></i>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
