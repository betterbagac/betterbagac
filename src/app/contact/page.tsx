"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/data/site.config";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label={t("contact-breadcrumb")}>
          <Link href="/">{t("nav-home")}</Link>
          <span>/</span>
          <span aria-current="page">{t("nav-contact")}</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge">
              <i className="bi bi-envelope-fill"></i> {t("nav-contact")}
            </span>
            <h1>{t("contact-title")}</h1>
            <p className="page-header-desc">{t("contact-subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3" style={{ gap: "var(--spacing-md)" }}>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="contact-card"
            >
              <div className="contact-card-icon">
                <i className="bi bi-envelope-fill"></i>
              </div>
              <div className="contact-card-content">
                <h3>{t("contact-email")}</h3>
                <p className="contact-card-value">{siteConfig.contact.email}</p>
                <span className="contact-card-note">
                  {t("contact-response")}
                </span>
              </div>
            </a>
            <a
              href={`tel:${siteConfig.contact.mobile}`}
              className="contact-card"
            >
              <div className="contact-card-icon">
                <i className="bi bi-phone-fill"></i>
              </div>
              <div className="contact-card-content">
                <h3>{t("contact-mobile")}</h3>
                <p className="contact-card-value">
                  {siteConfig.contact.mobileDisplay}
                </p>
                <span className="contact-card-note">{t("contact-hours")}</span>
              </div>
            </a>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="contact-card"
            >
              <div className="contact-card-icon">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div className="contact-card-content">
                <h3>{t("contact-phone")}</h3>
                <p className="contact-card-value">
                  {siteConfig.contact.phoneDisplay}
                </p>
                <span className="contact-card-note">{t("contact-hours")}</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="office-hours-section">
        <div className="container">
          <div className="office-hours-inner">
            <div className="office-hours-header">
              <i className="bi bi-clock-fill"></i>
              <h2>{t("contact-office-hours")}</h2>
            </div>
            <div className="office-hours-schedule">
              <div className="office-hours-item office-hours-item--open">
                <span className="office-hours-day">
                  {t("contact-weekdays")}
                </span>
                <span className="office-hours-time">
                  {siteConfig.contact.officeOpen}
                </span>
                <span className="office-hours-status">
                  <i className="bi bi-check-circle-fill"></i>{" "}
                  {t("contact-status-open")}
                </span>
              </div>
              <div className="office-hours-item office-hours-item--break">
                <span className="office-hours-day">
                  {t("contact-lunch-break")}
                </span>
                <span className="office-hours-time">
                  {siteConfig.contact.lunchBreak}
                </span>
                <span className="office-hours-status">
                  <i className="bi bi-pause-circle-fill"></i>{" "}
                  {t("contact-status-break")}
                </span>
              </div>
              <div className="office-hours-item office-hours-item--closed">
                <span className="office-hours-day">
                  {t("contact-weekends")}
                </span>
                <span className="office-hours-time">{t("contact-closed")}</span>
                <span className="office-hours-status">
                  <i className="bi bi-x-circle-fill"></i> {t("contact-closed")}
                </span>
              </div>
              <div className="office-hours-item office-hours-item--closed">
                <span className="office-hours-day">
                  {t("contact-holidays")}
                </span>
                <span className="office-hours-time">{t("contact-closed")}</span>
                <span className="office-hours-status">
                  <i className="bi bi-x-circle-fill"></i> {t("contact-closed")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Hotlines */}
      <section className="section">
        <div className="container">
          <div className="hotlines-header">
            <div className="hotlines-title">
              <span className="hotlines-badge">
                <i className="bi bi-exclamation-triangle-fill"></i>{" "}
                {t("contact-emergency")}
              </span>
              <h2>{t("contact-emergency-hotlines")}</h2>
            </div>
            <p>{t("contact-emergency-desc")}</p>
          </div>
          <div className="hotlines-grid">
            <a
              href={`tel:${siteConfig.hotlines.emergency}`}
              className="hotline-card"
            >
              <i className="bi bi-exclamation-triangle-fill"></i>
              <span className="hotline-card-label">
                {t("contact-national-emergency")}
              </span>
              <span className="hotline-card-number">
                {siteConfig.hotlines.emergency}
              </span>
            </a>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="hotline-card"
            >
              <i className="bi bi-building-fill"></i>
              <span className="hotline-card-label">
                {siteConfig.municipalityName} {t("contact-municipal-hall")}
              </span>
              <span className="hotline-card-number">
                {siteConfig.contact.phoneDisplay}
              </span>
            </a>
            <a
              href={`tel:${siteConfig.contact.mobile}`}
              className="hotline-card"
            >
              <i className="bi bi-person-badge-fill"></i>
              <span className="hotline-card-label">
                {t("contact-mayor-office")}
              </span>
              <span className="hotline-card-number">
                {siteConfig.contact.mobileDisplay}
              </span>
            </a>
            <a
              href={`tel:${siteConfig.hotlines.emergency}`}
              className="hotline-card"
            >
              <i className="bi bi-shield-fill"></i>
              <span className="hotline-card-label">
                {t("contact-pnp", {
                  municipality: siteConfig.municipalityName,
                })}
              </span>
              <span className="hotline-card-number">
                {siteConfig.hotlines.emergency}
              </span>
            </a>
            <a
              href={`tel:${siteConfig.hotlines.emergency}`}
              className="hotline-card"
            >
              <i className="bi bi-fire"></i>
              <span className="hotline-card-label">
                {t("contact-bfp", {
                  municipality: siteConfig.municipalityName,
                })}
              </span>
              <span className="hotline-card-number">
                {siteConfig.hotlines.emergency}
              </span>
            </a>
            <a
              href={`tel:${siteConfig.hotlines.emergency}`}
              className="hotline-card"
            >
              <i className="bi bi-broadcast"></i>
              <span className="hotline-card-label">
                {t("contact-mdrrmo", {
                  municipality: siteConfig.municipalityName,
                })}
              </span>
              <span className="hotline-card-number">
                {siteConfig.hotlines.emergency}
              </span>
            </a>
            <a
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hotline-card"
            >
              <i className="bi bi-facebook"></i>
              <span className="hotline-card-label">{siteConfig.lguName}</span>
              <span className="hotline-card-number">
                {t("contact-official-facebook")}
              </span>
            </a>
            <a
              href={siteConfig.links.contactUs}
              target="_blank"
              rel="noopener noreferrer"
              className="hotline-card"
            >
              <i className="bi bi-globe2"></i>
              <span className="hotline-card-label">
                {t("contact-website", { lgu: siteConfig.lguName })}
              </span>
              <span className="hotline-card-number">
                {new URL(siteConfig.links.officialPortal).host}
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Medical Emergency Hotlines */}
      <section className="section bg-alt">
        <div className="container">
          <div className="hotlines-header">
            <div className="hotlines-title">
              <span className="hotlines-badge hotlines-badge--medical">
                <i className="bi bi-hospital-fill"></i> {t("contact-medical")}
              </span>
              <h2>{t("contact-medical-hotlines")}</h2>
            </div>
            <p>{t("contact-medical-desc")}</p>
          </div>
          <div className="hotlines-grid">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="hotline-card hotline-card--medical"
            >
              <i className="bi bi-hospital"></i>
              <span className="hotline-card-label">
                {t("contact-rhu", {
                  municipality: siteConfig.municipalityName,
                })}
              </span>
              <span className="hotline-card-number">
                {siteConfig.contact.phoneDisplay}
              </span>
            </a>
            <a
              href={`tel:${siteConfig.hotlines.redCross}`}
              className="hotline-card hotline-card--medical"
            >
              <i className="bi bi-plus-circle-fill"></i>
              <span className="hotline-card-label">
                {t("contact-red-cross")}
              </span>
              <span className="hotline-card-number">
                {siteConfig.hotlines.redCross}
              </span>
            </a>
            <a
              href={`tel:${siteConfig.hotlines.emergency}`}
              className="hotline-card hotline-card--medical"
            >
              <i className="bi bi-truck"></i>
              <span className="hotline-card-label">
                {t("contact-medical-emergency")}
              </span>
              <span className="hotline-card-number">
                {siteConfig.hotlines.emergency}
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
