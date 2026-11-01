import {
  type CategoryContent,
  categoriesContent,
} from "@/data/categoriesContent";
import type { Language } from "@/types";

type ServiceTranslation = { title: string; description: string };

type CategoryTranslation = {
  name: string;
  badgeText: string;
  description: string;
  services: Record<string, ServiceTranslation>;
  offices?: Record<string, { description: string }>;
};

/**
 * Filipino copy for the service catalog. The catalog lives in
 * `categoriesContent.ts` (English source of truth), so translations are kept
 * as an overlay keyed by category / service id to avoid duplicating structure.
 */
const categoryTranslations: Record<string, CategoryTranslation> = {
  certificates: {
    name: "Mga Sertipiko at Vital Records",
    badgeText: "Mga Sertipiko",
    description:
      "Mga opisyal na dokumento para sa kapanganakan, kamatayan, kasal, at iba pang vital records",
    services: {
      "birth-cert": {
        title: "Sertipiko ng Kapanganakan",
        description:
          "Kumuha ng sertipikadong kopya ng sertipiko ng kapanganakan na nakarehistro sa Bagac",
      },
      "marriage-cert": {
        title: "Sertipiko ng Kasal",
        description:
          "Irehistro o humiling ng certified true copy ng sertipiko ng kasal",
      },
      "death-cert": {
        title: "Sertipiko ng Kamatayan",
        description:
          "Irehistro ang sertipiko ng kamatayan at kumuha ng permit sa paglibing o paglilipat",
      },
      "brgy-clearance": {
        title: "Barangay Clearance",
        description: "Sertipiko ng paninirahan mula sa inyong barangay",
      },
      "brgy-id": {
        title: "Barangay ID",
        description: "Opisyal na identification card ng barangay",
      },
      "police-clearance": {
        title: "Police Clearance",
        description:
          "Koordinasyon sa police clearance sa pamamagitan ng tanggapan ng munisipalidad",
      },
    },
    offices: {
      "Municipal Civil Registrar": {
        description:
          "Pagrerehistro ng kapanganakan, kamatayan, at kasal, pagwawasto, at sertipikadong kopya",
      },
      "Human Resource Management": {
        description:
          "Service records, sertipiko ng trabaho, at leave credits para sa mga kawani ng LGU",
      },
    },
  },

  business: {
    name: "Negosyo at Kalakalan",
    badgeText: "Negosyo",
    description:
      "Mga permit sa negosyo, lisensya, at serbisyo sa pagpaparehistro ng kalakalan",
    services: {
      "business-permit": {
        title: "Permit sa Negosyo",
        description:
          "Bagong aplikasyon ng permit sa negosyo para sa komersyal na operasyon",
      },
      "business-renewal": {
        title: "Pag-renew ng Permit sa Negosyo",
        description: "Taunang pag-renew ng umiiral na permit sa negosyo",
      },
      "mayors-clearance": {
        title: "Clearance ng Alkalde",
        description:
          "Clearance mula sa Opisina ng Alkalde para sa operasyon ng negosyo",
      },
      "tricycle-franchise": {
        title: "Franchise ng Tricycle",
        description: "Aplikasyon para sa tricycle-for-hire franchise",
      },
      "sanitary-permit": {
        title: "Sanitary Permit",
        description:
          "Permit sa kalinisan at kalusugan para sa mga establisyimentong pagkain",
      },
      "fire-safety": {
        title: "Sertipiko ng Kaligtasan sa Sunog",
        description:
          "Sertipiko ng inspeksyon sa kaligtasan sa sunog para sa lugar ng negosyo",
      },
    },
    offices: {
      "Business Permits & Licensing": {
        description:
          "Mga permit sa negosyo, clearance ng Alkalde, at serbisyo sa lisensya",
      },
      "Municipal Treasurer's Office": {
        description: "Pagbabayad ng buwis sa negosyo at pagkolekta ng bayad",
      },
    },
  },

  "tax-payments": {
    name: "Pagbubuwis at Pagbabayad",
    badgeText: "Pagbubuwis",
    description:
      "Buwis sa ari-arian, buwis sa negosyo, pagbabayad, at tax clearance",
    services: {
      rpt: {
        title: "Buwis sa Ari-arian",
        description:
          "Pagbabayad ng taunang buwis sa ari-arian para sa lupa at gusali",
      },
      "tax-clearance": {
        title: "Tax Clearance",
        description: "Sertipiko na walang utang sa buwis",
      },
      "tax-declaration": {
        title: "Tax Declaration",
        description: "Paglipat o pag-update ng tax declaration ng ari-arian",
      },
      "business-tax": {
        title: "Buwis sa Negosyo",
        description: "Pagbabayad ng mga buwis at bayad sa negosyo",
      },
      cedula: {
        title: "Community Tax Certificate",
        description: "Cedula o sertipiko ng paninirahan",
      },
      assessment: {
        title: "Assessment ng Ari-arian",
        description: "Pag-assess ng ari-arian para sa layunin ng pagbubuwis",
      },
    },
    offices: {
      "Municipal Treasurer's Office": {
        description:
          "Pagbabayad ng buwis, pagkolekta ng kita, at tax clearances",
      },
      "Municipal Assessor's Office": {
        description:
          "Assessment ng ari-arian, tax declarations, at mga talaan ng lupa",
      },
    },
  },

  "social-services": {
    name: "Serbisyong Panlipunan",
    badgeText: "Serbisyong Panlipunan",
    description:
      "Mga programa sa kapakanan, serbisyo para sa senior citizen, benepisyo ng PWD, at tulong pinansyal",
    services: {
      "senior-id": {
        title: "ID ng Senior Citizen",
        description:
          "Pagpaparehistro at ID para sa mga mamamayang 60 taong gulang pataas",
      },
      "pwd-id": {
        title: "ID ng PWD",
        description: "Pagpaparehistro at ID para sa mga taong may kapansanan",
      },
      "solo-parent": {
        title: "ID ng Solo Parent",
        description: "Pagpaparehistro para sa mga benepisyo ng solo parent",
      },
      "financial-aid": {
        title: "Tulong Pinansyal",
        description:
          "Pang-emerhensiyang tulong pinansyal para sa mahihirap na pamilya",
      },
      "burial-assist": {
        title: "Tulong sa Paglibing",
        description: "Tulong pinansyal para sa gastos sa paglibing",
      },
      "medical-assist": {
        title: "Tulong Medikal",
        description: "Tulong para sa pagpapaospital at gastos medikal",
      },
    },
    offices: {
      MSWDO: {
        description:
          "Mga programa sa kapakanang panlipunan, ID, at tulong pinansyal",
      },
    },
  },

  health: {
    name: "Kalusugan at Kagalingan",
    badgeText: "Kalusugan",
    description:
      "Mga programa sa bakuna, health certificates, at tulong medikal",
    services: {
      "health-cert": {
        title: "Health Certificate",
        description: "Sertipiko medikal para sa trabaho at paghawak ng pagkain",
      },
      vaccination: {
        title: "Serbisyo sa Bakuna",
        description: "Regular na imunisasyon at bakuna laban sa COVID-19",
      },
      prenatal: {
        title: "Prenatal Care",
        description: "Prenatal checkup at pagmamanman para sa mga buntis",
      },
      dental: {
        title: "Serbisyong Dental",
        description: "Dental checkup, pagbunot ng ngipin, at paggamot",
      },
      "tb-dots": {
        title: "Programang TB-DOTS",
        description: "Screening, paggamot, at pagmamanman sa tuberculosis",
      },
      "medical-consult": {
        title: "Konsultasyong Medikal",
        description: "Pangkalahatang konsultasyong medikal at paggamot",
      },
    },
    offices: {
      "Municipal Health Office": {
        description: "Mga programa sa kalusugan, bakuna, at serbisyong medikal",
      },
    },
  },

  agriculture: {
    name: "Agrikultura",
    badgeText: "Agrikultura",
    description:
      "Mga pautang sa agrikultura, insurance sa pananim, tulong sa pataba, at pagsasanay",
    services: {
      rsbsa: {
        title: "Pagpaparehistro sa RSBSA",
        description: "Registry System for Basic Sectors in Agriculture",
      },
      fertilizer: {
        title: "Tulong sa Pataba",
        description: "Pamamahagi ng subsidiya sa pataba sa mga magsasaka",
      },
      seeds: {
        title: "Pamamahagi ng Binhi",
        description:
          "Libre o subsidiya na binhi para sa mga rehistradong magsasaka",
      },
      livestock: {
        title: "Programa sa Alagang Hayop",
        description: "Pamamahagi ng alagang hayop at serbisyong beterinaryo",
      },
      "agri-training": {
        title: "Pagsasanay sa Agrikultura",
        description: "Mga teknik sa pagsasaka at pagsasanay sa kabuhayan",
      },
      "crop-insurance": {
        title: "Insurance sa Pananim",
        description: "Mga programa ng Philippine Crop Insurance Corporation",
      },
    },
    offices: {
      "Municipal Agriculture Office": {
        description: "Mga programa, tulong, at pagpaparehistro sa agrikultura",
      },
    },
  },

  infrastructure: {
    name: "Imprastraktura",
    badgeText: "Imprastraktura",
    description:
      "Mga permit sa konstruksyon, kahilingan sa pagpapanatili ng kalsada, at pampublikong pasilidad",
    services: {
      "building-permit": {
        title: "Building Permit",
        description: "Permit para sa konstruksyon o renovasyon ng gusali",
      },
      "fence-permit": {
        title: "Permit sa Bakod",
        description: "Permit para sa paggawa ng bakod",
      },
      excavation: {
        title: "Permit sa Paghuhukay",
        description: "Permit para sa paghuhukay sa kalsada o lupa",
      },
      occupancy: {
        title: "Occupancy Permit",
        description: "Sertipiko ng occupancy para sa natapos na gusali",
      },
      "road-maintenance": {
        title: "Kahilingan sa Pagpapanatili ng Kalsada",
        description:
          "Kahilingan para sa pagkukumpuni at pagpapanatili ng kalsada",
      },
      zoning: {
        title: "Zoning Clearance",
        description: "Sertipiko ng pagsunod sa gamit ng lupa at zoning",
      },
    },
    offices: {
      "Municipal Engineering Office": {
        description: "Mga building permit, konstruksyon, at imprastraktura",
      },
      "Municipal Planning & Development": {
        description: "Zoning, gamit ng lupa, at pagpaplano ng pagpapaunlad",
      },
    },
  },

  education: {
    name: "Edukasyon at Iskolarship",
    badgeText: "Edukasyon",
    description:
      "Mga programa sa iskolarship, tulong sa estudyante, at grant sa edukasyon",
    services: {
      scholarship: {
        title: "Iskolarship ng Munisipalidad",
        description:
          "Programa ng iskolarship para sa mga kwalipikadong estudyante",
      },
      "education-assist": {
        title: "Tulong sa Edukasyon",
        description: "Isang beses na tulong pinansyal para sa mga estudyante",
      },
      als: {
        title: "Programang ALS",
        description:
          "Alternative Learning System para sa mga kabataang hindi nag-aaral",
      },
      daycare: {
        title: "Serbisyo sa Day Care",
        description:
          "Programa sa pangangalaga at pagpapaunlad ng maagang pagkabata",
      },
      tesda: {
        title: "Mga Programang TESDA",
        description: "Technical-vocational na edukasyon at pagsasanay",
      },
      library: {
        title: "Pampublikong Aklatan",
        description: "Access sa mga aklat at kagamitan sa pag-aaral",
      },
    },
    offices: {
      "Mayor's Office - Scholarship": {
        description: "Mga programa ng iskolarship ng munisipalidad",
      },
    },
  },

  "public-safety": {
    name: "Kaligtasan ng Publiko",
    badgeText: "Kaligtasan ng Publiko",
    description:
      "Mga serbisyong pang-emerhensiya, paghahanda sa sakuna, at mga programa sa kaligtasan ng komunidad",
    services: {
      "disaster-prep": {
        title: "Paghahanda sa Sakuna",
        description: "Pagsasanay at impormasyon sa paghahanda sa emerhensiya",
      },
      "emergency-response": {
        title: "Pagtugon sa Emerhensiya",
        description: "24/7 na pagtugon sa emerhensiya at serbisyo sa pagsagip",
      },
      evacuation: {
        title: "Tulong sa Paglikas",
        description: "Suporta sa paglikas tuwing may sakuna",
      },
      relief: {
        title: "Operasyon ng Relief",
        description: "Pamamahagi ng relief goods tuwing may kalamidad",
      },
      "fire-prevention": {
        title: "Pag-iwas sa Sunog",
        description: "Inspeksyon at mga programa sa pag-iwas sa sunog",
      },
      "peace-order": {
        title: "Kapayapaan at Kaayusan",
        description: "Kaligtasan ng komunidad at pag-iwas sa krimen",
      },
    },
    offices: {
      MDRRMO: {
        description:
          "Pagbawas ng panganib sa sakuna at pagtugon sa emerhensiya",
      },
    },
  },

  environment: {
    name: "Kapaligiran",
    badgeText: "Kapaligiran",
    description:
      "Mga permit sa kapaligiran, pamamahala ng basura, at mga programa sa konserbasyon",
    services: {
      "waste-mgmt": {
        title: "Pamamahala ng Basura",
        description: "Iskedyul ng koleksyon ng basura at tamang pagtatapon",
      },
      "tree-cutting": {
        title: "Permit sa Pagputol ng Puno",
        description: "Permit para sa pagputol ng puno sa loob ng munisipalidad",
      },
      "env-clearance": {
        title: "Environmental Clearance",
        description: "Sertipiko ng pagsunod sa kapaligiran",
      },
      "clean-air": {
        title: "Pagsunod sa Clean Air Act",
        description: "Pagsunod at pagmamanman sa kalidad ng hangin",
      },
      coastal: {
        title: "Pamamahala ng Yaman sa Baybayin",
        description: "Pangangalaga sa mga yaman ng baybayin at dagat",
      },
      "urban-greening": {
        title: "Urban Greening",
        description:
          "Mga programa sa pagtatanim ng puno at pagpapaganda ng lugar",
      },
    },
    offices: {
      "Municipal Environment & Natural Resources": {
        description: "Mga programa at permit sa kapaligiran",
      },
    },
  },
};

/** Fee/time values that are words rather than numbers. */
const termTranslations: Record<string, string> = {
  Free: "Libre",
  Varies: "Nag-iiba",
  "Same day": "Parehong araw",
  Subsidized: "May subsidiya",
  "Free/Subsidized": "Libre/May subsidiya",
  "Included in tax": "Kasama sa buwis",
  "Based on assessment": "Batay sa assessment",
  Ongoing: "Tuloy-tuloy",
  Seasonal: "Pana-panahon",
  Scheduled: "Naka-iskedyul",
  Semestral: "Kada semestre",
  "School year": "Taon ng pasukan",
  "Operating hours": "Oras ng operasyon",
  "As needed": "Kung kailangan",
  Immediate: "Agarang",
};

const localizeTerm = (value: string) => termTranslations[value] ?? value;

/** Apply the Filipino overlay to a category (returns the input for English). */
/** English catalog title -> Filipino copy, used by the search dropdown. */
const copyByTitle = new Map<string, ServiceTranslation>();
for (const category of categoriesContent) {
  const translation = categoryTranslations[category.id];
  if (!translation) continue;
  for (const service of category.services) {
    const copy = translation.services[service.id];
    if (copy) copyByTitle.set(service.title.toLowerCase(), copy);
  }
}

/** Localize a service's title and description by matching its English title. */
export function localizeServiceCopy<
  T extends { title: string; description: string },
>(service: T, language: Language): T {
  if (language !== "fil") return service;
  const copy = copyByTitle.get(service.title.toLowerCase());
  return copy ? { ...service, ...copy } : service;
}

export function localizeCategory(
  category: CategoryContent,
  language: Language,
): CategoryContent {
  if (language !== "fil") return category;

  const translation = categoryTranslations[category.id];
  if (!translation) return category;

  return {
    ...category,
    name: translation.name,
    badgeText: translation.badgeText,
    description: translation.description,
    services: category.services.map((service) => {
      const copy = translation.services[service.id];
      if (!copy) return service;

      return {
        ...service,
        ...copy,
        fee: localizeTerm(service.fee),
        time: localizeTerm(service.time),
      };
    }),
    offices: category.offices.map((office) => {
      const copy = translation.offices?.[office.title];
      return copy ? { ...office, ...copy } : office;
    }),
  };
}
