"use client";

import { siteConfig } from "@/data/site.config";
import { useWeather } from "@/hooks/useWeather";

export default function WeatherMap() {
  const { weather } = useWeather();
  const { latitude, longitude, mapBbox } = siteConfig.geo;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${mapBbox
    .map((value) => encodeURIComponent(value))
    .join("%2C")}&layer=mapnik&marker=${latitude}%2C${longitude}`;

  return (
    <section className="section weather-map-section">
      <div className="container">
        <div className="home-stats-v2-header">
          <h2>Weather and Map of {siteConfig.municipalityName}</h2>
        </div>
        <div className="weather-map-grid">
          <div className="weather-column">
            <div id="weather-container" aria-live="polite">
              <section
                className="weather-widget"
                aria-label={`Current weather in ${siteConfig.municipalityName}`}
              >
                <div className="weather-current">
                  <div className="weather-current-icon">
                    <i className={`bi ${weather.icon}`}></i>
                  </div>
                  <div className="weather-current-info">
                    <div className="weather-current-temp">{weather.temp}°C</div>
                    <div className="weather-current-condition">
                      {weather.description}
                    </div>
                    <div className="weather-current-location">
                      <i className="bi bi-geo-alt"></i> {weather.location}
                    </div>
                  </div>
                </div>
                <div className="weather-stats">
                  <div className="weather-stat">
                    <i className="bi bi-droplet"></i>
                    <span>{weather.humidity}%</span>
                  </div>
                  <div className="weather-stat">
                    <i className="bi bi-wind"></i>
                    <span>{weather.windSpeed} km/h</span>
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
                aria-label={`Interactive map of ${siteConfig.geo.label}`}
                className="map-container-iframe"
              >
                <iframe
                  width="100%"
                  height="300"
                  frameBorder="0"
                  scrolling="no"
                  src={mapSrc}
                  className="map-iframe"
                  title={`Map of ${siteConfig.municipalityName}`}
                  loading="lazy"
                ></iframe>
              </div>
              <p className="map-attribution">
                <i className="bi bi-geo-alt" aria-hidden="true"></i>{" "}
                {siteConfig.contact.hallAddress}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
