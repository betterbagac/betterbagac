export const municipality = {
  name: "Bagac",
  province: "Bataan",
  officialName: "Municipality of Bagac",
  lguName: "LGU Bagac",
} as const;

export const project = {
  name: "BetterBagac",
  displayName: "Better Bagac",
  domain: "betterbagac.org",
  url: "https://betterbagac.org",
  repo: "https://github.com/betterbagac/betterbagac",
  volunteerEmail: "volunteer@betterbagac.org",
  license: "MIT | CC BY 4.0",
  version: "1.1.12",
} as const;

const fullName = `${project.name}.org`;

const streetAddress = `Governor J.J. Linao Road, ${municipality.name}, ${municipality.province} 2107`;

const filipizenBase = "https://www.filipizen.com/partners/bataan_bagac";

export const siteConfig = {
  ...project,

  municipality,
  municipalityName: municipality.name,
  province: municipality.province,
  lguName: municipality.lguName,

  fullName,

  title: `${fullName} | Independent Bagac Community Portal`,
  titleTemplate: `%s | ${fullName}`,
  description: `${fullName} is an independent, volunteer-run portal that compiles the services, budgets, statistics, and public records of the ${municipality.officialName}, ${municipality.province}. It is not an official government website.`,
  tagline: `An independent, volunteer-run guide to the services, programs, and public funds of the ${municipality.officialName} — built by residents of ${municipality.name}, for residents.`,
  keywords: [
    project.name,
    `${municipality.name} ${municipality.province}`,
    municipality.lguName,
    "municipal services",
  ],

  themeColor: "#0a3d5c",

  assets: {
    logo: "/assets/images/logo/betterbagac-logo-long.svg",
    logoWhite: "/assets/images/logo/betterbagac-logo-long-white.svg",
    favicon: "/assets/images/logo/favicon.svg",
    openGraph: "/assets/images/banners/opengraph.png",
  },

  /**
   * Categorical series colours for Chart.js, in draw order. Charts render to a
   * canvas, so they cannot read CSS custom properties; keeping the ramp here
   * means a fork restyles the charts in the same place as the rest of the
   * brand. Mirrors the palette in `public/assets/css/style.css`.
   */
  chartPalette: [
    "#0A3D5C", // Sea Navy
    "#FCD116", // Flag Yellow
    "#0A7C5E", // Verified Green
    "#0B5C8F", // Reference Blue
    "#0F5375", // Sea Mid
    "#7EB8B0", // Sea Glass
    "#5B3A24", // Narra
    "#C9A227", // Flag Yellow, deep
    "#8CACF3", // Reference Blue, light
    "#9A4E00", // Flag Ink
  ],

  /**
   * Contact details **published by the LGU** and reproduced here so residents can
   * find them. BetterBagac does not operate these lines and cannot transact or
   * decide for the Municipality. The project's own inbox is `project.volunteerEmail`.
   * Update from https://bagac.gov.ph/contact-us/ when it changes.
   */
  contact: {
    email: "ronmichaelalexisdelrosario@gmail.com",
    mobile: "09608848515",
    mobileDisplay: "0960 884 8515",
    phone: "0476120424",
    phoneDisplay: "(047) 612-0424",
    hours: "Mon-Fri: 8:00 AM - 5:00 PM",
    hoursShort: "Mon-Fri 8AM - 5PM",
    officeDays: "Monday - Friday",
    officeOpen: "8:00 AM - 5:00 PM",
    lunchBreak: "12:00 PM - 1:00 PM",
    address: streetAddress,
    hallAddress: `Municipal Hall, ${streetAddress.replace(` ${municipality.province} 2107`, "")}`,
  },

  geo: {
    latitude: 14.5951,
    longitude: 120.3918,
    label: `${municipality.name}, ${municipality.province}`,
    mapBbox: [120.3718, 14.5801, 120.4118, 14.6101],
  },

  hotlines: {
    emergency: "911",
    redCross: "143",
  },

  links: {
    /** Separate deployment: the FY2027 budget record. Not part of this app. */
    publicRecord: "https://transparency.betterbagac.org/",
    officialPortal: "https://bagac.gov.ph/",
    facebook: "https://www.facebook.com/LGUbagac",
    transparencySeal: "https://bagac.gov.ph/transparency-seal/",
    citizensCharter: "https://bagac.gov.ph/citizens-charter/",
    sangguniangBayan: "https://bagac.gov.ph/the-sanguniang-bayan/",
    contactUs: "https://bagac.gov.ph/contact-us/",
    industries: "https://bagac.gov.ph/industries/",
    openData: "https://data.gov.ph",
    foi: "https://www.foi.gov.ph/",
    blgf: "https://blgf.gov.ph/",
    cmci: "https://cmci.dti.gov.ph/",
    dpwh: "https://transparency.dpwh.gov.ph/",
    psa: "https://psa.gov.ph/",
    ordinances: "https://ordinances.ph/search",
    privacyCommission: "https://www.privacy.gov.ph",
    filipizen: {
      businessBilling: `${filipizenBase}/bpls/billing`,
      newBusiness: `${filipizenBase}/bpls/newbusiness`,
      renewBusiness: `${filipizenBase}/bpls/renewbusiness`,
      realPropertyTax: `${filipizenBase}/rptis/billing`,
      paymentOrder: `${filipizenBase}/po/billing`,
    },
  },

  costToPeople: "₱0",
} as const;

export type SiteConfig = typeof siteConfig;
