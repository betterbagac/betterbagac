import type { ServiceDetail } from "@/data/serviceDetailsContent";
import type { Language } from "@/types";
import { serviceBodyFil } from "./serviceDetailsBodyFil";

type ServiceDetailTranslation = {
  title: string;
  fullTitle: string;
  description: string;
};

/** Shared labels used by the quick-stat cards. */
const statLabels: Record<string, string> = {
  Location: "Lokasyon",
  Processing: "Pagproseso",
  Fee: "Bayad",
  Contact: "Kontak",
  "Office Hours": "Oras ng Opisina",
  "Who Can Apply": "Sino ang Maaaring Mag-apply",
  Records: "Mga Talaan",
  Hotline: "Hotline",
  "Stall Rental": "Upa ng Puwesto",
  Services: "Mga Serbisyo",
  Reports: "Mga Ulat",
  Rental: "Upa",
  Programs: "Mga Programa",
  "Payment Methods": "Paraan ng Pagbabayad",
  "Market Hours": "Oras ng Palengke",
  Hours: "Oras",
  For: "Para sa",
  Discount: "Diskwento",
  Deadline: "Palugit",
};

/** Category labels shown in breadcrumbs and badges. */
const categoryTerms: Record<string, string> = {
  Certificates: "Mga Sertipiko",
  Business: "Negosyo",
  Taxation: "Pagbubuwis",
  "Taxation & Payments": "Pagbubuwis at Pagbabayad",
  "Social Services": "Serbisyong Panlipunan",
  Health: "Kalusugan",
  Agriculture: "Agrikultura",
  Infrastructure: "Imprastraktura",
  Education: "Edukasyon",
  "Education & Scholarship": "Edukasyon at Iskolarship",
  "Public Safety": "Kaligtasan ng Publiko",
  Environment: "Kapaligiran",
  Government: "Pamahalaan",
  "LGU Offices": "Mga Opisina ng LGU",
};

/**
 * Filipino copy for the service detail headers. Long-form bodies (steps,
 * requirements, FAQs) stay in `serviceDetailsContent.ts`.
 */
const serviceTranslations: Record<string, ServiceDetailTranslation> = {
  "birth-certificate": {
    title: "Sertipiko ng Kapanganakan",
    fullTitle: "Sertipiko ng Kapanganakan (Lokal na Kopya)",
    description:
      "Opisyal na sertipikadong kopya ng sertipiko ng kapanganakan na nakarehistro sa Bagac",
  },
  "marriage-certificate": {
    title: "Sertipiko ng Kasal",
    fullTitle: "Pagpaparehistro at Kopya ng Sertipiko ng Kasal",
    description:
      "Irehistro o humiling ng certified true copy ng sertipiko ng kasal",
  },
  "death-certificate": {
    title: "Sertipiko ng Kamatayan",
    fullTitle:
      "Pagpaparehistro ng Sertipiko ng Kamatayan at Permit sa Paglibing",
    description:
      "Irehistro ang sertipiko ng kamatayan at kumuha ng permit sa paglibing o paglilipat",
  },
  "municipal-civil-registrar": {
    title: "Municipal Civil Registrar",
    fullTitle: "Tanggapan ng Municipal Civil Registrar",
    description:
      "Pagrerehistro ng kapanganakan, kamatayan, at kasal, pagwawasto, at sertipikadong kopya",
  },
  "business-permits-licensing": {
    title: "Business Permits & Licensing",
    fullTitle: "Tanggapan ng Business Permits & Licensing",
    description:
      "Mga permit sa negosyo, clearance ng Alkalde, at serbisyo sa lisensya",
  },
  "municipal-treasurer": {
    title: "Tanggapan ng Municipal Treasurer",
    fullTitle: "Tanggapan ng Municipal Treasurer",
    description: "Pagbabayad ng buwis, pagkolekta ng kita, at tax clearances",
  },
  "municipal-assessor": {
    title: "Tanggapan ng Municipal Assessor",
    fullTitle: "Tanggapan ng Municipal Assessor",
    description:
      "Assessment ng ari-arian, tax declarations, at mga talaan ng lupa",
  },
  "property-declaration": {
    title: "Property Declaration",
    fullTitle: "Tax Declaration at Talaan ng Ari-arian",
    description: "Paglipat o pag-update ng tax declaration ng ari-arian",
  },
  "tricycle-franchising": {
    title: "Tricycle Franchising",
    fullTitle: "Aplikasyon sa Franchise ng Tricycle",
    description: "Aplikasyon para sa tricycle-for-hire franchise",
  },
  "mswdo-services": {
    title: "Mga Serbisyo ng MSWDO",
    fullTitle: "Municipal Social Welfare & Development Office",
    description:
      "Mga programa sa kapakanang panlipunan, ID, at tulong pinansyal",
  },
  mswdo: {
    title: "MSWDO",
    fullTitle: "Municipal Social Welfare & Development Office",
    description:
      "Mga programa sa kapakanang panlipunan at pagpapaunlad ng komunidad",
  },
  "municipal-agriculture": {
    title: "Tanggapan ng Agrikultura",
    fullTitle: "Tanggapan ng Agrikultura ng Munisipalidad (MAGRO)",
    description:
      "Mga programa sa agrikultura, pagpaparehistro ng magsasaka, at tulong",
  },
  "municipal-engineering": {
    title: "Tanggapan ng Municipal Engineering",
    fullTitle: "Tanggapan ng Municipal Engineering",
    description:
      "Mga building permit, konstruksyon, at proyektong imprastraktura",
  },
  "municipal-planning": {
    title: "Pagpaplano at Pagpapaunlad",
    fullTitle: "Tanggapan ng Pagpaplano at Pagpapaunlad ng Munisipalidad",
    description: "Zoning, gamit ng lupa, at pagpaplano ng pagpapaunlad",
  },
  "municipal-budget": {
    title: "Tanggapan ng Badyet",
    fullTitle: "Tanggapan ng Badyet ng Munisipalidad",
    description:
      "Paghahanda ng badyet, appropriasyon, at pamamahala sa pananalapi",
  },
  "municipal-accounting": {
    title: "Tanggapan ng Accounting",
    fullTitle: "Tanggapan ng Accounting ng Munisipalidad",
    description: "Mga transaksyong pinansyal, payroll, at talaan ng accounting",
  },
  "human-resource-management": {
    title: "Human Resource Management",
    fullTitle: "Tanggapan ng Human Resource Management",
    description:
      "Service records, sertipiko ng trabaho, at serbisyong HR para sa mga kawani ng LGU",
  },
  "seedo-public-market": {
    title: "SEEDO Public Market",
    fullTitle: "Mga Serbisyo ng SEEDO Public Market",
    description:
      "Pag-upa ng puwesto sa palengke at mga serbisyo ng pampublikong palengke",
  },
  "seedo-slaughterhouse": {
    title: "SEEDO Slaughterhouse",
    fullTitle: "Mga Serbisyo ng SEEDO Slaughterhouse",
    description:
      "Mga serbisyo sa pagkatay ng alagang hayop at inspeksyon ng karne",
  },
  "municipal-general-services": {
    title: "Pangkalahatang Serbisyo",
    fullTitle: "Tanggapan ng Pangkalahatang Serbisyo ng Munisipalidad",
    description:
      "Pag-upa ng kagamitan, paggamit ng sasakyan, at pangkalahatang serbisyo",
  },
  "general-services": {
    title: "Pangkalahatang Serbisyo",
    fullTitle: "Pangkalahatang Serbisyo ng Munisipalidad",
    description: "Mga pangkalahatang serbisyong pampubliko at impormasyon",
  },
};

/** Apply the Filipino overlay to a service detail (no-op for English). */
export function localizeServiceDetail(
  detail: ServiceDetail,
  language: Language,
): ServiceDetail {
  if (language !== "fil") return detail;

  const header = serviceTranslations[detail.id];
  const body = serviceBodyFil[detail.id];
  if (!header && !body) return detail;

  return {
    ...detail,
    title: header?.title ?? detail.title,
    fullTitle: header?.fullTitle ?? detail.fullTitle,
    description: header?.description ?? detail.description,
    category: categoryTerms[detail.category] ?? detail.category,
    badgeText: categoryTerms[detail.badgeText] ?? detail.badgeText,
    quickStats: detail.quickStats.map((stat) => ({
      ...stat,
      label: statLabels[stat.label] ?? stat.label,
      value: body?.stats?.[stat.label] ?? stat.value,
    })),
    processSteps: detail.processSteps.map((step, index) => {
      const translated = body?.steps?.[index];
      return translated ? { ...step, ...translated } : step;
    }),
    requirements: detail.requirements.map((group, index) => {
      const translated = body?.requirements?.[index];
      return translated ? { ...group, ...translated } : group;
    }),
    faqs: detail.faqs.map((faq, index) => {
      const translated = body?.faqs?.[index];
      return translated ? { ...faq, ...translated } : faq;
    }),
    office: body?.office ? { ...detail.office, ...body.office } : detail.office,
    relatedServices: detail.relatedServices.map((related, index) => {
      const translated = body?.related?.[index];
      return translated ? { ...related, title: translated } : related;
    }),
  };
}
