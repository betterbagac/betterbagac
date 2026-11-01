"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/data/site.config";
import { DPWHProjectsTable } from "./DPWHProjectsTable";

// FY 2024 financial data (BLGF)
const financialData = {
  revenue: "₱236.6 M",
  expenditure: "₱197.4 M",
  netOperating: "₱39.2 M",
  assets: "₱739.4 M",
  liabilities: "₱192.9 M",
  netAssets: "₱546.5 M",
};

export default function BudgetPage() {
  const { t } = useLanguage();

  useEffect(() => {
    // Animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/assets/css/transparency-v2.css" />

      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label={t("budget-breadcrumb-aria")}>
          <Link href="/">{t("nav-home")}</Link>
          <span>/</span>
          <span aria-current="page">{t("budget-crumb-current")}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="trans-hero-v2">
        <div className="container">
          <div className="trans-hero-content-v2">
            <span className="trans-hero-badge-v2">
              <i className="bi bi-shield-check"></i> {t("budget-hero-badge")}
            </span>
            <h1>{t("budget-title")}</h1>
            <p>{t("budget-subtitle")}</p>
          </div>
        </div>
      </section>

      {/* SRE Section */}
      <section className="sre-section-v2 animate-on-scroll">
        <div className="container">
          <div className="sre-header-v2">
            <div className="sre-title-group">
              <span className="sre-label">
                <i className="bi bi-graph-up-arrow"></i> {t("budget-sre-label")}
              </span>
              <h2>{t("budget-sre-title")}</h2>
              <p>{t("budget-sre-subtitle")}</p>
            </div>
          </div>

          <div className="sre-metrics-row">
            <div className="sre-metric-card sre-metric-income">
              <div className="sre-metric-icon">
                <i className="bi bi-arrow-down-circle"></i>
              </div>
              <div className="sre-metric-data">
                <span className="sre-metric-value">
                  {financialData.revenue}
                </span>
                <span className="sre-metric-label">
                  {t("budget-metric-revenue")}
                </span>
              </div>
            </div>
            <div className="sre-metric-card sre-metric-expense">
              <div className="sre-metric-icon">
                <i className="bi bi-arrow-up-circle"></i>
              </div>
              <div className="sre-metric-data">
                <span className="sre-metric-value">
                  {financialData.expenditure}
                </span>
                <span className="sre-metric-label">
                  {t("budget-metric-expenditure")}
                </span>
              </div>
            </div>
            <div className="sre-metric-card sre-metric-net">
              <div className="sre-metric-icon">
                <i className="bi bi-plus-slash-minus"></i>
              </div>
              <div className="sre-metric-data">
                <span className="sre-metric-value">
                  {financialData.netOperating}
                </span>
                <span className="sre-metric-label">
                  {t("budget-metric-net-operating")}
                </span>
              </div>
            </div>
            <div className="sre-metric-card sre-metric-balance">
              <div className="sre-metric-icon">
                <i className="bi bi-wallet2"></i>
              </div>
              <div className="sre-metric-data">
                <span className="sre-metric-value">{financialData.assets}</span>
                <span className="sre-metric-label">
                  {t("budget-metric-assets")}
                </span>
              </div>
            </div>
          </div>

          <div className="sre-breakdown-v2">
            <div className="sre-breakdown-panel">
              <div className="sre-panel-header">
                <h3>
                  <i className="bi bi-wallet2"></i> {t("budget-position-title")}
                </h3>
              </div>
              <div className="sre-panel-body">
                <div className="sre-breakdown-list">
                  <div className="sre-breakdown-item" data-type="local">
                    <span className="sre-item-indicator sre-indicator-local"></span>
                    <div className="sre-item-info">
                      <span className="sre-item-name">
                        {t("budget-metric-assets")}
                      </span>
                      <span className="sre-item-detail">
                        {t("budget-fy-2024")}
                      </span>
                    </div>
                    <div className="sre-item-values">
                      <span className="sre-item-amount">
                        {financialData.assets}
                      </span>
                    </div>
                  </div>
                  <div className="sre-breakdown-item" data-type="external">
                    <span className="sre-item-indicator sre-indicator-external"></span>
                    <div className="sre-item-info">
                      <span className="sre-item-name">
                        {t("budget-item-liabilities")}
                      </span>
                      <span className="sre-item-detail">
                        {t("budget-fy-2024")}
                      </span>
                    </div>
                    <div className="sre-item-values">
                      <span className="sre-item-amount">
                        {financialData.liabilities}
                      </span>
                    </div>
                  </div>
                  <div className="sre-breakdown-item" data-type="gps">
                    <span className="sre-item-indicator sre-indicator-gps"></span>
                    <div className="sre-item-info">
                      <span className="sre-item-name">
                        {t("budget-item-net-assets")}
                      </span>
                      <span className="sre-item-detail">
                        {t("budget-item-net-assets-detail")}
                      </span>
                    </div>
                    <div className="sre-item-values">
                      <span className="sre-item-amount">
                        {financialData.netAssets}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sre-breakdown-panel">
              <div className="sre-panel-header">
                <h3>
                  <i className="bi bi-clipboard-data"></i>{" "}
                  {t("budget-result-title")}
                </h3>
              </div>
              <div className="sre-panel-body">
                <div className="sre-breakdown-list">
                  <div className="sre-breakdown-item" data-type="local">
                    <span className="sre-item-indicator sre-indicator-local"></span>
                    <div className="sre-item-info">
                      <span className="sre-item-name">
                        {t("budget-item-revenue")}
                      </span>
                      <span className="sre-item-detail">
                        {t("budget-item-revenue-detail")}
                      </span>
                    </div>
                    <div className="sre-item-values">
                      <span className="sre-item-amount">
                        {financialData.revenue}
                      </span>
                    </div>
                  </div>
                  <div className="sre-breakdown-item" data-type="social">
                    <span className="sre-item-indicator sre-indicator-social"></span>
                    <div className="sre-item-info">
                      <span className="sre-item-name">
                        {t("budget-item-expenditure")}
                      </span>
                      <span className="sre-item-detail">
                        {t("budget-item-expenditure-detail")}
                      </span>
                    </div>
                    <div className="sre-item-values">
                      <span className="sre-item-amount">
                        {financialData.expenditure}
                      </span>
                    </div>
                  </div>
                  <div className="sre-breakdown-item" data-type="economic">
                    <span className="sre-item-indicator sre-indicator-economic"></span>
                    <div className="sre-item-info">
                      <span className="sre-item-name">
                        {t("budget-metric-net-operating")}
                      </span>
                      <span className="sre-item-detail">
                        {t("budget-item-net-operating-detail")}
                      </span>
                    </div>
                    <div className="sre-item-values">
                      <span className="sre-item-amount">
                        {financialData.netOperating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="sre-source">
            <i className="bi bi-info-circle"></i> {t("budget-source-label")}{" "}
            <a
              href={siteConfig.links.blgf}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("budget-source-blgf")}
            </a>{" "}
            {t("budget-source-blgf-detail")}
          </p>
        </div>
      </section>

      {/* Infrastructure & project transparency */}
      <section className="infra-section-v5 animate-on-scroll">
        <div className="container">
          <div className="infra-header-v5">
            <span className="infra-label-v5">
              <i className="bi bi-building-gear"></i> {t("budget-infra-label")}
            </span>
            <h2>{t("budget-infra-title")}</h2>
            <p>{t("budget-infra-subtitle")}</p>
          </div>

          <div className="dpwh-section-head">
            <h3>{t("budget-dpwh-section-title")}</h3>
            <p>{t("budget-dpwh-section-desc")}</p>
          </div>

          <DPWHProjectsTable />

          <div className="infra-project-v5">
            <div className="infra-project-main">
              <div className="infra-project-tags">
                <span className="infra-tag-year">
                  {t("budget-tag-national")}
                </span>
                <span className="infra-tag-category">
                  <i className="bi bi-signpost-2"></i>{" "}
                  {t("budget-tag-roads-bridges")}
                </span>
              </div>
              <h3>{t("budget-dpwh-offices-title")}</h3>
              <p className="infra-location">
                <i className="bi bi-geo-alt"></i>{" "}
                {t("budget-dpwh-offices-desc")}
              </p>
            </div>
            <div className="infra-project-footer">
              <span className="infra-source">
                <i className="bi bi-info-circle"></i> {t("budget-source-label")}{" "}
                {t("budget-source-dpwh")}
              </span>
              <a
                href={siteConfig.links.dpwh}
                target="_blank"
                rel="noopener noreferrer"
                className="infra-link"
              >
                {t("budget-link-view-projects")}{" "}
                <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>

          <div className="infra-project-v5">
            <div className="infra-project-main">
              <div className="infra-project-tags">
                <span className="infra-tag-year">{t("budget-tag-lgu")}</span>
                <span className="infra-tag-category">
                  <i className="bi bi-file-earmark-text"></i>{" "}
                  {t("budget-tag-budget-procurement")}
                </span>
              </div>
              <h3>{t("budget-seal-title")}</h3>
              <p className="infra-location">
                <i className="bi bi-geo-alt"></i> {t("budget-seal-desc")}
              </p>
            </div>
            <div className="infra-project-footer">
              <span className="infra-source">
                <i className="bi bi-info-circle"></i> {t("budget-source-label")}{" "}
                {siteConfig.municipality.officialName}
              </span>
              <a
                href={siteConfig.links.transparencySeal}
                target="_blank"
                rel="noopener noreferrer"
                className="infra-link"
              >
                {t("budget-link-open-transparency")}{" "}
                <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>

          <div className="infra-project-v5">
            <div className="infra-project-main">
              <div className="infra-project-tags">
                <span className="infra-tag-year">{t("budget-tag-lgu")}</span>
                <span className="infra-tag-category">
                  <i className="bi bi-journal-text"></i>{" "}
                  {t("budget-tag-legislation")}
                </span>
              </div>
              <h3>{t("budget-sb-title")}</h3>
              <p className="infra-location">
                <i className="bi bi-geo-alt"></i> {t("budget-sb-desc")}
              </p>
            </div>
            <div className="infra-project-footer">
              <span className="infra-source">
                <i className="bi bi-info-circle"></i> {t("budget-source-label")}{" "}
                {siteConfig.municipality.officialName}
              </span>
              <a
                href={siteConfig.links.sangguniangBayan}
                target="_blank"
                rel="noopener noreferrer"
                className="infra-link"
              >
                {t("budget-link-visit-sb")}{" "}
                <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
