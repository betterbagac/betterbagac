/**
 * Municipality of Bagac — FY 2024 statement of receipts and expenditures.
 *
 * Source: Bureau of Local Government Finance, "Statement of Receipts and
 * Expenditures, by LGU — FY 2024 (Final)", row Region III / Bataan / Bagac /
 * Municipality. Amounts are pesos exactly as published; round them only at the
 * edges, never here.
 *
 * `/budget` and `/statistics` both read this module so the two pages cannot
 * drift apart again. Balance-sheet items (assets, liabilities, net assets) are
 * deliberately absent: BLGF's SRE does not carry them and we have no verified
 * source for them, so the site does not show them.
 */
export const fy2024Finance = {
  fiscalYear: 2024,
  receipts: {
    /** Tax and non-tax revenue raised by the Municipality. */
    local: 56_629_050.08,
    /** National Tax Allotment plus other national tax shares. */
    external: 181_146_233.21,
    total: 237_775_283.29,
  },
  expenditure: 184_362_276.65,
  /** Equals BLGF's published operating result (receipts less expenditure). */
  netOperating: 53_413_006.64,
  source: {
    publisher: "Bureau of Local Government Finance (BLGF)",
    dataset: "Statement of Receipts and Expenditures, by LGU — FY 2024 (Final)",
    url: "https://blgf.gov.ph/wp-content/uploads/2026/01/By-LGU-SRE-2024.xlsx",
    retrieved: "2026-11-09",
  },
} as const;

/** Compact display form used by cards and panels, e.g. `₱237.8 M`. */
export function formatPesoMillions(amount: number): string {
  return `₱${(amount / 1_000_000).toFixed(1)} M`;
}

/** Share of total receipts raised locally, as a whole percentage. */
export function localRevenueShare(receipts: {
  local: number;
  total: number;
}): number {
  return Math.round((receipts.local / receipts.total) * 100);
}
