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
                {t("hero-browse-services")} <i className="bi bi-arrow-right" />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                {t("hero-contact-us")}
              </Link>
            </div>
          </div>
          <div className="home-hero-v2-search">
            <div className="home-search-box">
              <h2>
                <i className="bi bi-search"></i> {t("hero-find-service")}
              </h2>
              <search className="search-form">
                <div className="search-input-wrapper">
                  <SearchAutocomplete
                    placeholder={t("hero-search-placeholder")}
                  />
                </div>
              </search>
              <div className="home-search-tags">
                <span>{t("hero-popular")}</span>
                <Link href="/service-details/birth-certificate">
                  {t("hero-tag-birth")}
                </Link>
                <Link href="/service-details/business-permits-licensing">
                  {t("hero-tag-business")}
                </Link>
                <Link href="/service-details/municipal-treasurer">
                  {t("hero-tag-rpt")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
