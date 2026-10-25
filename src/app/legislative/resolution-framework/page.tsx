import Link from "next/link";
import { LegislativeRecords } from "@/components/legislative/LegislativeRecords";

export const metadata = {
  title: "Resolution Framework | BetterBagac.org",
  description:
    "Browse resolutions passed by the Sangguniang Bayan of Bagac, Bataan.",
};

export default function ResolutionFrameworkPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/legislative">Legislative</Link>
          <span>/</span>
          <span aria-current="page">Resolution Framework</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge">
              <i className="bi bi-file-earmark-text"></i> Legislative
            </span>
            <h1>Resolution Framework</h1>
            <p className="page-header-desc">
              Resolutions passed by the Sangguniang Bayan ng Bagac
            </p>
          </div>
        </div>
      </section>

      {/* About Resolutions */}
      <section className="section">
        <div className="container">
          <div className="info-card">
            <div className="info-card-icon">
              <i className="bi bi-info-circle"></i>
            </div>
            <div className="info-card-content">
              <h3>What is a Resolution?</h3>
              <p>
                A resolution is a formal expression of the opinion or will of
                the Sangguniang Bayan. Unlike ordinances, resolutions do not
                have the force and effect of law but serve as official
                statements of the legislative body.
              </p>
              <p>
                Resolutions are commonly used for: commendations, requests to
                higher government agencies, expressions of support or
                opposition, and administrative matters of the Sangguniang Bayan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified records */}
      <section
        className="section"
        style={{ background: "var(--color-bg-alt)" }}
      >
        <LegislativeRecords kind="resolution" />
      </section>

      {/* Official records */}
      <section className="section">
        <div className="container">
          <div className="info-card">
            <div className="info-card-icon">
              <i className="bi bi-file-earmark-check"></i>
            </div>
            <div className="info-card-content">
              <h3>Where to find passed resolutions</h3>
              <p>
                Copies of resolutions are available from the Sangguniang Bayan
                Secretariat at the Bagac Municipal Hall during office hours.
                Requests may be made in person, in writing, or through the
                national Freedom of Information portal.
              </p>
              <p>
                This portal does not reproduce resolution text. Where a number
                and title are confirmed by a published source they appear in the
                list above; the full text and the complete register are still
                issued by the Secretariat.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
              marginTop: "var(--spacing-lg)",
            }}
          >
            <a
              href="https://bagac.gov.ph/the-sanguniang-bayan/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="bi bi-box-arrow-up-right"></i> Visit the Sangguniang
              Bayan
            </a>
            <a
              href="https://bagac.gov.ph/transparency-seal/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <i className="bi bi-shield-check"></i> Transparency Seal
            </a>
            <a
              href="https://www.foi.gov.ph/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <i className="bi bi-envelope-paper"></i> Request via FOI
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
