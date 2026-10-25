import Link from "next/link";

export const metadata = {
  title: "Government Officials & Structure",
  description: "Meet the leadership and offices serving Bagac, Bataan",
};

export default function GovernmentPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span aria-current="page">Government</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge">
              <i className="bi bi-building-fill"></i> Government
            </span>
            <h1>Government Structure &amp; Officials</h1>
            <p className="page-header-desc">
              Meet the leadership and offices serving Bagac
            </p>
          </div>
        </div>
      </section>

      {/* Executive Branch */}
      <section
        className="section"
        style={{ background: "var(--color-bg-alt)" }}
      >
        <div className="container">
          <div
            className="text-center"
            style={{ marginBottom: "var(--spacing-xl)" }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background:
                  "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
                color: "white",
                padding: "8px 20px",
                borderRadius: "50px",
                fontSize: "0.875rem",
                marginBottom: "var(--spacing-sm)",
              }}
            >
              <i className="bi bi-star-fill"></i> Executive Branch
            </span>
            <h3
              style={{ fontSize: "1.75rem", marginBottom: "var(--spacing-xs)" }}
            >
              Municipal Leadership
            </h3>
            <p style={{ color: "var(--color-text-light)" }}>
              The executive officials leading Bagac&apos;s governance
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: "var(--spacing-lg)" }}>
            <div className="executive-card">
              <div className="executive-card-header">
                <span className="executive-badge">Municipal Mayor</span>
                <h4 className="executive-name">
                  Hon. Ron Michael Alexis R. Del Rosario
                </h4>
              </div>
              <div className="executive-card-body">
                <div className="executive-contacts">
                  <a href="mailto:ronmichaelalexisdelrosario@gmail.com">
                    <i className="bi bi-envelope"></i>{" "}
                    ronmichaelalexisdelrosario@gmail.com
                  </a>
                  <a href="tel:09608848515">
                    <i className="bi bi-telephone"></i> 0960 884 8515
                  </a>
                  <span>
                    <i className="bi bi-clock"></i> Mon-Fri: 8:00 AM - 5:00 PM
                  </span>
                </div>
              </div>
            </div>

            <div className="executive-card">
              <div className="executive-card-header">
                <span className="executive-badge">Municipal Vice Mayor</span>
                <h4 className="executive-name">Hon. Rommel V. Del Rosario</h4>
              </div>
              <div className="executive-card-body">
                <div className="executive-contacts">
                  <a href="https://bagac.gov.ph/the-sanguniang-bayan/">
                    <i className="bi bi-globe2"></i> Sangguniang Bayan
                  </a>
                  <a href="tel:0476120424">
                    <i className="bi bi-telephone"></i> (047) 612-0424
                  </a>
                  <span>
                    <i className="bi bi-clock"></i> Mon-Fri: 8:00 AM - 5:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Municipal Council */}
      <section className="section">
        <div className="container">
          <div
            className="text-center"
            style={{ marginBottom: "var(--spacing-xl)" }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background:
                  "linear-gradient(135deg, var(--color-success) 0%, #05c793 100%)",
                color: "white",
                padding: "8px 20px",
                borderRadius: "50px",
                fontSize: "0.875rem",
                marginBottom: "var(--spacing-sm)",
              }}
            >
              <i className="bi bi-people-fill"></i> Legislative Branch
            </span>
            <h3
              style={{ fontSize: "1.75rem", marginBottom: "var(--spacing-xs)" }}
            >
              Sangguniang Bayan Members
            </h3>
            <p style={{ color: "var(--color-text-light)" }}>
              Municipal Councilors serving the people of Bagac
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: "var(--spacing-md)" }}>
            <div className="councilor-card">
              <h4 className="councilor-name">Hon. Alex J. Bantugan</h4>
              <span className="councilor-badge">SB Member</span>
              <p className="councilor-committees">Women and Family</p>
            </div>
            <div className="councilor-card">
              <h4 className="councilor-name">Hon. John Harry R. Carreon</h4>
              <span className="councilor-badge">SB Member</span>
              <p className="councilor-committees">
                Finance, Budget, Appropriation, and Ways and Means; Tourism;
                Community Development
              </p>
            </div>
            <div className="councilor-card">
              <h4 className="councilor-name">Hon. Larry G. Bantugan</h4>
              <span className="councilor-badge">SB Member</span>
              <p className="councilor-committees">
                Rules and Ethics; Agriculture, Food and Fisheries; Local
                Enterprise
              </p>
            </div>
            <div className="councilor-card">
              <h4 className="councilor-name">Hon. Neil Patrick R. Dela Rosa</h4>
              <span className="councilor-badge">SB Member</span>
              <p className="councilor-committees">
                Education and Culture; Social Welfare and Development; Senior
                Citizens and Veterans Affairs
              </p>
            </div>
            <div className="councilor-card">
              <h4 className="councilor-name">Hon. Ricardo R. Canta</h4>
              <span className="councilor-badge">SB Member</span>
              <p className="councilor-committees">
                Environmental Protection and Natural Resources; Public
                Utilities; Cooperatives; Games and Amusement
              </p>
            </div>
            <div className="councilor-card">
              <h4 className="councilor-name">Hon. Guillermo C. Mendoza Jr.</h4>
              <span className="councilor-badge">SB Member</span>
              <p className="councilor-committees">
                Human Rights, Justice and Legal Matters; Peace and Order and
                Public Safety; Housing and Land Use
              </p>
            </div>
            <div className="councilor-card">
              <h4 className="councilor-name">Hon. Felix R. Tutol Jr.</h4>
              <span className="councilor-badge">SB Member</span>
              <p className="councilor-committees">
                Good Government, Public Ethics and Accountability; Labor,
                Manpower, Employment, and Government
              </p>
            </div>
            <div className="councilor-card">
              <h4 className="councilor-name">Hon. Jorge Xy-Ril R. Teopengco</h4>
              <span className="councilor-badge">SB Member</span>
              <p className="councilor-committees">
                Trade, Commerce, and Industry; Infrastructure
              </p>
            </div>
            <div className="councilor-card">
              <h4 className="councilor-name">Hon. Jason M. Narazeno</h4>
              <span className="councilor-badge">SB Member</span>
              <p className="councilor-committees">Barangay Affairs</p>
            </div>
            <div className="councilor-card">
              <h4 className="councilor-name">Hon. Anthony B. Sy</h4>
              <span className="councilor-badge">SB Member</span>
              <p className="councilor-committees">
                Indigenous Cultural Communities
              </p>
            </div>
            <div className="councilor-card councilor-card--sk">
              <h4 className="councilor-name">Hon. Erwin P. Sales</h4>
              <span className="councilor-badge councilor-badge--sk">
                SK Federation President
              </span>
              <p className="councilor-committees">
                Youth and Sports Development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Barangays */}
      <section className="section">
        <div className="container">
          <div
            className="text-center"
            style={{ marginBottom: "var(--spacing-xl)" }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background:
                  "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
                color: "white",
                padding: "8px 20px",
                borderRadius: "50px",
                fontSize: "0.875rem",
                marginBottom: "var(--spacing-sm)",
              }}
            >
              <i className="bi bi-geo-alt-fill"></i> Barangay Units
            </span>
            <h3
              style={{ fontSize: "1.75rem", marginBottom: "var(--spacing-xs)" }}
            >
              Barangays of Bagac
            </h3>
            <p style={{ color: "var(--color-text-light)" }}>
              14 barangays serving our community
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: "var(--spacing-sm)" }}>
            {[
              {
                name: "Atilano L. Ricardo",
                captain: "Eliver M. Seramines",
              },
              {
                name: "Bagumbayan",
                captain: "Ronal R. Llait",
                phone: "0910 617 6627",
              },
              {
                name: "Banawang",
                captain: "Menandro R. Trinidad",
                phone: "0919 388 1929",
              },
              { name: "Binuangan", captain: "Ruben P. Ilao" },
              { name: "Binukawan", captain: "Jessie B. Belanio" },
              { name: "Ibaba", captain: "Allan F. Villanueva" },
              { name: "Ibis", captain: "Adrian Sunga" },
              { name: "Pag-asa", captain: "Ahris M. Sunga" },
              { name: "Parang", captain: "Leovigildo Dela Rosa" },
              { name: "Paysawan", captain: "German L. Pega Sr." },
              {
                name: "Quinawan",
                captain: "Raymond C. Laguna",
                phone: "0950 848 1839",
              },
              { name: "San Antonio", captain: "Reynold Umandap" },
              { name: "Saysain", captain: "Rolando P. Tabale" },
              {
                name: "Tabing-Ilog",
                captain: "Renan M. Torres",
                phone: "0977 754 9134",
              },
            ].map((brgy) => {
              const content = (
                <>
                  <div className="barangay-card-header">
                    <i className="bi bi-geo-alt-fill"></i>
                    <span className="barangay-name">{brgy.name}</span>
                  </div>
                  <div className="barangay-card-body">
                    <span className="barangay-captain">{brgy.captain}</span>
                    {brgy.phone ? (
                      <span className="barangay-contact">
                        <i className="bi bi-telephone"></i> {brgy.phone}
                      </span>
                    ) : (
                      <span className="barangay-contact">
                        <i className="bi bi-building"></i> Municipal Hall
                      </span>
                    )}
                  </div>
                </>
              );

              return brgy.phone ? (
                <a
                  key={brgy.name}
                  href={`tel:${brgy.phone.replace(/\s/g, "")}`}
                  className="barangay-card"
                >
                  {content}
                </a>
              ) : (
                <div key={brgy.name} className="barangay-card">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
