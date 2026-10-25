"use client";

import Link from "next/link";
import { useEffect } from "react";
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
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span aria-current="page">Budget &amp; Transparency</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="trans-hero-v2">
        <div className="container">
          <div className="trans-hero-content-v2">
            <span className="trans-hero-badge-v2">
              <i className="bi bi-shield-check"></i> Financial Transparency
            </span>
            <h1>Budget &amp; Financial Transparency</h1>
            <p>Tracking municipal finances and projects for accountability</p>
          </div>
        </div>
      </section>

      {/* SRE Section */}
      <section className="sre-section-v2 animate-on-scroll">
        <div className="container">
          <div className="sre-header-v2">
            <div className="sre-title-group">
              <span className="sre-label">
                <i className="bi bi-graph-up-arrow"></i> Financial Report
              </span>
              <h2>Statement of Receipts &amp; Expenditures</h2>
              <p>FY 2024 annual financial performance</p>
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
                <span className="sre-metric-label">Total Revenue</span>
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
                <span className="sre-metric-label">Total Expenditure</span>
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
                <span className="sre-metric-label">Net Operating Income</span>
              </div>
            </div>
            <div className="sre-metric-card sre-metric-balance">
              <div className="sre-metric-icon">
                <i className="bi bi-wallet2"></i>
              </div>
              <div className="sre-metric-data">
                <span className="sre-metric-value">{financialData.assets}</span>
                <span className="sre-metric-label">Total Assets</span>
              </div>
            </div>
          </div>

          <div className="sre-breakdown-v2">
            <div className="sre-breakdown-panel">
              <div className="sre-panel-header">
                <h3>
                  <i className="bi bi-wallet2"></i> Financial Position
                </h3>
              </div>
              <div className="sre-panel-body">
                <div className="sre-breakdown-list">
                  <div className="sre-breakdown-item" data-type="local">
                    <span className="sre-item-indicator sre-indicator-local"></span>
                    <div className="sre-item-info">
                      <span className="sre-item-name">Total Assets</span>
                      <span className="sre-item-detail">FY 2024</span>
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
                      <span className="sre-item-name">Total Liabilities</span>
                      <span className="sre-item-detail">FY 2024</span>
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
                      <span className="sre-item-name">Net Assets</span>
                      <span className="sre-item-detail">
                        Assets less liabilities
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
                  <i className="bi bi-clipboard-data"></i> Operating Result
                </h3>
              </div>
              <div className="sre-panel-body">
                <div className="sre-breakdown-list">
                  <div className="sre-breakdown-item" data-type="local">
                    <span className="sre-item-indicator sre-indicator-local"></span>
                    <div className="sre-item-info">
                      <span className="sre-item-name">Revenue</span>
                      <span className="sre-item-detail">
                        Tax and non-tax sources
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
                      <span className="sre-item-name">Expenditure</span>
                      <span className="sre-item-detail">
                        Operating and capital outlays
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
                        Net Operating Income
                      </span>
                      <span className="sre-item-detail">
                        Revenue less expenditure
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

      {/* Infrastructure & project transparency */}
      <section className="infra-section-v5 animate-on-scroll">
        <div className="container">
          <div className="infra-header-v5">
            <span className="infra-label-v5">
              <i className="bi bi-building-gear"></i> Public Works
            </span>
            <h2>Infrastructure &amp; Project Transparency</h2>
            <p>
              Official sources for Bagac&apos;s public works and procurement
              records
            </p>
          </div>

          <div className="dpwh-section-head">
            <h3>DPWH Infrastructure Projects in Bagac</h3>
            <p>
              118 projects (2016–2026) implemented by the DPWH Bataan 2nd and
              3rd District Engineering Offices
            </p>
          </div>

          <DPWHProjectsTable />

          <div className="infra-project-v5">
            <div className="infra-project-main">
              <div className="infra-project-tags">
                <span className="infra-tag-year">National</span>
                <span className="infra-tag-category">
                  <i className="bi bi-signpost-2"></i> Roads &amp; Bridges
                </span>
              </div>
              <h3>DPWH Bataan 2nd &amp; 3rd District Engineering Offices</h3>
              <p className="infra-location">
                <i className="bi bi-geo-alt"></i> National roads, bridges, and
                flood control projects implemented in Bagac
              </p>
            </div>
            <div className="infra-project-footer">
              <span className="infra-source">
                <i className="bi bi-info-circle"></i> Source: DPWH Transparency
                Portal
              </span>
              <a
                href="https://transparency.dpwh.gov.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="infra-link"
              >
                View projects <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>

          <div className="infra-project-v5">
            <div className="infra-project-main">
              <div className="infra-project-tags">
                <span className="infra-tag-year">LGU</span>
                <span className="infra-tag-category">
                  <i className="bi bi-file-earmark-text"></i> Budget &amp;
                  Procurement
                </span>
              </div>
              <h3>Bagac Transparency Seal</h3>
              <p className="infra-location">
                <i className="bi bi-geo-alt"></i> Annual and supplemental
                budgets, programs, projects, and procurement reports
              </p>
            </div>
            <div className="infra-project-footer">
              <span className="infra-source">
                <i className="bi bi-info-circle"></i> Source: Municipality of
                Bagac
              </span>
              <a
                href="https://bagac.gov.ph/transparency-seal/"
                target="_blank"
                rel="noopener noreferrer"
                className="infra-link"
              >
                Open transparency page <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>

          <div className="infra-project-v5">
            <div className="infra-project-main">
              <div className="infra-project-tags">
                <span className="infra-tag-year">LGU</span>
                <span className="infra-tag-category">
                  <i className="bi bi-journal-text"></i> Legislation
                </span>
              </div>
              <h3>Sangguniang Bayan ng Bagac</h3>
              <p className="infra-location">
                <i className="bi bi-geo-alt"></i> Ordinances, resolutions, and
                the annual legislative agenda
              </p>
            </div>
            <div className="infra-project-footer">
              <span className="infra-source">
                <i className="bi bi-info-circle"></i> Source: Municipality of
                Bagac
              </span>
              <a
                href="https://bagac.gov.ph/the-sanguniang-bayan/"
                target="_blank"
                rel="noopener noreferrer"
                className="infra-link"
              >
                Visit the SB page <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
