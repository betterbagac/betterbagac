"use client";

import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { ApiError, fetcher } from "@/utils/api";

const RATES_BASE_URL = "https://api.frankfurter.dev/v1/latest";

const FALLBACK_RATE = 64;

const ONE_HOUR = 60 * 60 * 1000;

interface FrankfurterResponse {
  base: string;
  date: string;
  rates: Record<string, number>;
}

interface ExchangeRateResult {
  base: string;
  quote: string;
  rate: number;
  publishedAt: string;
}

export function useCurrency(quote = "PHP") {
  const query = useQuery({
    queryKey: ["exchange-rate", "USD", quote],
    queryFn: async ({ signal }) => {
      const url = `${RATES_BASE_URL}?base=USD&symbols=${encodeURIComponent(quote)}`;
      const data = await fetcher<FrankfurterResponse>(url, { signal });
      const rate = data.rates[quote];

      if (typeof rate !== "number") {
        throw new ApiError(`No exchange rate published for ${quote}`, url);
      }

      return {
        base: data.base,
        quote,
        rate,
        publishedAt: data.date,
      } satisfies ExchangeRateResult;
    },
    staleTime: ONE_HOUR,
    refetchInterval: ONE_HOUR,
  });

  const rate = query.data?.rate ?? FALLBACK_RATE;

  const reload = useCallback(() => {
    void query.refetch();
  }, [query]);

  const convert = useCallback(
    (amountInUsd: number) => amountInUsd * rate,
    [rate],
  );

  const format = useCallback(
    (amount: number, opts: { currency?: string; locale?: string } = {}) =>
      new Intl.NumberFormat(opts.locale ?? "en-PH", {
        style: "currency",
        currency: opts.currency ?? quote,
        maximumFractionDigits: 2,
      }).format(amount),
    [quote],
  );

  return {
    rate,
    base: query.data?.base ?? "USD",
    quote,
    updatedAt: query.data
      ? new Date(`${query.data.publishedAt}T00:00:00+08:00`)
      : null,
    loading: query.isPending,
    isRefreshing: query.isFetching && !query.isPending,
    error: query.error instanceof Error ? query.error.message : null,
    convert,
    format,
    reload,
  };
}
