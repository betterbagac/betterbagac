import type { TranslationDictionary } from "@/data/i18n/types";
import { siteConfig } from "@/data/site.config";

/** Statistics page (`/statistics`) and its charts. */
export const statisticsPage: TranslationDictionary = {
  en: {
    // Page chrome
    "stats-breadcrumb-aria": "Breadcrumb",
    "stats-hero-badge": "Municipal Data",
    "stats-title": "Municipal Statistics",
    "stats-subtitle": `Data and statistics about ${siteConfig.municipalityName}, ${siteConfig.province}`,

    // Key metrics
    "stats-metric-population": "Population",
    "stats-metric-population-source": "2024 Census",
    "stats-metric-barangays": "Barangays",
    "stats-metric-barangays-source": "Administrative Units",
    "stats-metric-area": "Land Area (km²)",
    "stats-metric-area-source": "Total Municipal Area",
    "stats-metric-income-class": "Income Class",
    "stats-metric-income-class-value": "2nd",
    "stats-metric-income-class-source": "Municipality Classification",

    // Finance
    "stats-finance-tag": "Finance",
    "stats-finance-title": "Municipal Income",
    "stats-finance-subtitle":
      "Statement of receipts and expenditures, FY 2024 (final)",
    "stats-annual-revenue": "Annual Revenue",
    "stats-total-expenditure": "Total Expenditure",
    "stats-net-operating": "Net Operating Income",
    "stats-net-operating-detail": "Revenue less expenditure",
    "stats-financial-position": "Operating Result",
    "stats-revenue-exceeds":
      "Revenue of {revenue} exceeds expenditure of {expenditure} in FY 2024",
    "stats-local-share":
      "Locally sourced revenue {local}, {percent}% of total revenue",
    "stats-source": "Source:",
    "stats-source-blgf": "Bureau of Local Government Finance (BLGF)",
    "stats-source-blgf-detail":
      "– FY 2024 statement of receipts and expenditures by LGU (final)",

    // Population trends
    "stats-growth-tag": "Growth",
    "stats-pop-trends-title": "Population Trends",
    "stats-pop-trends-subtitle": "Historical growth from 1990 to 2024",
    "stats-growth-label": "Growth",

    // Distribution
    "stats-distribution-tag": "Distribution",
    "stats-pop-by-barangay": "Population by Barangay",
    "stats-pop-by-barangay-subtitle": "2020 Census of Population",
    "stats-view-all-barangays": "View all 14 barangays",
    "stats-source-psa": "Philippine Statistics Authority (PSA)",
    "stats-source-psa-census": "- 2020 Census (barangay level)",

    // Economy
    "stats-economy-tag": "Economy",
    "stats-economy-title": "Local Economy",
    "stats-economy-subtitle": "Farming, fishing, and household livelihoods",
    "stats-agri-land": "Agricultural Land",
    "stats-agri-land-detail": "5.30% of the municipal area",
    "stats-rice-production": "Rice Production",
    "stats-rice-detail": "Municipal estimate, 2019",
    "stats-fish-catch": "Fish Catch",
    "stats-fish-detail": "2019, along a 28-km coastline",
    "stats-livelihood": "Livelihood Profile",
    "stats-livelihood-1":
      "Households citing farming or fishing as primary livelihood",
    "stats-livelihood-2": "Coastal barangays along Bagac Bay",
    "stats-livelihood-3": "Agricultural share of municipal land area",
    "stats-source-industries-suffix": "(2019 municipal data)",

    // Poverty
    "stats-poverty-tag": "Poverty",
    "stats-poverty-title": "Poverty Statistics",
    "stats-poverty-subtitle":
      "2021 and 2023 City and Municipal Level Poverty Estimates",
    "stats-poverty-ci": "PSA small area estimate",
    "stats-poverty-improved": "Improved",
    "stats-source-poverty": "- 2023 Poverty Estimates",

    // Competitive index
    "stats-competitiveness-tag": "Competitiveness",
    "stats-cmci-title": `${siteConfig.municipalityName} Competitive Index`,
    "stats-cmci-subtitle":
      "CMCI performance, 2016–2024 · 2024 overall rank: 44th (score 35.08)",
    "stats-rank-up": "Rank #{rank} (2023: #{previous})",
    "stats-pillar-trends": "Pillar Score Trends (2016–2024)",
    "stats-source-cmci":
      "DTI Cities and Municipalities Competitiveness Index (CMCI)",
    "stats-cmci-note":
      "· Scores are not directly comparable across years because pillar weights changed. No comparable 2018 score was reported.",

    // Visual
    "stats-visual-tag": "Visual",
    "stats-bar-chart-title": "Population Bar Chart",
    "stats-bar-chart-subtitle": "Comparative view of all 14 barangays",

    // Chart labels
    "stats-chart-population": "Population",
    "stats-chart-overall-rank": "Overall Rank",
    "stats-chart-economic-dynamism": "Economic Dynamism",
    "stats-chart-government-efficiency": "Government Efficiency",
    "stats-chart-infrastructure": "Infrastructure",
    "stats-chart-resiliency": "Resiliency",
    "stats-chart-innovation": "Innovation",
  },

  fil: {
    // Page chrome
    "stats-breadcrumb-aria": "Landas ng Pahina",
    "stats-hero-badge": "Datos ng Munisipalidad",
    "stats-title": "Estadistika ng Munisipalidad",
    "stats-subtitle": `Datos at estadistika tungkol sa ${siteConfig.municipalityName}, ${siteConfig.province}`,

    // Key metrics
    "stats-metric-population": "Populasyon",
    "stats-metric-population-source": "Senso 2024",
    "stats-metric-barangays": "Mga Barangay",
    "stats-metric-barangays-source": "Mga Yunit Administratibo",
    "stats-metric-area": "Lawak ng Lupa (km²)",
    "stats-metric-area-source": "Kabuuang Lawak ng Munisipalidad",
    "stats-metric-income-class": "Klase ng Kita",
    "stats-metric-income-class-value": "Ika-2",
    "stats-metric-income-class-source": "Klasipikasyon ng Munisipalidad",

    // Finance
    "stats-finance-tag": "Pananalapi",
    "stats-finance-title": "Kita ng Munisipalidad",
    "stats-finance-subtitle":
      "Pahayag ng mga resibo at gastos, FY 2024 (final)",
    "stats-annual-revenue": "Taunang Kita",
    "stats-total-expenditure": "Kabuuang Gastos",
    "stats-net-operating": "Netong Kita sa Operasyon",
    "stats-net-operating-detail": "Kita bawas ang gastos",
    "stats-financial-position": "Resulta ng Operasyon",
    "stats-revenue-exceeds":
      "Lumalampas ang kita na {revenue} sa gastos na {expenditure} noong FY 2024",
    "stats-local-share":
      "Lokal na kitang {local}, {percent}% ng kabuuang kita",
    "stats-source": "Pinagmulan:",
    "stats-source-blgf": "Bureau of Local Government Finance (BLGF)",
    "stats-source-blgf-detail":
      "– Pahayag ng mga resibo at gastos ayon sa LGU para sa FY 2024 (final)",

    // Population trends
    "stats-growth-tag": "Paglago",
    "stats-pop-trends-title": "Takbo ng Populasyon",
    "stats-pop-trends-subtitle":
      "Makasaysayang paglago mula 1990 hanggang 2024",
    "stats-growth-label": "Paglago",

    // Distribution
    "stats-distribution-tag": "Distribusyon",
    "stats-pop-by-barangay": "Populasyon Ayon sa Barangay",
    "stats-pop-by-barangay-subtitle": "Senso ng Populasyon 2020",
    "stats-view-all-barangays": "Tingnan ang lahat ng 14 na barangay",
    "stats-source-psa": "Philippine Statistics Authority (PSA)",
    "stats-source-psa-census": "- Senso 2020 (antas ng barangay)",

    // Economy
    "stats-economy-tag": "Ekonomiya",
    "stats-economy-title": "Lokal na Ekonomiya",
    "stats-economy-subtitle":
      "Pagsasaka, pangingisda, at kabuhayan ng sambahayan",
    "stats-agri-land": "Lupang Agrikultural",
    "stats-agri-land-detail": "5.30% ng lawak ng munisipalidad",
    "stats-rice-production": "Produksyon ng Palay",
    "stats-rice-detail": "Tantiyang munisipal, 2019",
    "stats-fish-catch": "Huli ng Isda",
    "stats-fish-detail": "2019, sa kahabaan ng 28-km na baybayin",
    "stats-livelihood": "Profile ng Kabuhayan",
    "stats-livelihood-1":
      "Mga sambahayang nagsasabing pagsasaka o pangingisda ang pangunahing kabuhayan",
    "stats-livelihood-2": "Mga baybaying barangay sa Look ng Bagac",
    "stats-livelihood-3":
      "Bahagi ng agrikultura sa lawak ng lupa ng munisipalidad",
    "stats-source-industries-suffix": "(datos ng munisipalidad 2019)",

    // Poverty
    "stats-poverty-tag": "Kahirapan",
    "stats-poverty-title": "Estadistika ng Kahirapan",
    "stats-poverty-subtitle":
      "Tantiyang Kahirapan sa Antas ng Lungsod at Munisipalidad 2021 at 2023",
    "stats-poverty-ci": "Tantiyang small area ng PSA",
    "stats-poverty-improved": "Bumuti",
    "stats-source-poverty": "- Tantiyang Kahirapan 2023",

    // Competitive index
    "stats-competitiveness-tag": "Kompetitibidad",
    "stats-cmci-title": `Competitive Index ng ${siteConfig.municipalityName}`,
    "stats-cmci-subtitle":
      "Pagganap sa CMCI, 2016–2024 · pangkalahatang ranggo 2024: ika-44 (iskor 35.08)",
    "stats-rank-up": "Ranggo #{rank} (2023: #{previous})",
    "stats-pillar-trends": "Takbo ng Iskor ng Pillar (2016–2024)",
    "stats-source-cmci":
      "DTI Cities and Municipalities Competitiveness Index (CMCI)",
    "stats-cmci-note":
      "· Hindi direktang maihahambing ang mga iskor sa iba't ibang taon dahil nagbago ang timbang ng mga pillar. Walang maihahambing na iskor noong 2018 na iniulat.",

    // Visual
    "stats-visual-tag": "Biswal",
    "stats-bar-chart-title": "Bar Chart ng Populasyon",
    "stats-bar-chart-subtitle": "Paghahambing ng lahat ng 14 na barangay",

    // Chart labels
    "stats-chart-population": "Populasyon",
    "stats-chart-overall-rank": "Pangkalahatang Ranggo",
    "stats-chart-economic-dynamism": "Dynamismong Pang-ekonomiya",
    "stats-chart-government-efficiency": "Kahusayan ng Pamahalaan",
    "stats-chart-infrastructure": "Imprastraktura",
    "stats-chart-resiliency": "Katatagan",
    "stats-chart-innovation": "Inobasyon",
  },
};
