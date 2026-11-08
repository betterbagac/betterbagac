"use client";

import { Fragment, type ReactNode } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const EMPHASIS = /\*\*([^*]+)\*\*/g;

/** Renders `**...**` segments of a translated string as <strong>. */
function withEmphasis(text: string) {
  const nodes: ReactNode[] = [];
  const pattern = new RegExp(EMPHASIS.source, "g");
  let cursor = 0;
  let match = pattern.exec(text);

  while (match) {
    const start = match.index;
    if (start > cursor) {
      nodes.push(<Fragment key={cursor}>{text.slice(cursor, start)}</Fragment>);
    }
    nodes.push(<strong key={start}>{match[1]}</strong>);
    cursor = start + match[0].length;
    match = pattern.exec(text);
  }

  if (cursor < text.length) {
    nodes.push(<Fragment key={cursor}>{text.slice(cursor)}</Fragment>);
  }

  return nodes;
}

const timelineYears = ["1578", "1754", "1896", "1900", "1942", "1975", "2023"];

export default function History() {
  const { t } = useLanguage();

  return (
    <section className="section history-section">
      <div className="container">
        <div className="home-stats-v2-header">
          <h2>
            <i className="bi bi-book" aria-hidden="true" /> {t("history-title")}
          </h2>
        </div>
        <div className="history-content">
          <div className="history-timeline">
            {timelineYears.map((year) => (
              <div key={year} className="timeline-item" data-year={year}>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <span className="timeline-year">{year}</span>
                  <p>{withEmphasis(t(`history-${year}`))}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="history-summary">
            <div className="history-card">
              <div className="history-card-icon">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div className="history-card-content">
                <h4>{t("history-largest-title")}</h4>
                <p>{t("history-largest-desc")}</p>
              </div>
            </div>
            <div className="history-card">
              <div className="history-card-icon">
                <i className="bi bi-signpost-split"></i>
              </div>
              <div className="history-card-content">
                <h4>{t("history-zero-title")}</h4>
                <p>{t("history-zero-desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .history-section { background: linear-gradient(180deg, var(--color-bg-alt) 0%, var(--color-bg) 100%); }
        .history-section .home-stats-v2-header h2 { display: flex; align-items: center; gap: 10px; }
        .history-section .home-stats-v2-header h2 i { color: var(--color-primary); }
        .history-content { display: grid; grid-template-columns: 1fr 340px; gap: 32px; align-items: start; }
        .history-timeline { position: relative; padding-left: 28px; }
        .history-timeline::before { content: ''; position: absolute; left: 6px; top: 8px; bottom: 8px; width: 2px; background: linear-gradient(180deg, var(--color-primary) 0%, rgba(0,50,160,0.2) 100%); border-radius: var(--radius-chip); }
        .timeline-item { position: relative; padding-bottom: 20px; opacity: 0; animation: fadeInUp 0.5s ease forwards; }
        .timeline-item:nth-child(1) { animation-delay: 0.1s; }
        .timeline-item:nth-child(2) { animation-delay: 0.2s; }
        .timeline-item:nth-child(3) { animation-delay: 0.3s; }
        .timeline-item:nth-child(4) { animation-delay: 0.4s; }
        .timeline-item:nth-child(5) { animation-delay: 0.5s; }
        .timeline-item:nth-child(6) { animation-delay: 0.6s; }
        .timeline-item:nth-child(7) { animation-delay: 0.7s; }
        .timeline-item:last-child { padding-bottom: 0; }
        .timeline-marker { position: absolute; left: -28px; top: 4px; width: 14px; height: 14px; background: var(--color-bg); border: 3px solid var(--color-primary); border-radius: 50%; transition: all 0.3s ease; z-index: 1; }
        .timeline-item:hover .timeline-marker { background: var(--color-primary); transform: scale(1.2); box-shadow: 0 0 0 4px rgba(0,50,160,0.15); }
        .timeline-content { background: var(--color-bg); border: 1px solid rgba(0,0,0,0.06); border-radius: var(--radius-control); padding: 16px 18px; transition: all 0.3s ease; }
        .timeline-item:hover .timeline-content { border-color: var(--color-primary); box-shadow: 0 4px 16px rgba(0,50,160,0.1); transform: translateX(4px); }
        .timeline-year { display: inline-block; background: var(--color-primary); color: white; font-size: 0.75rem; font-weight: 700; padding: 3px 10px; border-radius: var(--radius-container); margin-bottom: 8px; }
        .timeline-content p { font-size: 0.875rem; color: var(--color-text); margin: 0; line-height: 1.6; }
        .timeline-content p strong { color: var(--color-primary); }
        .timeline-content p em { font-style: italic; color: var(--color-text-light); }
        .history-summary { display: flex; flex-direction: column; gap: 16px; position: sticky; top: 100px; }
        .history-card { background: var(--color-bg); border: 1px solid rgba(0,0,0,0.06); border-radius: var(--radius-container); padding: 20px; display: flex; gap: 14px; align-items: flex-start; transition: all 0.3s ease; }
        .history-card:hover { border-color: var(--color-primary); box-shadow: 0 4px 16px rgba(0,50,160,0.1); transform: translateY(-2px); }
        .history-card-icon { width: 44px; height: 44px; background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%); border-radius: var(--radius-control); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .history-card-icon i { color: white; font-size: 1.25rem; }
        .history-card-content h4 { font-size: 0.9375rem; font-weight: 600; color: var(--color-text); margin: 0 0 6px 0; }
        .history-card-content p { font-size: 0.8125rem; color: var(--color-text-light); margin: 0; line-height: 1.5; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 900px) { .history-content { grid-template-columns: 1fr; } .history-summary { position: static; flex-direction: row; flex-wrap: wrap; } .history-card { flex: 1 1 280px; } }
        @media (max-width: 575px) { .history-summary { flex-direction: column; } .history-card { flex: 1 1 100%; } }
      `}</style>
    </section>
  );
}
