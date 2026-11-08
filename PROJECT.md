# PROJECT.md

Working notes for this repository. Read this before making changes.

## What this is

`betterbagac.org` — a resident-facing portal for the Municipality of Bagac, Bataan: services
directory, budget/transparency, statistics, legislative records. Next.js 14 App Router,
TypeScript, React 18, pnpm.

It is **not an official government website**. See "Identity conflict" below.

## Two properties, two jobs

| Host | What it is | Repo |
| --- | --- | --- |
| `betterbagac.org` | Resident portal. The product. | this repo |
| `transparency.betterbagac.org` | The FY2027 budget record. | separate Vite/React deploy |

**Decision: do not merge them.** Two products, one brand.

- The record host is a **config-only fork** of `bettergovph/transparency-portal` (active upstream).
  Its only changed file is `portal.config.ts`. Uniformity with upstream is the feature.
  Update it by re-pulling upstream and restoring that one file. Do not add features there.
- The portal (this repo) is finished as its own product.

## Upstream status

Forked from `BetterSolano/bettersolano`, branch `react-typescript`, `react-app/`.

**That branch is dormant since 2026-01-30**, and the parent repo moved to a static HTML site.
There are no upstream updates to receive. Treat this as our own product — upstream is
inspiration only, not a sync target.

## The "own style" rule

Style lives in these layers, not in edits to template files:

- `src/data/site.config.ts` — name, title, contact, links, tokens
- `public/assets/css/theme.local.css` — per-LGU CSS variable overrides (currently commented out)
- `src/data/i18n/` — all copy, both languages
- `src/data/services.json`, `serviceDetailsContent.ts`, `categoriesContent.ts`, `legislativeRecords.ts` — content

That layer is what makes the code replaceable. Keep template components generic.

## Current state (uncommitted)

- Nav: "Transparency" is a dropdown → *Budget overview* (`/budget`) + *Public record ↗* (subdomain)
- Footer: public record link under Resources
- `/transparency` → 308 redirect to the subdomain (`next.config.js`)
- Service routes: all 57 catalog entries resolve (52 internal, 5 Filipizen), 34 render as partial
  pages, external results open in a new tab, `/services/...` links all verified
- Config/i18n keys added; build passes; no new lint errors

**Commit this before switching branches or starting the rewrite.**

## Priority backlog

### P0 — service routes (done)

Every service now has a destination. Nothing under `/services` links to a `.html` path.

- All 52 internal entries in `services.json` point at `/service-details/<slug>`. The 5 remaining
  absolute URLs are Filipizen billing pages and are intentional external links; the search
  dropdown opens those in a new tab instead of pushing them as an app route.
- `/service-details/[slug]` resolves from `serviceDetailsContent.ts` first. The 34 services with no
  hand-written content are assembled from the catalog by `buildServiceDetail()` in
  `src/data/services.ts`, which sets `isPartial` so the page shows a "still documenting" notice and
  hides the empty process/requirements sections rather than showing blanks.
- Only fields we actually hold are shown on those pages: fee, processing time, office, and the
  municipal trunkline. Office hours and street location are omitted instead of guessed.
- Localization: the notice, stat labels, and sidebar are i18n'd; category labels come from
  `categoriesFil.ts`. Service titles and descriptions are still English for the 29 catalog entries
  whose title has no Filipino copy in `categoriesFil.ts`.

Remaining content work (not a routing bug): write steps and requirements for the 34
catalog-backed services, and add Filipino copy for the service titles/descriptions that lack it.

### P1 — discoverability

- No `robots.txt` and no `sitemap.xml` on either host. `src/app/sitemap/` and
  `src/app/sitemap-page/` are human-readable pages, not metadata routes. Add
  `app/robots.ts` and `app/sitemap.ts`.
- On the record host every path returns `200 text/html` (SPA rewrite), so crawlers see exactly one
  page. That is upstream's behavior; decide whether to accept it.

### P2 — accuracy

- **Content is a snapshot.** News is hardcoded in `src/app/news/page.tsx` and duplicated on the
  homepage. Either drive both from one data file or make the date visible so staleness is honest.
- **Fiscal year mismatch** on `/statistics`: `stats-finance-subtitle` says "fiscal year 2023"
  (`src/data/i18n/statisticsPage.ts:27`, Filipino at `:127`) while the finance cards say FY 2024
  (`src/app/statistics/page.tsx:135`, `:143`). Pick FY 2024.
- **Identity conflict (resolved 2026-11-08):** the title was `… | Official Portal` while
  `README.md` says "not an official website". The title, tagline, hero, footer, contact page and
  accessibility page now state that BetterBagac is an independent, volunteer-run project, and
  LGU channels are attributed to the Municipality. Keep it that way: no copy may imply the site
  is an LGU office.
- **Two project counts.** `/budget` lists 118 DPWH contract rows
  (`src/data/dpwh-projects.json`); the public record reports FY2027 appropriations. Both are
  correct and they are not the same thing — add one sentence on each page saying which is which.

## Stack plan

**TanStack Start** is the target (stable, Vite, matches the rest of the stack). Migrate it *as part
of* the 57-page service rewrite — not as a standalone port. A separate port would spend the effort
and still leave the dead links. Keep pnpm.

## Commands

```sh
pnpm install
pnpm dev       # http://localhost:3000
pnpm build
pnpm lint      # Biome (lint + format check)
pnpm fix       # Biome autofix
```

Node 20+, pnpm via `corepack enable`.
