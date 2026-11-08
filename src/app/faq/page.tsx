"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/data/site.config";

export default function FAQPage() {
  const { t } = useLanguage();

  return (
    <>
      <link rel="stylesheet" href="/assets/css/accessibility.css" />

      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label={t("svc-breadcrumb")}>
          <Link href="/">{t("nav-home")}</Link>
          <span>/</span>
          <span aria-current="page">{t("faq-badge")}</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge">
              <i className="bi bi-question-circle-fill"></i> {t("faq-badge")}
            </span>
            <h1>{t("faq-title")}</h1>
            <p className="page-header-desc">{t("faq-subtitle")}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="faq-container">
            {/* FAQ Category: General */}
            <div className="faq-category">
              <div className="faq-category-header">
                <i className="bi bi-info-circle-fill"></i>
                <h2>{t("faq-general")}</h2>
              </div>
              <div className="faq-list">
                <details className="faq-accordion">
                  <summary>{t("faq-q1")}</summary>
                  <div className="faq-answer">
                    <p>{t("faq-a1")}</p>
                  </div>
                </details>
                <details className="faq-accordion">
                  <summary>{t("faq-q2")}</summary>
                  <div className="faq-answer">
                    <p>
                      {t("faq-a2-1")}{" "}
                      <Link href="/government">{t("faq-link-government")}</Link>{" "}
                      {t("faq-a2-2")}
                    </p>
                  </div>
                </details>
                <details className="faq-accordion">
                  <summary>{t("faq-q3")}</summary>
                  <div className="faq-answer">
                    <p>{t("faq-a3")}</p>
                  </div>
                </details>
              </div>
            </div>

            {/* FAQ Category: Certificates */}
            <div className="faq-category">
              <div className="faq-category-header">
                <i className="bi bi-file-earmark-text-fill"></i>
                <h2>{t("faq-certificates")}</h2>
              </div>
              <div className="faq-list">
                <details className="faq-accordion">
                  <summary>{t("faq-q4")}</summary>
                  <div className="faq-answer">
                    <p>{t("faq-a4")}</p>
                  </div>
                </details>
                <details className="faq-accordion">
                  <summary>{t("faq-q5")}</summary>
                  <div className="faq-answer">
                    <p>{t("faq-a5")}</p>
                    <ul>
                      <li>{t("faq-a5-li1")}</li>
                      <li>{t("faq-a5-li2")}</li>
                      <li>{t("faq-a5-li3")}</li>
                    </ul>
                  </div>
                </details>
                <details className="faq-accordion">
                  <summary>{t("faq-q6")}</summary>
                  <div className="faq-answer">
                    <p>{t("faq-a6")}</p>
                  </div>
                </details>
              </div>
            </div>

            {/* FAQ Category: Business */}
            <div className="faq-category">
              <div className="faq-category-header">
                <i className="bi bi-shop"></i>
                <h2>{t("faq-business")}</h2>
              </div>
              <div className="faq-list">
                <details className="faq-accordion">
                  <summary>{t("faq-q7")}</summary>
                  <div className="faq-answer">
                    <p>{t("faq-a7")}</p>
                  </div>
                </details>
                <details className="faq-accordion">
                  <summary>{t("faq-q8")}</summary>
                  <div className="faq-answer">
                    <p>{t("faq-a8")}</p>
                    <ul>
                      <li>{t("faq-a8-li1")}</li>
                      <li>{t("faq-a8-li2")}</li>
                      <li>{t("faq-a8-li3")}</li>
                      <li>{t("faq-a8-li4")}</li>
                      <li>{t("faq-a8-li5")}</li>
                    </ul>
                    <p>
                      {t("faq-a8-1")}{" "}
                      <Link href="/services/business">
                        {t("faq-link-business-permit")}
                      </Link>{" "}
                      {t("faq-a8-2")}
                    </p>
                  </div>
                </details>
              </div>
            </div>

            {/* FAQ Category: Payments */}
            <div className="faq-category">
              <div className="faq-category-header">
                <i className="bi bi-cash-coin"></i>
                <h2>{t("faq-payments")}</h2>
              </div>
              <div className="faq-list">
                <details className="faq-accordion">
                  <summary>{t("faq-q9")}</summary>
                  <div className="faq-answer">
                    <p>{t("faq-a9")}</p>
                  </div>
                </details>
                <details className="faq-accordion">
                  <summary>{t("faq-q10")}</summary>
                  <div className="faq-answer">
                    <p>{t("faq-a10")}</p>
                  </div>
                </details>
              </div>
            </div>

            {/* FAQ Category: Social Services */}
            <div className="faq-category">
              <div className="faq-category-header">
                <i className="bi bi-people-fill"></i>
                <h2>{t("faq-social")}</h2>
              </div>
              <div className="faq-list">
                <details className="faq-accordion">
                  <summary>{t("faq-q11")}</summary>
                  <div className="faq-answer">
                    <p>{t("faq-a11")}</p>
                    <ul>
                      <li>{t("faq-a11-li1")}</li>
                      <li>{t("faq-a11-li2")}</li>
                      <li>{t("faq-a11-li3")}</li>
                    </ul>
                    <p>{t("faq-a11-tail")}</p>
                  </div>
                </details>
                <details className="faq-accordion">
                  <summary>{t("faq-q12")}</summary>
                  <div className="faq-answer">
                    <p>{t("faq-a12")}</p>
                  </div>
                </details>
              </div>
            </div>

            {/* FAQ Category: Technical */}
            <div className="faq-category">
              <div className="faq-category-header">
                <i className="bi bi-gear-fill"></i>
                <h2>{t("faq-technical")}</h2>
              </div>
              <div className="faq-list">
                <details className="faq-accordion">
                  <summary>{t("faq-q13")}</summary>
                  <div className="faq-answer">
                    <p>
                      {t("faq-a13-1")}{" "}
                      <a href={`mailto:${siteConfig.volunteerEmail}`}>
                        {siteConfig.volunteerEmail}
                      </a>{" "}
                      {t("faq-a13-2")}
                    </p>
                  </div>
                </details>
                <details className="faq-accordion">
                  <summary>{t("faq-q14")}</summary>
                  <div className="faq-answer">
                    <p>{t("faq-a14")}</p>
                  </div>
                </details>
              </div>
            </div>

            {/* FAQ Category: About */}
            <div className="faq-category">
              <div className="faq-category-header">
                <i className="bi bi-person-badge-fill"></i>
                <h2>{t("faq-about-developer")}</h2>
              </div>
              <div className="faq-list">
                <details className="faq-accordion">
                  <summary>{t("faq-q15")}</summary>
                  <div className="faq-answer">
                    <p>
                      <a
                        href="https://jmrecondo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Juan Miguel Recondo
                      </a>{" "}
                      {t("faq-a15-1-2")}
                    </p>
                    <p>
                      {t("faq-a15-2-1")}{" "}
                      <a
                        href="https://bettergov.ph"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        BetterGov.ph
                      </a>
                      {t("faq-a15-2-2")}
                    </p>
                    <p>{t("faq-a15-3")}</p>
                  </div>
                </details>
              </div>
            </div>

            {/* Still Have Questions */}
            <div className="faq-cta">
              <i className="bi bi-chat-dots-fill"></i>
              <div className="faq-cta-content">
                <h3>{t("faq-still-questions")}</h3>
                <p>{t("faq-contact-help")}</p>
              </div>
              <Link href="/contact" className="btn btn-primary">
                {t("faq-contact-cta")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
