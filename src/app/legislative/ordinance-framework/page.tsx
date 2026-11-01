"use client";

import Link from "next/link";
import { LegislativeRecords } from "@/components/legislative/LegislativeRecords";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/data/site.config";

export default function OrdinanceFrameworkPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label={t("leg-breadcrumb-aria")}>
          <Link href="/">{t("nav-home")}</Link>
          <span>/</span>
          <Link href="/legislative">{t("nav-legislative")}</Link>
          <span>/</span>
          <span aria-current="page">{t("leg-ordinance-framework")}</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge">
              <i className="bi bi-journal-text"></i> {t("nav-legislative")}
            </span>
            <h1>{t("leg-ordinance-framework")}</h1>
            <p className="page-header-desc">
              {t("leg-ordinance-framework-subtitle", {
                municipality: siteConfig.municipalityName,
              })}
            </p>
          </div>
        </div>
      </section>

      {/* About Ordinances */}
      <section className="section">
        <div className="container">
          <div className="info-card">
            <div className="info-card-icon">
              <i className="bi bi-info-circle"></i>
            </div>
            <div className="info-card-content">
              <h3>{t("leg-ord-what-title")}</h3>
              <p>{t("leg-ord-what-p1")}</p>
              <p>{t("leg-ord-what-p2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified records */}
      <section
        className="section"
        style={{ background: "var(--color-bg-alt)" }}
      >
        <LegislativeRecords kind="ordinance" />
      </section>

      {/* Official records */}
      <section className="section">
        <div className="container">
          <div className="info-card">
            <div className="info-card-icon">
              <i className="bi bi-journal-check"></i>
            </div>
            <div className="info-card-content">
              <h3>{t("leg-ord-where-title")}</h3>
              <p>
                {t("leg-ord-where-p1", {
                  municipality: siteConfig.municipalityName,
                })}
              </p>
              <p>{t("leg-ord-where-p2")}</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
              marginTop: "var(--spacing-lg)",
            }}
          >
            <a
              href={siteConfig.links.sangguniangBayan}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="bi bi-box-arrow-up-right"></i> {t("leg-visit-sb")}
            </a>
            <a
              href={siteConfig.links.transparencySeal}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <i className="bi bi-shield-check"></i>{" "}
              {t("leg-transparency-seal")}
            </a>
            <a
              href={siteConfig.links.foi}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <i className="bi bi-envelope-paper"></i> {t("leg-request-foi")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
