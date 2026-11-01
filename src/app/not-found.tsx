"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section
      className="error-page"
      style={{
        background: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        padding: "60px 0",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <span
          className="error-code"
          style={{
            fontSize: "8rem",
            fontWeight: 700,
            color: "var(--color-primary, #0032a0)",
            lineHeight: 1,
            display: "block",
            marginBottom: "16px",
          }}
        >
          404
        </span>
        <h1
          className="error-title"
          style={{
            fontSize: "1.75rem",
            fontWeight: 600,
            marginBottom: "12px",
            color: "var(--color-text)",
          }}
        >
          {t("nf-404-title")}
        </h1>
        <p
          className="error-desc"
          style={{
            fontSize: "1rem",
            color: "var(--color-text-light)",
            maxWidth: "480px",
            margin: "0 auto 24px",
            lineHeight: 1.6,
          }}
        >
          {t("nf-404-desc")}
        </p>
        <div
          className="error-actions"
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" className="btn btn-primary">
            {t("error-home")}
          </Link>
          <Link href="/services" className="btn btn-secondary">
            {t("nf-browse-services")}
          </Link>
        </div>
      </div>
    </section>
  );
}
