"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/data/site.config";

export default function SitemapPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label={t("svc-breadcrumb")}>
          <Link href="/">{t("nav-home")}</Link>
          <span>/</span>
          <span aria-current="page">{t("footer-sitemap")}</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge">
              <i className="bi bi-diagram-3-fill"></i> {t("sm-nav-badge")}
            </span>
            <h1>{t("footer-sitemap")}</h1>
            <p className="page-header-desc">{t("sm-subtitle")}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Main Navigation */}
          <div className="sitemap-section-new">
            <div className="sitemap-section-header">
              <span className="sitemap-section-icon">
                <i className="bi bi-house-door"></i>
              </span>
              <h2>{t("header-main-nav")}</h2>
            </div>
            <div className="sitemap-links-grid">
              <Link href="/" className="sitemap-link-item">
                <i className="bi bi-arrow-right"></i> {t("nav-home")}
              </Link>
              <Link href="/services" className="sitemap-link-item">
                <i className="bi bi-arrow-right"></i> {t("nav-services")}
              </Link>
              <Link href="/government" className="sitemap-link-item">
                <i className="bi bi-arrow-right"></i> {t("nav-government")}
              </Link>
              <Link href="/statistics" className="sitemap-link-item">
                <i className="bi bi-arrow-right"></i> {t("nav-statistics")}
              </Link>
              <Link href="/legislative" className="sitemap-link-item">
                <i className="bi bi-arrow-right"></i> {t("nav-legislative")}
              </Link>
              <Link href="/budget" className="sitemap-link-item">
                <i className="bi bi-arrow-right"></i> {t("nav-transparency")}
              </Link>
              <Link href="/contact" className="sitemap-link-item">
                <i className="bi bi-arrow-right"></i> {t("nav-contact")}
              </Link>
              <Link href="/news" className="sitemap-link-item">
                <i className="bi bi-arrow-right"></i> {t("news-badge")}
              </Link>
              <Link href="/faq" className="sitemap-link-item">
                <i className="bi bi-arrow-right"></i> {t("faq-badge")}
              </Link>
              <Link href="/accessibility" className="sitemap-link-item">
                <i className="bi bi-arrow-right"></i>{" "}
                {t("footer-accessibility")}
              </Link>
            </div>
          </div>

          {/* Service Categories */}
          <div className="sitemap-section-new">
            <div className="sitemap-section-header">
              <span className="sitemap-section-icon">
                <i className="bi bi-grid-3x3-gap"></i>
              </span>
              <h2>{t("sm-service-categories")}</h2>
            </div>
            <div className="sitemap-links-grid">
              <Link href="/services/certificates" className="sitemap-link-item">
                <i className="bi bi-arrow-right"></i> {t("cat-certificates")}
              </Link>
              <Link href="/services/business" className="sitemap-link-item">
                <i className="bi bi-arrow-right"></i> {t("cat-business")}
              </Link>
              <Link
                href="/services/social-services"
                className="sitemap-link-item"
              >
                <i className="bi bi-arrow-right"></i> {t("cat-social")}
              </Link>
              <Link href="/services/health" className="sitemap-link-item">
                <i className="bi bi-arrow-right"></i> {t("cat-health")}
              </Link>
              <Link href="/services/tax-payments" className="sitemap-link-item">
                <i className="bi bi-arrow-right"></i> {t("cat-tax")}
              </Link>
              <Link href="/services/agriculture" className="sitemap-link-item">
                <i className="bi bi-arrow-right"></i> {t("cat-agriculture")}
              </Link>
              <Link
                href="/services/infrastructure"
                className="sitemap-link-item"
              >
                <i className="bi bi-arrow-right"></i> {t("cat-infrastructure")}
              </Link>
              <Link href="/services/education" className="sitemap-link-item">
                <i className="bi bi-arrow-right"></i> {t("cat-education")}
              </Link>
              <Link href="/services/environment" className="sitemap-link-item">
                <i className="bi bi-arrow-right"></i> {t("cat-environment")}
              </Link>
              <Link
                href="/services/public-safety"
                className="sitemap-link-item"
              >
                <i className="bi bi-arrow-right"></i> {t("cat-safety")}
              </Link>
            </div>
          </div>

          {/* Municipal Offices */}
          <div className="sitemap-section-new">
            <div className="sitemap-section-header">
              <span className="sitemap-section-icon">
                <i className="bi bi-building"></i>
              </span>
              <h2>{t("sm-offices")}</h2>
            </div>
            <div className="sitemap-links-grid sitemap-links-grid--4col">
              <Link
                href="/service-details/municipal-civil-registrar"
                className="sitemap-link-item"
              >
                <i className="bi bi-arrow-right"></i> Local Civil Registrar
              </Link>
              <Link
                href="/service-details/municipal-treasurer"
                className="sitemap-link-item"
              >
                <i className="bi bi-arrow-right"></i> Treasurer&apos;s Office
              </Link>
              <Link
                href="/service-details/municipal-assessor"
                className="sitemap-link-item"
              >
                <i className="bi bi-arrow-right"></i> Assessor&apos;s Office
              </Link>
              <Link
                href="/service-details/municipal-budget"
                className="sitemap-link-item"
              >
                <i className="bi bi-arrow-right"></i> Budget Office
              </Link>
              <Link
                href="/service-details/municipal-accounting"
                className="sitemap-link-item"
              >
                <i className="bi bi-arrow-right"></i> Accounting Office
              </Link>
              <Link
                href="/service-details/municipal-engineering"
                className="sitemap-link-item"
              >
                <i className="bi bi-arrow-right"></i> Engineering Office
              </Link>
              <Link
                href="/service-details/municipal-planning"
                className="sitemap-link-item"
              >
                <i className="bi bi-arrow-right"></i> Planning Office
              </Link>
              <Link
                href="/service-details/municipal-agriculture"
                className="sitemap-link-item"
              >
                <i className="bi bi-arrow-right"></i> Agriculture Office
              </Link>
              <Link
                href="/service-details/mswdo-services"
                className="sitemap-link-item"
              >
                <i className="bi bi-arrow-right"></i> MSWDO
              </Link>
              <Link
                href="/service-details/business-permits-licensing"
                className="sitemap-link-item"
              >
                <i className="bi bi-arrow-right"></i> BPLS Office
              </Link>
              <Link
                href="/service-details/general-services"
                className="sitemap-link-item"
              >
                <i className="bi bi-arrow-right"></i> General Services
              </Link>
              <Link
                href="/service-details/human-resource-management"
                className="sitemap-link-item"
              >
                <i className="bi bi-arrow-right"></i> HR Management
              </Link>
              <Link
                href="/service-details/seedo-public-market"
                className="sitemap-link-item"
              >
                <i className="bi bi-arrow-right"></i> SEEDO Public Market
              </Link>
              <Link
                href="/service-details/seedo-slaughterhouse"
                className="sitemap-link-item"
              >
                <i className="bi bi-arrow-right"></i> SEEDO Slaughterhouse
              </Link>
              <Link
                href="/service-details/tricycle-franchising"
                className="sitemap-link-item"
              >
                <i className="bi bi-arrow-right"></i> Tricycle Franchising
              </Link>
              <Link
                href="/service-details/property-declaration"
                className="sitemap-link-item"
              >
                <i className="bi bi-arrow-right"></i> Property Declaration
              </Link>
            </div>
          </div>

          {/* Government & Legislative */}
          <div className="sitemap-section-new">
            <div className="sitemap-section-header">
              <span className="sitemap-section-icon">
                <i className="bi bi-bank"></i>
              </span>
              <h2>{t("sm-gov-legislative")}</h2>
            </div>
            <div className="sitemap-links-grid">
              <Link href="/government" className="sitemap-link-item">
                <i className="bi bi-arrow-right"></i> {t("sm-gov-structure")}
              </Link>
              <Link href="/government/officials" className="sitemap-link-item">
                <i className="bi bi-arrow-right"></i>{" "}
                {t("sm-elected-officials")}
              </Link>
              <Link href="/legislative" className="sitemap-link-item">
                <i className="bi bi-arrow-right"></i> {t("leg-title")}
              </Link>
              <Link
                href="/legislative/ordinance-framework"
                className="sitemap-link-item"
              >
                <i className="bi bi-arrow-right"></i>{" "}
                {t("leg-ordinance-framework")}
              </Link>
              <Link
                href="/legislative/resolution-framework"
                className="sitemap-link-item"
              >
                <i className="bi bi-arrow-right"></i>{" "}
                {t("leg-resolution-framework")}
              </Link>
            </div>
          </div>

          {/* Online Services */}
          <div className="sitemap-section-new">
            <div className="sitemap-section-header">
              <span className="sitemap-section-icon sitemap-section-icon--online">
                <i className="bi bi-globe2"></i>
              </span>
              <h2>{t("sm-online-services")}</h2>
              <span className="sitemap-badge">{t("sm-via-filipizen")}</span>
            </div>
            <div className="sitemap-links-grid">
              <a
                href={siteConfig.links.filipizen.businessBilling}
                target="_blank"
                rel="noopener noreferrer"
                className="sitemap-link-item sitemap-link-item--external"
              >
                <i className="bi bi-box-arrow-up-right"></i> {t("sm-online-1")}
              </a>
              <a
                href={siteConfig.links.filipizen.newBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="sitemap-link-item sitemap-link-item--external"
              >
                <i className="bi bi-box-arrow-up-right"></i> {t("sm-online-2")}
              </a>
              <a
                href={siteConfig.links.filipizen.renewBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="sitemap-link-item sitemap-link-item--external"
              >
                <i className="bi bi-box-arrow-up-right"></i> {t("sm-online-3")}
              </a>
              <a
                href={siteConfig.links.filipizen.realPropertyTax}
                target="_blank"
                rel="noopener noreferrer"
                className="sitemap-link-item sitemap-link-item--external"
              >
                <i className="bi bi-box-arrow-up-right"></i> {t("sm-online-4")}
              </a>
              <a
                href={siteConfig.links.filipizen.paymentOrder}
                target="_blank"
                rel="noopener noreferrer"
                className="sitemap-link-item sitemap-link-item--external"
              >
                <i className="bi bi-box-arrow-up-right"></i> {t("sm-online-5")}
              </a>
            </div>
          </div>

          {/* External Resources */}
          <div className="sitemap-section-new">
            <div className="sitemap-section-header">
              <span className="sitemap-section-icon">
                <i className="bi bi-link-45deg"></i>
              </span>
              <h2>{t("sm-external-resources")}</h2>
            </div>
            <div className="sitemap-links-grid">
              <a
                href={siteConfig.links.officialPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="sitemap-link-item sitemap-link-item--external"
              >
                <i className="bi bi-box-arrow-up-right"></i>{" "}
                {t("sm-official-website")}
              </a>
              <a
                href={siteConfig.links.sangguniangBayan}
                target="_blank"
                rel="noopener noreferrer"
                className="sitemap-link-item sitemap-link-item--external"
              >
                <i className="bi bi-box-arrow-up-right"></i>{" "}
                {t("footer-sangguniang-bayan")}
              </a>
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="sitemap-link-item sitemap-link-item--external"
              >
                <i className="bi bi-box-arrow-up-right"></i> {t("sm-facebook")}
              </a>
              <Link href="/terms" className="sitemap-link-item">
                <i className="bi bi-arrow-right"></i> {t("footer-terms")}
              </Link>
              <Link href="/privacy" className="sitemap-link-item">
                <i className="bi bi-arrow-right"></i> {t("footer-privacy")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
