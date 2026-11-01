"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import {
  LEGISLATIVE_DATA_AS_OF,
  type LegislativeKind,
  legislativeRecords,
} from "@/data/legislativeRecords";
import { siteConfig } from "@/data/site.config";

const TERMS = {
  ordinance: {
    headingKey: "leg-records-ordinances-heading",
    termKey: "leg-records-ordinances-term",
  },
  resolution: {
    headingKey: "leg-records-resolutions-heading",
    termKey: "leg-records-resolutions-term",
  },
} as const;

export function LegislativeRecords({ kind }: { kind: LegislativeKind }) {
  const { t } = useLanguage();
  const records = legislativeRecords.filter((record) => record.kind === kind);
  const heading = t(TERMS[kind].headingKey);
  const term = t(TERMS[kind].termKey);
  const municipality = siteConfig.municipalityName;

  return (
    <div className="container">
      <div
        className="text-center"
        style={{ marginBottom: "var(--spacing-md)" }}
      >
        <h2 style={{ fontSize: "1.5rem", marginBottom: "var(--spacing-xs)" }}>
          {heading}
        </h2>
        <p style={{ color: "var(--color-text-light)", fontSize: "0.875rem" }}>
          {records.length > 0
            ? t("leg-records-count", { count: records.length, term })
            : t("leg-records-empty", { term, municipality })}
        </p>
      </div>

      {records.length === 0 ? (
        <div className="info-card">
          <div className="info-card-icon">
            <i className="bi bi-inbox"></i>
          </div>
          <div className="info-card-content">
            <h3>{t("leg-empty-why")}</h3>
            <p>
              {t("leg-empty-p1", {
                office: siteConfig.municipality.officialName,
                term,
                municipality,
              })}
            </p>
            <p>{t("leg-empty-p2")}</p>
            <p>{t("leg-empty-p3")}</p>
          </div>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th scope="col">{t("leg-col-number")}</th>
                <th scope="col">{t("leg-col-title")}</th>
                <th scope="col">{t("leg-col-subject")}</th>
                <th scope="col">{t("leg-col-year")}</th>
                <th scope="col">{t("leg-col-status")}</th>
                <th scope="col">{t("leg-col-source")}</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id}>
                  <td>
                    <strong>{record.number}</strong>
                  </td>
                  <td>{record.title}</td>
                  <td>{record.subject}</td>
                  <td>{record.year}</td>
                  <td>
                    <span>{record.status}</span>
                    {record.statusNote && (
                      <span
                        style={{
                          display: "block",
                          fontSize: "0.75rem",
                          color: "var(--color-text-light)",
                          marginTop: "4px",
                        }}
                      >
                        {record.statusNote}
                      </span>
                    )}
                  </td>
                  <td>
                    <a
                      href={record.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {record.sourceName}{" "}
                      <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="data-source" style={{ marginTop: "var(--spacing-md)" }}>
        <i className="bi bi-info-circle"></i>{" "}
        {t("leg-source-note", { date: LEGISLATIVE_DATA_AS_OF })} &middot;{" "}
        <a
          href={siteConfig.links.transparencySeal}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("leg-source-transparency")}
        </a>{" "}
        &middot;{" "}
        <a
          href={siteConfig.links.ordinances}
          target="_blank"
          rel="noopener noreferrer"
        >
          ordinances.ph
        </a>
      </p>
    </div>
  );
}
