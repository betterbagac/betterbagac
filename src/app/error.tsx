"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const { t } = useLanguage();

  useEffect(() => {
    console.error(error);
  }, [error]);

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
            color: "#dc3545",
            lineHeight: 1,
            display: "block",
            marginBottom: "16px",
          }}
        >
          500
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
          {t("error-500-title")}
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
          {t("error-500-desc")}
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
          <button onClick={reset} className="btn btn-primary">
            {t("error-retry")}
          </button>
          <Link href="/" className="btn btn-secondary">
            {t("error-home")}
          </Link>
        </div>
      </div>
    </section>
  );
}
