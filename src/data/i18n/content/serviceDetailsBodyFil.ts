/**
 * Filipino copy for the body of each service detail page (steps, requirements,
 * FAQs, office details and stat values). Keys are service detail ids from
 * `src/data/serviceDetailsContent.ts`. Anything omitted falls back to English.
 */
export type ServiceBodyTranslation = {
  /** Quick-stat values keyed by the English stat label. */
  stats?: Record<string, string>;
  steps?: { title: string; description: string }[];
  requirements?: { title: string; items: string[] }[];
  faqs?: { question: string; answer: string }[];
  office?: { location?: string; hours?: string };
  /** Related-service titles, matched by position. */
  related?: string[];
};

export const serviceBodyFil: Record<string, ServiceBodyTranslation> = {
  "birth-certificate": {
    stats: {
      Processing: "15-30 Minuto",
      Fee: "₱150/kopya",
      "Who Can Apply": "May-ari/Kinatawan",
      Appointment: "Walk-in",
    },
    steps: [
      {
        title: "Tingnan ang Pagiging Kwalipikado",
        description:
          "Maaari kang humiling kung ikaw ang may-ari, magulang o tagapag-alaga, o awtorisadong kinatawan na may wastong liham ng pahintulot.",
      },
      {
        title: "Ihanda ang mga Dokumento",
        description:
          "Magdala ng valid na ID na inisyu ng pamahalaan. Kung kinatawan: liham ng pahintulot at mga ID ng may-ari at ng kinatawan.",
      },
      {
        title: "Pumunta sa Civil Registrar",
        description:
          "Pumunta sa Tanggapan ng Local Civil Registrar sa Ikalawang Palapag ng Munisipyo. Oras ng opisina: Lun-Biy, 8AM-5PM.",
      },
      {
        title: "Sagutan ang Form ng Kahilingan",
        description:
          "Kumpletuhin ang form ng kahilingan gamit ang buong pangalan, petsa ng kapanganakan, lugar ng kapanganakan, pangalan ng mga magulang, at layunin.",
      },
      {
        title: "Magbayad ng Bayad",
        description:
          "Magbayad ng ₱150 bawat sertipikadong kopya sa Tanggapan ng Municipal Treasurer (parehong gusali).",
      },
      {
        title: "Kunin ang Sertipiko",
        description:
          "Bumalik sa Civil Registrar dala ang opisyal na resibo. Ilalabas ang sertipiko sa loob ng 15-30 minuto kung may talaan.",
      },
    ],
    requirements: [
      {
        title: "Kung Ikaw ang May-ari",
        items: [
          "Valid na ID na inisyu ng pamahalaan (orihinal at photocopy)",
          "Bayad: ₱150 cash bawat kopya",
        ],
      },
      {
        title: "Kung Ikaw ay Kinatawan",
        items: [
          "Liham ng pahintulot na nilagdaan ng may-ari",
          "Photocopy ng valid ID ng may-ari",
          "Orihinal at photocopy ng valid ID ng kinatawan",
          "Bayad: ₱150 cash bawat kopya",
        ],
      },
    ],
    faqs: [
      {
        question:
          "Maaari ba akong kumuha ng sertipiko ng kapanganakan na nairehistro sa ibang munisipalidad?",
        answer:
          "Hindi. Ang Civil Registrar ng Bagac ay may talaan lamang ng mga kapanganakang nairehistro sa Bagac. Para sa ibang munisipalidad, humiling sa Civil Registrar ng munisipalidad na iyon o sa PSA.",
      },
      {
        question:
          "Paano kung hindi ko alam ang eksaktong petsa ng kapanganakan?",
        answer:
          "Magbigay ng tinatayang taon at buwan. Tutulungan ka ng kawani sa paghahanap ng talaan, ngunit maaaring tumagal ito nang bahagya.",
      },
      {
        question: "Maaari bang humiling sa pamamagitan ng email o online?",
        answer:
          "Sa ngayon, kailangang personal na humiling. May mga planong online na serbisyo sa hinaharap.",
      },
      {
        question: "Ano ang pagkakaiba ng lokal na kopya at kopya mula sa PSA?",
        answer:
          "Parehong certified true copy. Ang kopya mula sa PSA ay kinikilala sa buong bansa at kailangan sa pasaporte o visa. Ang lokal na kopya ay tinatanggap sa karamihan ng lokal na transaksyon at pagpapatala sa paaralan.",
      },
    ],
    office: { hours: "Lun-Biy: 8AM - 5PM" },
    related: [
      "Sertipiko ng Kasal",
      "Sertipiko ng Kamatayan",
      "Barangay Clearance",
    ],
  },

  "marriage-certificate": {
    stats: {
      Processing: "5-10 Minuto",
      Fee: "Libre (Pagpaparehistro)",
      "Who Can Apply": "Mag-asawa/Kinatawan",
      Appointment: "Walk-in",
    },
    steps: [
      {
        title: "Ihanda ang mga Dokumento",
        description:
          "Ihanda ang sertipiko ng kasal mula sa nagkasal at mga valid ID.",
      },
      {
        title: "Pumunta sa Civil Registrar",
        description:
          "Pumunta sa Tanggapan ng Civil Registrar, Ikalawang Palapag, Munisipyo.",
      },
      {
        title: "Isumite ang mga Dokumento",
        description:
          "Isumite ang sertipiko ng kasal at mga sumusuportang dokumento para sa pagpaparehistro.",
      },
      {
        title: "Beripikasyon",
        description:
          "Sinusuri ng kawani ang pagiging tunay at pagkakumpleto ng dokumento.",
      },
      {
        title: "Pagpaparehistro",
        description: "Opisyal nang nairehistro ang kasal sa civil registry.",
      },
      {
        title: "Kunin ang Sertipiko",
        description:
          "Tanggapin ang sertipikadong kopya ng nairehistrong sertipiko ng kasal.",
      },
    ],
    requirements: [
      {
        title: "Para sa Pagpaparehistro",
        items: [
          "Orihinal na sertipiko ng kasal mula sa nagkasal",
          "Mga valid ID ng dalawang mag-asawa",
          "Marriage license (kung applicable)",
        ],
      },
      {
        title: "Para sa Paghingi ng Kopya",
        items: [
          "Valid ID ng mag-asawa o awtorisadong kinatawan",
          "Liham ng pahintulot (kung kinatawan)",
          "Bayad: ₱150 bawat kopya",
        ],
      },
    ],
    faqs: [
      {
        question:
          "Gaano kalapit pagkatapos ng kasal dapat akong magpaparehistro?",
        answer:
          "Sa loob ng 30 araw mula sa seremonya ng kasal. Ang late registration ay maaaring mangailangan ng karagdagang dokumento.",
      },
      {
        question:
          "Makakakuha ba ako ng kopya kung sa ibang lugar ako ikinasal?",
        answer:
          "Ang mga kasal na nairehistro lamang sa Bagac ang available. Humiling sa munisipalidad kung saan ka ikinasal o sa PSA.",
      },
    ],
    office: { hours: "Lun-Biy: 8AM - 5PM" },
    related: ["Sertipiko ng Kapanganakan", "CENOMAR"],
  },

  "death-certificate": {
    stats: {
      Processing: "~1.5 Oras",
      "Who Can Apply": "Malapit na Pamilya",
      Appointment: "Walk-in",
    },
    steps: [
      {
        title: "Kumuha ng Medical Certificate",
        description:
          "Kumuha ng sertipiko ng kamatayan mula sa dumadalaw na doktor o ospital.",
      },
      {
        title: "Pumunta sa Civil Registrar",
        description:
          "Pumunta sa Civil Registrar dala ang sertipiko ng kamatayan sa loob ng 48 oras.",
      },
      {
        title: "Kumpletuhin ang Rehistro",
        description: "Inirehistro ng kawani ang kamatayan sa civil registry.",
      },
      {
        title: "Magbayad ng mga Bayarin",
        description:
          "Magbayad ng bayad sa pagpaparehistro at permit sa paglibing sa Tanggapan ng Treasurer.",
      },
      {
        title: "Kunin ang mga Permit",
        description:
          "Tanggapin ang permit sa paglibing at sertipikadong sertipiko ng kamatayan.",
      },
    ],
    requirements: [
      {
        title: "Mga Kinakailangang Dokumento",
        items: [
          "Sertipiko ng kamatayan mula sa doktor",
          "Valid ID ng nagpapaalam",
          "Valid ID ng namatay (kung available)",
          "Bayad para sa permit sa paglibing",
        ],
      },
    ],
    faqs: [
      {
        question: "Gaano kalapit dapat mairehistro ang kamatayan?",
        answer:
          "Sa loob ng 48 oras mula sa kamatayan. Ang late registration ay nangangailangan ng karagdagang dokumento at bayad.",
      },
      {
        question: "Kailangan ko ba ng permit sa paglibing?",
        answer:
          "Oo, kailangan ang permit sa paglibing bago ilibing sa anumang sementeryo.",
      },
    ],
    office: { hours: "Lun-Biy: 8AM - 5PM" },
    related: ["Sertipiko ng Kapanganakan", "Mga Serbisyo ng MSWDO"],
  },

  "municipal-civil-registrar": {
    stats: {
      "Office Hours": "Lun-Biy 8AM-5PM",
      Location: "Ikalawang Palapag, Munisipyo",
      Appointment: "Walk-in",
    },
    steps: [
      {
        title: "Tukuyin ang Serbisyo",
        description:
          "Alamin kung anong serbisyo sa civil registry ang kailangan mo.",
      },
      {
        title: "Ihanda ang mga Dokumento",
        description:
          "Tipunin ang lahat ng kinakailangang dokumento para sa iyong transaksyon.",
      },
      {
        title: "Pumunta sa Opisina",
        description:
          "Pumunta sa Civil Registrar, Ikalawang Palapag ng Munisipyo.",
      },
      {
        title: "Isumite ang Aplikasyon",
        description:
          "Isumite ang mga dokumento at magbayad ng kaukulang bayad.",
      },
      {
        title: "Kunin ang mga Dokumento",
        description: "Bumalik upang kunin ang naprosesong dokumento.",
      },
    ],
    requirements: [
      {
        title: "Mga Pangkalahatang Kinakailangan",
        items: [
          "Valid na ID na inisyu ng pamahalaan",
          "Nasagutang form ng kahilingan",
          "Pagbabayad ng kaukulang bayad",
        ],
      },
    ],
    faqs: [
      {
        question: "Anong mga serbisyo ang inaalok?",
        answer:
          "Pagpaparehistro ng kapanganakan, kamatayan, at kasal; sertipikadong kopya; pagwawasto; late registration; legitimation; at iba pang serbisyo sa civil registry.",
      },
    ],
    office: { hours: "Lun-Biy: 8AM - 5PM" },
    related: [
      "Sertipiko ng Kapanganakan",
      "Sertipiko ng Kasal",
      "Sertipiko ng Kamatayan",
    ],
  },

  "business-permits-licensing": {
    stats: {
      Processing: "1-3 Araw",
      Fee: "Depende sa Negosyo",
      "Who Can Apply": "May-ari ng Negosyo",
      Appointment: "Walk-in",
    },
    steps: [
      {
        title: "Kumuha ng Barangay Clearance",
        description:
          "Kumuha ng business clearance sa barangay kung saan matatagpuan ang iyong negosyo.",
      },
      {
        title: "Ihanda ang mga Dokumento",
        description:
          "Tipunin ang DTI/SEC registration, kontrata ng upa, at iba pang kinakailangan.",
      },
      {
        title: "Isumite ang Aplikasyon",
        description:
          "Pumunta sa BPLO at isumite ang aplikasyon kasama ang mga kinakailangang dokumento.",
      },
      {
        title: "Magbayad ng mga Bayarin",
        description:
          "Magbayad ng buwis sa negosyo at mga bayad sa Tanggapan ng Treasurer.",
      },
      {
        title: "Kunin ang Permit",
        description: "Bumalik sa BPLO upang kunin ang iyong permit sa negosyo.",
      },
    ],
    requirements: [
      {
        title: "Bagong Negosyo",
        items: [
          "DTI/SEC Registration",
          "Barangay Business Clearance",
          "Kontrata ng Upa o Land Title",
          "Fire Safety Certificate",
          "Sanitary Permit",
          "Valid ID",
        ],
      },
      {
        title: "Pag-renew",
        items: [
          "Naunang Business Permit",
          "Community Tax Certificate (Cedula)",
          "Barangay Business Clearance",
          "Na-update na Fire Safety Certificate",
        ],
      },
    ],
    faqs: [
      {
        question: "Kailan dapat i-renew ang permit sa negosyo?",
        answer: "Bago ang Enero 20 ng bawat taon upang maiwasan ang multa.",
      },
      {
        question: "Ano ang multa sa huling pag-renew?",
        answer:
          "25% na surcharge at 2% interes bawat buwan sa hindi nabayarang buwis.",
      },
    ],
    office: { hours: "Lun-Biy: 8AM - 5PM" },
    related: ["Tanggapan ng Municipal Treasurer", "Fire Safety Certificate"],
  },

  "municipal-treasurer": {
    stats: {
      Processing: "15-30 Minuto",
      "Payment Methods": "Cash/Cheke",
      Deadline: "Ene 31 (RPT)",
      Discount: "10% kung maagang magbabayad",
    },
    steps: [
      {
        title: "Kunin ang Tax Bill",
        description: "Humiling ng tax bill o assessment mula sa opisina.",
      },
      {
        title: "Tiyakin ang Halaga",
        description: "Tingnan ang mga detalye at halagang babayaran.",
      },
      {
        title: "Magbayad",
        description: "Magbayad sa cashier window.",
      },
      {
        title: "Kunin ang Resibo",
        description: "Itago ang opisyal na resibo para sa iyong talaan.",
      },
    ],
    requirements: [
      {
        title: "Para sa Real Property Tax",
        items: [
          "Tax Declaration Number",
          "Naunang Opisyal na Resibo",
          "Valid ID",
        ],
      },
      {
        title: "Para sa Business Tax",
        items: ["Business Permit", "Assessment mula sa BPLO", "Valid ID"],
      },
    ],
    faqs: [
      {
        question: "May diskwento ba sa maagang pagbabayad?",
        answer:
          "Oo, 10% diskwento sa RPT na buong babayaran bago ang Enero 31.",
      },
      {
        question: "Maaari bang magbayad kada quarter?",
        answer:
          "Oo, maaaring bayaran kada quarter ang RPT nang walang diskwento.",
      },
    ],
    office: { hours: "Lun-Biy: 8AM - 5PM" },
    related: ["Property Declaration", "Tanggapan ng Municipal Assessor"],
  },

  "municipal-assessor": {
    stats: {
      Processing: "1-5 Araw",
      Records: "Impormasyon ng Ari-arian",
      Location: "Unang Palapag",
      Appointment: "Walk-in",
    },
    steps: [
      {
        title: "Tukuyin ang Transaksyon",
        description:
          "Alamin kung kailangan mo ng transfer, update, o bagong deklarasyon.",
      },
      {
        title: "Isumite ang mga Dokumento",
        description:
          "Isumite ang deed of sale, titulo, o iba pang sumusuportang dokumento.",
      },
      {
        title: "Magbayad ng mga Bayarin",
        description: "Magbayad ng transfer tax at processing fee.",
      },
      {
        title: "Hintayin ang Pagproseso",
        description: "Maghintay ng 1-5 araw para sa assessment at pag-apruba.",
      },
      {
        title: "Kunin ang Deklarasyon",
        description: "Bumalik upang kunin ang bagong tax declaration.",
      },
    ],
    requirements: [
      {
        title: "Para sa Transfer",
        items: [
          "Deed of Absolute Sale",
          "Transfer Certificate of Title",
          "Tax Clearance",
          "Naunang Tax Declaration",
          "Mga valid ID",
        ],
      },
    ],
    faqs: [
      {
        question: "Gaano katagal ang bisa ng tax declaration?",
        answer:
          "Hanggang maipalipat ang ari-arian o may mga pagbabagong nangangailangan ng reassessment.",
      },
    ],
    office: { hours: "Lun-Biy: 8AM - 5PM" },
    related: ["Tanggapan ng Municipal Treasurer", "Property Declaration"],
  },

  "property-declaration": {
    stats: {
      Processing: "1-3 Araw",
      Location: "Tanggapan ng Assessor",
      Appointment: "Walk-in",
    },
    steps: [
      {
        title: "Tipunin ang mga Dokumento",
        description:
          "Ihanda ang deed of sale, titulo, at naunang tax declaration.",
      },
      {
        title: "Isumite sa Assessor",
        description:
          "Isumite ang mga dokumento sa Tanggapan ng Municipal Assessor.",
      },
      {
        title: "Magbayad ng Transfer Tax",
        description: "Magbayad sa Tanggapan ng Treasurer.",
      },
      {
        title: "Kunin ang Bagong Deklarasyon",
        description: "Bumalik upang kunin ang na-update na tax declaration.",
      },
    ],
    requirements: [
      {
        title: "Mga Kinakailangang Dokumento",
        items: [
          "Notaryadong Deed of Sale",
          "Transfer Certificate of Title",
          "Tax Clearance",
          "Mga valid ID ng bumili at nagbenta",
        ],
      },
    ],
    faqs: [
      {
        question: "Magkano ang transfer tax?",
        answer:
          "Karaniwang 0.5% hanggang 0.75% ng presyo ng pagbebenta o zonal value, alinman ang mas mataas.",
      },
    ],
    office: { hours: "Lun-Biy: 8AM - 5PM" },
    related: [
      "Tanggapan ng Municipal Assessor",
      "Tanggapan ng Municipal Treasurer",
    ],
  },

  "tricycle-franchising": {
    stats: {
      Processing: "3-5 Araw",
      "Who Can Apply": "May-ari/Operator",
      Appointment: "Walk-in",
    },
    steps: [
      {
        title: "Ihanda ang mga Kinakailangan",
        description:
          "Tipunin ang rehistro ng sasakyan, lisensya ng drayber, at barangay clearance.",
      },
      {
        title: "Isumite ang Aplikasyon",
        description:
          "Maghain ng aplikasyon sa Tanggapan ng Trapiko ng Munisipalidad.",
      },
      {
        title: "Inspeksyon ng Sasakyan",
        description:
          "Ipasuri ang iyong tricycle para sa pagsunod sa kaligtasan.",
      },
      {
        title: "Magbayad ng mga Bayarin",
        description: "Magbayad ng franchise fee sa Tanggapan ng Treasurer.",
      },
      {
        title: "Kunin ang Franchise",
        description: "Bumalik upang kunin ang sertipiko ng franchise.",
      },
    ],
    requirements: [
      {
        title: "Mga Kinakailangang Dokumento",
        items: [
          "OR/CR ng motorsiklong tricycle",
          "Valid na lisensya ng drayber",
          "Barangay clearance",
          "Police clearance",
          "NBI clearance",
          "2x2 na larawan",
        ],
      },
    ],
    faqs: [
      {
        question: "Gaano katagal ang bisa ng franchise?",
        answer:
          "Karaniwang 3 taon, napapailalim sa taunang pag-renew ng rehistro.",
      },
    ],
    office: { hours: "Lun-Biy: 8AM - 5PM" },
    related: ["Business Permits"],
  },

  "mswdo-services": {
    stats: {
      Processing: "Nag-iiba",
      Fee: "Libre",
      Appointment: "Walk-in",
    },
    steps: [
      {
        title: "Tukuyin ang Programa",
        description:
          "Alamin kung aling programang pangkagalingan ang kailangan mo.",
      },
      {
        title: "Ihanda ang mga Dokumento",
        description:
          "Tipunin ang kinakailangang dokumento para sa partikular na programa.",
      },
      {
        title: "Pumunta sa MSWDO",
        description: "Pumunta sa opisina ng MSWDO sa Munisipyo.",
      },
      {
        title: "Isumite ang Aplikasyon",
        description:
          "Isumite ang aplikasyon at mga dokumento para sa assessment.",
      },
      {
        title: "Tanggapin ang Tulong",
        description:
          "Kung aprubado, tanggapin ang kaukulang benepisyo o serbisyo.",
      },
    ],
    requirements: [
      {
        title: "Para sa Senior Citizen ID",
        items: [
          "Patunay ng edad (sertipiko ng kapanganakan o valid ID)",
          "Barangay certification",
          "1x1 na larawan",
        ],
      },
      {
        title: "Para sa PWD ID",
        items: [
          "Medical certificate ng kapansanan",
          "Barangay certification",
          "1x1 na larawan",
        ],
      },
      {
        title: "Para sa Tulong Pinansyal",
        items: [
          "Barangay certification ng kahirapan",
          "Valid ID",
          "Case study/assessment ng MSWDO",
        ],
      },
    ],
    faqs: [
      {
        question: "Anong mga programang tulong ang available?",
        answer:
          "Senior Citizen ID, PWD ID, Solo Parent ID, tulong pinansyal, tulong sa paglibing, medikal na tulong, tulong sa edukasyon, at iba't ibang programang pangkagalingan.",
      },
      {
        question: "Sino ang maaaring humingi ng tulong pinansyal?",
        answer: "Mga mahihirap na pamilya at indibidwal na nasa krisis.",
      },
    ],
    office: { hours: "Lun-Biy: 8AM - 5PM" },
    related: [
      "Mga Serbisyo para sa Senior Citizen",
      "Mga Serbisyo para sa PWD",
    ],
  },

  mswdo: {
    stats: {
      "Office Hours": "Lun-Biy 8AM-5PM",
      Location: "Unang Palapag",
      Services: "Libre",
    },
    steps: [
      {
        title: "Pumunta sa Opisina",
        description: "Pumunta sa MSWDO sa unang palapag ng Munisipyo.",
      },
      {
        title: "Ilahad ang Iyong Pangangailangan",
        description: "Ipaalam sa kawani ang tulong o serbisyong kailangan mo.",
      },
      {
        title: "Assessment",
        description: "Sinusuri ng kawani ng MSWDO ang iyong sitwasyon.",
      },
      {
        title: "Tanggapin ang Tulong",
        description: "Tanggapin ang angkop na tulong batay sa assessment.",
      },
    ],
    requirements: [
      {
        title: "Mga Pangkalahatang Kinakailangan",
        items: [
          "Valid ID",
          "Barangay certification",
          "Mga sumusuportang dokumento batay sa programa",
        ],
      },
    ],
    faqs: [
      {
        question: "Ano ang oras ng opisina?",
        answer: "Lunes hanggang Biyernes, 8:00 AM hanggang 5:00 PM.",
      },
    ],
    office: { hours: "Lun-Biy: 8AM - 5PM" },
    related: ["Mga Serbisyo ng MSWDO"],
  },

  "municipal-agriculture": {
    stats: {
      "Office Hours": "Lun-Biy 8AM-5PM",
      Location: "Munisipyo",
      Programs: "Libre/Sinusubsidyo",
    },
    steps: [
      {
        title: "Pumunta sa MAGRO",
        description:
          "Pumunta sa Tanggapan ng Agrikultura ng Munisipalidad sa Munisipyo.",
      },
      {
        title: "Pagpaparehistro ng Magsasaka",
        description: "Magpatala sa RSBSA kung hindi ka pa nakakapagpatala.",
      },
      {
        title: "Tukuyin ang Programa",
        description:
          "Magtanong tungkol sa mga available na programa at tulong.",
      },
      {
        title: "Isumite ang mga Kinakailangan",
        description:
          "Isumite ang mga dokumento para sa programang inaaplayan mo.",
      },
      {
        title: "Tanggapin ang Tulong",
        description:
          "Tanggapin ang subsidiya sa input, pagsasanay, o iba pang tulong.",
      },
    ],
    requirements: [
      {
        title: "Para sa Pagpaparehistro sa RSBSA",
        items: [
          "Valid ID",
          "Barangay certification ng pagiging magsasaka",
          "Patunay ng pagmamay-ari ng lupa o kasunduan sa tenancy",
          "1x1 na larawan",
        ],
      },
    ],
    faqs: [
      {
        question: "Ano ang RSBSA?",
        answer:
          "Registry System for Basic Sectors in Agriculture — kailangan bago makakuha ng mga programang pang-agrikultura ng pamahalaan.",
      },
      {
        question: "Anong tulong ang available?",
        answer:
          "Subsidy sa pataba, pamamahagi ng binhi, livestock dispersal, crop insurance, at teknikal na pagsasanay.",
      },
    ],
    office: { hours: "Lun-Biy: 8AM - 5PM" },
    related: ["Tulong sa Pataba", "Crop Insurance"],
  },

  "municipal-engineering": {
    stats: {
      Processing: "5-10 Araw",
      Fee: "Nag-iiba",
      Location: "Munisipyo",
      Appointment: "Walk-in",
    },
    steps: [
      {
        title: "Kumuha ng Zoning Clearance",
        description: "Kumuha ng zoning clearance sa Tanggapan ng Pagpaplano.",
      },
      {
        title: "Ihanda ang mga Plano",
        description:
          "Ihanda ang mga building plan na nilagdaan ng lisensyadong inhinyero o arkitekto.",
      },
      {
        title: "Isumite ang Aplikasyon",
        description:
          "Maghain ng aplikasyon ng building permit kasama ang mga kinakailangan.",
      },
      {
        title: "Inspeksyon sa Lugar",
        description:
          "Magsasagawa ng site inspection ang inhinyero ng Munisipalidad.",
      },
      {
        title: "Magbayad ng mga Bayarin",
        description: "Magbayad ng permit fee sa Tanggapan ng Treasurer.",
      },
      {
        title: "Kunin ang Permit",
        description: "Bumalik sa Engineering upang kunin ang building permit.",
      },
    ],
    requirements: [
      {
        title: "Building Permit",
        items: [
          "Zoning clearance",
          "Mga building plan (5 set) na nilagdaan ng lisensyadong propesyonal",
          "Land title o deed of sale",
          "Barangay clearance",
          "Fire safety evaluation clearance",
          "Structural analysis (para sa 2 o higit pang palapag)",
        ],
      },
    ],
    faqs: [
      {
        question: "Gaano katagal ang bisa ng building permit?",
        answer: "Karaniwang 1 taon, maaaring pahabain kung hihilingin.",
      },
      {
        question: "Kailangan ba ng permit para sa renovation?",
        answer:
          "Oo, anumang pagbabagong structural ay nangangailangan ng building permit.",
      },
    ],
    office: { hours: "Lun-Biy: 8AM - 5PM" },
    related: ["Pagpaplano ng Munisipalidad", "Fire Safety Certificate"],
  },

  "municipal-planning": {
    stats: {
      Processing: "3-5 Araw",
      Location: "Munisipyo",
      Appointment: "Walk-in",
    },
    steps: [
      {
        title: "Isumite ang Kahilingan",
        description:
          "Maghain ng kahilingan para sa zoning clearance kasama ang detalye ng lokasyon.",
      },
      {
        title: "Pagsusuri ng Dokumento",
        description:
          "Sinusuri ng tanggapan ng pagpaplano ang pagiging tugma ng gamit ng lupa.",
      },
      {
        title: "Beripikasyon sa Lugar",
        description:
          "Maaaring magsagawa ng pagbisita sa lugar ang kawani kung kailangan.",
      },
      {
        title: "Magbayad ng mga Bayarin",
        description: "Magbayad sa Tanggapan ng Treasurer.",
      },
      {
        title: "Kunin ang Clearance",
        description: "Bumalik upang kunin ang zoning clearance.",
      },
    ],
    requirements: [
      {
        title: "Zoning Clearance",
        items: [
          "Tax declaration ng ari-arian",
          "Lot plan o sketch ng lokasyon",
          "Valid ID ng nag-aaplay",
          "Layunin ng aplikasyon",
        ],
      },
    ],
    faqs: [
      {
        question: "Ano ang zoning clearance?",
        answer:
          "Dokumentong nagpapatunay na ang nais mong gamit sa ari-arian ay tugma sa klasipikasyon ng sona.",
      },
    ],
    office: { hours: "Lun-Biy: 8AM - 5PM" },
    related: ["Tanggapan ng Municipal Engineering"],
  },

  "municipal-budget": {
    stats: {
      "Office Hours": "Lun-Biy 8AM-5PM",
      Location: "Munisipyo",
      Reports: "Bukas sa Publiko",
    },
    steps: [
      {
        title: "Pampublikong Pagtatanong",
        description:
          "Para sa mga katanungan tungkol sa badyet, pumunta sa Tanggapan ng Badyet.",
      },
      {
        title: "Isumite ang Kahilingan",
        description:
          "Isumite ang nakasulat na kahilingan para sa partikular na impormasyon sa badyet.",
      },
      {
        title: "Pagproseso",
        description:
          "Pinoproseso ng opisina ang kahilingan at inihahanda ang impormasyon.",
      },
      {
        title: "Tanggapin ang Impormasyon",
        description: "Tanggapin ang hiniling na mga dokumento ng badyet.",
      },
    ],
    requirements: [
      {
        title: "Para sa Kahilingan ng Impormasyon",
        items: [
          "Nakasulat na liham ng kahilingan",
          "Valid ID",
          "Layunin ng kahilingan",
        ],
      },
    ],
    faqs: [
      {
        question: "Available ba sa publiko ang impormasyon sa badyet?",
        answer:
          "Oo, ang mga dokumento ng badyet ng munisipalidad ay pampublikong talaan na maaaring makuha sa ilalim ng Freedom of Information.",
      },
    ],
    office: { hours: "Lun-Biy: 8AM - 5PM" },
    related: ["Tanggapan ng Accounting", "Transparensiya ng Badyet"],
  },

  "municipal-accounting": {
    stats: {
      "Office Hours": "Lun-Biy 8AM-5PM",
      Location: "Munisipyo",
      Records: "Pinansyal",
    },
    steps: [
      {
        title: "Tukuyin ang Transaksyon",
        description:
          "Alamin kung anong serbisyo sa accounting ang kailangan mo.",
      },
      {
        title: "Isumite ang mga Dokumento",
        description: "Isumite ang kinakailangang dokumento para sa pagproseso.",
      },
      {
        title: "Beripikasyon",
        description:
          "Sinusuri at pinoproseso ng kawani ng accounting ang mga dokumento.",
      },
      {
        title: "Pagkumpleto",
        description: "Tanggapin ang naprosesong dokumento o sertipiko.",
      },
    ],
    requirements: [
      {
        title: "Mga Pangkalahatang Kinakailangan",
        items: [
          "Opisyal na liham ng kahilingan",
          "Mga sumusuportang dokumento",
          "Valid ID",
        ],
      },
    ],
    faqs: [
      {
        question: "Anong mga serbisyo ang inaalok?",
        answer:
          "Beripikasyon ng financial statement, pagproseso ng bayad sa supplier, at payroll para sa mga kawani ng LGU.",
      },
    ],
    office: { hours: "Lun-Biy: 8AM - 5PM" },
    related: ["Tanggapan ng Badyet", "Tanggapan ng Municipal Treasurer"],
  },

  "human-resource-management": {
    stats: {
      Processing: "1-3 Araw",
      Fee: "Libre (kawani)",
      For: "Mga Kawani ng LGU",
      Appointment: "Walk-in",
    },
    steps: [
      {
        title: "Isumite ang Kahilingan",
        description:
          "Maghain ng kahilingan para sa service record o sertipikong kailangan mo.",
      },
      {
        title: "Beripikasyon",
        description: "Sinusuri ng HRMO ang mga talaan ng trabaho.",
      },
      {
        title: "Pagproseso",
        description: "Inihahanda ng kawani ang hiniling na dokumento.",
      },
      {
        title: "Kunin ang Dokumento",
        description: "Bumalik upang kunin ang service record o sertipiko.",
      },
    ],
    requirements: [
      {
        title: "Para sa Service Record",
        items: [
          "Form ng kahilingan",
          "Valid ID",
          "Naunang service record (kung available)",
        ],
      },
    ],
    faqs: [
      {
        question: "Sino ang maaaring humiling ng service record?",
        answer:
          "Mga kasalukuyan at dating kawani ng LGU para sa kanilang sariling talaan.",
      },
    ],
    office: { hours: "Lun-Biy: 8AM - 5PM" },
    related: ["Employment Certification"],
  },

  "seedo-public-market": {
    stats: {
      Location: "Pampublikong Palengke ng Bagac",
      "Stall Rental": "Nag-iiba",
    },
    steps: [
      {
        title: "Magtanong ng Availability",
        description:
          "Tingnan ang mga available na puwesto sa palengke sa opisina ng SEEDO.",
      },
      {
        title: "Isumite ang Aplikasyon",
        description: "Maghain ng aplikasyon para sa upa ng puwesto.",
      },
      {
        title: "Magbayad ng Upa",
        description: "Magbayad ng upa sa Tanggapan ng Treasurer.",
      },
      {
        title: "Kunin ang Kontrata",
        description: "Tanggapin ang itinalagang puwesto at kontrata.",
      },
    ],
    requirements: [
      {
        title: "Aplikasyon sa Puwesto",
        items: [
          "Valid ID",
          "Barangay clearance",
          "Pangalan ng negosyo (kung applicable)",
          "Pagbabayad ng upa",
        ],
      },
    ],
    faqs: [
      {
        question: "Paano itinatalaga ang mga puwesto?",
        answer:
          "Batay sa availability at sa unang dumating, unang pagsisilbihan.",
      },
    ],
    office: { hours: "Lun-Biy: 8AM - 5PM" },
    related: ["Business Permits"],
  },

  "seedo-slaughterhouse": {
    stats: {
      Location: "Katayan ng Bagac",
      Fee: "Bawat ulo",
    },
    steps: [
      {
        title: "Magdala ng Alagang Hayop",
        description: "Ihatid ang alagang hayop sa katayan.",
      },
      {
        title: "Ante-mortem Inspection",
        description: "Sinusuri ng beterinaryo ang mga hayop bago katayin.",
      },
      {
        title: "Proseso ng Pagkatay",
        description: "Kinakatay ang mga hayop ayon sa tamang pamamaraan.",
      },
      {
        title: "Post-mortem Inspection",
        description: "Sinusuri at tinatakan ang karne para sa kaligtasan.",
      },
      {
        title: "Kunin ang Karne",
        description: "Kunin ang naispeksyon at natatakan na karne.",
      },
    ],
    requirements: [
      {
        title: "Para sa Pagkatay",
        items: [
          "Sertipiko ng pagmamay-ari",
          "Transport permit (kung galing sa ibang munisipalidad)",
          "Pagbabayad ng slaughter fee",
        ],
      },
    ],
    faqs: [
      {
        question: "Anong oras dapat dalhin ang alagang hayop?",
        answer:
          "Dapat dumating ang mga hayop mula 4AM hanggang 6AM para sa pagkatay sa umaga.",
      },
    ],
    related: ["Serbisyong Beterinaryo"],
  },

  "municipal-general-services": {
    stats: {
      "Office Hours": "Lun-Biy 8AM-5PM",
      Location: "Munisipyo",
      Rental: "Nag-iiba",
    },
    steps: [
      {
        title: "Isumite ang Kahilingan",
        description:
          "Maghain ng kahilingan sa paggamit ng kagamitan o sasakyan.",
      },
      {
        title: "Pag-apruba",
        description: "Hintayin ang apruba mula sa GSO.",
      },
      {
        title: "Magbayad ng mga Bayarin",
        description: "Magbayad ng upa kung applicable.",
      },
      {
        title: "Gamitin ang Kagamitan",
        description: "Gamitin ang kagamitan o sasakyan ayon sa iskedyul.",
      },
    ],
    requirements: [
      {
        title: "Kahilingan sa Kagamitan",
        items: [
          "Liham ng kahilingan",
          "Layunin ng paggamit",
          "Valid ID",
          "Bayad (kung applicable)",
        ],
      },
    ],
    faqs: [
      {
        question: "Anong kagamitan ang available?",
        answer:
          "Mga heavy equipment, service vehicle, at iba pang ari-arian ng munisipalidad para sa paggamit ng publiko.",
      },
    ],
    office: { hours: "Lun-Biy: 8AM - 5PM" },
    related: ["Imprastraktura"],
  },

  "general-services": {
    stats: {
      "Office Hours": "Lun-Biy 8AM-5PM",
      Location: "Munisipyo",
      "Info Desk": "Unang Palapag",
    },
    steps: [
      {
        title: "Pumunta sa Information Desk",
        description: "Pumunta sa information desk sa unang palapag.",
      },
      {
        title: "Ilahad ang Iyong Pangangailangan",
        description: "Sabihin sa kawani kung anong serbisyo ang kailangan mo.",
      },
      {
        title: "Kumuha ng Direksyon",
        description: "Ituturo ka ng kawani sa tamang opisina.",
      },
    ],
    requirements: [
      {
        title: "Pangkalahatang Pagbisita",
        items: ["Valid ID para sa karamihan ng transaksyon"],
      },
    ],
    faqs: [
      {
        question: "Saan ako makakakuha ng impormasyon tungkol sa mga serbisyo?",
        answer: "Pumunta sa Information Desk sa unang palapag ng Munisipyo.",
      },
    ],
    office: { hours: "Lun-Biy: 8AM - 5PM" },
    related: ["Lahat ng Serbisyo"],
  },
};
