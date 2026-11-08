"use client";

import Link from "next/link";
import { useEffect } from "react";
import {
  BarangayPopulationChart,
  PillarScoresTrendChart,
  PopulationDistributionChart,
  PopulationTrendsChart,
} from "@/components/charts/Charts";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  formatPesoMillions,
  fy2024Finance,
  localRevenueShare,
} from "@/data/finance";
import { siteConfig } from "@/data/site.config";

const revenue = formatPesoMillions(fy2024Finance.receipts.total);
const expenditure = formatPesoMillions(fy2024Finance.expenditure);
const netOperating = formatPesoMillions(fy2024Finance.netOperating);
const localRevenue = formatPesoMillions(fy2024Finance.receipts.local);
const localShare = localRevenueShare(fy2024Finance.receipts);

export default function StatisticsPage() {
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

    document
      .querySelectorAll(".animate-on-scroll, .metric-card")
      .forEach((el) => {
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/assets/css/statistics.css" />

      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label={t("stats-breadcrumb-aria")}>
          <Link href="/">{t("nav-home")}</Link>
          <span>/</span>
          <span aria-current="page">{t("nav-statistics")}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="stats-hero">
        <div className="container">
          <div className="stats-hero-content">
            <span className="stats-hero-badge">
              <i className="bi bi-bar-chart-fill"></i> {t("stats-hero-badge")}
            </span>
            <h1>{t("stats-title")}</h1>
            <p>{t("stats-subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="stats-metrics">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-card" data-delay="0">
              <div className="metric-icon">
                <i className="bi bi-people-fill"></i>
              </div>
              <div className="metric-value">32,799</div>
              <div className="metric-label">{t("stats-metric-population")}</div>
              <div className="metric-source">
                {t("stats-metric-population-source")}
              </div>
            </div>
            <div className="metric-card" data-delay="100">
              <div className="metric-icon">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div className="metric-value">14</div>
              <div className="metric-label">{t("stats-metric-barangays")}</div>
              <div className="metric-source">
                {t("stats-metric-barangays-source")}
              </div>
            </div>
            <div className="metric-card" data-delay="200">
              <div className="metric-icon">
                <i className="bi bi-rulers"></i>
              </div>
              <div className="metric-value">231.20</div>
              <div className="metric-label">{t("stats-metric-area")}</div>
              <div className="metric-source">
                {t("stats-metric-area-source")}
              </div>
            </div>
            <div className="metric-card" data-delay="300">
              <div className="metric-icon">
                <i className="bi bi-award-fill"></i>
              </div>
              <div className="metric-value">
                {t("stats-metric-income-class-value")}
              </div>
              <div className="metric-label">
                {t("stats-metric-income-class")}
              </div>
              <div className="metric-source">
                {t("stats-metric-income-class-source")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Municipal Finance */}
      <section className="stats-section stats-finance animate-on-scroll">
        <div className="container">
          <div className="section-header-minimal">
            <span className="section-tag">
              <i className="bi bi-cash-stack"></i> {t("stats-finance-tag")}
            </span>
            <h2>{t("stats-finance-title")}</h2>
            <p>{t("stats-finance-subtitle")}</p>
          </div>

          <div className="finance-grid">
            <div className="finance-card finance-card-primary">
              <div className="finance-card-header">
                <i className="bi bi-graph-up-arrow"></i>
                <span>{t("stats-annual-revenue")}</span>
              </div>
              <div className="finance-card-value">{revenue}</div>
              <div className="finance-card-detail">FY 2024</div>
            </div>
            <div className="finance-card">
              <div className="finance-card-header">
                <i className="bi bi-cash-stack"></i>
                <span>{t("stats-total-expenditure")}</span>
              </div>
              <div className="finance-card-value">{expenditure}</div>
              <div className="finance-card-detail">FY 2024</div>
            </div>
            <div className="finance-card">
              <div className="finance-card-header">
                <i className="bi bi-bank"></i>
                <span>{t("stats-net-operating")}</span>
              </div>
              <div className="finance-card-value">{netOperating}</div>
              <div className="finance-card-detail">
                {t("stats-net-operating-detail")}
              </div>
            </div>
          </div>

          <div className="income-breakdown animate-on-scroll">
            <h4>{t("stats-financial-position")}</h4>
            <div className="breakdown-legend">
              <div className="legend-item">
                <span className="legend-dot legend-ira"></span>
                {t("stats-revenue-exceeds", { revenue, expenditure })}
              </div>
              <div className="legend-item">
                <span className="legend-dot legend-local"></span>
                {t("stats-local-share", {
                  local: localRevenue,
                  percent: localShare,
                })}
              </div>
            </div>
          </div>

          <p className="data-source">
            <i className="bi bi-info-circle"></i> {t("stats-source")}{" "}
            <a
              href={fy2024Finance.source.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("stats-source-blgf")}
            </a>{" "}
            {t("stats-source-blgf-detail")}
          </p>
        </div>
      </section>

      {/* Population Trends */}
      <section className="stats-section stats-trends animate-on-scroll">
        <div className="container">
          <div className="section-header-minimal">
            <span className="section-tag">
              <i className="bi bi-graph-up"></i> {t("stats-growth-tag")}
            </span>
            <h2>{t("stats-pop-trends-title")}</h2>
            <p>{t("stats-pop-trends-subtitle")}</p>
          </div>

          <div className="trends-summary">
            <div className="trend-stat">
              <span className="trend-stat-label">1990</span>
              <span className="trend-stat-value">18,241</span>
            </div>
            <div className="trend-arrow">
              <i className="bi bi-arrow-right"></i>
            </div>
            <div className="trend-stat trend-stat-current">
              <span className="trend-stat-label">2024</span>
              <span className="trend-stat-value">32,799</span>
            </div>
            <div className="trend-stat trend-stat-growth">
              <span className="trend-stat-label">
                {t("stats-growth-label")}
              </span>
              <span className="trend-stat-value">+79.8%</span>
            </div>
          </div>

          <div className="chart-wrapper">
            <PopulationTrendsChart />
          </div>

          <p className="data-source">
            <i className="bi bi-info-circle"></i> {t("stats-source")}{" "}
            <a
              href={siteConfig.links.psa}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("stats-source-psa")}
            </a>
          </p>
        </div>
      </section>

      {/* Population Distribution */}
      <section className="stats-section stats-distribution animate-on-scroll">
        <div className="container">
          <div className="section-header-minimal">
            <span className="section-tag">
              <i className="bi bi-pie-chart-fill"></i>{" "}
              {t("stats-distribution-tag")}
            </span>
            <h2>{t("stats-pop-by-barangay")}</h2>
            <p>{t("stats-pop-by-barangay-subtitle")}</p>
          </div>

          <div className="distribution-layout">
            <div className="distribution-chart">
              <PopulationDistributionChart />
            </div>
            <div className="distribution-list">
              <div className="barangay-row" data-rank="1">
                <span className="rank">#1</span>
                <span className="name">Pag-asa</span>
                <div className="bar-wrap">
                  <div className="bar" style={{ width: "100%" }}></div>
                </div>
                <span className="pop">3,729</span>
              </div>
              <div className="barangay-row" data-rank="2">
                <span className="rank">#2</span>
                <span className="name">Parang</span>
                <div className="bar-wrap">
                  <div className="bar" style={{ width: "93%" }}></div>
                </div>
                <span className="pop">3,480</span>
              </div>
              <div className="barangay-row" data-rank="3">
                <span className="rank">#3</span>
                <span className="name">Saysain</span>
                <div className="bar-wrap">
                  <div className="bar" style={{ width: "93%" }}></div>
                </div>
                <span className="pop">3,468</span>
              </div>
              <div className="barangay-row">
                <span className="rank">#4</span>
                <span className="name">Banawang</span>
                <div className="bar-wrap">
                  <div className="bar" style={{ width: "93%" }}></div>
                </div>
                <span className="pop">3,460</span>
              </div>
              <div className="barangay-row">
                <span className="rank">#5</span>
                <span className="name">Atilano L. Ricardo</span>
                <div className="bar-wrap">
                  <div className="bar" style={{ width: "89%" }}></div>
                </div>
                <span className="pop">3,319</span>
              </div>
              <div className="barangay-row">
                <span className="rank">#6</span>
                <span className="name">Binukawan</span>
                <div className="bar-wrap">
                  <div className="bar" style={{ width: "75%" }}></div>
                </div>
                <span className="pop">2,814</span>
              </div>
              <div className="barangay-row">
                <span className="rank">#7</span>
                <span className="name">Bagumbayan</span>
                <div className="bar-wrap">
                  <div className="bar" style={{ width: "57%" }}></div>
                </div>
                <span className="pop">2,135</span>
              </div>
              <div className="barangay-row">
                <span className="rank">#8</span>
                <span className="name">Ibaba</span>
                <div className="bar-wrap">
                  <div className="bar" style={{ width: "51%" }}></div>
                </div>
                <span className="pop">1,920</span>
              </div>
              <div className="barangay-row">
                <span className="rank">#9</span>
                <span className="name">Ibis</span>
                <div className="bar-wrap">
                  <div className="bar" style={{ width: "51%" }}></div>
                </div>
                <span className="pop">1,884</span>
              </div>
              <div className="barangay-row">
                <span className="rank">#10</span>
                <span className="name">San Antonio</span>
                <div className="bar-wrap">
                  <div className="bar" style={{ width: "41%" }}></div>
                </div>
                <span className="pop">1,511</span>
              </div>
            </div>
          </div>

          <details className="more-barangays">
            <summary>{t("stats-view-all-barangays")}</summary>
            <div className="distribution-list distribution-list-full">
              <div className="barangay-row">
                <span className="rank">#11</span>
                <span className="name">Tabing-Ilog</span>
                <div className="bar-wrap">
                  <div className="bar" style={{ width: "35%" }}></div>
                </div>
                <span className="pop">1,321</span>
              </div>
              <div className="barangay-row">
                <span className="rank">#12</span>
                <span className="name">Paysawan</span>
                <div className="bar-wrap">
                  <div className="bar" style={{ width: "23%" }}></div>
                </div>
                <span className="pop">862</span>
              </div>
              <div className="barangay-row">
                <span className="rank">#13</span>
                <span className="name">Binuangan</span>
                <div className="bar-wrap">
                  <div className="bar" style={{ width: "20%" }}></div>
                </div>
                <span className="pop">752</span>
              </div>
              <div className="barangay-row">
                <span className="rank">#14</span>
                <span className="name">Quinawan</span>
                <div className="bar-wrap">
                  <div className="bar" style={{ width: "19%" }}></div>
                </div>
                <span className="pop">710</span>
              </div>
            </div>
          </details>

          <p className="data-source">
            <i className="bi bi-info-circle"></i> {t("stats-source")}{" "}
            <a
              href={siteConfig.links.psa}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("stats-source-psa")}
            </a>{" "}
            {t("stats-source-psa-census")}
          </p>
        </div>
      </section>

      {/* Economic Indicators */}
      <section className="stats-section stats-economy animate-on-scroll">
        <div className="container">
          <div className="section-header-minimal">
            <span className="section-tag">
              <i className="bi bi-briefcase-fill"></i> {t("stats-economy-tag")}
            </span>
            <h2>{t("stats-economy-title")}</h2>
            <p>{t("stats-economy-subtitle")}</p>
          </div>

          <div className="economy-grid">
            <div className="economy-card">
              <div className="economy-icon">
                <i className="bi bi-tree-fill"></i>
              </div>
              <div className="economy-content">
                <div className="economy-value">12.26 km²</div>
                <div className="economy-label">{t("stats-agri-land")}</div>
                <div className="economy-trend">
                  {t("stats-agri-land-detail")}
                </div>
              </div>
            </div>
            <div className="economy-card">
              <div className="economy-icon">
                <i className="bi bi-basket-fill"></i>
              </div>
              <div className="economy-content">
                <div className="economy-value">10,692 MT</div>
                <div className="economy-label">
                  {t("stats-rice-production")}
                </div>
                <div className="economy-trend">{t("stats-rice-detail")}</div>
              </div>
            </div>
            <div className="economy-card">
              <div className="economy-icon">
                <i className="bi bi-water"></i>
              </div>
              <div className="economy-content">
                <div className="economy-value">1,851.77 MT</div>
                <div className="economy-label">{t("stats-fish-catch")}</div>
                <div className="economy-trend">{t("stats-fish-detail")}</div>
              </div>
            </div>
          </div>

          <div className="sectors-chart animate-on-scroll">
            <h4>{t("stats-livelihood")}</h4>
            <div className="sector-bars">
              <div className="sector-item">
                <div className="sector-info">
                  <span className="sector-name">{t("stats-livelihood-1")}</span>
                  <span className="sector-pct">48.17%</span>
                </div>
                <div className="sector-bar-bg">
                  <div className="sector-bar" style={{ width: "48%" }}></div>
                </div>
              </div>
              <div className="sector-item">
                <div className="sector-info">
                  <span className="sector-name">{t("stats-livelihood-2")}</span>
                  <span className="sector-pct">6 of 14</span>
                </div>
                <div className="sector-bar-bg">
                  <div className="sector-bar" style={{ width: "43%" }}></div>
                </div>
              </div>
              <div className="sector-item">
                <div className="sector-info">
                  <span className="sector-name">{t("stats-livelihood-3")}</span>
                  <span className="sector-pct">5.30%</span>
                </div>
                <div className="sector-bar-bg">
                  <div className="sector-bar" style={{ width: "5%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <p className="data-source">
            <i className="bi bi-info-circle"></i> {t("stats-source")}{" "}
            <a
              href={siteConfig.links.industries}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteConfig.municipality.officialName} – Industries
            </a>{" "}
            {t("stats-source-industries-suffix")}
          </p>
        </div>
      </section>

      {/* Poverty Statistics */}
      <section className="stats-section stats-poverty animate-on-scroll">
        <div className="container">
          <div className="section-header-minimal">
            <span className="section-tag">
              <i className="bi bi-graph-down-arrow"></i>{" "}
              {t("stats-poverty-tag")}
            </span>
            <h2>{t("stats-poverty-title")}</h2>
            <p>{t("stats-poverty-subtitle")}</p>
          </div>

          <div className="poverty-comparison">
            <div className="poverty-card poverty-card-2018">
              <span className="poverty-year">2021</span>
              <div className="poverty-rate">
                <span className="rate-value">12.46</span>
                <span className="rate-symbol">%</span>
              </div>
              <div className="poverty-bar">
                <div className="poverty-fill" style={{ width: "12.46%" }}></div>
              </div>
              <span className="poverty-ci">{t("stats-poverty-ci")}</span>
            </div>
            <div className="poverty-arrow">
              <i className="bi bi-arrow-right"></i>
              <span className="poverty-change">-1.67 pp</span>
            </div>
            <div className="poverty-card poverty-card-2021">
              <span className="poverty-year">2023</span>
              <div className="poverty-rate">
                <span className="rate-value">10.79</span>
                <span className="rate-symbol">%</span>
              </div>
              <div className="poverty-bar">
                <div className="poverty-fill" style={{ width: "10.79%" }}></div>
              </div>
              <span className="poverty-ci">{t("stats-poverty-ci")}</span>
              <span className="poverty-badge">
                <i className="bi bi-check-circle-fill"></i>{" "}
                {t("stats-poverty-improved")}
              </span>
            </div>
          </div>

          <p className="data-source">
            <i className="bi bi-info-circle"></i> {t("stats-source")}{" "}
            <a
              href={siteConfig.links.psa}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("stats-source-psa")}
            </a>{" "}
            {t("stats-source-poverty")}
          </p>
        </div>
      </section>

      {/* Competitive Index Section */}
      <section
        className="stats-section stats-competitive animate-on-scroll"
        id="competitive-index"
      >
        <div className="container">
          <div className="section-header-minimal">
            <span className="section-tag">
              <i className="bi bi-trophy-fill"></i>{" "}
              {t("stats-competitiveness-tag")}
            </span>
            <h2>{t("stats-cmci-title")}</h2>
            <p>{t("stats-cmci-subtitle")}</p>
          </div>

          {/* Overview Grid */}
          <div className="cmci-overview-grid">
            <div className="cmci-pillar-card">
              <div className="pillar-icon">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <h4>{t("stats-chart-economic-dynamism")}</h4>
              <div className="pillar-score">4.4403</div>
              <div className="pillar-trend trend-up">
                <i className="bi bi-arrow-up"></i>{" "}
                {t("stats-rank-up", { rank: 247, previous: 351 })}
              </div>
            </div>
            <div className="cmci-pillar-card">
              <div className="pillar-icon">
                <i className="bi bi-building-check"></i>
              </div>
              <h4>{t("stats-chart-government-efficiency")}</h4>
              <div className="pillar-score">8.5939</div>
              <div className="pillar-trend trend-up">
                <i className="bi bi-arrow-up"></i>{" "}
                {t("stats-rank-up", { rank: 23, previous: 155 })}
              </div>
            </div>
            <div className="cmci-pillar-card">
              <div className="pillar-icon">
                <i className="bi bi-building-gear"></i>
              </div>
              <h4>{t("stats-chart-infrastructure")}</h4>
              <div className="pillar-score">3.3508</div>
              <div className="pillar-trend trend-up">
                <i className="bi bi-arrow-up"></i>{" "}
                {t("stats-rank-up", { rank: 71, previous: 168 })}
              </div>
            </div>
            <div className="cmci-pillar-card">
              <div className="pillar-icon">
                <i className="bi bi-shield-check"></i>
              </div>
              <h4>{t("stats-chart-resiliency")}</h4>
              <div className="pillar-score">11.2791</div>
              <div className="pillar-trend trend-up">
                <i className="bi bi-arrow-up"></i>{" "}
                {t("stats-rank-up", { rank: 285, previous: 529 })}
              </div>
            </div>
            <div className="cmci-pillar-card">
              <div className="pillar-icon">
                <i className="bi bi-lightbulb"></i>
              </div>
              <h4>{t("stats-chart-innovation")}</h4>
              <div className="pillar-score">7.4175</div>
              <div className="pillar-trend trend-up">
                <i className="bi bi-arrow-up"></i>{" "}
                {t("stats-rank-up", { rank: 34, previous: 435 })}
              </div>
            </div>
          </div>

          {/* Pillar Score Trend Chart */}
          <div className="cmci-chart-container">
            <h4>
              <i className="bi bi-bar-chart-line"></i>{" "}
              {t("stats-pillar-trends")}
            </h4>
            <div className="chart-wrapper">
              <PillarScoresTrendChart />
            </div>
          </div>

          <p className="data-source">
            <i className="bi bi-info-circle"></i> {t("stats-source")}{" "}
            <a
              href={siteConfig.links.cmci}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("stats-source-cmci")}
            </a>{" "}
            {t("stats-cmci-note")}
          </p>
        </div>
      </section>

      {/* Bar Chart Section */}
      <section className="stats-section stats-barchart animate-on-scroll">
        <div className="container">
          <div className="section-header-minimal">
            <span className="section-tag">
              <i className="bi bi-bar-chart-fill"></i> {t("stats-visual-tag")}
            </span>
            <h2>{t("stats-bar-chart-title")}</h2>
            <p>{t("stats-bar-chart-subtitle")}</p>
          </div>

          <div className="chart-wrapper chart-wrapper-bar">
            <BarangayPopulationChart />
          </div>

          <p className="data-source">
            <i className="bi bi-info-circle"></i> {t("stats-source")}{" "}
            <a
              href={siteConfig.links.psa}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("stats-source-psa")}
            </a>{" "}
            {t("stats-source-psa-census")}
          </p>
        </div>
      </section>
    </>
  );
}
