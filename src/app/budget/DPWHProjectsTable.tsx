"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import dpwhSource from "@/data/dpwh-projects.json";

type StatusLabel = "Completed" | "Ongoing" | "For Procurement";

type Project = {
  id: string;
  name: string;
  location: string;
  category: string;
  contractor: string;
  cost: number;
  status: number;
  statusLabel: StatusLabel;
  date: string | null;
  year: number;
};

type Summary = {
  totalProjects: number;
  totalCost: number;
  completedProjects: number;
  ongoingProjects: number;
  forProcurementProjects: number;
  implementingAgency: string;
  source: string;
  asOf: string;
};

const data = dpwhSource as unknown as {
  summary: Summary;
  projects: Project[];
};

type FilterType = "all" | "roads" | "bridges" | "buildings" | "flood" | "water";

const FILTERS: { key: FilterType; labelKey: string }[] = [
  { key: "all", labelKey: "budget-filter-all" },
  { key: "roads", labelKey: "budget-filter-roads" },
  { key: "bridges", labelKey: "budget-filter-bridges" },
  { key: "buildings", labelKey: "budget-filter-buildings" },
  { key: "flood", labelKey: "budget-filter-flood" },
  { key: "water", labelKey: "budget-filter-water" },
];

const matchesFilter = (project: Project, filter: FilterType) => {
  switch (filter) {
    case "all":
      return true;
    case "roads":
      return project.category === "Roads";
    case "bridges":
      return project.category === "Bridges";
    case "buildings":
      return project.category === "Buildings and Facilities";
    case "flood":
      return project.category === "Flood Control and Drainage";
    case "water":
      return project.category === "Water Supply";
    default:
      return true;
  }
};

const CATEGORY_CLASS: Record<string, string> = {
  Roads: "roads",
  Bridges: "bridges",
  "Buildings and Facilities": "buildings",
  "Flood Control and Drainage": "flood",
  "Water Supply": "water",
};

const CATEGORY_LABEL_KEY: Record<string, string> = {
  Roads: "budget-filter-roads",
  Bridges: "budget-filter-bridges",
  "Buildings and Facilities": "budget-filter-buildings",
  "Flood Control and Drainage": "budget-filter-flood",
  "Water Supply": "budget-filter-water",
};

const PAGE_SIZE = 8;

const COUNTS = FILTERS.reduce(
  (totals, { key }) => {
    totals[key] = data.projects.filter((project) =>
      matchesFilter(project, key),
    ).length;
    return totals;
  },
  {} as Record<FilterType, number>,
);

const formatCurrency = (amount: number) =>
  amount === 0
    ? "—"
    : "₱" +
      amount.toLocaleString("en-PH", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

const formatCompactPeso = (amount: number) =>
  amount >= 1_000_000_000
    ? `₱${(amount / 1_000_000_000).toFixed(2)}B`
    : `₱${(amount / 1_000_000).toFixed(1)}M`;

const formatDate = (dateStr: string | null, locale: string) => {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const splitContractor = (contractor: string) => {
  const match = contractor.match(/^(.*)\s\((\d+)\)$/);
  return match
    ? { name: match[1], id: match[2] }
    : { name: contractor, id: null };
};

export function DPWHProjectsTable() {
  const { t, language } = useLanguage();
  const locale = language === "fil" ? "fil-PH" : "en-PH";
  const [filter, setFilter] = useState<FilterType>("all");
  const [showAll, setShowAll] = useState(false);

  const projects = data.projects;
  const filteredProjects = projects.filter((project) =>
    matchesFilter(project, filter),
  );

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, PAGE_SIZE);

  return (
    <div className="dpwh-section">
      {/* Summary Bar */}
      <div className="dpwh-summary-bar">
        <div className="dpwh-summary-item">
          <span className="dpwh-summary-value">
            {data.summary.totalProjects}
          </span>
          <span className="dpwh-summary-label">
            {t("budget-summary-projects")}
          </span>
        </div>
        <div className="dpwh-summary-item">
          <span className="dpwh-summary-value">
            {formatCompactPeso(data.summary.totalCost)}
          </span>
          <span className="dpwh-summary-label">
            {t("budget-summary-investment")}
          </span>
        </div>
        <div className="dpwh-summary-item">
          <span className="dpwh-summary-value">
            {data.summary.completedProjects}
          </span>
          <span className="dpwh-summary-label">
            {t("budget-summary-completed")}
          </span>
        </div>
        <div className="dpwh-summary-item">
          <span className="dpwh-summary-value">
            {data.summary.ongoingProjects}
          </span>
          <span className="dpwh-summary-label">
            {t("budget-summary-ongoing")}
          </span>
        </div>
        <div className="dpwh-summary-item">
          <span className="dpwh-summary-value">
            {data.summary.forProcurementProjects}
          </span>
          <span className="dpwh-summary-label">
            {t("budget-summary-procurement")}
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="dpwh-controls">
        <div className="dpwh-filter-group" role="tablist">
          {FILTERS.map(({ key, labelKey }) => (
            <button
              key={key}
              type="button"
              className={`dpwh-tab ${filter === key ? "active" : ""}`}
              onClick={() => {
                setFilter(key);
                setShowAll(false);
              }}
              role="tab"
              aria-selected={filter === key}
            >
              {t(labelKey)}
              <span className="dpwh-tab-count">{COUNTS[key]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Table */}
      <div className="dpwh-table-wrap">
        <table className="dpwh-table">
          <thead>
            <tr>
              <th scope="col" className="col-desc">
                {t("budget-th-description")}
              </th>
              <th scope="col" className="col-contractor">
                {t("budget-th-contractor")}
              </th>
              <th scope="col" className="col-cost">
                {t("budget-th-cost")}
              </th>
              <th scope="col" className="col-status">
                {t("budget-th-status")}
              </th>
              <th scope="col" className="col-date">
                {t("budget-th-completed")}
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedProjects.map((p) => {
              const contractor = splitContractor(p.contractor);
              return (
                <tr key={p.id} className="dpwh-row">
                  <td className="col-desc">
                    <div className="dpwh-desc-wrap">
                      <span className="dpwh-proj-id">{p.id}</span>
                      <span
                        className={`dpwh-cat-badge ${CATEGORY_CLASS[p.category] ?? "buildings"}`}
                      >
                        {t(CATEGORY_LABEL_KEY[p.category] ?? p.category)}
                      </span>
                    </div>
                    <span className="dpwh-proj-title" title={p.name}>
                      {p.name}
                    </span>
                    <span className="dpwh-proj-location">
                      <i className="bi bi-geo-alt"></i> {p.location}
                    </span>
                  </td>
                  <td className="col-contractor">
                    <span className="dpwh-contractor">{contractor.name}</span>
                    {contractor.id && (
                      <span className="dpwh-contractor-id">
                        {t("budget-contractor-id", { id: contractor.id })}
                      </span>
                    )}
                  </td>
                  <td className="col-cost">{formatCurrency(p.cost)}</td>
                  <td className="col-status">
                    {p.statusLabel === "Completed" && (
                      <span className="dpwh-badge complete">
                        {t("budget-summary-completed")}
                      </span>
                    )}
                    {p.statusLabel === "Ongoing" && (
                      <span className="dpwh-badge ongoing">{p.status}%</span>
                    )}
                    {p.statusLabel === "For Procurement" && (
                      <span className="dpwh-badge procurement">
                        {t("budget-badge-bidding")}
                      </span>
                    )}
                  </td>
                  <td className="col-date">{formatDate(p.date, locale)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Load More */}
      {filteredProjects.length > PAGE_SIZE && !showAll && (
        <div className="dpwh-load-more">
          <button
            type="button"
            className="dpwh-load-btn"
            onClick={() => setShowAll(true)}
          >
            {t("budget-load-more")}{" "}
            <span className="dpwh-remaining">
              {t("budget-load-more-remaining", {
                count: filteredProjects.length - PAGE_SIZE,
              })}
            </span>
          </button>
        </div>
      )}
      {showAll && (
        <div className="dpwh-load-more">
          <span className="dpwh-end-msg">
            {t("budget-showing-all", { count: filteredProjects.length })}
          </span>
        </div>
      )}

      <p className="dpwh-source-note">
        <i className="bi bi-info-circle"></i> {t("budget-source-label")}{" "}
        <a
          href="https://transparency.dpwh.gov.ph/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.summary.source}
        </a>{" "}
        {t("budget-source-implemented", {
          agency: data.summary.implementingAgency,
          date: data.summary.asOf,
        })}
      </p>
    </div>
  );
}
