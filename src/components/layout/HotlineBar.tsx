"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/data/site.config";

export default function HotlineBar() {
  const { t } = useLanguage();
  const { contact, hotlines } = siteConfig;

  return (
    <div className="hotline-bar">
      <div className="container">
        <div className="hotline-inner">
          <div className="hotline-items">
            <a href={`tel:${hotlines.emergency}`} className="hotline-item">
              <i className="bi bi-shield-fill" aria-hidden="true"></i>
              <span>
                {t("hotline-emergency")}: {hotlines.emergency}
              </span>
            </a>
            <a href={`tel:${contact.phone}`} className="hotline-item">
              <i className="bi bi-building" aria-hidden="true"></i>
              <span>
                {t("contact-municipal-hall")}: {contact.phoneDisplay}
              </span>
            </a>
            <a href={`tel:${contact.mobile}`} className="hotline-item">
              <i className="bi bi-person-badge" aria-hidden="true"></i>
              <span>
                {t("hotline-mayor")}: {contact.mobileDisplay}
              </span>
            </a>
            <a href={`tel:${hotlines.emergency}`} className="hotline-item">
              <i className="bi bi-fire" aria-hidden="true"></i>
              <span>
                {t("hotline-fire-rescue")}: {hotlines.emergency}
              </span>
            </a>
            <a href={`tel:${hotlines.emergency}`} className="hotline-item">
              <i
                className="bi bi-exclamation-triangle-fill"
                aria-hidden="true"
              ></i>
              <span>
                {t("hotline-mdrrmo")}: {hotlines.emergency}
              </span>
            </a>
            <a
              href={`mailto:${siteConfig.volunteerEmail}`}
              className="hotline-item"
            >
              <i className="bi bi-envelope-heart" aria-hidden="true"></i>
              <span>{t("hotline-volunteer")}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
