"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/data/site.config";

export default function GovernmentPage() {
  const { t } = useLanguage();
  const municipality = siteConfig.municipalityName;

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label={t("gov-breadcrumb-aria")}>
          <Link href="/">{t("nav-home")}</Link>
          <span>/</span>
          <span aria-current="page">{t("nav-government")}</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge">
              <i className="bi bi-building-fill"></i> {t("nav-government")}
            </span>
            <h1>{t("gov-title")}</h1>
            <p className="page-header-desc">
              {t("gov-subtitle", { municipality })}
            </p>
          </div>
        </div>
      </section>

      {/* Executive Branch */}
      <section
        className="section"
        style={{ background: "var(--color-bg-alt)" }}
      >
        <div className="container">
          <div
            className="text-center"
            style={{ marginBottom: "var(--spacing-xl)" }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background:
                  "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
                color: "white",
                padding: "8px 20px",
                borderRadius: "50px",
                fontSize: "0.875rem",
                marginBottom: "var(--spacing-sm)",
              }}
            >
              <i className="bi bi-star-fill"></i> {t("gov-executive-branch")}
            </span>
            <h3
              style={{ fontSize: "1.75rem", marginBottom: "var(--spacing-xs)" }}
            >
              {t("section-leadership")}
            </h3>
            <p style={{ color: "var(--color-text-light)" }}>
              {t("gov-executive-desc", { municipality })}
            </p>
            <p
              style={{
                color: "var(--color-text-light)",
                fontSize: "0.875rem",
                marginTop: "var(--spacing-xs)",
              }}
            >
              {t("gov-contact-note")}
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: "var(--spacing-lg)" }}>
            <div className="executive-card">
              <div className="executive-card-header">
                <span className="executive-badge">{t("title-mayor")}</span>
                <h4 className="executive-name">
                  Hon. Ron Michael Alexis R. Del Rosario
                </h4>
              </div>
              <div className="executive-card-body">
                <div className="executive-contacts">
                  <a href={`mailto:${siteConfig.contact.email}`}>
                    <i className="bi bi-envelope"></i>{" "}
                    {siteConfig.contact.email}
                  </a>
                  <a href={`tel:${siteConfig.contact.mobile}`}>
                    <i className="bi bi-telephone"></i>{" "}
                    {siteConfig.contact.mobileDisplay}
                  </a>
                  <span>
                    <i className="bi bi-clock"></i> {siteConfig.contact.hours}
                  </span>
                </div>
              </div>
            </div>

            <div className="executive-card">
              <div className="executive-card-header">
                <span className="executive-badge">{t("title-vice-mayor")}</span>
                <h4 className="executive-name">Hon. Rommel V. Del Rosario</h4>
              </div>
              <div className="executive-card-body">
                <div className="executive-contacts">
                  <a href={siteConfig.links.sangguniangBayan}>
                    <i className="bi bi-globe2"></i>{" "}
                    {t("footer-sangguniang-bayan")}
                  </a>
                  <a href={`tel:${siteConfig.contact.phone}`}>
                    <i className="bi bi-telephone"></i>{" "}
                    {siteConfig.contact.phoneDisplay}
                  </a>
                  <span>
                    <i className="bi bi-clock"></i> {siteConfig.contact.hours}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Municipal Council */}
      <section className="section">
        <div className="container">
          <div
            className="text-center"
            style={{ marginBottom: "var(--spacing-xl)" }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background:
                  "linear-gradient(135deg, var(--color-success) 0%, #05c793 100%)",
                color: "white",
                padding: "8px 20px",
                borderRadius: "50px",
                fontSize: "0.875rem",
                marginBottom: "var(--spacing-sm)",
              }}
            >
              <i className="bi bi-people-fill"></i>{" "}
              {t("gov-legislative-branch")}
            </span>
            <h3
              style={{ fontSize: "1.75rem", marginBottom: "var(--spacing-xs)" }}
            >
              {t("gov-sb-members")}
            </h3>
            <p style={{ color: "var(--color-text-light)" }}>
              {t("gov-sb-members-desc", { municipality })}
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: "var(--spacing-md)" }}>
            <div className="councilor-card">
              <h4 className="councilor-name">Hon. Alex J. Bantugan</h4>
              <span className="councilor-badge">{t("gov-sb-member")}</span>
              <p className="councilor-committees">
                {t("gov-committee-women-family")}
              </p>
            </div>
            <div className="councilor-card">
              <h4 className="councilor-name">Hon. John Harry R. Carreon</h4>
              <span className="councilor-badge">{t("gov-sb-member")}</span>
              <p className="councilor-committees">
                {t("gov-committee-finance")}
              </p>
            </div>
            <div className="councilor-card">
              <h4 className="councilor-name">Hon. Larry G. Bantugan</h4>
              <span className="councilor-badge">{t("gov-sb-member")}</span>
              <p className="councilor-committees">{t("gov-committee-rules")}</p>
            </div>
            <div className="councilor-card">
              <h4 className="councilor-name">Hon. Neil Patrick R. Dela Rosa</h4>
              <span className="councilor-badge">{t("gov-sb-member")}</span>
              <p className="councilor-committees">
                {t("gov-committee-education")}
              </p>
            </div>
            <div className="councilor-card">
              <h4 className="councilor-name">Hon. Ricardo R. Canta</h4>
              <span className="councilor-badge">{t("gov-sb-member")}</span>
              <p className="councilor-committees">
                {t("gov-committee-environment")}
              </p>
            </div>
            <div className="councilor-card">
              <h4 className="councilor-name">Hon. Guillermo C. Mendoza Jr.</h4>
              <span className="councilor-badge">{t("gov-sb-member")}</span>
              <p className="councilor-committees">
                {t("gov-committee-rights")}
              </p>
            </div>
            <div className="councilor-card">
              <h4 className="councilor-name">Hon. Felix R. Tutol Jr.</h4>
              <span className="councilor-badge">{t("gov-sb-member")}</span>
              <p className="councilor-committees">
                {t("gov-committee-good-government")}
              </p>
            </div>
            <div className="councilor-card">
              <h4 className="councilor-name">Hon. Jorge Xy-Ril R. Teopengco</h4>
              <span className="councilor-badge">{t("gov-sb-member")}</span>
              <p className="councilor-committees">{t("gov-committee-trade")}</p>
            </div>
            <div className="councilor-card">
              <h4 className="councilor-name">Hon. Jason M. Narazeno</h4>
              <span className="councilor-badge">{t("gov-sb-member")}</span>
              <p className="councilor-committees">
                {t("gov-committee-barangay")}
              </p>
            </div>
            <div className="councilor-card">
              <h4 className="councilor-name">Hon. Anthony B. Sy</h4>
              <span className="councilor-badge">{t("gov-sb-member")}</span>
              <p className="councilor-committees">
                {t("gov-committee-indigenous")}
              </p>
            </div>
            <div className="councilor-card councilor-card--sk">
              <h4 className="councilor-name">Hon. Erwin P. Sales</h4>
              <span className="councilor-badge councilor-badge--sk">
                {t("gov-sk-president")}
              </span>
              <p className="councilor-committees">{t("gov-committee-youth")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Barangays */}
      <section className="section">
        <div className="container">
          <div
            className="text-center"
            style={{ marginBottom: "var(--spacing-xl)" }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background:
                  "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
                color: "white",
                padding: "8px 20px",
                borderRadius: "50px",
                fontSize: "0.875rem",
                marginBottom: "var(--spacing-sm)",
              }}
            >
              <i className="bi bi-geo-alt-fill"></i> {t("gov-barangay-units")}
            </span>
            <h3
              style={{ fontSize: "1.75rem", marginBottom: "var(--spacing-xs)" }}
            >
              {t("gov-barangays-title", { municipality })}
            </h3>
            <p style={{ color: "var(--color-text-light)" }}>
              {t("gov-barangays-desc")}
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: "var(--spacing-sm)" }}>
            {[
              {
                name: "Atilano L. Ricardo",
                captain: "Eliver M. Seramines",
              },
              {
                name: "Bagumbayan",
                captain: "Ronal R. Llait",
                phone: "0910 617 6627",
              },
              {
                name: "Banawang",
                captain: "Menandro R. Trinidad",
                phone: "0919 388 1929",
              },
              { name: "Binuangan", captain: "Ruben P. Ilao" },
              { name: "Binukawan", captain: "Jessie B. Belanio" },
              { name: "Ibaba", captain: "Allan F. Villanueva" },
              { name: "Ibis", captain: "Adrian Sunga" },
              { name: "Pag-asa", captain: "Ahris M. Sunga" },
              { name: "Parang", captain: "Leovigildo Dela Rosa" },
              { name: "Paysawan", captain: "German L. Pega Sr." },
              {
                name: "Quinawan",
                captain: "Raymond C. Laguna",
                phone: "0950 848 1839",
              },
              { name: "San Antonio", captain: "Reynold Umandap" },
              { name: "Saysain", captain: "Rolando P. Tabale" },
              {
                name: "Tabing-Ilog",
                captain: "Renan M. Torres",
                phone: "0977 754 9134",
              },
            ].map((brgy) => {
              const content = (
                <>
                  <div className="barangay-card-header">
                    <i className="bi bi-geo-alt-fill"></i>
                    <span className="barangay-name">{brgy.name}</span>
                  </div>
                  <div className="barangay-card-body">
                    <span className="barangay-captain">{brgy.captain}</span>
                    {brgy.phone ? (
                      <span className="barangay-contact">
                        <i className="bi bi-telephone"></i> {brgy.phone}
                      </span>
                    ) : (
                      <span className="barangay-contact">
                        <i className="bi bi-building"></i>{" "}
                        {t("contact-municipal-hall")}
                      </span>
                    )}
                  </div>
                </>
              );

              return brgy.phone ? (
                <a
                  key={brgy.name}
                  href={`tel:${brgy.phone.replace(/\s/g, "")}`}
                  className="barangay-card"
                >
                  {content}
                </a>
              ) : (
                <div key={brgy.name} className="barangay-card">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
