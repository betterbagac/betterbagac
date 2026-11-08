# Agent instructions

Read `PROJECT.md` at the repo root before making changes. It holds the product decisions,
verified backlog, and the rules below.

## Non-negotiables

- **This is our own product.** Upstream (`BetterSolano/bettersolano`, `react-typescript` branch) is
  dormant since 2026-01-30. Never spend effort syncing from upstream; use it for inspiration only.
- **`transparency.betterbagac.org` is not this repo.** It is a separate config-only fork of
  `bettergovph/transparency-portal`. Do not port its code here or merge the two.
- **Style belongs in data, not templates.** Put branding, copy, and tokens in
  `src/data/site.config.ts`, `public/assets/css/theme.local.css`, `src/data/i18n/`, and the
  `src/data/*.ts(x)` content files. Keep `src/components/` and `src/app/` generic and replaceable.
- **Bilingual by default.** Every user-visible string goes through i18n (`src/data/i18n/`) with an
  English and Filipino value. No hardcoded copy in components.
- **Service routes are internal.** `services.json.url` is either `/service-details/<slug>` or, for
  the 5 Filipizen billing pages, an absolute URL that must open in a new tab. Never add a `.html`
  path. If you add a service, give it a `serviceDetailsContent.ts` entry or let
  `buildServiceDetail()` render it as a partial page — do not invent steps, fees, or office hours.
- **Stay honest about the project's status.** The site is volunteer-run and not an official
  government website. Do not write copy that implies otherwise.

## Checks before finishing

```sh
pnpm build
pnpm lint    # Biome; do not add new warnings
```

## Conventions

- pnpm only. Node 20+.
- Biome for lint and format (`pnpm fix` to autofix).
- Path alias `@/` → `src/`.
