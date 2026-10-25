import {
  LEGISLATIVE_DATA_AS_OF,
  type LegislativeKind,
  legislativeRecords,
} from "@/data/legislativeRecords";

const TERMS = {
  ordinance: {
    plural: "ordinances",
    singular: "ordinance",
    heading: "Ordinances on record",
  },
  resolution: {
    plural: "resolutions",
    singular: "resolution",
    heading: "Resolutions on record",
  },
} as const;

export function LegislativeRecords({ kind }: { kind: LegislativeKind }) {
  const records = legislativeRecords.filter((record) => record.kind === kind);
  const term = TERMS[kind];

  return (
    <div className="container">
      <div
        className="text-center"
        style={{ marginBottom: "var(--spacing-md)" }}
      >
        <h2 style={{ fontSize: "1.5rem", marginBottom: "var(--spacing-xs)" }}>
          {term.heading}
        </h2>
        <p style={{ color: "var(--color-text-light)", fontSize: "0.875rem" }}>
          {records.length > 0
            ? `${records.length} verified ${term.plural} confirmed from published sources`
            : `No ${term.plural} of the Sangguniang Bayan ng Bagac are published online yet`}
        </p>
      </div>

      {records.length === 0 ? (
        <div className="info-card">
          <div className="info-card-icon">
            <i className="bi bi-inbox"></i>
          </div>
          <div className="info-card-content">
            <h3>Why this list is empty</h3>
            <p>
              The Municipality of Bagac does not post its {term.plural} in any
              publicly readable form. The LGU transparency page lists
              &ldquo;Ordinances&rdquo; under Annual Reports without any attached
              document, the Sangguniang Bayan page only lists members and
              committees, and the national ordinance repositories have no Bagac
              entries.
            </p>
            <p>
              Sangguniang Bayan resolutions still exist — they are routinely
              issued for commendations, requests to national agencies,
              endorsements, condolences, and authorizations — but none are
              published online.
            </p>
            <p>
              This page will be updated as soon as the Sangguniang Bayan
              Secretariat publishes an official register. In the meantime,
              certified copies can be requested directly from the Secretariat.
            </p>
          </div>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th scope="col">Number</th>
                <th scope="col">Title</th>
                <th scope="col">Subject</th>
                <th scope="col">Year</th>
                <th scope="col">Status</th>
                <th scope="col">Source</th>
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
        <i className="bi bi-info-circle"></i> Only measures confirmed by a
        published source are listed. Sources checked {LEGISLATIVE_DATA_AS_OF}{" "}
        &middot;{" "}
        <a
          href="https://bagac.gov.ph/transparency-seal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LGU transparency page
        </a>{" "}
        &middot;{" "}
        <a
          href="https://ordinances.ph/search"
          target="_blank"
          rel="noopener noreferrer"
        >
          ordinances.ph
        </a>
      </p>
    </div>
  );
}
