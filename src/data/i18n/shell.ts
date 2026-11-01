import type { TranslationDictionary } from "@/data/i18n/types";
import { siteConfig } from "@/data/site.config";

/**
 * Shared shell strings: header, footer, hotline bar, info bar, 404 and 500.
 */
export const shell: TranslationDictionary = {
  en: {
    // Header
    "header-main-nav": "Main Navigation",
    "header-ordinance-framework": "Ordinance Framework",
    "header-resolution-framework": "Resolution Framework",
    "header-switch-en": "Switch to English",
    "header-switch-fil": "Switch to Filipino",
    "header-open-menu": "Open navigation menu",
    "header-close-menu": "Close navigation menu",

    // Hotline bar
    "hotline-emergency": "Emergency",
    "hotline-mayor": "Mayor's Office",
    "hotline-fire-rescue": "Fire & Rescue",
    "hotline-mdrrmo": `MDRRMO ${siteConfig.municipalityName}`,
    "hotline-volunteer": "Volunteer with us",

    // Info bar
    "infobar-aria": "Real-time information",

    // Footer
    "footer-sitemap": "Sitemap",
    "footer-citizens-charter": "Citizen's Charter",
    "footer-accessibility": "Accessibility",
    "footer-open-data": "Open Data Philippines",
    "footer-foi": "Freedom of Information",
    "footer-official-portal": `Official ${siteConfig.lguName} Portal`,
    "footer-sangguniang-bayan": "Sangguniang Bayan",
    "footer-facebook": `${siteConfig.lguName} Facebook`,
    "footer-blgf": "BLGF Portal",
    "footer-cmci": "CMCI DTI Portal",
    "footer-cost": `Cost to the People of ${siteConfig.municipalityName} =`,
    "footer-volunteer": "Volunteer with us",
    "footer-contribute": "Contribute code with us",
    "footer-source-note":
      "All public information sourced from official government portals.",
    "footer-version": "Ver.",

    // Error pages
    "error-500-title": "Server Error",
    "error-500-desc":
      "Something went wrong on our end. This has been logged and our team will look into it. Please try again later or return to the homepage.",
    "error-retry": "Try Again",
    "error-home": "Go to Homepage",
    "nf-404-title": "Page Not Found",
    "nf-404-desc":
      "The requested page is not accessible at this time. It may be undergoing development, subject to approval, or reserved for research purposes. We appreciate your understanding and encourage you to revisit soon.",
    "nf-browse-services": "Browse Services",
  },

  fil: {
    // Header
    "header-main-nav": "Pangunahing Nabigasyon",
    "header-ordinance-framework": "Balangkas ng Ordinansa",
    "header-resolution-framework": "Balangkas ng Resolusyon",
    "header-switch-en": "Ilipat sa Ingles",
    "header-switch-fil": "Ilipat sa Filipino",
    "header-open-menu": "Buksan ang menu ng nabigasyon",
    "header-close-menu": "Isara ang menu ng nabigasyon",

    // Hotline bar
    "hotline-emergency": "Emerhensiya",
    "hotline-mayor": "Opisina ng Punong Bayan",
    "hotline-fire-rescue": "Sunog at Pagsagip",
    "hotline-mdrrmo": `MDRRMO ${siteConfig.municipalityName}`,
    "hotline-volunteer": "Magboluntaryo kasama namin",

    // Info bar
    "infobar-aria": "Impormasyon sa real-time",

    // Footer
    "footer-sitemap": "Mapa ng Site",
    "footer-citizens-charter": "Citizen's Charter",
    "footer-accessibility": "Aksesibilidad",
    "footer-open-data": "Open Data Philippines",
    "footer-foi": "Kalayaan sa Impormasyon",
    "footer-official-portal": `Opisyal na Portal ng ${siteConfig.lguName}`,
    "footer-sangguniang-bayan": "Sangguniang Bayan",
    "footer-facebook": `Facebook ng ${siteConfig.lguName}`,
    "footer-blgf": "Portal ng BLGF",
    "footer-cmci": "Portal ng CMCI DTI",
    "footer-cost": `Gastos para sa Mga Tao ng ${siteConfig.municipalityName} =`,
    "footer-volunteer": "Magboluntaryo kasama namin",
    "footer-contribute": "Mag-ambag ng code kasama namin",
    "footer-source-note":
      "Lahat ng pampublikong impormasyon ay mula sa mga opisyal na portal ng pamahalaan.",
    "footer-version": "Bersyon",

    // Error pages
    "error-500-title": "Error sa Server",
    "error-500-desc":
      "May naganap na problema sa aming panig. Naitala na ito at susuriin ng aming koponan. Subukan muli mamaya o bumalik sa homepage.",
    "error-retry": "Subukang Muli",
    "error-home": "Pumunta sa Homepage",
    "nf-404-title": "Hindi Natagpuan ang Pahina",
    "nf-404-desc":
      "Hindi maaaring ma-access ang hiniling na pahina sa ngayon. Maaaring ito ay ginagawa pa, hinihintay ang pag-apruba, o nakalaan para sa pananaliksik. Salamat sa inyong pag-unawa at inaanyayahan naming muli kayong bumisita.",
    "nf-browse-services": "Tingnan ang mga Serbisyo",
  },
};
