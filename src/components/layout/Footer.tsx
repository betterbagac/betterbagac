"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/data/site.config";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main-new">
          <div className="footer-brand">
            <img
              src={siteConfig.assets.logoWhite}
              alt={`${siteConfig.displayName} logo`}
              className="footer-logo"
            />
            <p className="footer-tagline">{siteConfig.tagline}</p>
            <div className="footer-social-new">
              <a
                href={siteConfig.links.facebook}
                className="footer-social-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href={siteConfig.links.officialPortal}
                className="footer-social-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Official ${siteConfig.lguName} website`}
              >
                <i className="bi bi-globe2"></i>
              </a>
              <a
                href={siteConfig.links.transparencySeal}
                className="footer-social-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Transparency Seal"
              >
                <i className="bi bi-shield-check"></i>
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h4>{t("footer-quick-links")}</h4>
            <ul className="footer-links-new">
              <li>
                <a href="/sitemap-page">{t("footer-sitemap")}</a>
              </li>
              <li>
                <a
                  href={siteConfig.links.citizensCharter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("footer-citizens-charter")}
                </a>
              </li>
              <li>
                <a href="/terms">{t("footer-terms")}</a>
              </li>
              <li>
                <a href="/privacy">{t("footer-privacy")}</a>
              </li>
              <li>
                <a href="/accessibility">{t("footer-accessibility")}</a>
              </li>
              <li>
                <a href="/faq">{t("footer-faq")}</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>{t("footer-resources")}</h4>
            <ul className="footer-links-new">
              <li>
                <a
                  href={siteConfig.links.openData}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("footer-open-data")}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.foi}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("footer-foi")}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.officialPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("footer-official-portal")}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.sangguniangBayan}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("footer-sangguniang-bayan")}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("footer-facebook")}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.blgf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("footer-blgf")}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.cmci}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("footer-cmci")}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <div className="footer-cost">
              {t("footer-cost")}{" "}
              <span className="footer-cost-value">
                {siteConfig.costToPeople}
              </span>
            </div>
            <a
              href={`mailto:${siteConfig.volunteerEmail}`}
              className="footer-contribute"
            >
              <i className="bi bi-envelope-heart" aria-hidden="true"></i>{" "}
              {t("footer-volunteer")}
            </a>
            <a
              href={siteConfig.repo}
              className="footer-contribute"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github" aria-hidden="true"></i>{" "}
              {t("footer-contribute")}
            </a>
          </div>
        </div>
        <div className="footer-bottom-new">
          <div className="footer-copyright">
            <span>
              &copy; {currentYear} {siteConfig.displayName}.{" "}
              {siteConfig.license} {t("footer-source-note")}
            </span>
            <span className="footer-version">
              <i className="bi bi-boxes" aria-hidden="true"></i>{" "}
              {t("footer-version")} {siteConfig.version}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
