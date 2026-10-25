"use client";

import type { ReactNode } from "react";

interface TimelineItem {
  year: string;
  content: ReactNode;
}

const timeline: TimelineItem[] = [
  {
    year: "1578",
    content: (
      <>
        Bagac was founded by the <strong>Franciscan Fathers</strong> and formed
        part of the Corregimiento de Mariveles before Bataan became a province.
      </>
    ),
  },
  {
    year: "1754",
    content: (
      <>
        Bataan was created as a province, and Bagac was placed under its
        jurisdiction.
      </>
    ),
  },
  {
    year: "1896",
    content: (
      <>
        Local insurrectos led by <strong>Jose Noriega</strong> rose against
        Spanish rule, joined by Juan Bantay, Ildefonso Lucas Gonzales, and other
        Bagac natives.
      </>
    ),
  },
  {
    year: "1900",
    content: (
      <>
        <strong>Manuel L. Quezon</strong>, then a major, married a Bagac maiden
        under Katipunan rites at the home of Florentina Banzon Gutierrez.
      </>
    ),
  },
  {
    year: "1942",
    content: (
      <>
        The 25-kilometer <strong>Bagac–Pilar defense line</strong> held until
        the fall of Bataan. Bagac then became one of the starting points of the
        Bataan Death March.
      </>
    ),
  },
  {
    year: "1975",
    content: (
      <>
        The <strong>Bagac Friendship Tower</strong> was inaugurated on April 8,
        1975, near the point where the Death March began.
      </>
    ),
  },
  {
    year: "2023",
    content: (
      <>
        Bagac placed <strong>first nationwide</strong> in the FY 2023 Seal of
        Good Local Governance Incentive Fund (SGLGIF).
      </>
    ),
  },
];

export default function History() {
  return (
    <section className="section history-section">
      <div className="container">
        <div className="home-stats-v2-header">
          <h2>
            <i className="bi bi-book" aria-hidden="true" /> Brief History of
            Bagac
          </h2>
        </div>
        <div className="history-content">
          <div className="history-timeline">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="timeline-item"
                data-year={item.year}
              >
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <p>{item.content}</p>
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
                <h4>Largest in Bataan</h4>
                <p>
                  With a land area of 231.20 square kilometers, Bagac is the
                  largest municipality in the province by territory.
                </p>
              </div>
            </div>
            <div className="history-card">
              <div className="history-card-icon">
                <i className="bi bi-signpost-split"></i>
              </div>
              <div className="history-card-content">
                <h4>Zero Kilometer</h4>
                <p>
                  A marker and zero kilometer post now stand where the Bataan
                  Death March began in Bagac during World War II.
                </p>
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
        .history-timeline::before { content: ''; position: absolute; left: 6px; top: 8px; bottom: 8px; width: 2px; background: linear-gradient(180deg, var(--color-primary) 0%, rgba(0,50,160,0.2) 100%); border-radius: 2px; }
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
        .timeline-content { background: var(--color-bg); border: 1px solid rgba(0,0,0,0.06); border-radius: 10px; padding: 16px 18px; transition: all 0.3s ease; }
        .timeline-item:hover .timeline-content { border-color: var(--color-primary); box-shadow: 0 4px 16px rgba(0,50,160,0.1); transform: translateX(4px); }
        .timeline-year { display: inline-block; background: var(--color-primary); color: white; font-size: 0.75rem; font-weight: 700; padding: 3px 10px; border-radius: 20px; margin-bottom: 8px; }
        .timeline-content p { font-size: 0.875rem; color: var(--color-text); margin: 0; line-height: 1.6; }
        .timeline-content p strong { color: var(--color-primary); }
        .timeline-content p em { font-style: italic; color: var(--color-text-light); }
        .history-summary { display: flex; flex-direction: column; gap: 16px; position: sticky; top: 100px; }
        .history-card { background: var(--color-bg); border: 1px solid rgba(0,0,0,0.06); border-radius: 12px; padding: 20px; display: flex; gap: 14px; align-items: flex-start; transition: all 0.3s ease; }
        .history-card:hover { border-color: var(--color-primary); box-shadow: 0 4px 16px rgba(0,50,160,0.1); transform: translateY(-2px); }
        .history-card-icon { width: 44px; height: 44px; background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%); border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
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
