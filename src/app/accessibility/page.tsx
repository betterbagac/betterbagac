"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/data/site.config";

export default function AccessibilityPage() {
  const { t } = useLanguage();

  return (
    <>
      <link rel="stylesheet" href="/assets/css/accessibility.css" />

      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label={t("svc-breadcrumb")}>
          <Link href="/">{t("nav-home")}</Link>
          <span>/</span>
          <span aria-current="page">{t("footer-accessibility")}</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge">
              <i className="bi bi-universal-access"></i>{" "}
              {t("footer-accessibility")}
            </span>
            <h1>{t("acc-title")}</h1>
            <p className="page-header-desc">{t("acc-subtitle")}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="a11y-container">
            {/* Conformance Badge */}
            <div className="a11y-badge-section">
              <div className="a11y-conformance-badge">
                <i className="bi bi-check-circle-fill"></i>
                <div>
                  <span className="a11y-badge-label">WCAG 2.1 Level AA</span>
                  <span className="a11y-badge-text">{t("acc-conformant")}</span>
                </div>
              </div>
            </div>

            {/* Commitment Section */}
            <div className="a11y-section">
              <h2>{t("acc-commitment")}</h2>
              <p>{t("acc-commitment-desc")}</p>
            </div>

            {/* Features Grid */}
            <div className="a11y-section">
              <h2>{t("acc-features")}</h2>
              <div className="a11y-features-grid">
                <div className="a11y-feature">
                  <i className="bi bi-keyboard"></i>
                  <h3>{t("acc-feature-keyboard-title")}</h3>
                  <p>{t("acc-feature-keyboard-desc")}</p>
                </div>
                <div className="a11y-feature">
                  <i className="bi bi-eye"></i>
                  <h3>{t("acc-feature-reader-title")}</h3>
                  <p>{t("acc-feature-reader-desc")}</p>
                </div>
                <div className="a11y-feature">
                  <i className="bi bi-type"></i>
                  <h3>{t("acc-feature-text-title")}</h3>
                  <p>{t("acc-feature-text-desc")}</p>
                </div>
                <div className="a11y-feature">
                  <i className="bi bi-palette"></i>
                  <h3>{t("acc-feature-contrast-title")}</h3>
                  <p>{t("acc-feature-contrast-desc")}</p>
                </div>
                <div className="a11y-feature">
                  <i className="bi bi-phone"></i>
                  <h3>{t("acc-feature-responsive-title")}</h3>
                  <p>{t("acc-feature-responsive-desc")}</p>
                </div>
                <div className="a11y-feature">
                  <i className="bi bi-hourglass-split"></i>
                  <h3>{t("acc-feature-time-title")}</h3>
                  <p>{t("acc-feature-time-desc")}</p>
                </div>
              </div>
            </div>

            {/* Known Limitations */}
            <div className="a11y-section">
              <h2>{t("acc-limitations")}</h2>
              <ul className="a11y-list">
                <li>
                  <i className="bi bi-exclamation-circle"></i>{" "}
                  {t("acc-limit-pdf")}
                </li>
                <li>
                  <i className="bi bi-exclamation-circle"></i>{" "}
                  {t("acc-limit-third-party")}
                </li>
              </ul>
            </div>

            {/* Alternative Access */}
            <div className="a11y-section">
              <h2>{t("acc-alternative")}</h2>
              <p>{t("acc-alternative-desc")}</p>
              <div className="a11y-contact-grid">
                <a
                  href={`mailto:${siteConfig.volunteerEmail}`}
                  className="a11y-contact-item"
                >
                  <i className="bi bi-envelope-fill"></i>
                  <span>{siteConfig.volunteerEmail}</span>
                </a>
              </div>
            </div>

            {/* Technical Info */}
            <div className="a11y-section">
              <h2>{t("acc-technical")}</h2>
              <div className="a11y-tech-tags">
                <span className="a11y-tag">HTML5</span>
                <span className="a11y-tag">CSS3</span>
                <span className="a11y-tag">JavaScript</span>
                <span className="a11y-tag">ARIA</span>
              </div>
            </div>

            {/* Promise Card */}
            <div className="a11y-promise">
              <i className="bi bi-heart-fill"></i>
              <div>
                <h3>{t("acc-promise")}</h3>
                <p>{t("acc-promise-desc")}</p>
              </div>
            </div>

            <p className="a11y-date">
              {t("acc-last-updated", { date: "November 29, 2025" })}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
