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

  title: `${fullName} | Official Portal`,
  titleTemplate: `%s | ${fullName}`,
  description: `${fullName} - Your digital gateway to ${municipality.lguName} services.`,
  tagline: `Empowering the people of ${municipality.name} with transparent access to the services, programs, and public funds of ${municipality.lguName}.`,
  keywords: [
    project.name,
    `${municipality.name} ${municipality.province}`,
    municipality.lguName,
    "municipal services",
  ],

  themeColor: "#1a5f2a",

  assets: {
    logo: "/assets/images/logo/betterbagac-logo-long.svg",
    logoWhite: "/assets/images/logo/betterbagac-logo-long-white.svg",
    favicon: "/assets/images/logo/favicon.svg",
    openGraph: "/assets/images/banners/opengraph.png",
  },

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
