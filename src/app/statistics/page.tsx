"use client";

import Link from "next/link";
import { useEffect } from "react";
import {
  BarangayPopulationChart,
  PillarScoresTrendChart,
  PopulationDistributionChart,
  PopulationTrendsChart,
} from "@/components/charts/Charts";

export default function StatisticsPage() {
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
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span aria-current="page">Statistics</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="stats-hero">
        <div className="container">
          <div className="stats-hero-content">
            <span className="stats-hero-badge">
              <i className="bi bi-bar-chart-fill"></i> Municipal Data
            </span>
            <h1>Municipal Statistics</h1>
            <p>Data and statistics about Bagac, Bataan</p>
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
              <div className="metric-label">Population</div>
              <div className="metric-source">2024 Census</div>
            </div>
            <div className="metric-card" data-delay="100">
              <div className="metric-icon">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div className="metric-value">14</div>
              <div className="metric-label">Barangays</div>
              <div className="metric-source">Administrative Units</div>
            </div>
            <div className="metric-card" data-delay="200">
              <div className="metric-icon">
                <i className="bi bi-rulers"></i>
              </div>
              <div className="metric-value">231.20</div>
              <div className="metric-label">Land Area (km²)</div>
              <div className="metric-source">Total Municipal Area</div>
            </div>
            <div className="metric-card" data-delay="300">
              <div className="metric-icon">
                <i className="bi bi-award-fill"></i>
              </div>
              <div className="metric-value">2nd</div>
              <div className="metric-label">Income Class</div>
              <div className="metric-source">Municipality Classification</div>
            </div>
          </div>
        </div>
      </section>

      {/* Municipal Finance */}
      <section className="stats-section stats-finance animate-on-scroll">
        <div className="container">
          <div className="section-header-minimal">
            <span className="section-tag">
              <i className="bi bi-cash-stack"></i> Finance
            </span>
            <h2>Municipal Income</h2>
            <p>Financial standing for fiscal year 2023</p>
          </div>

          <div className="finance-grid">
            <div className="finance-card finance-card-primary">
              <div className="finance-card-header">
                <i className="bi bi-graph-up-arrow"></i>
                <span>Annual Revenue</span>
              </div>
              <div className="finance-card-value">₱236.6M</div>
              <div className="finance-card-detail">FY 2024</div>
            </div>
            <div className="finance-card">
              <div className="finance-card-header">
                <i className="bi bi-cash-stack"></i>
                <span>Total Expenditure</span>
              </div>
              <div className="finance-card-value">₱197.4M</div>
              <div className="finance-card-detail">FY 2024</div>
            </div>
            <div className="finance-card">
              <div className="finance-card-header">
                <i className="bi bi-bank"></i>
                <span>Total Assets</span>
              </div>
              <div className="finance-card-value">₱739.4M</div>
              <div className="finance-card-detail">
                Liabilities: ₱192.9M (FY 2024)
              </div>
            </div>
          </div>

          <div className="income-breakdown animate-on-scroll">
            <h4>Financial Position</h4>
            <div className="breakdown-legend">
              <div className="legend-item">
                <span className="legend-dot legend-ira"></span>Revenue exceeds
                expenditure by ₱39.2M in FY 2024
              </div>
              <div className="legend-item">
                <span className="legend-dot legend-local"></span>Assets exceed
                liabilities by ₱546.5M
              </div>
            </div>
          </div>

          <p className="data-source">
            <i className="bi bi-info-circle"></i> Source:{" "}
            <a
              href="https://blgf.gov.ph/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bureau of Local Government Finance (BLGF)
            </a>{" "}
            – FY 2024 local government financial data
          </p>
        </div>
      </section>

      {/* Population Trends */}
      <section className="stats-section stats-trends animate-on-scroll">
        <div className="container">
          <div className="section-header-minimal">
            <span className="section-tag">
              <i className="bi bi-graph-up"></i> Growth
            </span>
            <h2>Population Trends</h2>
            <p>Historical growth from 1990 to 2024</p>
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
              <span className="trend-stat-label">Growth</span>
              <span className="trend-stat-value">+79.8%</span>
            </div>
          </div>

          <div className="chart-wrapper">
            <PopulationTrendsChart />
          </div>

          <p className="data-source">
            <i className="bi bi-info-circle"></i> Source:{" "}
            <a
              href="https://psa.gov.ph/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Philippine Statistics Authority (PSA)
            </a>
          </p>
        </div>
      </section>

      {/* Population Distribution */}
      <section className="stats-section stats-distribution animate-on-scroll">
        <div className="container">
          <div className="section-header-minimal">
            <span className="section-tag">
              <i className="bi bi-pie-chart-fill"></i> Distribution
            </span>
            <h2>Population by Barangay</h2>
            <p>2020 Census of Population</p>
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
            <summary>View all 14 barangays</summary>
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
            <i className="bi bi-info-circle"></i> Source:{" "}
            <a
              href="https://psa.gov.ph/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Philippine Statistics Authority (PSA)
            </a>{" "}
            - 2020 Census (barangay level)
          </p>
        </div>
      </section>

      {/* Economic Indicators */}
      <section className="stats-section stats-economy animate-on-scroll">
        <div className="container">
          <div className="section-header-minimal">
            <span className="section-tag">
              <i className="bi bi-briefcase-fill"></i> Economy
            </span>
            <h2>Local Economy</h2>
            <p>Farming, fishing, and household livelihoods</p>
          </div>

          <div className="economy-grid">
            <div className="economy-card">
              <div className="economy-icon">
                <i className="bi bi-tree-fill"></i>
              </div>
              <div className="economy-content">
                <div className="economy-value">12.26 km²</div>
                <div className="economy-label">Agricultural Land</div>
                <div className="economy-trend">5.30% of the municipal area</div>
              </div>
            </div>
            <div className="economy-card">
              <div className="economy-icon">
                <i className="bi bi-basket-fill"></i>
              </div>
              <div className="economy-content">
                <div className="economy-value">10,692 MT</div>
                <div className="economy-label">Rice Production</div>
                <div className="economy-trend">Municipal estimate, 2019</div>
              </div>
            </div>
            <div className="economy-card">
              <div className="economy-icon">
                <i className="bi bi-water"></i>
              </div>
              <div className="economy-content">
                <div className="economy-value">1,851.77 MT</div>
                <div className="economy-label">Fish Catch</div>
                <div className="economy-trend">
                  2019, along a 28-km coastline
                </div>
              </div>
            </div>
          </div>

          <div className="sectors-chart animate-on-scroll">
            <h4>Livelihood Profile</h4>
            <div className="sector-bars">
              <div className="sector-item">
                <div className="sector-info">
                  <span className="sector-name">
                    Households citing farming or fishing as primary livelihood
                  </span>
                  <span className="sector-pct">48.17%</span>
                </div>
                <div className="sector-bar-bg">
                  <div className="sector-bar" style={{ width: "48%" }}></div>
                </div>
              </div>
              <div className="sector-item">
                <div className="sector-info">
                  <span className="sector-name">
                    Coastal barangays along Bagac Bay
                  </span>
                  <span className="sector-pct">6 of 14</span>
                </div>
                <div className="sector-bar-bg">
                  <div className="sector-bar" style={{ width: "43%" }}></div>
                </div>
              </div>
              <div className="sector-item">
                <div className="sector-info">
                  <span className="sector-name">
                    Agricultural share of municipal land area
                  </span>
                  <span className="sector-pct">5.30%</span>
                </div>
                <div className="sector-bar-bg">
                  <div className="sector-bar" style={{ width: "5%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <p className="data-source">
            <i className="bi bi-info-circle"></i> Source:{" "}
            <a
              href="https://bagac.gov.ph/industries/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Municipality of Bagac – Industries
            </a>{" "}
            (2019 municipal data)
          </p>
        </div>
      </section>

      {/* Poverty Statistics */}
      <section className="stats-section stats-poverty animate-on-scroll">
        <div className="container">
          <div className="section-header-minimal">
            <span className="section-tag">
              <i className="bi bi-graph-down-arrow"></i> Poverty
            </span>
            <h2>Poverty Statistics</h2>
            <p>2021 and 2023 City and Municipal Level Poverty Estimates</p>
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
              <span className="poverty-ci">PSA small area estimate</span>
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
              <span className="poverty-ci">PSA small area estimate</span>
              <span className="poverty-badge">
                <i className="bi bi-check-circle-fill"></i> Improved
              </span>
            </div>
          </div>

          <p className="data-source">
            <i className="bi bi-info-circle"></i> Source:{" "}
            <a
              href="https://psa.gov.ph/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Philippine Statistics Authority (PSA)
            </a>{" "}
            - 2023 Poverty Estimates
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
              <i className="bi bi-trophy-fill"></i> Competitiveness
            </span>
            <h2>Bagac Competitive Index</h2>
            <p>
              CMCI performance, 2016–2024 · 2024 overall rank: 44th (score
              35.08)
            </p>
          </div>

          {/* Overview Grid */}
          <div className="cmci-overview-grid">
            <div className="cmci-pillar-card">
              <div className="pillar-icon">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <h4>Economic Dynamism</h4>
              <div className="pillar-score">4.4403</div>
              <div className="pillar-trend trend-up">
                <i className="bi bi-arrow-up"></i> Rank #247 (2023: #351)
              </div>
            </div>
            <div className="cmci-pillar-card">
              <div className="pillar-icon">
                <i className="bi bi-building-check"></i>
              </div>
              <h4>Government Efficiency</h4>
              <div className="pillar-score">8.5939</div>
              <div className="pillar-trend trend-up">
                <i className="bi bi-arrow-up"></i> Rank #23 (2023: #155)
              </div>
            </div>
            <div className="cmci-pillar-card">
              <div className="pillar-icon">
                <i className="bi bi-building-gear"></i>
              </div>
              <h4>Infrastructure</h4>
              <div className="pillar-score">3.3508</div>
              <div className="pillar-trend trend-up">
                <i className="bi bi-arrow-up"></i> Rank #71 (2023: #168)
              </div>
            </div>
            <div className="cmci-pillar-card">
              <div className="pillar-icon">
                <i className="bi bi-shield-check"></i>
              </div>
              <h4>Resiliency</h4>
              <div className="pillar-score">11.2791</div>
              <div className="pillar-trend trend-up">
                <i className="bi bi-arrow-up"></i> Rank #285 (2023: #529)
              </div>
            </div>
            <div className="cmci-pillar-card">
              <div className="pillar-icon">
                <i className="bi bi-lightbulb"></i>
              </div>
              <h4>Innovation</h4>
              <div className="pillar-score">7.4175</div>
              <div className="pillar-trend trend-up">
                <i className="bi bi-arrow-up"></i> Rank #34 (2023: #435)
              </div>
            </div>
          </div>

          {/* Pillar Score Trend Chart */}
          <div className="cmci-chart-container">
            <h4>
              <i className="bi bi-bar-chart-line"></i> Pillar Score Trends
              (2016–2024)
            </h4>
            <div className="chart-wrapper">
              <PillarScoresTrendChart />
            </div>
          </div>

          <p className="data-source">
            <i className="bi bi-info-circle"></i> Source:{" "}
            <a
              href="https://cmci.dti.gov.ph/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DTI Cities and Municipalities Competitiveness Index (CMCI)
            </a>{" "}
            · Scores are not directly comparable across years because pillar
            weights changed. No comparable 2018 score was reported.
          </p>
        </div>
      </section>

      {/* Bar Chart Section */}
      <section className="stats-section stats-barchart animate-on-scroll">
        <div className="container">
          <div className="section-header-minimal">
            <span className="section-tag">
              <i className="bi bi-bar-chart-fill"></i> Visual
            </span>
            <h2>Population Bar Chart</h2>
            <p>Comparative view of all 14 barangays</p>
          </div>

          <div className="chart-wrapper chart-wrapper-bar">
            <BarangayPopulationChart />
          </div>

          <p className="data-source">
            <i className="bi bi-info-circle"></i> Source:{" "}
            <a
              href="https://psa.gov.ph/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Philippine Statistics Authority (PSA)
            </a>{" "}
            - 2020 Census (barangay level)
          </p>
        </div>
      </section>
    </>
  );
}
