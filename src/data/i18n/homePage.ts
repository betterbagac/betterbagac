import type { TranslationDictionary } from "@/data/i18n/types";
import { siteConfig } from "@/data/site.config";

/** Home page sections: hero, quick stats, weather map, history, news. */
export const homePage: TranslationDictionary = {
  en: {
    // Hero
    "hero-browse-services": "Browse Services",
    "hero-contact-us": "Contact Us",
    "hero-search-placeholder": "e.g., birth certificate, business permit",
    "hero-search-aria": "Search services",
    "hero-popular": "Popular:",
    "hero-tag-birth": "Birth Certificate",
    "hero-tag-business": "Business Permit",
    "hero-tag-rpt": "Real Property Tax",
    "home-leadership-note":
      "Contact details are the ones the LGU publishes for each office. BetterBagac reproduces them and does not relay messages.",

    // Quick stats
    "quickstats-title": `${siteConfig.municipalityName} at a Glance`,
    "quickstats-view": "View Statistics",
    "quickstats-population": "Population",
    "quickstats-population-source": "2024 Census",
    "quickstats-barangays": "Barangays",
    "quickstats-barangays-source": "Administrative Units",
    "quickstats-class": "Municipality",
    "quickstats-class-value": "2nd Class",
    "quickstats-class-source": "Income Classification",
    "quickstats-area": "Land Area",
    "quickstats-area-source": "Total Municipal Area",

    // Weather & map
    "weather-title": `Weather and Map of ${siteConfig.municipalityName}`,
    "weather-aria": `Current weather in ${siteConfig.municipalityName}`,
    "weather-map-aria": `Interactive map of ${siteConfig.geo.label}`,
    "weather-map-title": `Map of ${siteConfig.municipalityName}`,

    // History
    "history-title": `Brief History of ${siteConfig.municipalityName}`,
    "history-largest-title": "Largest in Bataan",
    "history-largest-desc":
      "With a land area of 231.20 square kilometers, Bagac is the largest municipality in the province by territory.",
    "history-zero-title": "Zero Kilometer",
    "history-zero-desc":
      "A marker and zero kilometer post now stand where the Bataan Death March began in Bagac during World War II.",
    "history-1578":
      "Bagac was founded by the **Franciscan Fathers** and formed part of the Corregimiento de Mariveles before Bataan became a province.",
    "history-1754":
      "Bataan was created as a province, and Bagac was placed under its jurisdiction.",
    "history-1896":
      "Local insurrectos led by **Jose Noriega** rose against Spanish rule, joined by Juan Bantay, Ildefonso Lucas Gonzales, and other Bagac natives.",
    "history-1900":
      "**Manuel L. Quezon**, then a major, married a Bagac maiden under Katipunan rites at the home of Florentina Banzon Gutierrez.",
    "history-1942":
      "The 25-kilometer **Bagac–Pilar defense line** held until the fall of Bataan. Bagac then became one of the starting points of the Bataan Death March.",
    "history-1975":
      "The **Bagac Friendship Tower** was inaugurated on April 8, 1975, near the point where the Death March began.",
    "history-2023":
      "Bagac placed **first nationwide** in the FY 2023 Seal of Good Local Governance Incentive Fund (SGLGIF).",

    // Latest updates
    "home-news-advisory": "Advisory",
    "home-news-program": "Program",
    "home-news-recognition": "Recognition",
    "home-news-1-title": "Temporary Suspension of Operations",
    "home-news-1-desc":
      "The LGU advised the public that operations of a beach house in Barangay Pag-asa were suspended for lack of a business permit.",
    "home-news-2-title": "MAS Bagac Congress 2025",
    "home-news-2-desc":
      "Youth leaders gathered at St. Vincent Ferrer Parish in Saysain for fellowship, sports, and leadership activities.",
    "home-news-3-title": "Top SGLG Incentive Fund Completer",
    "home-news-3-desc":
      "Bagac placed first nationwide among LGUs in the FY 2023 Seal of Good Local Governance Incentive Fund.",
  },

  fil: {
    // Hero
    "hero-browse-services": "Tingnan ang mga Serbisyo",
    "hero-contact-us": "Makipag-ugnayan",
    "hero-search-placeholder":
      "hal., sertipiko ng kapanganakan, permit sa negosyo",
    "hero-search-aria": "Maghanap ng serbisyo",
    "hero-popular": "Sikat:",
    "hero-tag-birth": "Sertipiko ng Kapanganakan",
    "hero-tag-business": "Permit sa Negosyo",
    "hero-tag-rpt": "Buwis sa Ari-arian",
    "home-leadership-note":
      "Ang mga detalye ng ugnayan ay yaong inilalathala ng LGU para sa bawat opisina. Ginagaya lamang ng BetterBagac ang mga ito at hindi ito nagpapasa ng mensahe.",

    // Quick stats
    "quickstats-title": `${siteConfig.municipalityName} sa Isang Tingin`,
    "quickstats-view": "Tingnan ang Estadistika",
    "quickstats-population": "Populasyon",
    "quickstats-population-source": "Senso 2024",
    "quickstats-barangays": "Mga Barangay",
    "quickstats-barangays-source": "Mga Yunit Administratibo",
    "quickstats-class": "Munisipalidad",
    "quickstats-class-value": "Ika-2 Klase",
    "quickstats-class-source": "Klasipikasyon ng Kita",
    "quickstats-area": "Lawak ng Lupa",
    "quickstats-area-source": "Kabuuang Lawak ng Munisipalidad",

    // Weather & map
    "weather-title": `Panahon at Mapa ng ${siteConfig.municipalityName}`,
    "weather-aria": `Kasalukuyang panahon sa ${siteConfig.municipalityName}`,
    "weather-map-aria": `Interaktibong mapa ng ${siteConfig.geo.label}`,
    "weather-map-title": `Mapa ng ${siteConfig.municipalityName}`,

    // History
    "history-title": `Maikling Kasaysayan ng ${siteConfig.municipalityName}`,
    "history-largest-title": "Pinakamalaki sa Bataan",
    "history-largest-desc":
      "Sa lawak na 231.20 kilometro kwadrado, ang Bagac ang pinakamalaking munisipalidad sa lalawigan ayon sa teritoryo.",
    "history-zero-title": "Kilometrong Zero",
    "history-zero-desc":
      "May marker at kilometrong zero post ngayon sa lugar kung saan nagsimula ang Bataan Death March sa Bagac noong Ikalawang Digmaang Pandaigdig.",
    "history-1578":
      "Itinatag ng **mga Prayleng Pransiskano** ang Bagac at naging bahagi ito ng Corregimiento de Mariveles bago naging lalawigan ang Bataan.",
    "history-1754":
      "Itinatag ang Bataan bilang lalawigan, at inilagay ang Bagac sa ilalim ng hurisdiksyon nito.",
    "history-1896":
      "Nag-alsa laban sa pamahalaang Kastila ang mga lokal na insurrecto na pinamunuan ni **Jose Noriega**, kasama sina Juan Bantay, Ildefonso Lucas Gonzales, at iba pang tubong Bagac.",
    "history-1900":
      "Si **Manuel L. Quezon**, noon ay isang major, ay nagpakasal sa isang dalagang taga-Bagac sa ilalim ng ritwal ng Katipunan sa tahanan ni Florentina Banzon Gutierrez.",
    "history-1942":
      "Ang 25-kilometrong **linya ng depensa ng Bagac–Pilar** ay nanindigan hanggang sa pagbagsak ng Bataan. Naging isa ang Bagac sa mga panimulang punto ng Bataan Death March.",
    "history-1975":
      "Pinasinayaan ang **Bagac Friendship Tower** noong Abril 8, 1975, malapit sa lugal kung saan nagsimula ang Death March.",
    "history-2023":
      "Nagawa ng Bagac na **mauna sa buong bansa** sa FY 2023 Seal of Good Local Governance Incentive Fund (SGLGIF).",

    // Latest updates
    "home-news-advisory": "Abiso",
    "home-news-program": "Programa",
    "home-news-recognition": "Pagkilala",
    "home-news-1-title": "Pansamantalang Pagsuspinde ng Operasyon",
    "home-news-1-desc":
      "Nag-abiso ang LGU sa publiko na sinuspinde ang operasyon ng isang beach house sa Barangay Pag-asa dahil walang permit sa negosyo.",
    "home-news-2-title": "MAS Bagac Congress 2025",
    "home-news-2-desc":
      "Nagtipon ang mga kabataang lider sa St. Vincent Ferrer Parish sa Saysain para sa pakikisalamuha, palakasan, at mga gawaing pampamunuan.",
    "home-news-3-title": "Nangunguna sa SGLG Incentive Fund",
    "home-news-3-desc":
      "Nagawa ng Bagac na mauna sa buong bansa sa mga LGU sa FY 2023 Seal of Good Local Governance Incentive Fund.",
  },
};
