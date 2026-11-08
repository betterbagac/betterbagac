import type { Service, ServiceCategory } from "@/types";
import { categoriesContent } from "./categoriesContent";
import type { ServiceDetail } from "./serviceDetailsContent";
import servicesData from "./services.json";
import { siteConfig } from "./site.config";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "certificates",
    name: "Certificates & Vital Records",
    description:
      "Birth, death, marriage certificates, and other vital records.",
    icon: "bi-file-earmark-text-fill",
  },
  {
    id: "business",
    name: "Business, Trade & Investment",
    description: "Business permits, licenses, and trade registration services.",
    icon: "bi-shop",
  },
  {
    id: "social-services",
    name: "Social Services & Assistance",
    description:
      "Welfare programs, senior citizen services, PWD benefits, and financial aid.",
    icon: "bi-people-fill",
  },
  {
    id: "health",
    name: "Health & Wellness",
    description:
      "Vaccination programs, health certificates, and medical assistance.",
    icon: "bi-heart-pulse-fill",
  },
  {
    id: "tax-payments",
    name: "Taxation & Payments",
    description: "Property tax, business tax, payments, and tax clearance.",
    icon: "bi-cash-coin",
  },
  {
    id: "agriculture",
    name: "Agriculture & Economic Development",
    description:
      "Agricultural loans, crop insurance, fertilizer assistance, and training.",
    icon: "bi-tree-fill",
  },
  {
    id: "infrastructure",
    name: "Infrastructure & Public Works",
    description:
      "Construction permits, road maintenance requests, and public facilities.",
    icon: "bi-building",
  },
  {
    id: "education",
    name: "Education & Scholarship",
    description:
      "Scholarship programs, student assistance, and educational grants.",
    icon: "bi-mortarboard-fill",
  },
  {
    id: "public-safety",
    name: "Public Safety & Security",
    description:
      "Emergency services, disaster preparedness, and community safety programs.",
    icon: "bi-shield-fill",
  },
  {
    id: "environment",
    name: "Environment & Natural Resources",
    description:
      "Environmental permits, waste management, and conservation programs.",
    icon: "bi-tree",
  },
  {
    id: "online",
    name: "Online Services",
    description:
      "Digital services available through Filipizen and other online platforms.",
    icon: "bi-globe",
  },
  {
    id: "government",
    name: "Government Services",
    description: "General municipal services and administrative functions.",
    icon: "bi-bank",
  },
];

// The catalog. Every entry either points at an internal route under
// /service-details or, for services hosted elsewhere (Filipizen billing),
// at an absolute URL.
export const services = servicesData.services as Service[];

const EXTERNAL_URL = /^https?:\/\//;

export const isExternalServiceUrl = (url: string): boolean =>
  EXTERNAL_URL.test(url);

/** Slug used by `/service-details/[slug]`, derived from the stored route. */
export const getServiceSlug = (service: Service): string =>
  service.url.replace(/^\/service-details\//, "").replace(/\/+$/, "");

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find(
    (service) =>
      !isExternalServiceUrl(service.url) && getServiceSlug(service) === slug,
  );

/** Labels the fallback detail page needs in the active language. */
export interface ServiceDetailLabels {
  processing: string;
  fee: string;
  office: string;
  allServices: string;
}

/**
 * Builds a detail page for a catalog service that has no hand-written content
 * in `serviceDetailsContent.ts`. Only fields we actually hold are shown; the
 * page flags `isPartial` and points at the office rather than inventing steps,
 * requirements, or fees we cannot verify.
 */
export function buildServiceDetail(
  service: Service,
  labels: ServiceDetailLabels,
): ServiceDetail {
  const category = serviceCategories.find((c) => c.id === service.categoryId);
  const hasCategoryPage = categoriesContent.some(
    (c) => c.id === service.categoryId,
  );
  const categoryLink = hasCategoryPage
    ? `/services/${service.categoryId}`
    : "/services";

  const quickStats = [
    {
      icon: "bi-clock",
      label: labels.processing,
      value: service.processingTime,
    },
    { icon: "bi-cash", label: labels.fee, value: service.fee },
    { icon: "bi-building", label: labels.office, value: service.office },
  ].filter((stat) => Boolean(stat.value));

  return {
    id: service.id,
    title: service.title,
    fullTitle: service.title,
    category: category?.name ?? service.category,
    categoryLink,
    badgeText: category?.name ?? service.category,
    badgeIcon: category?.icon ?? "bi-grid",
    description: service.description,
    quickStats,
    processSteps: [],
    requirements: [],
    faqs: [],
    office: {
      name: service.office,
      location: "",
      phone: siteConfig.contact.phoneDisplay,
      hours: "",
    },
    relatedServices: [
      ...(hasCategoryPage
        ? [{ title: category?.name ?? service.category, link: categoryLink }]
        : []),
      { title: labels.allServices, link: "/services" },
    ],
    isPartial: true,
  };
}
