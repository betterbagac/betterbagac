import type { TranslationDictionary } from "@/data/i18n/types";
import { siteConfig } from "@/data/site.config";

/** Accessibility, news and sitemap pages. */
export const miscPages: TranslationDictionary = {
  en: {
    // Accessibility statement
    "acc-title": "Accessibility Statement",
    "acc-subtitle": "Our commitment to digital accessibility for all citizens",
    "acc-conformant": "Conformant",
    "acc-commitment": "Our Commitment",
    "acc-commitment-desc": `${siteConfig.displayName} is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.`,
    "acc-features": "Accessibility Features",
    "acc-feature-keyboard-title": "Keyboard Navigation",
    "acc-feature-keyboard-desc":
      "All functionality available using only a keyboard.",
    "acc-feature-reader-title": "Screen Reader Support",
    "acc-feature-reader-desc": "Compatible with JAWS, NVDA, and VoiceOver.",
    "acc-feature-text-title": "Text Alternatives",
    "acc-feature-text-desc": "All images have descriptive alt text.",
    "acc-feature-contrast-title": "Color Contrast",
    "acc-feature-contrast-desc": "Meets WCAG AA contrast requirements.",
    "acc-feature-responsive-title": "Responsive Design",
    "acc-feature-responsive-desc": "Works on all devices and screen sizes.",
    "acc-feature-time-title": "No Time Limits",
    "acc-feature-time-desc": "No time limits on reading or interacting.",
    "acc-limitations": "Known Limitations",
    "acc-limit-pdf":
      "Some PDF documents may not be fully accessible to screen readers",
    "acc-limit-third-party":
      "Some third-party embedded content may have accessibility issues",
    "acc-alternative": "Alternative Access",
    "acc-alternative-desc":
      "If you encounter difficulty accessing any information, contact us:",
    "acc-technical": "Technical Specifications",
    "acc-promise": "Our Promise",
    "acc-promise-desc": `${siteConfig.displayName} is committed to ensuring that our digital services are accessible to all citizens, regardless of ability. We view accessibility not as a feature, but as a fundamental right.`,
    "acc-last-updated": "Last updated: {date}",

    // News
    "news-title": "News & Announcements",
    "news-badge": "News",
    "news-subtitle": `Stay updated with the latest news and announcements from the ${siteConfig.municipality.officialName}`,
    "news-badge-event": "Event",
    "news-badge-environment": "Environment",
    "news-read-more": "Read More",
    "news-item-1-title": "Temporary Suspension of Operations",
    "news-item-1-desc":
      "The LGU advised the public that operations of a beach house in Barangay Pag-asa were temporarily suspended for lack of a business permit, in line with existing laws and local ordinances.",
    "news-item-2-title": "MAS Bagac Congress 2025",
    "news-item-2-desc":
      "The MAS Bagac Congress 2025 was held at St. Vincent Ferrer Parish in Saysain, featuring a basketball tournament, fellowship, and leadership activities with MAS President Joven Nazareno.",
    "news-item-3-title": "DOT Mobile Accreditation Caravan",
    "news-item-3-desc":
      "The Department of Tourism conducted a mobile accreditation caravan in Bagac to help primary and secondary tourism enterprises learn about accreditation and its benefits.",
    "news-item-4-title": "Bagac Tops FY 2023 SGLG Incentive Fund",
    "news-item-4-desc":
      "Bagac placed first nationwide among local government units in the complete FY 2023 Seal of Good Local Governance Incentive Fund (SGLGIF).",
    "news-item-5-title": "International Coastal Cleanup",
    "news-item-5-desc":
      "Volunteers joined the cleanup in Barangay Pag-asa and the coastal barangays of Saysain, Paysawan, Binuangan, Quinawan, and Banawang.",

    // Sitemap
    "sm-nav-badge": "Navigation",
    "sm-subtitle": `Navigate all pages and services of ${siteConfig.displayName}`,
    "sm-service-categories": "Service Categories",
    "sm-offices": "Municipal Offices",
    "sm-gov-legislative": "Government & Legislative",
    "sm-gov-structure": "Government Structure",
    "sm-elected-officials": "Elected Officials",
    "sm-online-services": "Online Services",
    "sm-via-filipizen": "via Filipizen",
    "sm-online-1": "Business Billing & Payment",
    "sm-online-2": "New Business Application",
    "sm-online-3": "Business Permit Renewal",
    "sm-online-4": "Real Property Tax Payment",
    "sm-online-5": "Online Payment Order",
    "sm-external-resources": "External Resources",
    "sm-official-website": `Official ${siteConfig.municipalityName} Website`,
    "sm-facebook": "Facebook Page",
  },

  fil: {
    // Accessibility statement
    "acc-title": "Pahayag ng Aksesibilidad",
    "acc-subtitle":
      "Aming pangako sa digital na aksesibilidad para sa lahat ng mamamayan",
    "acc-conformant": "Sumusunod",
    "acc-commitment": "Aming Pangako",
    "acc-commitment-desc": `${siteConfig.displayName} ay nangangakong tiyakin ang digital na aksesibilidad para sa mga taong may kapansanan. Patuloy naming pinapabuti ang karanasan ng lahat at inilalapat ang mga kaugnay na pamantayan sa aksesibilidad.`,
    "acc-features": "Mga Tampok ng Aksesibilidad",
    "acc-feature-keyboard-title": "Nabigasyon sa Keyboard",
    "acc-feature-keyboard-desc":
      "Lahat ng gumagana ay maaaring gamitin gamit lamang ang keyboard.",
    "acc-feature-reader-title": "Suporta sa Screen Reader",
    "acc-feature-reader-desc": "Tugma sa JAWS, NVDA, at VoiceOver.",
    "acc-feature-text-title": "Alternatibong Teksto",
    "acc-feature-text-desc": "May mapaglarawang alt text ang lahat ng larawan.",
    "acc-feature-contrast-title": "Kontrast ng Kulay",
    "acc-feature-contrast-desc":
      "Sumusunod sa mga kinakailangan sa kontrast ng WCAG AA.",
    "acc-feature-responsive-title": "Responsive na Disenyo",
    "acc-feature-responsive-desc":
      "Gumagana sa lahat ng device at laki ng screen.",
    "acc-feature-time-title": "Walang Limitasyon sa Oras",
    "acc-feature-time-desc":
      "Walang limitasyon sa oras sa pagbabasa o pakikipag-ugnayan.",
    "acc-limitations": "Mga Kilalang Limitasyon",
    "acc-limit-pdf":
      "Maaaring hindi ganap na ma-access ng screen reader ang ilang PDF na dokumento",
    "acc-limit-third-party":
      "Maaaring may isyu sa aksesibilidad ang ilang naka-embed na nilalaman ng third party",
    "acc-alternative": "Alternatibong Paraan ng Pag-access",
    "acc-alternative-desc":
      "Kung nahihirapan kang ma-access ang anumang impormasyon, makipag-ugnayan sa amin:",
    "acc-technical": "Teknikal na Detalye",
    "acc-promise": "Aming Pangako",
    "acc-promise-desc": `${siteConfig.displayName} ay nangangakong tiyakin na ang aming mga digital na serbisyo ay naa-access ng lahat ng mamamayan, anuman ang kakayahan. Itinuturing namin ang aksesibilidad hindi lamang bilang tampok kundi bilang pangunahing karapatan.`,
    "acc-last-updated": "Huling na-update: {date}",

    // News
    "news-title": "Balita at mga Abiso",
    "news-badge": "Balita",
    "news-subtitle": `Manatiling updated sa pinakabagong balita at abiso mula sa ${siteConfig.municipality.officialName}`,
    "news-badge-event": "Kaganapan",
    "news-badge-environment": "Kapaligiran",
    "news-read-more": "Magbasa Pa",
    "news-item-1-title": "Pansamantalang Pagsuspinde ng Operasyon",
    "news-item-1-desc":
      "Nag-abiso ang LGU sa publiko na pansamantalang sinuspinde ang operasyon ng isang beach house sa Barangay Pag-asa dahil walang permit sa negosyo, alinsunod sa umiiral na batas at lokal na ordinansa.",
    "news-item-2-title": "MAS Bagac Congress 2025",
    "news-item-2-desc":
      "Ginanap ang MAS Bagac Congress 2025 sa St. Vincent Ferrer Parish sa Saysain, kasama ang torneo ng basketball, pakikisalamuha, at mga gawaing pampamunuan kasama si MAS President Joven Nazareno.",
    "news-item-3-title": "DOT Mobile Accreditation Caravan",
    "news-item-3-desc":
      "Nagsagawa ang Department of Tourism ng mobile accreditation caravan sa Bagac upang tulungan ang mga pangunahin at sekundaryong negosyong pang-turismo na malaman ang tungkol sa akreditasyon at mga benepisyo nito.",
    "news-item-4-title": "Nanguna ang Bagac sa FY 2023 SGLG Incentive Fund",
    "news-item-4-desc":
      "Nagawa ng Bagac na mauna sa buong bansa sa mga lokal na yunit ng pamahalaan sa kumpletong FY 2023 Seal of Good Local Governance Incentive Fund (SGLGIF).",
    "news-item-5-title": "International Coastal Cleanup",
    "news-item-5-desc":
      "Sumama ang mga boluntaryo sa cleanup sa Barangay Pag-asa at sa mga baybaying barangay ng Saysain, Paysawan, Binuangan, Quinawan, at Banawang.",

    // Sitemap
    "sm-nav-badge": "Nabigasyon",
    "sm-subtitle": `Tingnan ang lahat ng pahina at serbisyo ng ${siteConfig.displayName}`,
    "sm-service-categories": "Mga Kategorya ng Serbisyo",
    "sm-offices": "Mga Opisina ng Munisipalidad",
    "sm-gov-legislative": "Pamahalaan at Lehislatura",
    "sm-gov-structure": "Istraktura ng Pamahalaan",
    "sm-elected-officials": "Mga Halal na Opisyal",
    "sm-online-services": "Mga Serbisyong Online",
    "sm-via-filipizen": "sa pamamagitan ng Filipizen",
    "sm-online-1": "Pagsingil at Pagbabayad ng Negosyo",
    "sm-online-2": "Aplikasyon ng Bagong Negosyo",
    "sm-online-3": "Pag-renew ng Permit sa Negosyo",
    "sm-online-4": "Pagbabayad ng Buwis sa Ari-arian",
    "sm-online-5": "Online na Order ng Pagbabayad",
    "sm-external-resources": "Mga Panlabas na Mapagkukunan",
    "sm-official-website": `Opisyal na Website ng ${siteConfig.municipalityName}`,
    "sm-facebook": "Pahina sa Facebook",
  },
};
