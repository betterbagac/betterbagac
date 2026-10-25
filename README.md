# BetterBagac

A community-built web portal for the Municipality of Bagac, Bataan, giving residents a single place to access local government services, public records, statistics, and financial data.

> This is an independent, volunteer-run project and is not an official website of the Municipality of Bagac.

## Features

- **Government services directory** — service categories and per-service detail pages, including links to online billing services (Filipizen) where available
- **Budget and transparency** — charts plus a searchable DPWH projects table
- **Statistics** — population trends, barangay distribution, and competitiveness pillar scores
- **Legislative records** — ordinances and resolutions, with framework pages for each
- **Bilingual content** — English and Filipino (i18n)
- **Search** — autocomplete search across municipal services
- **Homepage widgets** — popular services, quick stats, and a weather/map section (currently static content)
- **Supporting pages** — accessibility statement, FAQ, privacy policy, terms, and sitemaps

## Tech Stack

| Category | Tools |
| --- | --- |
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| UI | [React 18](https://react.dev/) |
| Charts | [Chart.js](https://www.chartjs.org/) + [react-chartjs-2](https://react-chartjs-2.js.org/) |
| Maps | [Leaflet](https://leafletjs.com/) + [react-leaflet](https://react-leaflet.js.org/) |
| i18n | [i18next](https://www.i18next.com/) + [react-i18next](https://react.i18next.com/) |
| Tooling | [Biome](https://biomejs.dev/) (lint + format), [pnpm](https://pnpm.io/) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or newer
- [pnpm](https://pnpm.io/) (`corepack enable` provides it)

### Devcontainer (Recommended)

1. Install [Docker](https://www.docker.com/) and the Dev Containers extension for your editor
2. `git clone https://github.com/betterbagac/betterbagac.git`
3. Open the repository in your editor
4. Reopen in the devcontainer — dependencies install automatically and port `3000` is forwarded

### Manual Setup

```sh
git clone https://github.com/betterbagac/betterbagac.git
cd betterbagac
pnpm install
pnpm dev
```

The site is then available at <http://localhost:3000>.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Create a production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run Biome checks (lint + formatting) |
| `pnpm fix` | Run Biome and automatically apply safe fixes |

## Project Structure

```
betterbagac/
├── src/
│   ├── app/                  # Next.js App Router routes
│   │   ├── services/         # Service categories and detail pages
│   │   ├── budget/           # Budget charts and DPWH projects table
│   │   ├── statistics/       # Population and competitiveness charts
│   │   ├── legislative/      # Ordinances, resolutions, frameworks
│   │   └── ...               # Government, news, FAQ, legal, sitemap pages
│   ├── components/           # React components
│   │   ├── home/             # Homepage sections (hero, stats, weather map)
│   │   ├── layout/           # Header, footer, info and hotline bars
│   │   ├── charts/           # Shared Chart.js wrappers
│   │   └── legislative/      # Legislative record components
│   ├── contexts/             # Language context provider
│   ├── data/                 # Static data, service content, translations
│   ├── hooks/                # Custom hooks (search, translation)
│   └── types/                # Shared TypeScript types
├── public/
│   └── assets/
│       ├── css/              # Page and component styles
│       ├── images/           # Logos and banners
│       └── js/               # Legacy scripts used by ported pages
├── next.config.js            # Rewrites preserving legacy .html URLs
├── biome.json                # Lint and format configuration
└── tsconfig.json
```

## Routes

| Route | Page |
| --- | --- |
| `/` | Homepage |
| `/services` | All services |
| `/services/[category]` | Service category |
| `/service-details/[slug]` | Individual service details |
| `/government` | Local officials and offices |
| `/statistics` | Population and competitiveness data |
| `/budget` | Budget and DPWH projects |
| `/legislative` | Ordinances and resolutions |
| `/legislative/ordinance-framework` | Ordinance framework |
| `/legislative/resolution-framework` | Resolution framework |
| `/news` | News and updates |
| `/faq` | Frequently asked questions |
| `/contact` | Contact information |
| `/accessibility` | Accessibility statement |
| `/privacy`, `/terms` | Legal pages |
| `/sitemap` | Compact page directory |
| `/sitemap-page` | Full HTML sitemap (offices, categories, external resources) |

Legacy `.html` service URLs (for example `/services/business.html`) are redirected to their App Router equivalents through rewrites in `next.config.js`.

## Data Sources

- **Population and barangays** — Philippine Statistics Authority (PSA)
- **Competitiveness** — DTI Cities and Municipalities Competitiveness Index (CMCI)
- **Local officials, offices, and service details** — Municipality of Bagac (`bagac.gov.ph`)
- **Financial data** — Bureau of Local Government Finance (BLGF)
- **Infrastructure projects** — DPWH Transparency Portal (`transparency.dpwh.gov.ph`)
- **Legislative records** — Sangguniang Bayan records and `ordinances.ph`

Static datasets live in `src/data/` and should be updated there when new figures are published.

## Contributing

1. Fork the repository and create a branch from `main`
2. Make your changes, running `pnpm lint` before committing
3. Open a pull request describing what changed and why

Please keep data changes sourced and cite the publishing agency in your pull request description.

If inside a devcontainer, you may have to set your name and email:
```sh
git config set user.name "<YOUR NAME>"
git config set user.email "<YOUR EMAIL>"
```

## Credits

Template adapted from [BetterSolano's React + TypeScript migration](https://github.com/BetterSolano/bettersolano/tree/react-typescript/react-app).