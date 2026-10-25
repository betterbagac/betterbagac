export default function HotlineBar() {
  return (
    <div className="hotline-bar">
      <div className="container">
        <div className="hotline-inner">
          <div className="hotline-items">
            <a href="tel:911" className="hotline-item">
              <i className="bi bi-shield-fill" aria-hidden="true"></i>
              <span>Emergency: 911</span>
            </a>
            <a href="tel:0476120424" className="hotline-item">
              <i className="bi bi-building" aria-hidden="true"></i>
              <span>Municipal Hall: (047) 612-0424</span>
            </a>
            <a href="tel:09608848515" className="hotline-item">
              <i className="bi bi-person-badge" aria-hidden="true"></i>
              <span>Mayor&apos;s Office: 0960 884 8515</span>
            </a>
            <a href="tel:911" className="hotline-item">
              <i className="bi bi-fire" aria-hidden="true"></i>
              <span>Fire &amp; Rescue: 911</span>
            </a>
            <a href="tel:911" className="hotline-item">
              <i
                className="bi bi-exclamation-triangle-fill"
                aria-hidden="true"
              ></i>
              <span>MDRRMO: 911</span>
            </a>
            <a href="mailto:volunteer@betterbagac.org" className="hotline-item">
              <i className="bi bi-envelope-heart" aria-hidden="true"></i>
              <span>Volunteer with us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
