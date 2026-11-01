import type { TranslationDictionary } from "@/data/i18n/types";

/** Legislative pages (`/legislative` and the ordinance/resolution frameworks). */
export const legislativePage: TranslationDictionary = {
  en: {
    "leg-breadcrumb-aria": "Breadcrumb",
    "leg-title": "Legislative Documents",
    "leg-subtitle":
      "Ordinances and resolutions of the Sangguniang Bayan ng {municipality}",

    // Category cards
    "leg-ordinance-framework": "Ordinance Framework",
    "leg-ordinance-framework-desc":
      "Municipal ordinances enacted by the Sangguniang Bayan — local laws that govern the municipality and its residents.",
    "leg-browse-ordinances": "Browse Ordinances",
    "leg-resolution-framework": "Resolution Framework",
    "leg-resolution-framework-desc":
      "Resolutions passed by the Sangguniang Bayan expressing the will or opinion of the legislative body on various matters.",
    "leg-browse-resolutions": "Browse Resolutions",

    // Process flowchart
    "leg-process-flow": "Process Flow",
    "leg-flow-title": "Flowchart for Legislative Proposal",
    "leg-flow-desc":
      "Step-by-step process for enacting ordinances and resolutions",
    "leg-tab-ordinances": "For Ordinances",
    "leg-tab-resolutions": "For Resolutions",
    "leg-steps": "{count} Steps",

    "leg-ord-step-1-title": "File Proposed Ordinance",
    "leg-ord-step-1-desc":
      "Submit the proposed ordinance to the Sangguniang Bayan for consideration",
    "leg-ord-step-2-title": "First Reading / Referral to Committee",
    "leg-ord-step-2-desc":
      "Initial reading and assignment to the relevant committee for review",
    "leg-ord-step-3-title": "Public Hearing / Committee Action",
    "leg-ord-step-3-desc":
      "Committee conducts public hearing and deliberates on the proposed ordinance",
    "leg-ord-step-4-title": "Committee Report",
    "leg-ord-step-4-desc":
      "Committee submits findings and recommendations to the Sangguniang Bayan",
    "leg-ord-step-5-title": "Second Reading",
    "leg-ord-step-5-desc":
      "Detailed discussion and debate on the proposed ordinance",
    "leg-ord-step-6-title": "Third and Final Reading",
    "leg-ord-step-6-desc":
      "Final voting on the proposed ordinance by the Sangguniang Bayan",
    "leg-ord-step-7-title": "10-Day Mayor's Approval",
    "leg-ord-step-7-desc":
      "Mayor reviews and approves the enacted ordinance within 10 days",
    "leg-ord-step-8-title": "3-Day Submission to SP",
    "leg-ord-step-8-desc":
      "Submit approved ordinance to Sangguniang Panlalawigan for review within 3 days",
    "leg-ord-step-9-title": "SP Review Period",
    "leg-ord-step-9-desc":
      "60-day review for appropriation ordinances; 30-day review for others",
    "leg-ord-step-10-title": "Posting / Publication",
    "leg-ord-step-10-desc":
      "Public posting and publication of the approved ordinance",
    "leg-ord-step-11-title": "Implementation",
    "leg-ord-step-11-desc":
      "Ordinance takes effect and is enforced within the municipality",

    "leg-res-step-1-title": "File Proposed Resolution",
    "leg-res-step-1-desc":
      "Submit the proposed resolution to the Sangguniang Bayan",
    "leg-res-step-2-title": "Inclusion in Session Agenda",
    "leg-res-step-2-desc":
      "Resolution is scheduled for inclusion in the Sangguniang Bayan session",
    "leg-res-step-3-title": "Committee Meeting / Approval",
    "leg-res-step-3-desc":
      "Committee reviews and approves the proposed resolution",
    "leg-res-step-4-title": "Final Draft Printing",
    "leg-res-step-4-desc":
      "Legislative staff prepares and prints the final draft of the resolution",
    "leg-res-step-5-title": "Official Signing",
    "leg-res-step-5-desc":
      "Secretary to the Sanggunian and Presiding Officer sign the resolution",
    "leg-res-step-6-title": "Posting / Transmittal",
    "leg-res-step-6-desc":
      "Resolution is posted publicly and transmitted to concerned parties",

    // Info section
    "leg-about": "About",
    "leg-understanding-title": "Understanding Local Legislation",
    "leg-understanding-desc":
      "Learn about the legislative process of the Sangguniang Bayan",
    "leg-info-ordinances-desc":
      "Local laws with permanent and general application that require compliance from residents and businesses within the municipality.",
    "leg-info-resolutions-desc":
      "Expressions of the legislative body's will or opinion on specific matters, often used for commendations, requests, or policy positions.",
    "leg-info-participation": "Public Participation",
    "leg-info-participation-desc":
      "Citizens can attend Sangguniang Bayan sessions and participate in public hearings for proposed ordinances.",
    "leg-info-transparency": "Transparency",
    "leg-info-transparency-desc":
      "All enacted ordinances and resolutions are made available to the public as part of our commitment to open governance.",

    // Framework pages
    "leg-ordinance-framework-subtitle":
      "Municipal ordinances enacted by the Sangguniang Bayan ng {municipality}",
    "leg-ord-what-title": "What is an Ordinance?",
    "leg-ord-what-p1":
      "A municipal ordinance is a local law enacted by the Sangguniang Bayan (Municipal Council) that governs the municipality and its residents. Ordinances have the force and effect of law within the territorial jurisdiction of the municipality.",
    "leg-ord-what-p2":
      "Ordinances may cover various subjects including but not limited to: taxation, business regulations, public safety, environmental protection, traffic management, and zoning.",
    "leg-ord-where-title": "Where to find enacted ordinances",
    "leg-ord-where-p1":
      "Certified copies of enacted ordinances are available from the Sangguniang Bayan Secretariat at the {municipality} Municipal Hall during office hours. Requests may be made in person, in writing, or through the national Freedom of Information portal.",
    "leg-ord-where-p2":
      "This portal does not reproduce ordinance text. Where a number and title are confirmed by a published source they appear in the list above; the full text and the complete register are still issued by the Secretariat.",
    "leg-resolution-framework-subtitle":
      "Resolutions passed by the Sangguniang Bayan ng {municipality}",
    "leg-res-what-title": "What is a Resolution?",
    "leg-res-what-p1":
      "A resolution is a formal expression of the opinion or will of the Sangguniang Bayan. Unlike ordinances, resolutions do not have the force and effect of law but serve as official statements of the legislative body.",
    "leg-res-what-p2":
      "Resolutions are commonly used for: commendations, requests to higher government agencies, expressions of support or opposition, and administrative matters of the Sangguniang Bayan.",
    "leg-res-where-title": "Where to find passed resolutions",
    "leg-res-where-p1":
      "Copies of resolutions are available from the Sangguniang Bayan Secretariat at the {municipality} Municipal Hall during office hours. Requests may be made in person, in writing, or through the national Freedom of Information portal.",
    "leg-res-where-p2":
      "This portal does not reproduce resolution text. Where a number and title are confirmed by a published source they appear in the list above; the full text and the complete register are still issued by the Secretariat.",
    "leg-visit-sb": "Visit the Sangguniang Bayan",
    "leg-transparency-seal": "Transparency Seal",
    "leg-request-foi": "Request via FOI",

    // Records table
    "leg-records-ordinances-heading": "Ordinances on record",
    "leg-records-resolutions-heading": "Resolutions on record",
    "leg-records-ordinances-term": "ordinances",
    "leg-records-resolutions-term": "resolutions",
    "leg-records-count":
      "{count} verified {term} confirmed from published sources",
    "leg-records-empty":
      "No {term} of the Sangguniang Bayan ng {municipality} are published online yet",
    "leg-empty-why": "Why this list is empty",
    "leg-empty-p1":
      "The {office} does not post its {term} in any publicly readable form. The LGU transparency page lists “Ordinances” under Annual Reports without any attached document, the Sangguniang Bayan page only lists members and committees, and the national ordinance repositories have no {municipality} entries.",
    "leg-empty-p2":
      "Sangguniang Bayan resolutions still exist — they are routinely issued for commendations, requests to national agencies, endorsements, condolences, and authorizations — but none are published online.",
    "leg-empty-p3":
      "This page will be updated as soon as the Sangguniang Bayan Secretariat publishes an official register. In the meantime, certified copies can be requested directly from the Secretariat.",
    "leg-col-number": "Number",
    "leg-col-title": "Title",
    "leg-col-subject": "Subject",
    "leg-col-year": "Year",
    "leg-col-status": "Status",
    "leg-col-source": "Source",
    "leg-source-note":
      "Only measures confirmed by a published source are listed. Sources checked {date}",
    "leg-source-transparency": "LGU transparency page",
  },
  fil: {
    "leg-breadcrumb-aria": "Landas ng pahina",
    "leg-title": "Mga Dokumentong Lehislatibo",
    "leg-subtitle":
      "Mga ordinansa at resolusyon ng Sangguniang Bayan ng {municipality}",

    // Category cards
    "leg-ordinance-framework": "Balangkas ng Ordinansa",
    "leg-ordinance-framework-desc":
      "Mga ordinansang munisipal na pinagtibay ng Sangguniang Bayan — mga lokal na batas na namamahala sa bayan at sa mga mamamayan nito.",
    "leg-browse-ordinances": "Tingnan ang mga Ordinansa",
    "leg-resolution-framework": "Balangkas ng Resolusyon",
    "leg-resolution-framework-desc":
      "Mga resolusyong inaprubahan ng Sangguniang Bayan na nagpapahayag ng kalooban o opinyon ng sangay lehislatibo sa iba't ibang usapin.",
    "leg-browse-resolutions": "Tingnan ang mga Resolusyon",

    // Process flowchart
    "leg-process-flow": "Daloy ng Proseso",
    "leg-flow-title": "Flowchart ng Panukalang Batas",
    "leg-flow-desc":
      "Hakbang-hakbang na proseso sa pagpapatibay ng mga ordinansa at resolusyon",
    "leg-tab-ordinances": "Para sa mga Ordinansa",
    "leg-tab-resolutions": "Para sa mga Resolusyon",
    "leg-steps": "{count} Hakbang",

    "leg-ord-step-1-title": "Paghahain ng Panukalang Ordinansa",
    "leg-ord-step-1-desc":
      "Isumite ang panukalang ordinansa sa Sangguniang Bayan para sa pagsasaalang-alang",
    "leg-ord-step-2-title": "Unang Pagbasa / Referral sa Komite",
    "leg-ord-step-2-desc":
      "Paunang pagbasa at pagtatalaga sa kaugnay na komite para sa pagsusuri",
    "leg-ord-step-3-title": "Public Hearing / Aksyon ng Komite",
    "leg-ord-step-3-desc":
      "Nagsasagawa ng public hearing ang komite at pinag-uusapan ang panukalang ordinansa",
    "leg-ord-step-4-title": "Ulat ng Komite",
    "leg-ord-step-4-desc":
      "Isinusumite ng komite ang mga natuklasan at rekomendasyon sa Sangguniang Bayan",
    "leg-ord-step-5-title": "Ikalawang Pagbasa",
    "leg-ord-step-5-desc":
      "Detalyadong talakayan at debate sa panukalang ordinansa",
    "leg-ord-step-6-title": "Ikatlo at Huling Pagbasa",
    "leg-ord-step-6-desc":
      "Panghuling pagboto sa panukalang ordinansa ng Sangguniang Bayan",
    "leg-ord-step-7-title": "10-Araw na Pag-apruba ng Punong Bayan",
    "leg-ord-step-7-desc":
      "Sinusuri at inaprubahan ng punong bayan ang pinagtibay na ordinansa sa loob ng 10 araw",
    "leg-ord-step-8-title": "3-Araw na Pagsusumite sa SP",
    "leg-ord-step-8-desc":
      "Isumite ang aprobadong ordinansa sa Sangguniang Panlalawigan para sa pagsusuri sa loob ng 3 araw",
    "leg-ord-step-9-title": "Panahon ng Pagsusuri ng SP",
    "leg-ord-step-9-desc":
      "60-araw na pagsusuri para sa appropriation ordinances; 30-araw na pagsusuri para sa iba",
    "leg-ord-step-10-title": "Pag-post / Publikasyon",
    "leg-ord-step-10-desc":
      "Pampublikong pag-post at publikasyon ng aprobadong ordinansa",
    "leg-ord-step-11-title": "Pagpapatupad",
    "leg-ord-step-11-desc":
      "Magkakaroon ng bisa ang ordinansa at ipatutupad sa loob ng bayan",

    "leg-res-step-1-title": "Paghahain ng Panukalang Resolusyon",
    "leg-res-step-1-desc":
      "Isumite ang panukalang resolusyon sa Sangguniang Bayan",
    "leg-res-step-2-title": "Pagsama sa Agenda ng Sesyon",
    "leg-res-step-2-desc":
      "Nakatala ang resolusyon para maisama sa sesyon ng Sangguniang Bayan",
    "leg-res-step-3-title": "Pulong / Pag-apruba ng Komite",
    "leg-res-step-3-desc":
      "Sinusuri at inaprubahan ng komite ang panukalang resolusyon",
    "leg-res-step-4-title": "Pag-imprenta ng Huling Draft",
    "leg-res-step-4-desc":
      "Inihahanda at inililimbag ng kawani ng lehislatura ang huling draft ng resolusyon",
    "leg-res-step-5-title": "Opisyal na Paglagda",
    "leg-res-step-5-desc":
      "Nilalagdaan ng Kalihim ng Sanggunian at Presiding Officer ang resolusyon",
    "leg-res-step-6-title": "Pag-post / Pagpapadala",
    "leg-res-step-6-desc":
      "Ipapaskil sa publiko ang resolusyon at ipinapadala sa mga kinauukulan",

    // Info section
    "leg-about": "Tungkol",
    "leg-understanding-title": "Pag-unawa sa Lokal na Lehislasyon",
    "leg-understanding-desc":
      "Alamin ang prosesong lehislatibo ng Sangguniang Bayan",
    "leg-info-ordinances-desc":
      "Mga lokal na batas na may permanente at pangkalahatang saklaw na kailangang sundin ng mga mamamayan at negosyo sa loob ng bayan.",
    "leg-info-resolutions-desc":
      "Mga pagpapahayag ng kalooban o opinyon ng sangay lehislatibo sa mga tiyak na usapin, kadalasang ginagamit sa pagpupuri, mga kahilingan, o paninindigan sa patakaran.",
    "leg-info-participation": "Partisipasyon ng Publiko",
    "leg-info-participation-desc":
      "Maaaring dumalo ang mga mamamayan sa mga sesyon ng Sangguniang Bayan at makibahagi sa public hearing para sa mga panukalang ordinansa.",
    "leg-info-transparency": "Transparensiya",
    "leg-info-transparency-desc":
      "Ang lahat ng naipatibay na ordinansa at resolusyon ay bukas sa publiko bilang bahagi ng aming pangako sa bukas na pamamahala.",

    // Framework pages
    "leg-ordinance-framework-subtitle":
      "Mga ordinansang munisipal na pinagtibay ng Sangguniang Bayan ng {municipality}",
    "leg-ord-what-title": "Ano ang Ordinansa?",
    "leg-ord-what-p1":
      "Ang ordinansang munisipal ay lokal na batas na pinagtitibay ng Sangguniang Bayan (Konsehong Munisipal) na namamahala sa bayan at sa mga mamamayan nito. May lakas at bisa ng batas ang mga ordinansa sa loob ng sakop na teritoryo ng bayan.",
    "leg-ord-what-p2":
      "Maaaring sakupin ng mga ordinansa ang iba't ibang paksa, kabilang ngunit hindi limitado sa: pagbubuwis, mga regulasyon sa negosyo, kaligtasan ng publiko, pangangalaga sa kalikasan, pamamahala ng trapiko, at zoning.",
    "leg-ord-where-title": "Saan mahahanap ang mga naipatibay na ordinansa",
    "leg-ord-where-p1":
      "Ang mga sertipikadong kopya ng mga naipatibay na ordinansa ay makukuha sa Secretariat ng Sangguniang Bayan sa {municipality} Municipal Hall sa oras ng trabaho. Maaaring humiling nang personal, nakasulat, o sa pamamagitan ng pambansang portal ng Freedom of Information.",
    "leg-ord-where-p2":
      "Hindi kinokopya ng portal na ito ang teksto ng ordinansa. Kapag ang numero at pamagat ay nakumpirma ng nailathalang sanggunian, lumalabas ang mga ito sa listahan sa itaas; ang buong teksto at ang kumpletong talaan ay inilalabas pa rin ng Secretariat.",
    "leg-resolution-framework-subtitle":
      "Mga resolusyong inaprubahan ng Sangguniang Bayan ng {municipality}",
    "leg-res-what-title": "Ano ang Resolusyon?",
    "leg-res-what-p1":
      "Ang resolusyon ay pormal na pagpapahayag ng opinyon o kalooban ng Sangguniang Bayan. Hindi tulad ng ordinansa, walang lakas at bisa ng batas ang resolusyon ngunit nagsisilbing opisyal na pahayag ng sangay lehislatibo.",
    "leg-res-what-p2":
      "Kadalasang ginagamit ang mga resolusyon para sa: pagpupuri, mga kahilingan sa mas mataas na ahensya ng pamahalaan, pagpapahayag ng suporta o pagtutol, at mga usaping administratibo ng Sangguniang Bayan.",
    "leg-res-where-title": "Saan mahahanap ang mga naipasang resolusyon",
    "leg-res-where-p1":
      "Ang mga kopya ng resolusyon ay makukuha sa Secretariat ng Sangguniang Bayan sa {municipality} Municipal Hall sa oras ng trabaho. Maaaring humiling nang personal, nakasulat, o sa pamamagitan ng pambansang portal ng Freedom of Information.",
    "leg-res-where-p2":
      "Hindi kinokopya ng portal na ito ang teksto ng resolusyon. Kapag ang numero at pamagat ay nakumpirma ng nailathalang sanggunian, lumalabas ang mga ito sa listahan sa itaas; ang buong teksto at ang kumpletong talaan ay inilalabas pa rin ng Secretariat.",
    "leg-visit-sb": "Bisitahin ang Sangguniang Bayan",
    "leg-transparency-seal": "Transparency Seal",
    "leg-request-foi": "Humiling sa pamamagitan ng FOI",

    // Records table
    "leg-records-ordinances-heading": "Mga ordinansang naitala",
    "leg-records-resolutions-heading": "Mga resolusyong naitala",
    "leg-records-ordinances-term": "ordinansa",
    "leg-records-resolutions-term": "resolusyon",
    "leg-records-count":
      "{count} na beripikadong {term} ang nakumpirma mula sa mga nailathalang sanggunian",
    "leg-records-empty":
      "Wala pang {term} ng Sangguniang Bayan ng {municipality} na nakalathala online",
    "leg-empty-why": "Bakit walang laman ang listahang ito",
    "leg-empty-p1":
      "Hindi inilalathala ng {office} ang mga {term} nito sa anumang anyong mababasa ng publiko. Nagtatala ang pahina ng transparensiya ng LGU ng “Mga Ordinansa” sa ilalim ng Annual Reports nang walang kalakip na dokumento, mga miyembro at komite lamang ang nakalista sa pahina ng Sangguniang Bayan, at walang entry ang {municipality} sa mga pambansang repositoryo ng ordinansa.",
    "leg-empty-p2":
      "May mga resolusyon pa rin ang Sangguniang Bayan — regular itong inilalabas para sa pagpupuri, mga kahilingan sa mga pambansang ahensya, pag-endorso, pakikiramay, at pahintulot — ngunit wala ni isa man ang nakalathala online.",
    "leg-empty-p3":
      "Agad na ia-update ang pahinang ito kapag nailathala na ng Secretariat ng Sangguniang Bayan ang opisyal na talaan. Samantala, maaaring direktang humiling ng sertipikadong kopya sa Secretariat.",
    "leg-col-number": "Numero",
    "leg-col-title": "Pamagat",
    "leg-col-subject": "Paksa",
    "leg-col-year": "Taon",
    "leg-col-status": "Katayuan",
    "leg-col-source": "Sanggunian",
    "leg-source-note":
      "Mga hakbang na nakumpirma ng nailathalang sanggunian lamang ang nakalista. Sinuri ang mga sanggunian noong {date}",
    "leg-source-transparency": "Pahina ng transparensiya ng LGU",
  },
};
