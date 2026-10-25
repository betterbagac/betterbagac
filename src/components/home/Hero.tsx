"use client";

import Link from "next/link";
import SearchAutocomplete from "@/components/SearchAutocomplete";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="home-hero-v2">
      <div className="container">
        <div className="home-hero-v2-inner">
          <div className="home-hero-v2-text">
            <h1>{t("hero-welcome")}</h1>
            <p>{t("hero-subtitle")}</p>
            <div className="home-hero-v2-actions">
              <Link href="/services" className="btn btn-primary">
                Browse Services <i className="bi bi-arrow-right"></i>
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="home-hero-v2-search">
            <div className="home-search-box">
              <h2>
                <i className="bi bi-search"></i> {t("hero-find-service")}
              </h2>
              <search
                className="search-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="search-input-wrapper">
                  <SearchAutocomplete placeholder="e.g., birth certificate, business permit" />
                  <button
                    type="submit"
                    className="search-submit-btn"
                    aria-label="Search"
                  >
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </search>
              <div className="home-search-tags">
                <span>Popular:</span>
                <Link href="/service-details/birth-certificate">
                  Birth Certificate
                </Link>
                <Link href="/service-details/business-permits-licensing">
                  Business Permit
                </Link>
                <Link href="/service-details/municipal-treasurer">
                  Real Property Tax
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
