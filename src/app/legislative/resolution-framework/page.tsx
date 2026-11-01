"use client";

import Link from "next/link";
import { LegislativeRecords } from "@/components/legislative/LegislativeRecords";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/data/site.config";

export default function ResolutionFrameworkPage() {
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
          <span aria-current="page">{t("leg-resolution-framework")}</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge">
              <i className="bi bi-file-earmark-text"></i> {t("nav-legislative")}
            </span>
            <h1>{t("leg-resolution-framework")}</h1>
            <p className="page-header-desc">
              {t("leg-resolution-framework-subtitle", {
                municipality: siteConfig.municipalityName,
              })}
            </p>
          </div>
        </div>
      </section>

      {/* About Resolutions */}
      <section className="section">
        <div className="container">
          <div className="info-card">
            <div className="info-card-icon">
              <i className="bi bi-info-circle"></i>
            </div>
            <div className="info-card-content">
              <h3>{t("leg-res-what-title")}</h3>
              <p>{t("leg-res-what-p1")}</p>
              <p>{t("leg-res-what-p2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified records */}
      <section
        className="section"
        style={{ background: "var(--color-bg-alt)" }}
      >
        <LegislativeRecords kind="resolution" />
      </section>

      {/* Official records */}
      <section className="section">
        <div className="container">
          <div className="info-card">
            <div className="info-card-icon">
              <i className="bi bi-file-earmark-check"></i>
            </div>
            <div className="info-card-content">
              <h3>{t("leg-res-where-title")}</h3>
              <p>
                {t("leg-res-where-p1", {
                  municipality: siteConfig.municipalityName,
                })}
              </p>
              <p>{t("leg-res-where-p2")}</p>
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
