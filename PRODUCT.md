# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two co-primary audiences, both residents-first:

1. **Residents with a task.** Someone who needs one specific thing from the Municipality of
   Bagac, Bataan — a business permit, a real-property tax bill, a certificate, the office that
   handles a concern. They arrive mid-task, often on a phone, and want the destination or the
   answer without phoning the municipal hall.
2. **Residents and outsiders checking public money.** Residents, students, journalists, and CSOs
   following DPWH contracts, the budget, statistics, and legislative records. They arrive
   skeptical and want to trace a figure back to a document or a published source.

Filipino speakers are served throughout; the interface and copy are bilingual, not
English-first with a translation bolt-on.

## Product Purpose

BetterBagac.org compiles the services, budgets, statistics, and public records of the
Municipality of Bagac, Bataan into one resident-facing portal.

It exists because that material is scattered across the LGU's own site, national agencies
(DPWH, PSA, BLGF, DTI-CMCI), and third-party billing portals, and is published for compliance
rather than for a resident trying to use it.

Success means a resident reaches the right page for their task without calling the hall, and a
figure on the site can be traced to a named source that says how current it is.

## Positioning

Two claims a neighboring product could not truthfully copy:

- **One index across otherwise separate record sets.** Services, DPWH contract rows,
  population and competitiveness statistics, and legislative records are findable and
  comparable in a single place, with the source named for each.
- **Plain language in both languages.** The LGU publishes for compliance; BetterBagac explains
  the same material so a resident can act on it, in English and Filipino.

## Operating Context

- **Two hosts, one brand, two products.** `betterbagac.org` is this portal.
  `transparency.betterbagac.org` is a separate deployment (a config-only fork of
  `bettergovph/transparency-portal`) carrying the FY2027 budget record. They are deliberately
  not merged; this repo links to the record host rather than absorbing it.
- **Volunteer-run**, maintained outside LGU employment, on personal time.
- **Snapshot content.** Data and news are static files in the repo, updated by hand. Anything
  shown can be stale, so currency must be visible rather than assumed.
- **Billing happens elsewhere.** Five business/tax billing services are absolute Filipizen URLs
  that must open in a new tab; the portal never transacts or holds payments.
- **Local work follows `pnpm dev`** (Next.js on port 3000); `pnpm build` and `pnpm lint` are the
  gates. `PROJECT.md` holds product decisions and the verified backlog.

## Capabilities and Constraints

**Confirmed capabilities**

- Service directory: 57 catalog entries — 52 internal routes at `/service-details/<slug>` plus
  5 external Filipizen billing pages. 21 services have authored detail content; the other 34
  render as partial pages via `buildServiceDetail()` in `src/data/services.ts`, showing only
  held fields (fee, processing time, office, trunkline) and an honest "still documenting"
  notice.
- Autocomplete search over municipal services.
- Budget page with charts and a searchable 118-row DPWH projects table
  (`src/data/dpwh-projects.json`).
- Statistics: population trends, barangay distribution, competitiveness pillar scores
  (`public/data/competitive-index.json`).
- Legislative records: verified ordinances and resolutions with status and source URL
  (`src/data/legislativeRecords.ts`), plus ordinance and resolution framework pages.
- Bilingual i18n across all user-visible strings (`src/data/i18n/`).
- Supporting pages: government/officials, news, FAQ, contact, accessibility statement, privacy,
  terms, and two sitemap views.

**Constraints**

- No invented content. Missing facts are omitted; a page shows less rather than guessing at
  fees, office hours, steps, or counts.
- Every record names its source and how current it is.
- Service routes are internal `/service-details/<slug>` paths or the five absolute Filipizen
  URLs. Never a `.html` path.
- Branding, copy, and tokens live in data files (`src/data/site.config.ts`,
  `public/assets/css/theme.local.css`, `src/data/i18n/`, `src/data/*.ts(x)`); components and
  app routes stay generic and replaceable.
- Stack: Next.js 14 App Router, TypeScript 5, React 18, Chart.js, Leaflet, i18next, pnpm,
  Biome, Node 20+.

**Open or undecided**

- Migration to **TanStack Start** is the intended target, to happen together with the service
  rewrite rather than as a standalone port. Timing and scope are not decided.
- No `app/robots.ts` or `app/sitemap.ts` exists; discoverability is an acknowledged gap.
- News content is hardcoded and duplicated between `/news` and the homepage; a single source
  has not been chosen.
- A fiscal-year label mismatch on `/statistics` (2023 in copy, 2024 on the cards) is known and
  unrepaired; FY 2024 is the intended value.
- The relationship between the 118 DPWH contract rows and the FY2027 appropriations on the
  record host is correct but unexplained on-page; one clarifying sentence per page is planned.

## Brand Commitments

- **Name:** BetterBagac / "Better Bagac". Domain `betterbagac.org`.
- **Voice:** an independent, volunteer-run project speaking as a third party. It is **not** an
  official website of the Municipality of Bagac, and no copy may imply that it is an LGU office.
- **Attribution rule:** LGU phone numbers, email, and office hours in `siteConfig.contact` are
  channels *published by the LGU* and reproduced for residents — always attributed to the
  Municipality, never described as the project's own. The project's inbox is
  `volunteer@betterbagac.org`.
- **License:** code MIT, content CC BY 4.0.
- **Existing assets:** long-form logo and white variant, favicon, and Open Graph banner under
  `public/assets/images/`.

## Evidence on Hand

Real material future work must use rather than replace with invented content:

- `src/data/services.json` — 57-entry service catalog with fee, processing time, and office
  fields where known.
- `src/data/serviceDetailsContent.ts` — 21 authored service pages.
- `src/data/legislativeRecords.ts` — 2 verified records, explicitly "verified only", data as of
  **October 25, 2026**, each with a named source and URL.
- `src/data/dpwh-projects.json` — 118 DPWH contract rows.
- `public/data/competitive-index.json` — competitiveness pillar scores.
- `src/data/site.config.ts` — LGU contact details, official links, hotlines, geo coordinates.

**Absences that must stay absent until real material exists:** steps and requirements for the
34 catalog-backed services; Filipino titles and descriptions for 29 catalog entries; no
testimonials, partner quotes, user counts, or press coverage exist. Do not fabricate any of
these, and do not imply traffic, adoption, or endorsement figures.

## Product Principles

1. **Accuracy outranks completeness.** A shorter honest page beats a fuller guessed one. Omit,
   flag as partial, or link out — never fill a gap with a plausible value.
2. **Traceability is the product.** Any claim about money, records, or officials should lead back
   to a named source and a date. Currency is part of the claim.
3. **Design for the task, not the taxonomy.** A resident arrives knowing their errand, not our
   category tree. Navigation must reward "I need a business permit" over "I want the services
   index."
4. **Two languages, equally.** Filipino is a first-class interface language, not a fallback.
   Shipping English-only copy is a defect.
5. **Separate the brand from the LGU.** Independence is the reason the project can be useful;
   every attribution decision protects it.

## Accessibility & Inclusion

- The site publishes a **WCAG 2.1 Level AA** conformance claim on `/accessibility`, covering
  keyboard operation, screen-reader support, text resizing, contrast, responsive layout, and a
  time-limit-free experience.
- Known limitations stated there and to be preserved honestly: third-party PDFs may not be
  accessible, and external services (Filipizen, national agency portals) are outside the
  project's control. Alternative access is offered through `volunteer@betterbagac.org`.
- New work must not weaken these commitments, and must not upgrade the conformance claim
  without verification.
