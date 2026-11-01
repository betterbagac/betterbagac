import { siteConfig } from "@/data/site.config";

export default function HotlineBar() {
  const { contact, hotlines, municipalityName } = siteConfig;

  return (
    <div className="hotline-bar">
      <div className="container">
        <div className="hotline-inner">
          <div className="hotline-items">
            <a href={`tel:${hotlines.emergency}`} className="hotline-item">
              <i className="bi bi-shield-fill" aria-hidden="true"></i>
              <span>Emergency: {hotlines.emergency}</span>
            </a>
            <a href={`tel:${contact.phone}`} className="hotline-item">
              <i className="bi bi-building" aria-hidden="true"></i>
              <span>Municipal Hall: {contact.phoneDisplay}</span>
            </a>
            <a href={`tel:${contact.mobile}`} className="hotline-item">
              <i className="bi bi-person-badge" aria-hidden="true"></i>
              <span>Mayor&apos;s Office: {contact.mobileDisplay}</span>
            </a>
            <a href={`tel:${hotlines.emergency}`} className="hotline-item">
              <i className="bi bi-fire" aria-hidden="true"></i>
              <span>Fire &amp; Rescue: {hotlines.emergency}</span>
            </a>
            <a href={`tel:${hotlines.emergency}`} className="hotline-item">
              <i
                className="bi bi-exclamation-triangle-fill"
                aria-hidden="true"
              ></i>
              <span>
                MDRRMO {municipalityName}: {hotlines.emergency}
              </span>
            </a>
            <a
              href={`mailto:${siteConfig.volunteerEmail}`}
              className="hotline-item"
            >
              <i className="bi bi-envelope-heart" aria-hidden="true"></i>
              <span>Volunteer with us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
