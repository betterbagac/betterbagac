"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/data/site.config";

interface FlowStep {
  num: string;
  icon: string;
  titleKey: string;
  descKey: string;
  final?: boolean;
}

const ordinanceSteps: FlowStep[] = [
  {
    num: "01",
    icon: "bi-file-earmark-plus",
    titleKey: "leg-ord-step-1-title",
    descKey: "leg-ord-step-1-desc",
  },
  {
    num: "02",
    icon: "bi-book",
    titleKey: "leg-ord-step-2-title",
    descKey: "leg-ord-step-2-desc",
  },
  {
    num: "03",
    icon: "bi-people",
    titleKey: "leg-ord-step-3-title",
    descKey: "leg-ord-step-3-desc",
  },
  {
    num: "04",
    icon: "bi-file-text",
    titleKey: "leg-ord-step-4-title",
    descKey: "leg-ord-step-4-desc",
  },
  {
    num: "05",
    icon: "bi-journal-text",
    titleKey: "leg-ord-step-5-title",
    descKey: "leg-ord-step-5-desc",
  },
  {
    num: "06",
    icon: "bi-check2-square",
    titleKey: "leg-ord-step-6-title",
    descKey: "leg-ord-step-6-desc",
  },
  {
    num: "07",
    icon: "bi-calendar-check",
    titleKey: "leg-ord-step-7-title",
    descKey: "leg-ord-step-7-desc",
  },
  {
    num: "08",
    icon: "bi-send",
    titleKey: "leg-ord-step-8-title",
    descKey: "leg-ord-step-8-desc",
  },
  {
    num: "09",
    icon: "bi-hourglass-split",
    titleKey: "leg-ord-step-9-title",
    descKey: "leg-ord-step-9-desc",
  },
  {
    num: "10",
    icon: "bi-megaphone",
    titleKey: "leg-ord-step-10-title",
    descKey: "leg-ord-step-10-desc",
  },
  {
    num: "11",
    icon: "bi-rocket-takeoff",
    titleKey: "leg-ord-step-11-title",
    descKey: "leg-ord-step-11-desc",
    final: true,
  },
];

const resolutionSteps: FlowStep[] = [
  {
    num: "01",
    icon: "bi-file-earmark-plus",
    titleKey: "leg-res-step-1-title",
    descKey: "leg-res-step-1-desc",
  },
  {
    num: "02",
    icon: "bi-calendar-event",
    titleKey: "leg-res-step-2-title",
    descKey: "leg-res-step-2-desc",
  },
  {
    num: "03",
    icon: "bi-people-fill",
    titleKey: "leg-res-step-3-title",
    descKey: "leg-res-step-3-desc",
  },
  {
    num: "04",
    icon: "bi-printer",
    titleKey: "leg-res-step-4-title",
    descKey: "leg-res-step-4-desc",
  },
  {
    num: "05",
    icon: "bi-pen",
    titleKey: "leg-res-step-5-title",
    descKey: "leg-res-step-5-desc",
  },
  {
    num: "06",
    icon: "bi-send-check",
    titleKey: "leg-res-step-6-title",
    descKey: "leg-res-step-6-desc",
    final: true,
  },
];

function FlowSteps({ steps }: { steps: FlowStep[] }) {
  const { t } = useLanguage();

  return (
    <div className="leg-flow-container">
      {steps.map((step) => (
        <div
          key={step.num}
          className={`leg-flow-step ${step.final ? "leg-flow-final" : ""}`}
        >
          <div
            className={`leg-flow-card ${step.final ? "leg-flow-card-final" : ""}`}
          >
            <div className="leg-flow-number">{step.num}</div>
            <div className="leg-flow-icon">
              <i className={`bi ${step.icon}`}></i>
            </div>
            <h4>{t(step.titleKey)}</h4>
            <p>{t(step.descKey)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function LegislativePage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("ordinances");

  return (
    <>
      <link rel="stylesheet" href="/assets/css/legislative.css" />

      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label={t("leg-breadcrumb-aria")}>
          <Link href="/">{t("nav-home")}</Link>
          <span>/</span>
          <span aria-current="page">{t("nav-legislative")}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="leg-hero">
        <div className="container">
          <div className="leg-hero-content">
            <span className="leg-hero-badge">
              <i className="bi bi-bank2"></i> {t("footer-sangguniang-bayan")}
            </span>
            <h1>{t("leg-title")}</h1>
            <p>
              {t("leg-subtitle", {
                municipality: siteConfig.municipalityName,
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Document Categories */}
      <section className="leg-categories">
        <div className="container">
          <div className="leg-categories-grid">
            <Link
              href="/legislative/ordinance-framework"
              className="leg-category-card"
            >
              <div className="leg-category-icon">
                <i className="bi bi-journal-bookmark-fill"></i>
              </div>
              <div className="leg-category-content">
                <h2>{t("leg-ordinance-framework")}</h2>
                <p>{t("leg-ordinance-framework-desc")}</p>
                <span className="leg-category-link">
                  {t("leg-browse-ordinances")}{" "}
                  <i className="bi bi-arrow-right"></i>
                </span>
              </div>
            </Link>
            <Link
              href="/legislative/resolution-framework"
              className="leg-category-card"
            >
              <div className="leg-category-icon">
                <i className="bi bi-file-earmark-ruled-fill"></i>
              </div>
              <div className="leg-category-content">
                <h2>{t("leg-resolution-framework")}</h2>
                <p>{t("leg-resolution-framework-desc")}</p>
                <span className="leg-category-link">
                  {t("leg-browse-resolutions")}{" "}
                  <i className="bi bi-arrow-right"></i>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Legislative Process Flowchart Section */}
      <section className="leg-process">
        <div className="container">
          <div className="leg-process-header">
            <span className="leg-info-tag">
              <i className="bi bi-diagram-3-fill"></i> {t("leg-process-flow")}
            </span>
            <h2>{t("leg-flow-title")}</h2>
            <p>{t("leg-flow-desc")}</p>
          </div>

          {/* Process Tabs */}
          <div className="leg-process-tabs">
            <button
              type="button"
              className={`leg-tab-btn ${activeTab === "ordinances" ? "active" : ""}`}
              onClick={() => setActiveTab("ordinances")}
            >
              <i className="bi bi-journal-bookmark-fill"></i>
              <span>{t("leg-tab-ordinances")}</span>
              <small>{t("leg-steps", { count: ordinanceSteps.length })}</small>
            </button>
            <button
              type="button"
              className={`leg-tab-btn ${activeTab === "resolutions" ? "active" : ""}`}
              onClick={() => setActiveTab("resolutions")}
            >
              <i className="bi bi-file-earmark-ruled-fill"></i>
              <span>{t("leg-tab-resolutions")}</span>
              <small>{t("leg-steps", { count: resolutionSteps.length })}</small>
            </button>
          </div>

          {/* Ordinances Process Flow */}
          {activeTab === "ordinances" && <FlowSteps steps={ordinanceSteps} />}

          {/* Resolutions Process Flow */}
          {activeTab === "resolutions" && <FlowSteps steps={resolutionSteps} />}
        </div>
      </section>

      {/* Info Section */}
      <section className="leg-info">
        <div className="container">
          <div className="leg-info-content">
            <div className="leg-info-header">
              <span className="leg-info-tag">
                <i className="bi bi-info-circle-fill"></i> {t("leg-about")}
              </span>
              <h2>{t("leg-understanding-title")}</h2>
              <p>{t("leg-understanding-desc")}</p>
            </div>
            <div className="leg-info-cards">
              <div className="leg-info-card">
                <div className="leg-info-card-icon">
                  <i className="bi bi-journal-bookmark"></i>
                </div>
                <h3>{t("legislative-ordinances")}</h3>
                <p>{t("leg-info-ordinances-desc")}</p>
              </div>
              <div className="leg-info-card">
                <div className="leg-info-card-icon">
                  <i className="bi bi-file-earmark-text"></i>
                </div>
                <h3>{t("legislative-resolutions")}</h3>
                <p>{t("leg-info-resolutions-desc")}</p>
              </div>
              <div className="leg-info-card">
                <div className="leg-info-card-icon">
                  <i className="bi bi-people"></i>
                </div>
                <h3>{t("leg-info-participation")}</h3>
                <p>{t("leg-info-participation-desc")}</p>
              </div>
              <div className="leg-info-card">
                <div className="leg-info-card-icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <h3>{t("leg-info-transparency")}</h3>
                <p>{t("leg-info-transparency-desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
