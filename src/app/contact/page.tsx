"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span aria-current="page">Contact</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge">
              <i className="bi bi-envelope-fill"></i> Contact
            </span>
            <h1>Contact Us</h1>
            <p className="page-header-desc">
              We&apos;re here to help. Reach out to us through any of these
              channels.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3" style={{ gap: "var(--spacing-md)" }}>
            <a
              href="mailto:ronmichaelalexisdelrosario@gmail.com"
              className="contact-card"
            >
              <div className="contact-card-icon">
                <i className="bi bi-envelope-fill"></i>
              </div>
              <div className="contact-card-content">
                <h3>Email</h3>
                <p className="contact-card-value">
                  ronmichaelalexisdelrosario@gmail.com
                </p>
                <span className="contact-card-note">
                  We&apos;ll respond within 24 hours
                </span>
              </div>
            </a>
            <a href="tel:09608848515" className="contact-card">
              <div className="contact-card-icon">
                <i className="bi bi-phone-fill"></i>
              </div>
              <div className="contact-card-content">
                <h3>Mobile</h3>
                <p className="contact-card-value">0960 884 8515</p>
                <span className="contact-card-note">
                  Mon-Fri: 8:00 AM - 5:00 PM
                </span>
              </div>
            </a>
            <a href="tel:0476120424" className="contact-card">
              <div className="contact-card-icon">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div className="contact-card-content">
                <h3>Phone</h3>
                <p className="contact-card-value">(047) 612-0424</p>
                <span className="contact-card-note">
                  Mon-Fri: 8:00 AM - 5:00 PM
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="office-hours-section">
        <div className="container">
          <div className="office-hours-inner">
            <div className="office-hours-header">
              <i className="bi bi-clock-fill"></i>
              <h2>Office Hours</h2>
            </div>
            <div className="office-hours-schedule">
              <div className="office-hours-item office-hours-item--open">
                <span className="office-hours-day">Monday - Friday</span>
                <span className="office-hours-time">8:00 AM - 5:00 PM</span>
                <span className="office-hours-status">
                  <i className="bi bi-check-circle-fill"></i> Open
                </span>
              </div>
              <div className="office-hours-item office-hours-item--break">
                <span className="office-hours-day">Lunch Break</span>
                <span className="office-hours-time">12:00 PM - 1:00 PM</span>
                <span className="office-hours-status">
                  <i className="bi bi-pause-circle-fill"></i> Break
                </span>
              </div>
              <div className="office-hours-item office-hours-item--closed">
                <span className="office-hours-day">Saturday &amp; Sunday</span>
                <span className="office-hours-time">Closed</span>
                <span className="office-hours-status">
                  <i className="bi bi-x-circle-fill"></i> Closed
                </span>
              </div>
              <div className="office-hours-item office-hours-item--closed">
                <span className="office-hours-day">
                  National &amp; Local Holidays
                </span>
                <span className="office-hours-time">Closed</span>
                <span className="office-hours-status">
                  <i className="bi bi-x-circle-fill"></i> Closed
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Hotlines */}
      <section className="section">
        <div className="container">
          <div className="hotlines-header">
            <div className="hotlines-title">
              <span className="hotlines-badge">
                <i className="bi bi-exclamation-triangle-fill"></i> Emergency
              </span>
              <h2>Emergency Hotlines</h2>
            </div>
            <p>For emergencies and inquiries, contact these numbers anytime.</p>
          </div>
          <div className="hotlines-grid">
            <a href="tel:911" className="hotline-card">
              <i className="bi bi-exclamation-triangle-fill"></i>
              <span className="hotline-card-label">National Emergency</span>
              <span className="hotline-card-number">911</span>
            </a>
            <a href="tel:0476120424" className="hotline-card">
              <i className="bi bi-building-fill"></i>
              <span className="hotline-card-label">Bagac Municipal Hall</span>
              <span className="hotline-card-number">(047) 612-0424</span>
            </a>
            <a href="tel:09608848515" className="hotline-card">
              <i className="bi bi-person-badge-fill"></i>
              <span className="hotline-card-label">Mayor&apos;s Office</span>
              <span className="hotline-card-number">0960 884 8515</span>
            </a>
            <a href="tel:911" className="hotline-card">
              <i className="bi bi-shield-fill"></i>
              <span className="hotline-card-label">PNP Bagac</span>
              <span className="hotline-card-number">911</span>
            </a>
            <a href="tel:911" className="hotline-card">
              <i className="bi bi-fire"></i>
              <span className="hotline-card-label">BFP Bagac</span>
              <span className="hotline-card-number">911</span>
            </a>
            <a href="tel:911" className="hotline-card">
              <i className="bi bi-broadcast"></i>
              <span className="hotline-card-label">MDRRMO Bagac</span>
              <span className="hotline-card-number">911</span>
            </a>
            <a
              href="https://www.facebook.com/LGUbagac"
              target="_blank"
              rel="noopener noreferrer"
              className="hotline-card"
            >
              <i className="bi bi-facebook"></i>
              <span className="hotline-card-label">LGU Bagac</span>
              <span className="hotline-card-number">Official Facebook</span>
            </a>
            <a
              href="https://bagac.gov.ph/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="hotline-card"
            >
              <i className="bi bi-globe2"></i>
              <span className="hotline-card-label">LGU Bagac Website</span>
              <span className="hotline-card-number">bagac.gov.ph</span>
            </a>
          </div>
        </div>
      </section>

      {/* Medical Emergency Hotlines */}
      <section className="section bg-alt">
        <div className="container">
          <div className="hotlines-header">
            <div className="hotlines-title">
              <span className="hotlines-badge hotlines-badge--medical">
                <i className="bi bi-hospital-fill"></i> Medical
              </span>
              <h2>Medical Emergency Hotlines</h2>
            </div>
            <p>For medical emergencies and hospital inquiries.</p>
          </div>
          <div className="hotlines-grid">
            <a
              href="tel:0476120424"
              className="hotline-card hotline-card--medical"
            >
              <i className="bi bi-hospital"></i>
              <span className="hotline-card-label">
                Bagac Rural Health Unit
              </span>
              <span className="hotline-card-number">(047) 612-0424</span>
            </a>
            <a href="tel:143" className="hotline-card hotline-card--medical">
              <i className="bi bi-plus-circle-fill"></i>
              <span className="hotline-card-label">Philippine Red Cross</span>
              <span className="hotline-card-number">143</span>
            </a>
            <a href="tel:911" className="hotline-card hotline-card--medical">
              <i className="bi bi-truck"></i>
              <span className="hotline-card-label">Medical Emergency</span>
              <span className="hotline-card-number">911</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
