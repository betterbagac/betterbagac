import { siteConfig } from "@/data/site.config";

export default function Footer() {
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
            <h4>Quick Links</h4>
            <ul className="footer-links-new">
              <li>
                <a href="/sitemap-page">Sitemap</a>
              </li>
              <li>
                <a
                  href={siteConfig.links.citizensCharter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Citizen&apos;s Charter
                </a>
              </li>
              <li>
                <a href="/terms">Terms of Use</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/accessibility">Accessibility</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul className="footer-links-new">
              <li>
                <a
                  href={siteConfig.links.openData}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Data Philippines
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.foi}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Freedom of Information
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.officialPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official {siteConfig.lguName} Portal
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.sangguniangBayan}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sangguniang Bayan
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteConfig.lguName} Facebook
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.blgf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BLGF Portal
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.cmci}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CMCI DTI Portal
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <div className="footer-cost">
              Cost to the People of {siteConfig.municipalityName} ={" "}
              <span className="footer-cost-value">
                {siteConfig.costToPeople}
              </span>
            </div>
            <a
              href={`mailto:${siteConfig.volunteerEmail}`}
              className="footer-contribute"
            >
              <i className="bi bi-envelope-heart" aria-hidden="true"></i>{" "}
              Volunteer with us
            </a>
            <a
              href={siteConfig.repo}
              className="footer-contribute"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github" aria-hidden="true"></i> Contribute
              code with us
            </a>
          </div>
        </div>
        <div className="footer-bottom-new">
          <div className="footer-copyright">
            <span>
              &copy; {currentYear} {siteConfig.displayName}.{" "}
              {siteConfig.license} All public information sourced from official
              government portals.
            </span>
            <span className="footer-version">
              <i className="bi bi-boxes" aria-hidden="true"></i> Ver.{" "}
              {siteConfig.version}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
