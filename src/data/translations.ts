import { budgetPage } from "@/data/i18n/budgetPage";
import { contactPage } from "@/data/i18n/contactPage";
import { faqPage } from "@/data/i18n/faqPage";
import { governmentPage } from "@/data/i18n/governmentPage";
import { homePage } from "@/data/i18n/homePage";
import { legalPages } from "@/data/i18n/legalPages";
import { legislativePage } from "@/data/i18n/legislativePage";
import { miscPages } from "@/data/i18n/miscPages";
import { servicePages } from "@/data/i18n/servicePages";
import { shell } from "@/data/i18n/shell";
import { statisticsPage } from "@/data/i18n/statisticsPage";
import type { TranslationDictionary } from "@/data/i18n/types";
import { siteConfig } from "@/data/site.config";
import type { Language, TranslationKeys } from "@/types";

/** Storage key shared by every language hook. */
export const LANGUAGE_STORAGE_KEY = "betterbagac-lang";

/** Legacy key written by the old context hook, still read on first load. */
export const LEGACY_LANGUAGE_STORAGE_KEY = "betterbagac_lang";

/**
 * Page-scoped dictionaries, merged below. Add new page keys to the matching
 * module in `src/data/i18n/` rather than growing this file.
 */
const pageDictionaries: TranslationDictionary[] = [
  shell,
  homePage,
  governmentPage,
  legislativePage,
  budgetPage,
  statisticsPage,
  contactPage,
  servicePages,
  miscPages,
  faqPage,
  legalPages,
];

const base: Record<Language, TranslationKeys> = {
  en: {
    // Navigation
    "nav-home": "Home",
    "nav-services": "Services",
    "nav-government": "Government",
    "nav-statistics": "Statistics",
    "nav-legislative": "Legislative",
    "nav-transparency": "Transparency",
    "nav-contact": "Contact",
    "nav-budget": "Budget",
    "nav-sitemap": "Sitemap",

    // Hero Section
    "hero-welcome": `Welcome to ${siteConfig.fullName}`,
    "hero-subtitle": `An independent, volunteer-run index of government services, records, and statistics for ${siteConfig.municipalityName}, ${siteConfig.province} — compiled from publicly available sources online.`,
    "hero-find-service": "Find a Service",

    // Popular Services
    "section-popular": "Popular Services",
    "section-popular-desc":
      "Quick access to frequently requested municipal services",
    "service-view-all-desc": "Browse complete directory",
    "service-certificates": "Certificates",
    "service-certificates-desc": "Birth, marriage, death certificates",
    "service-business": "Business Permits",
    "service-business-desc": "New permits and renewals",
    "service-tax": "Tax Payments",
    "service-tax-desc": "Property and business taxes",
    "service-social": "Social Services",
    "service-social-desc": "Senior citizen & PWD services",
    "service-health": "Health Services",
    "service-health-desc": "Medical assistance & programs",
    "btn-view-all-services": "View All Services",

    // Latest Updates
    "section-updates": "Latest Updates",
    "btn-view-all": "View All",

    // Municipal Leadership
    "section-leadership": "Municipal Leadership",
    "title-mayor": "Municipal Mayor",
    "title-vice-mayor": "Municipal Vice Mayor",
    "btn-view-officials": "View All Officials",

    // Contact Section
    "section-contact": "Municipal Hall Contacts",
    "section-contact-note":
      "Published by the Municipal Government of Bagac. BetterBagac is an independent project: it does not operate these lines, cannot process transactions, and does not speak for the LGU.",
    "contact-phone": "Municipal Hall trunkline",
    "contact-email": "Mayor's Office email",
    "contact-address": "Address",
    "contact-hours": siteConfig.contact.hours,
    "contact-response": "Published by the LGU",
    "contact-municipal-hall": "Municipal Hall",

    // Services Page
    "services-title": "Municipal Services Directory",
    "services-subtitle": `Browse all services offered by the ${siteConfig.municipality.officialName}`,
    "life-events-title": "Browse by Life Event",
    "life-events-subtitle":
      "Find services based on what's happening in your life",
    "life-starting-business": "Starting a Business",
    "life-getting-married": "Getting Married",
    "life-having-baby": "Having a Baby",
    "life-financial-help": "Need Financial Help",
    "life-senior": "Senior Citizen Services",
    "life-pwd": "Person with Disability",
    "life-building": "Building/Home Improvement",
    "life-trouble": "Got in Trouble",

    // Service Categories
    "cat-certificates": "Certificates & Vital Records",
    "cat-certificates-desc":
      "Birth, death, marriage certificates, and other vital records.",
    "cat-business": "Business & Trade",
    "cat-business-desc":
      "Business permits, licenses, and trade registration services.",
    "cat-social": "Social Services",
    "cat-social-desc":
      "Welfare programs, senior citizen services, PWD benefits, and financial aid.",
    "cat-health": "Health & Wellness",
    "cat-health-desc":
      "Vaccination programs, health certificates, and medical assistance.",
    "cat-tax": "Taxation & Payments",
    "cat-tax-desc": "Property tax, business tax, payments, and tax clearance.",
    "cat-agriculture": "Agriculture",
    "cat-agriculture-desc":
      "Agricultural loans, crop insurance, fertilizer assistance, and training.",
    "cat-infrastructure": "Infrastructure",
    "cat-infrastructure-desc":
      "Construction permits, road maintenance requests, and public facilities.",
    "cat-education": "Education",
    "cat-education-desc":
      "Scholarship programs, student assistance, and educational grants.",
    "cat-safety": "Public Safety",
    "cat-safety-desc":
      "Emergency services, disaster preparedness, and community safety programs.",
    "cat-environment": "Environment",
    "cat-environment-desc":
      "Environmental permits, waste management, and conservation programs.",

    // FAQ Page
    "faq-title": "Frequently Asked Questions",
    "faq-subtitle": "Find answers to common questions about municipal services",
    "faq-general": "General Questions",
    "faq-certificates": "Certificates & Documents",
    "faq-business": "Business & Permits",
    "faq-payments": "Payments & Fees",
    "faq-social": "Social Services",
    "faq-technical": "Technical Questions",
    "faq-still-questions": "Still have questions?",
    "faq-contact-help":
      "This site only compiles public information. For a decision on your own case, contact the municipal office that handles it — or email us if a page here is wrong or incomplete.",
    "faq-contact-cta": "See contact details",

    // Legislative
    "legislative-ordinances": "Ordinances",
    "legislative-resolutions": "Resolutions",

    // Footer
    "footer-title": siteConfig.displayName,
    "footer-desc": `An independent, volunteer-run information portal for ${siteConfig.municipalityName}, ${siteConfig.province}. Not an official government website.`,
    "footer-quick-links": "Quick Links",
    "footer-all-services": "All Services",
    "footer-officials": "Officials",
    "footer-contact-us": "Contact Us",
    "footer-faq": "FAQ",
    "footer-copyright": `${siteConfig.displayName}. All rights reserved.`,
    "footer-resources": "Resources",
    "footer-privacy": "Privacy Policy",
    "footer-terms": "Terms of Use",
    "accessibility-statement": "Accessibility Statement",
  },

  fil: {
    // Navigation - Filipino
    "nav-home": "Tahanan",
    "nav-services": "Mga Serbisyo",
    "nav-government": "Pamahalaan",
    "nav-statistics": "Estadistika",
    "nav-legislative": "Lehislatura",
    "nav-transparency": "Transparensiya",
    "nav-contact": "Makipag-ugnayan",
    "nav-budget": "Badyet",
    "nav-sitemap": "Mapa ng Site",

    // Hero Section
    "hero-welcome": `Maligayang Pagdating sa ${siteConfig.fullName}`,
    "hero-subtitle": `Isang malaya at boluntaryong indeks ng mga serbisyo, talaan, at estadistika ng pamahalaan para sa ${siteConfig.municipalityName}, ${siteConfig.province} — hinango mula sa mga pampublikong mapagkukunan sa internet.`,
    "hero-find-service": "Maghanap ng Serbisyo",

    // Popular Services
    "section-popular": "Mga Sikat na Serbisyo",
    "section-popular-desc":
      "Mabilis na pag-access sa mga madalas na serbisyong munisipyo",
    "service-view-all-desc": "Tingnan ang buong direktoryo",
    "service-certificates": "Mga Sertipiko",
    "service-certificates-desc":
      "Sertipiko ng kapanganakan, kasal, at kamatayan",
    "service-business": "Mga Permit sa Negosyo",
    "service-business-desc": "Bagong permit at pag-renew",
    "service-tax": "Pagbabayad ng Buwis",
    "service-tax-desc": "Buwis sa ari-arian at negosyo",
    "service-social": "Serbisyong Panlipunan",
    "service-social-desc": "Serbisyo para sa senior citizen at PWD",
    "service-health": "Serbisyong Pangkalusugan",
    "service-health-desc": "Tulong medikal at mga programa",
    "btn-view-all-services": "Tingnan Lahat ng Serbisyo",

    // Latest Updates
    "section-updates": "Pinakabagong Balita",
    "btn-view-all": "Tingnan Lahat",

    // Municipal Leadership
    "section-leadership": "Pamunuan ng Munisipalidad",
    "title-mayor": "Punong Bayan",
    "title-vice-mayor": "Bise Punong Bayan",
    "btn-view-officials": "Tingnan Lahat ng Opisyal",

    // Contact Section
    "section-contact": "Mga Ugnayan sa Munisipyo",
    "section-contact-note":
      "Inilathala ng Pamahalaang Munisipal ng Bagac. Ang BetterBagac ay isang malayang proyekto: hindi nito pinapatakbo ang mga linyang ito, hindi ito makakapagproseso ng transaksyon, at hindi ito nagsasalita para sa LGU.",
    "contact-phone": "Pangunahing linya ngMunisipyo",
    "contact-email": "Email ng Opisina ng Punong Bayan",
    "contact-address": "Tirahan",
    "contact-hours": `Lunes-Biyernes: ${siteConfig.contact.officeOpen}`,
    "contact-response": "Inilathala ng LGU",
    "contact-municipal-hall": "Munisipyo",

    // Services Page
    "services-title": "Direktoryo ng Serbisyong Munisipal",
    "services-subtitle": `Tingnan ang lahat ng serbisyong inaalok ng ${siteConfig.municipality.officialName}`,
    "life-events-title": "Maghanap Ayon sa Pangyayari sa Buhay",
    "life-events-subtitle":
      "Hanapin ang mga serbisyo batay sa nangyayari sa iyong buhay",
    "life-starting-business": "Magsimula ng Negosyo",
    "life-getting-married": "Magpakasal",
    "life-having-baby": "Magkaanak",
    "life-financial-help": "Kailangan ng Tulong Pinansyal",
    "life-senior": "Serbisyo para sa Senior Citizen",
    "life-pwd": "Taong may Kapansanan",
    "life-building": "Pagtatayo/Pagpapabuti ng Bahay",
    "life-trouble": "May Problema",

    // Service Categories
    "cat-certificates": "Mga Sertipiko at Vital Records",
    "cat-certificates-desc":
      "Sertipiko ng kapanganakan, kamatayan, kasal, at iba pang vital records.",
    "cat-business": "Negosyo at Kalakalan",
    "cat-business-desc":
      "Mga permit sa negosyo, lisensya, at serbisyo sa pagpaparehistro ng kalakalan.",
    "cat-social": "Serbisyong Panlipunan",
    "cat-social-desc":
      "Mga programa sa kapakanan, serbisyo para sa senior citizen, benepisyo ng PWD, at tulong pinansyal.",
    "cat-health": "Kalusugan at Kagalingan",
    "cat-health-desc":
      "Mga programa sa bakuna, health certificates, at tulong medikal.",
    "cat-tax": "Pagbubuwis at Pagbabayad",
    "cat-tax-desc":
      "Buwis sa ari-arian, buwis sa negosyo, pagbabayad, at tax clearance.",
    "cat-agriculture": "Agrikultura",
    "cat-agriculture-desc":
      "Mga pautang sa agrikultura, insurance sa pananim, tulong sa pataba, at pagsasanay.",
    "cat-infrastructure": "Imprastraktura",
    "cat-infrastructure-desc":
      "Mga permit sa konstruksyon, kahilingan sa pagpapanatili ng kalsada, at pampublikong pasilidad.",
    "cat-education": "Edukasyon",
    "cat-education-desc":
      "Mga programa sa iskolarship, tulong sa estudyante, at mga grant sa edukasyon.",
    "cat-safety": "Kaligtasan ng Publiko",
    "cat-safety-desc":
      "Mga serbisyong pang-emergency, paghahanda sa sakuna, at mga programa sa kaligtasan ng komunidad.",
    "cat-environment": "Kapaligiran",
    "cat-environment-desc":
      "Mga permit sa kapaligiran, pamamahala ng basura, at mga programa sa konserbasyon.",

    // FAQ Page
    "faq-title": "Mga Madalas Itanong",
    "faq-subtitle":
      "Hanapin ang mga sagot sa mga karaniwang tanong tungkol sa mga serbisyong munisipal",
    "faq-general": "Mga Pangkalahatang Tanong",
    "faq-certificates": "Mga Sertipiko at Dokumento",
    "faq-business": "Negosyo at Permit",
    "faq-payments": "Pagbabayad at Bayarin",
    "faq-social": "Serbisyong Panlipunan",
    "faq-technical": "Mga Teknikal na Tanong",
    "faq-still-questions": "May tanong pa ba kayo?",
    "faq-contact-help":
      "Nangongolekta lamang ng pampublikong impormasyon ang site na ito. Para sa desisyon sa inyong sariling usapin, makipag-ugnayan sa opisina ng munisipyo na humahawak nito — o mag-email sa amin kung may mali o kulang sa pahina dito.",
    "faq-contact-cta": "Tingnan ang mga detalye ng ugnayan",

    // Legislative
    "legislative-ordinances": "Mga Ordinansa",
    "legislative-resolutions": "Mga Resolusyon",

    // Footer
    "footer-title": siteConfig.displayName,
    "footer-desc": `Isang malaya at boluntaryong portal ng impormasyon para sa ${siteConfig.municipalityName}, ${siteConfig.province}. Hindi ito opisyal na website ng pamahalaan.`,
    "footer-quick-links": "Mabilis na Links",
    "footer-all-services": "Lahat ng Serbisyo",
    "footer-officials": "Mga Opisyal",
    "footer-contact-us": "Makipag-ugnayan sa Amin",
    "footer-faq": "Mga Madalas Itanong",
    "footer-copyright": `${siteConfig.displayName}. Nakalaan ang lahat ng karapatan.`,
    "footer-resources": "Mga Mapagkukunan",
    "footer-privacy": "Patakaran sa Privacy",
    "footer-terms": "Mga Tuntunin ng Paggamit",
    "accessibility-statement": "Pahayag ng Aksesibilidad",
  },
};

/** Flat dictionary per language: base keys plus every page module. */
export const translations: Record<Language, TranslationKeys> = {
  en: Object.assign({}, base.en, ...pageDictionaries.map((page) => page.en)),
  fil: Object.assign({}, base.fil, ...pageDictionaries.map((page) => page.fil)),
};
