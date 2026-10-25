export default function WeatherMap() {
  return (
    <section className="section weather-map-section">
      <div className="container">
        <div className="home-stats-v2-header">
          <h2>Weather and Map of Bagac</h2>
        </div>
        <div className="weather-map-grid">
          <div className="weather-column">
            <div id="weather-container" aria-live="polite">
              <section
                className="weather-widget"
                aria-label="Current weather in Bagac"
              >
                <div className="weather-current">
                  <div className="weather-current-icon">
                    <i className="bi bi-cloud-sun-fill"></i>
                  </div>
                  <div className="weather-current-info">
                    <div className="weather-current-temp">29°C</div>
                    <div className="weather-current-condition">
                      Mainly clear
                    </div>
                    <div className="weather-current-location">
                      <i className="bi bi-geo-alt"></i> Bagac, Bataan
                    </div>
                  </div>
                </div>
                <div className="weather-stats">
                  <div className="weather-stat">
                    <i className="bi bi-droplet"></i>
                    <span>65%</span>
                  </div>
                  <div className="weather-stat">
                    <i className="bi bi-wind"></i>
                    <span>12 km/h</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="map-column">
            <div className="map-card">
              <div
                id="map-container"
                role="application"
                aria-label="Interactive map of Bagac, Bataan"
                className="map-container-iframe"
              >
                <iframe
                  width="100%"
                  height="300"
                  frameBorder="0"
                  scrolling="no"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=120.3718%2C14.5801%2C120.4118%2C14.6101&layer=mapnik&marker=14.5951%2C120.3918"
                  className="map-iframe"
                  title="Map of Bagac"
                  loading="lazy"
                ></iframe>
              </div>
              <p className="map-attribution">
                <i className="bi bi-geo-alt" aria-hidden="true"></i> Bagac
                Municipal Hall, Bataan 2107
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
