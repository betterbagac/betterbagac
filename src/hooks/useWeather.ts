"use client";

import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { siteConfig } from "@/data/site.config";
import type { WeatherData } from "@/types";
import { fetcher } from "@/utils/api";

const { latitude, longitude, label: LOCATION_LABEL } = siteConfig.geo;

const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast" +
  `?latitude=${latitude}&longitude=${longitude}` +
  "&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code" +
  "&timezone=Asia%2FManila";

const TEN_MINUTES = 10 * 60 * 1000;

interface OpenMeteoResponse {
  current: {
    time: string;
    temperature_2m: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    weather_code: number;
  };
}

interface WeatherCondition {
  label: string;
  icon: string;
}

/** WMO weather interpretation codes used by Open-Meteo. */
const WEATHER_CODES: Record<number, WeatherCondition> = {
  0: { label: "Clear sky", icon: "bi-sun-fill" },
  1: { label: "Mainly clear", icon: "bi-cloud-sun-fill" },
  2: { label: "Partly cloudy", icon: "bi-cloud-sun-fill" },
  3: { label: "Overcast", icon: "bi-clouds-fill" },
  45: { label: "Fog", icon: "bi-cloud-fog-fill" },
  48: { label: "Rime fog", icon: "bi-cloud-fog-fill" },
  51: { label: "Light drizzle", icon: "bi-cloud-drizzle-fill" },
  53: { label: "Moderate drizzle", icon: "bi-cloud-drizzle-fill" },
  55: { label: "Dense drizzle", icon: "bi-cloud-drizzle-fill" },
  56: { label: "Freezing drizzle", icon: "bi-cloud-drizzle-fill" },
  57: { label: "Dense freezing drizzle", icon: "bi-cloud-drizzle-fill" },
  61: { label: "Light rain", icon: "bi-cloud-rain-fill" },
  63: { label: "Moderate rain", icon: "bi-cloud-rain-fill" },
  65: { label: "Heavy rain", icon: "bi-cloud-rain-heavy-fill" },
  66: { label: "Freezing rain", icon: "bi-cloud-rain-fill" },
  67: { label: "Heavy freezing rain", icon: "bi-cloud-rain-heavy-fill" },
  71: { label: "Light snow", icon: "bi-cloud-snow-fill" },
  73: { label: "Moderate snow", icon: "bi-cloud-snow-fill" },
  75: { label: "Heavy snow", icon: "bi-cloud-snow-fill" },
  80: { label: "Light showers", icon: "bi-cloud-rain-fill" },
  81: { label: "Moderate showers", icon: "bi-cloud-rain-fill" },
  82: { label: "Violent showers", icon: "bi-cloud-rain-heavy-fill" },
  95: { label: "Thunderstorm", icon: "bi-cloud-lightning-rain-fill" },
  96: { label: "Thunderstorm with hail", icon: "bi-cloud-lightning-rain-fill" },
  99: { label: "Severe thunderstorm", icon: "bi-cloud-lightning-rain-fill" },
};

const FALLBACK: WeatherData = {
  temp: 29,
  description: "Mainly clear",
  icon: "bi-cloud-sun-fill",
  location: LOCATION_LABEL,
  humidity: 65,
  windSpeed: 12,
};

function toWeatherData(data: OpenMeteoResponse): WeatherData {
  const condition = WEATHER_CODES[data.current.weather_code] ?? {
    label: "Unknown",
    icon: "bi-cloud-fill",
  };

  return {
    temp: Math.round(data.current.temperature_2m),
    description: condition.label,
    icon: condition.icon,
    location: LOCATION_LABEL,
    humidity: Math.round(data.current.relative_humidity_2m),
    windSpeed: Math.round(data.current.wind_speed_10m),
    code: data.current.weather_code,
    observedAt: data.current.time,
  };
}

export function useWeather() {
  const query = useQuery({
    queryKey: ["weather", LOCATION_LABEL],
    queryFn: async ({ signal }) => {
      const data = await fetcher<OpenMeteoResponse>(WEATHER_URL, { signal });
      return toWeatherData(data);
    },
    staleTime: TEN_MINUTES,
    refetchInterval: TEN_MINUTES,
    placeholderData: FALLBACK,
  });

  const reload = useCallback(() => {
    void query.refetch();
  }, [query]);

  return {
    weather: query.data ?? FALLBACK,
    loading: query.isPending,
    isRefreshing: query.isFetching && !query.isPending,
    error: query.error instanceof Error ? query.error.message : null,
    reload,
  };
}
