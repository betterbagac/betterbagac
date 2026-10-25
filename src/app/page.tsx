"use client";

import Link from "next/link";
import {
  Hero,
  History,
  PopularServices,
  QuickStats,
  WeatherMap,
} from "@/components/home";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Popular Services */}
      <PopularServices />

      {/* Quick Stats */}
      <QuickStats />

      {/* Weather & Map */}
      <WeatherMap />

      {/* Brief History of Bagac */}
      <History />

      {/* Latest Updates */}
      <section className="section">
        <div className="container">
          <div className="home-section-header">
            <h2>{t("section-updates")}</h2>
            <Link href="/news" className="home-section-link">
              <span>{t("btn-view-all")}</span>{" "}
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <div className="home-news-grid">
            <article className="home-news-card">
              <div className="home-news-meta">
                <span className="home-news-badge home-news-badge--info">
                  Advisory
                </span>
                <span className="home-news-date">Feb 2, 2026</span>
              </div>
              <h3>
                <Link href="/news">Temporary Suspension of Operations</Link>
              </h3>
              <p>
                The LGU advised the public that operations of a beach house in
                Barangay Pag-asa were suspended for lack of a business permit.
              </p>
            </article>
            <article className="home-news-card">
              <div className="home-news-meta">
                <span className="home-news-badge home-news-badge--success">
                  Program
                </span>
                <span className="home-news-date">Aug 25, 2025</span>
              </div>
              <h3>
                <Link href="/news">MAS Bagac Congress 2025</Link>
              </h3>
              <p>
                Youth leaders gathered at St. Vincent Ferrer Parish in Saysain
                for fellowship, sports, and leadership activities.
              </p>
            </article>
            <article className="home-news-card">
              <div className="home-news-meta">
                <span className="home-news-badge home-news-badge--warning">
                  Recognition
                </span>
                <span className="home-news-date">2023</span>
              </div>
              <h3>
                <Link href="/news">Top SGLG Incentive Fund Completer</Link>
              </h3>
              <p>
                Bagac placed first nationwide among LGUs in the FY 2023 Seal of
                Good Local Governance Incentive Fund.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Municipal Leadership */}
      <section className="section home-leadership-section">
        <div className="container">
          <div className="home-section-header">
            <h2>{t("section-leadership")}</h2>
            <Link href="/government" className="home-section-link">
              <span>{t("btn-view-officials")}</span>{" "}
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <div className="home-leadership-grid">
            <div className="home-leader-card">
              <div className="home-leader-badge">{t("title-mayor")}</div>
              <h3>Hon. Ron Michael Alexis R. Del Rosario</h3>
              <div className="home-leader-contacts">
                <a href="mailto:ronmichaelalexisdelrosario@gmail.com">
                  <i className="bi bi-envelope"></i>{" "}
                  ronmichaelalexisdelrosario@gmail.com
                </a>
                <a href="tel:09608848515">
                  <i className="bi bi-telephone"></i> 0960 884 8515
                </a>
              </div>
            </div>
            <div className="home-leader-card">
              <div className="home-leader-badge">{t("title-vice-mayor")}</div>
              <h3>Hon. Rommel V. Del Rosario</h3>
              <div className="home-leader-contacts">
                <a href="https://bagac.gov.ph/the-sanguniang-bayan/">
                  <i className="bi bi-globe2"></i> Sangguniang Bayan
                </a>
                <a href="tel:0476120424">
                  <i className="bi bi-telephone"></i> (047) 612-0424
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="home-section-header">
            <h2>{t("section-contact")}</h2>
            <Link href="/contact" className="home-section-link">
              {t("btn-view-all")} <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <div className="home-contact-v2-grid">
            <a href="tel:0476120424" className="home-contact-v2-card">
              <div className="home-contact-v2-icon">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div className="home-contact-v2-content">
                <h3>{t("contact-phone")}</h3>
                <p className="home-contact-v2-value">(047) 612-0424</p>
                <span className="home-contact-v2-note">
                  {t("contact-hours")}
                </span>
              </div>
            </a>
            <a
              href="mailto:ronmichaelalexisdelrosario@gmail.com"
              className="home-contact-v2-card"
            >
              <div className="home-contact-v2-icon">
                <i className="bi bi-envelope-fill"></i>
              </div>
              <div className="home-contact-v2-content">
                <h3>{t("contact-email")}</h3>
                <p className="home-contact-v2-value">
                  ronmichaelalexisdelrosario@gmail.com
                </p>
                <span className="home-contact-v2-note">
                  {t("contact-response")}
                </span>
              </div>
            </a>
            <div className="home-contact-v2-card">
              <div className="home-contact-v2-icon">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div className="home-contact-v2-content">
                <h3>{t("contact-address")}</h3>
                <p className="home-contact-v2-value">
                  {t("contact-municipal-hall")}
                </p>
                <span className="home-contact-v2-note">
                  Governor J.J. Linao Road, Bagac, Bataan 2107
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
