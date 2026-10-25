"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NewsPage() {
  const { t } = useLanguage();

  const newsItems = [
    {
      id: 1,
      title: "Temporary Suspension of Operations",
      date: "Feb 2, 2026",
      badge: "Advisory",
      badgeClass: "home-news-badge--warning",
      description:
        "The LGU advised the public that operations of a beach house in Barangay Pag-asa were temporarily suspended for lack of a business permit, in line with existing laws and local ordinances.",
    },
    {
      id: 2,
      title: "MAS Bagac Congress 2025",
      date: "Aug 25, 2025",
      badge: "Event",
      badgeClass: "home-news-badge--info",
      description:
        "The MAS Bagac Congress 2025 was held at St. Vincent Ferrer Parish in Saysain, featuring a basketball tournament, fellowship, and leadership activities with MAS President Joven Nazareno.",
    },
    {
      id: 3,
      title: "DOT Mobile Accreditation Caravan",
      date: "Apr 29, 2025",
      badge: "Program",
      badgeClass: "home-news-badge--success",
      description:
        "The Department of Tourism conducted a mobile accreditation caravan in Bagac to help primary and secondary tourism enterprises learn about accreditation and its benefits.",
    },
    {
      id: 4,
      title: "Bagac Tops FY 2023 SGLG Incentive Fund",
      date: "2023",
      badge: "Recognition",
      badgeClass: "home-news-badge--success",
      description:
        "Bagac placed first nationwide among local government units in the complete FY 2023 Seal of Good Local Governance Incentive Fund (SGLGIF).",
    },
    {
      id: 5,
      title: "International Coastal Cleanup",
      date: "Sep 21, 2024",
      badge: "Environment",
      badgeClass: "home-news-badge--info",
      description:
        "Volunteers joined the cleanup in Barangay Pag-asa and the coastal barangays of Saysain, Paysawan, Binuangan, Quinawan, and Banawang.",
    },
  ];

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">{t("nav-home")}</Link>
          <span>/</span>
          <span aria-current="page">News & Announcements</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge">
              <i className="bi bi-newspaper"></i> News
            </span>
            <h1>News & Announcements</h1>
            <p className="page-header-desc">
              Stay updated with the latest news and announcements from the
              Municipality of Bagac
            </p>
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
                    {item.badge}
                  </span>
                  <span className="news-card-date">
                    <i className="bi bi-calendar3"></i> {item.date}
                  </span>
                </div>
                <h2 className="news-card-title">{item.title}</h2>
                <p className="news-card-desc">{item.description}</p>
                <Link href={`/news/${item.id}`} className="news-card-link">
                  Read More <i className="bi bi-arrow-right"></i>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
