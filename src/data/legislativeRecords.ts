// Verified legislative records only.

export const LEGISLATIVE_DATA_AS_OF = "October 25, 2026";

export type LegislativeKind = "ordinance" | "resolution";

export type LegislativeRecord = {
  id: string;
  kind: LegislativeKind;
  number: string;
  title: string;
  subject: string;
  year: number;
  /** Action taken by the Sangguniang Panlalawigan, or enactment status. */
  status: string;
  statusNote?: string;
  sourceName: string;
  sourceUrl: string;
};

export const legislativeRecords: LegislativeRecord[] = [
  {
    id: "bagac-ao-06-s2025",
    kind: "ordinance",
    number: "Appropriation Ordinance No. 06, Series of 2025",
    title: "Annual Budget of the Municipality of Bagac for Fiscal Year 2026",
    subject: "Budget & Appropriations",
    year: 2025,
    status: "Valid but inoperative in part",
    statusNote:
      "Declared by the Sangguniang Panlalawigan of Bataan during its 30th Regular Session on 9 February 2026, subject to specific conditions.",
    sourceName: "1Bataan — Sangguniang Panlalawigan session report",
    sourceUrl:
      "https://1bataan.com/bataan-sp-pushes-stronger-veterinary-services-education-pact-and-local-ordinance-reviews/",
  },
  {
    id: "bagac-supplemental-budget-fy2026",
    kind: "ordinance",
    number: "Supplemental Budget Ordinance (number not published)",
    title:
      "Supplemental Budget of the Municipality of Bagac for Fiscal Year 2026",
    subject: "Budget & Appropriations",
    year: 2025,
    status: "Valid and operative",
    statusNote:
      "Declared valid and operative in its entirety by the Sangguniang Panlalawigan of Bataan, subject to conditions.",
    sourceName: "1Bataan — Sangguniang Panlalawigan session report",
    sourceUrl:
      "https://1bataan.com/bataan-sp-pushes-stronger-veterinary-services-education-pact-and-local-ordinance-reviews/",
  },
];
