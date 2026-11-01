"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/data/site.config";
import { useCurrency } from "@/hooks/useCurrency";
import { useWeather } from "@/hooks/useWeather";

export default function InfoBar() {
  const { t, language } = useLanguage();
  const [dateTime, setDateTime] = useState({
    date: "--- --, ----",
    time: "--:-- --",
  });
  const { rate } = useCurrency();
  const { weather } = useWeather();

  useEffect(() => {
    const locale = language === "fil" ? "fil-PH" : "en-US";
    const updateDateTime = () => {
      const now = new Date();
      const dateOptions: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Manila",
        month: "short",
        day: "2-digit",
        year: "numeric",
      };
      const timeOptions: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Manila",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setDateTime({
        date: now.toLocaleDateString(locale, dateOptions),
        time: now.toLocaleTimeString(locale, timeOptions),
      });
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, [language]);

  return (
    <aside className="info-bar" aria-label={t("infobar-aria")}>
      <div className="container">
        <div className="info-bar-inner" aria-live="polite" aria-atomic="false">
          <div className="info-bar-item info-bar-rates">
            <i className="bi bi-currency-exchange" aria-hidden="true"></i>
            <span className="rate-rotator">
              <span className="rate-display">1 USD = ₱ {rate.toFixed(2)}</span>
            </span>
          </div>
          <div className="info-bar-item info-bar-weather">
            <i className="bi bi-thermometer-half" aria-hidden="true"></i>
            <span className="weather-location">
              {siteConfig.municipalityName}
            </span>
            <span className="weather-temp">{weather.temp}°C</span>
          </div>
          <div className="info-bar-item info-bar-datetime">
            <i className="bi bi-calendar3" aria-hidden="true"></i>
            <span className="date-value">{dateTime.date}</span>
            <span className="datetime-separator" aria-hidden="true">
              •
            </span>
            <i className="bi bi-clock" aria-hidden="true"></i>
            <span className="time-value">{dateTime.time}</span>
            <span className="time-label">PHT</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
