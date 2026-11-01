"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import type { CategoryContent } from "@/data/categoriesContent";
import { localizeCategory } from "@/data/i18n/content/categoriesFil";

export function ServiceCategoryContent({
  category,
}: {
  category: CategoryContent;
}) {
  const { t, language } = useLanguage();
  const content = localizeCategory(category, language);

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label={t("svc-breadcrumb")}>
          <Link href="/">{t("nav-home")}</Link>
          <span>/</span>
          <Link href="/services">{t("nav-services")}</Link>
          <span>/</span>
          <span aria-current="page">{content.name}</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge">
              <i className={`bi ${content.icon}`}></i> {content.badgeText}
            </span>
            <h1>{content.name}</h1>
            <p className="page-header-desc">{content.description}</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {content.services.map((service) => {
              const cardContent = (
                <>
                  <h3 className="service-item-title">
                    <i className={`bi ${service.icon}`}></i> {service.title}
                  </h3>
                  <p className="service-item-desc">{service.description}</p>
                  <div className="service-item-meta">
                    <span>
                      <strong>{t("svc-fee-label")}</strong> {service.fee}
                    </span>
                    <span>
                      <strong>{t("svc-time-label")}</strong> {service.time}
                    </span>
                  </div>
                </>
              );

              if (service.link) {
                return (
                  <Link
                    key={service.id}
                    href={service.link}
                    className="service-item-card service-item-link"
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <div key={service.id} className="service-item-card">
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Responsible Offices */}
      {content.offices.length > 0 && (
        <section className="section section-compact bg-alt">
          <div className="container">
            <h2 className="section-title-sm">{t("svc-responsible-offices")}</h2>
            <div className="office-cards-grid">
              {content.offices.map((office) => (
                <Link
                  key={office.title}
                  href={office.link}
                  className="office-card"
                >
                  <div className="office-card-icon">
                    <i className={`bi ${office.icon}`}></i>
                  </div>
                  <div className="office-card-content">
                    <h3 className="office-card-title">{office.title}</h3>
                    <p className="office-card-desc">{office.description}</p>
                  </div>
                  <div className="office-card-arrow">
                    <i className="bi bi-arrow-right"></i>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
