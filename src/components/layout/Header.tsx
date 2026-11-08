"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/data/site.config";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the trigger.
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo-container">
          <Link href="/" className="site-logo">
            <img
              src={siteConfig.assets.mark}
              alt=""
              className="logo-mark"
              width={490}
              height={608}
            />
            <span className="logo-wordmark">
              {siteConfig.name}
              <span className="logo-wordmark-tld">.org</span>
            </span>
          </Link>
        </div>

        <nav
          id="main-nav"
          className={`main-nav ${mobileMenuOpen ? "active" : ""}`}
          aria-label={t("header-main-nav")}
        >
          <ul>
            <li>
              <Link
                href="/"
                className={pathname === "/" ? "active" : ""}
                aria-current={pathname === "/" ? "page" : undefined}
              >
                {t("nav-home")}
              </Link>
            </li>
            <li className="has-dropdown">
              <Link href="/services">{t("nav-services")}</Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/services/certificates">
                    {t("cat-certificates")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/business">{t("cat-business")}</Link>
                </li>
                <li>
                  <Link href="/services/tax-payments">{t("cat-tax")}</Link>
                </li>
                <li>
                  <Link href="/services/social-services">
                    {t("cat-social")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/health">{t("cat-health")}</Link>
                </li>
                <li>
                  <Link href="/services/agriculture">
                    {t("cat-agriculture")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/infrastructure">
                    {t("cat-infrastructure")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/education">{t("cat-education")}</Link>
                </li>
                <li>
                  <Link href="/services/public-safety">{t("cat-safety")}</Link>
                </li>
                <li>
                  <Link href="/services/environment">
                    {t("cat-environment")}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/government">{t("nav-government")}</Link>
            </li>
            <li>
              <Link href="/statistics">{t("nav-statistics")}</Link>
            </li>
            <li className="has-dropdown">
              <Link href="/legislative">{t("nav-legislative")}</Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/legislative/ordinance-framework">
                    {t("header-ordinance-framework")}
                  </Link>
                </li>
                <li>
                  <Link href="/legislative/resolution-framework">
                    {t("header-resolution-framework")}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="has-dropdown">
              <Link href="/budget">{t("nav-transparency")}</Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/budget">{t("header-budget-overview")}</Link>
                </li>
                <li>
                  <a
                    href={siteConfig.links.publicRecord}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("nav-public-record")}{" "}
                    <i
                      className="bi bi-box-arrow-up-right"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact">{t("nav-contact")}</Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="lang-selector">
            <button
              type="button"
              className={`btn btn-secondary btn-sm lang-btn ${language === "en" ? "active" : ""}`}
              onClick={() => setLanguage("en")}
              aria-label={t("header-switch-en")}
            >
              EN
            </button>
            <button
              type="button"
              className={`btn btn-secondary btn-sm lang-btn ${language === "fil" ? "active" : ""}`}
              onClick={() => setLanguage("fil")}
              aria-label={t("header-switch-fil")}
            >
              FIL
            </button>
          </div>
        </div>

        <button
          type="button"
          className="mobile-menu-toggle btn btn-secondary"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-expanded={mobileMenuOpen}
          aria-controls="main-nav"
          aria-label={
            mobileMenuOpen ? t("header-close-menu") : t("header-open-menu")
          }
        >
          <i
            className={`bi ${mobileMenuOpen ? "bi-x-lg" : "bi-list"}`}
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </header>
  );
}
