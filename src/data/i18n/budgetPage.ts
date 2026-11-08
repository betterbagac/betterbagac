import type { TranslationDictionary } from "@/data/i18n/types";
import { siteConfig } from "@/data/site.config";

/** Budget page (`/budget`), DPWH projects table and budget charts. */
export const budgetPage: TranslationDictionary = {
  en: {
    // Page chrome
    "budget-breadcrumb-aria": "Breadcrumb",
    "budget-crumb-current": "Budget & Transparency",

    // Hero
    "budget-hero-badge": "Financial Transparency",
    "budget-title": "Budget & Financial Transparency",
    "budget-subtitle":
      "Tracking municipal finances and projects for accountability",

    // Statement of receipts and expenditures
    "budget-sre-label": "Financial Report",
    "budget-sre-title": "Statement of Receipts & Expenditures",
    "budget-sre-subtitle": "FY 2024 annual financial performance",
    "budget-fy-2024": "FY 2024",
    "budget-metric-revenue": "Total Revenue",
    "budget-metric-expenditure": "Total Expenditure",
    "budget-metric-net-operating": "Net Operating Income",
    "budget-metric-local-revenue": "Locally Sourced Revenue",
    "budget-position-title": "Revenue Sources",
    "budget-item-local-sources": "Local Sources",
    "budget-item-local-sources-detail": "Tax and non-tax revenue",
    "budget-item-external-sources": "External Sources",
    "budget-item-external-sources-detail":
      "National Tax Allotment and other national tax shares",
    "budget-result-title": "Operating Result",
    "budget-item-revenue": "Revenue",
    "budget-item-revenue-detail": "Tax and non-tax sources",
    "budget-item-expenditure": "Expenditure",
    "budget-item-expenditure-detail": "Operating and capital outlays",
    "budget-item-net-operating-detail": "Revenue less expenditure",
    "budget-source-label": "Source:",
    "budget-source-blgf": "Bureau of Local Government Finance (BLGF)",
    "budget-source-blgf-detail":
      "– FY 2024 Statement of Receipts & Expenditures by LGU (final)",

    // Infrastructure and project transparency
    "budget-infra-label": "Public Works",
    "budget-infra-title": "Infrastructure & Project Transparency",
    "budget-infra-subtitle": `Official sources for ${siteConfig.municipalityName}'s public works and procurement records`,
    "budget-dpwh-section-title": `DPWH Infrastructure Projects in ${siteConfig.municipalityName}`,
    "budget-dpwh-section-desc": `DPWH contracts in ${siteConfig.municipalityName}, 2016–2026, implemented by the DPWH ${siteConfig.province} 2nd and 3rd District Engineering Offices`,
    "budget-tag-national": "National",
    "budget-tag-lgu": "LGU",
    "budget-tag-roads-bridges": "Roads & Bridges",
    "budget-tag-budget-procurement": "Budget & Procurement",
    "budget-tag-legislation": "Legislation",
    "budget-dpwh-offices-title": `DPWH ${siteConfig.province} 2nd & 3rd District Engineering Offices`,
    "budget-dpwh-offices-desc": `National roads, bridges, and flood control projects implemented in ${siteConfig.municipalityName}`,
    "budget-source-dpwh": "DPWH Transparency Portal",
    "budget-link-view-projects": "View projects",
    "budget-seal-title": `${siteConfig.municipalityName} Transparency Seal`,
    "budget-seal-desc":
      "Annual and supplemental budgets, programs, projects, and procurement reports",
    "budget-link-open-transparency": "Open transparency page",
    "budget-sb-title": `Sangguniang Bayan ng ${siteConfig.municipalityName}`,
    "budget-sb-desc":
      "Ordinances, resolutions, and the annual legislative agenda",
    "budget-link-visit-sb": "Visit the SB page",

    // DPWH projects table
    "budget-summary-projects": "Projects",
    "budget-summary-investment": "Total Investment",
    "budget-summary-completed": "Completed",
    "budget-summary-ongoing": "Ongoing",
    "budget-summary-procurement": "For Procurement",
    "budget-filter-all": "All",
    "budget-filter-roads": "Roads",
    "budget-filter-bridges": "Bridges",
    "budget-filter-buildings": "Buildings",
    "budget-filter-flood": "Flood Control",
    "budget-filter-water": "Water",
    "budget-th-description": "Contract Description",
    "budget-th-contractor": "Contractor",
    "budget-th-cost": "Cost",
    "budget-th-status": "Status",
    "budget-th-completed": "Completed",
    "budget-contractor-id": "Contractor ID: {id}",
    "budget-badge-bidding": "For Procurement",
    "budget-load-more": "Load More",
    "budget-load-more-remaining": "({count} remaining)",
    "budget-showing-all": "Showing all {count} projects",
    "budget-source-implemented":
      "· Implemented by the {agency} · Retrieved {date}",

    // Budget charts
    "budget-chart-local-sources": "Local Sources",
    "budget-chart-external-sources": "External Sources (NTA)",
    "budget-chart-total-income": "Total Income",
    "budget-chart-total-expenses": "Total Expenses",
    "budget-chart-gps": "General Public Services",
    "budget-chart-social": "Social Services",
    "budget-chart-economic": "Economic Services",
    "budget-chart-debt": "Debt Service",
  },

  fil: {
    // Page chrome
    "budget-breadcrumb-aria": "Landas ng Pahina",
    "budget-crumb-current": "Badyet at Transparensiya",

    // Hero
    "budget-hero-badge": "Transparensiya sa Pananalapi",
    "budget-title": "Badyet at Transparensiya sa Pananalapi",
    "budget-subtitle":
      "Pagsubaybay sa pananalapi at mga proyekto ng munisipalidad para sa pananagutan",

    // Statement of receipts and expenditures
    "budget-sre-label": "Ulat Pinansyal",
    "budget-sre-title": "Pahayag ng mga Resibo at Gastos",
    "budget-sre-subtitle": "Taunang pagganap pinansyal para sa FY 2024",
    "budget-fy-2024": "FY 2024",
    "budget-metric-revenue": "Kabuuang Kita",
    "budget-metric-expenditure": "Kabuuang Gastos",
    "budget-metric-net-operating": "Netong Kita sa Operasyon",
    "budget-metric-local-revenue": "Kita Mula sa Sariling Pinagkukunan",
    "budget-position-title": "Pinagmulan ng Kita",
    "budget-item-local-sources": "Lokal na Pinagkukunan",
    "budget-item-local-sources-detail": "Buwis at di-buwis na kita",
    "budget-item-external-sources": "Panlabas na Pinagkukunan",
    "budget-item-external-sources-detail":
      "National Tax Allotment at iba pang bahagi ng pambansang buwis",
    "budget-result-title": "Resulta ng Operasyon",
    "budget-item-revenue": "Kita",
    "budget-item-revenue-detail": "Buwis at di-buwis na pinagkukunan",
    "budget-item-expenditure": "Gastos",
    "budget-item-expenditure-detail": "Mga gastos sa operasyon at puhunan",
    "budget-item-net-operating-detail": "Kita bawas ang gastos",
    "budget-source-label": "Pinagmulan:",
    "budget-source-blgf": "Bureau of Local Government Finance (BLGF)",
    "budget-source-blgf-detail":
      "– Pahayag ng mga Resibo at Gastos ayon sa LGU para sa FY 2024 (final)",

    // Infrastructure and project transparency
    "budget-infra-label": "Mga Pampublikong Gawain",
    "budget-infra-title": "Imprastruktura at Transparensiya sa Proyekto",
    "budget-infra-subtitle": `Opisyal na pinagmulan ng mga rekord ng pampublikong gawain at pagbili ng ${siteConfig.municipalityName}`,
    "budget-dpwh-section-title": `Mga Proyektong Imprastruktura ng DPWH sa ${siteConfig.municipalityName}`,
    "budget-dpwh-section-desc": `Mga kontrata ng DPWH sa ${siteConfig.municipalityName}, 2016–2026, na ipinatupad ng DPWH ${siteConfig.province} 2nd at 3rd District Engineering Offices`,
    "budget-tag-national": "Pambansa",
    "budget-tag-lgu": "LGU",
    "budget-tag-roads-bridges": "Mga Kalsada at Tulay",
    "budget-tag-budget-procurement": "Badyet at Pagbili",
    "budget-tag-legislation": "Lehislatura",
    "budget-dpwh-offices-title": `DPWH ${siteConfig.province} 2nd at 3rd District Engineering Offices`,
    "budget-dpwh-offices-desc": `Mga pambansang kalsada, tulay, at proyektong kontrol ng baha na ipinatupad sa ${siteConfig.municipalityName}`,
    "budget-source-dpwh": "DPWH Transparency Portal",
    "budget-link-view-projects": "Tingnan ang mga proyekto",
    "budget-seal-title": `Transparency Seal ng ${siteConfig.municipalityName}`,
    "budget-seal-desc":
      "Taunan at pandagdag na badyet, mga programa, proyekto, at ulat ng pagbili",
    "budget-link-open-transparency": "Buksan ang pahina ng transparensiya",
    "budget-sb-title": `Sangguniang Bayan ng ${siteConfig.municipalityName}`,
    "budget-sb-desc":
      "Mga ordinansa, resolusyon, at taunang agenda sa lehislatura",
    "budget-link-visit-sb": "Bisitahin ang pahina ng SB",

    // DPWH projects table
    "budget-summary-projects": "Mga Proyekto",
    "budget-summary-investment": "Kabuuang Puhunan",
    "budget-summary-completed": "Natapos",
    "budget-summary-ongoing": "Isinasagawa",
    "budget-summary-procurement": "Para sa Pagbili",
    "budget-filter-all": "Lahat",
    "budget-filter-roads": "Mga Kalsada",
    "budget-filter-bridges": "Mga Tulay",
    "budget-filter-buildings": "Mga Gusali",
    "budget-filter-flood": "Kontrol ng Baha",
    "budget-filter-water": "Tubig",
    "budget-th-description": "Paglalarawan ng Kontrata",
    "budget-th-contractor": "Kontratista",
    "budget-th-cost": "Halaga",
    "budget-th-status": "Katayuan",
    "budget-th-completed": "Natapos",
    "budget-contractor-id": "ID ng Kontratista: {id}",
    "budget-badge-bidding": "Para sa Bidding",
    "budget-load-more": "Magpakita ng higit pa",
    "budget-load-more-remaining": "({count} ang natitira)",
    "budget-showing-all": "Ipinapakita ang lahat ng {count} proyekto",
    "budget-source-implemented":
      "· Ipinatupad ng {agency} · Nakuha noong {date}",

    // Budget charts
    "budget-chart-local-sources": "Lokal na Pinagkukunan",
    "budget-chart-external-sources": "Panlabas na Pinagkukunan (NTA)",
    "budget-chart-total-income": "Kabuuang Kita",
    "budget-chart-total-expenses": "Kabuuang Gastos",
    "budget-chart-gps": "Pangkalahatang Pampublikong Serbisyo",
    "budget-chart-social": "Serbisyong Panlipunan",
    "budget-chart-economic": "Serbisyong Pang-ekonomiya",
    "budget-chart-debt": "Pagbabayad ng Utang",
  },
};
