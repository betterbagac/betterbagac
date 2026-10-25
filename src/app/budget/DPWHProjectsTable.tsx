"use client";

import { useState } from "react";
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

const FILTERS: { key: FilterType; label: string }[] = [
  { key: "all", label: "All" },
  { key: "roads", label: "Roads" },
  { key: "bridges", label: "Bridges" },
  { key: "buildings", label: "Buildings" },
  { key: "flood", label: "Flood Control" },
  { key: "water", label: "Water" },
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

const CATEGORY_LABEL: Record<string, string> = {
  Roads: "Roads",
  Bridges: "Bridges",
  "Buildings and Facilities": "Buildings",
  "Flood Control and Drainage": "Flood Control",
  "Water Supply": "Water",
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

const formatDate = (dateStr: string | null) => {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("en-PH", {
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
          <span className="dpwh-summary-label">Projects</span>
        </div>
        <div className="dpwh-summary-item">
          <span className="dpwh-summary-value">
            {formatCompactPeso(data.summary.totalCost)}
          </span>
          <span className="dpwh-summary-label">Total Investment</span>
        </div>
        <div className="dpwh-summary-item">
          <span className="dpwh-summary-value">
            {data.summary.completedProjects}
          </span>
          <span className="dpwh-summary-label">Completed</span>
        </div>
        <div className="dpwh-summary-item">
          <span className="dpwh-summary-value">
            {data.summary.ongoingProjects}
          </span>
          <span className="dpwh-summary-label">Ongoing</span>
        </div>
        <div className="dpwh-summary-item">
          <span className="dpwh-summary-value">
            {data.summary.forProcurementProjects}
          </span>
          <span className="dpwh-summary-label">For Procurement</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="dpwh-controls">
        <div className="dpwh-filter-group" role="tablist">
          {FILTERS.map(({ key, label }) => (
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
              {label}
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
                Contract Description
              </th>
              <th scope="col" className="col-contractor">
                Contractor
              </th>
              <th scope="col" className="col-cost">
                Cost
              </th>
              <th scope="col" className="col-status">
                Status
              </th>
              <th scope="col" className="col-date">
                Completed
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
                        {CATEGORY_LABEL[p.category] ?? p.category}
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
                        Contractor ID: {contractor.id}
                      </span>
                    )}
                  </td>
                  <td className="col-cost">{formatCurrency(p.cost)}</td>
                  <td className="col-status">
                    {p.statusLabel === "Completed" && (
                      <span className="dpwh-badge complete">Completed</span>
                    )}
                    {p.statusLabel === "Ongoing" && (
                      <span className="dpwh-badge ongoing">{p.status}%</span>
                    )}
                    {p.statusLabel === "For Procurement" && (
                      <span className="dpwh-badge procurement">
                        For Bidding
                      </span>
                    )}
                  </td>
                  <td className="col-date">{formatDate(p.date)}</td>
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
            Load More{" "}
            <span className="dpwh-remaining">
              ({filteredProjects.length - PAGE_SIZE} remaining)
            </span>
          </button>
        </div>
      )}
      {showAll && (
        <div className="dpwh-load-more">
          <span className="dpwh-end-msg">
            Showing all {filteredProjects.length} projects
          </span>
        </div>
      )}

      <p className="dpwh-source-note">
        <i className="bi bi-info-circle"></i> Source:{" "}
        <a
          href="https://transparency.dpwh.gov.ph/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.summary.source}
        </a>{" "}
        · Implemented by the {data.summary.implementingAgency} · Retrieved{" "}
        {data.summary.asOf}
      </p>
    </div>
  );
}
