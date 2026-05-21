# Nilsson — Frontend

Marketing SPA for Nilsson: architecture, interior, and exterior design. Built as a single-page experience with **horizontal scroll on desktop** (≥1024px) and **vertical scroll on mobile**.

## Stack

| Layer | Choice |
|--------|--------|
| UI | React 19 |
| Build | Vite 8 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Smooth scroll | Lenis on desktop; native overflow when `prefers-reduced-motion` |
| Tests | Vitest + Testing Library |

## Features

- **Hero** — Full-bleed imagery, floating nav, headline, description panel with sticky-corner cutouts (desktop) / stacked mobile layout
- **What we do** — Intro copy and partner logos
- **Services** — Architecture card + Interior / Exterior offering column (desktop); stacked text + image cards (mobile)
- **Selected work** — Intro panel and project cards with explore CTA
- **News** — Sidebar intro + article grid (desktop); stacked header and square image cards (mobile)
- **Footer** — CTA, offices, navigation columns, credits and social links

## Getting started

### Prerequisites

- Node.js 20+
- npm or pnpm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open the URL shown in the terminal (default Vite port).

### Production build

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

### Test

```bash
npm run test
```

Watch mode: `npm run test:watch`

## Project structure

```
src/
├── components/
│   ├── layout/     # PageScroll, HorizontalScroll, ScrollPanel
│   └── ui/         # Shared primitives (panels, separators, gradients)
├── hooks/          # useMediaQuery, usePrefersReducedMotion
├── lib/            # constants, shared media queries
├── test/           # Vitest setup
└── sections/
    ├── hero/
    ├── intro/
    ├── services/
    ├── projects/
    ├── news/
    └── footer/
```

Path alias: `@/` → `src/`.

## Responsive behavior

| Viewport | Scroll | Layout |
|----------|--------|--------|
| `< 1024px` | Vertical | Single column; section-specific mobile patterns (text above image, no overlay panels where design specifies) |
| `≥ 1024px` | Horizontal (Lenis) | Full-viewport panels; `100vw` sections; services grouped in one track |

When `prefers-reduced-motion: reduce` is set, Lenis is disabled and desktop uses native horizontal scrolling with `scroll-behavior: auto`.

## CI

GitHub Actions runs on push/PR to `main`: `npm ci` → `lint` → `test` → `build`.

## Design tokens

Tokens live in `src/index.css` under `@theme` (e.g. `--radius-card`, `--size-services-card`, `--width-news-section`). Use Tailwind utilities generated from these names (`rounded-card`, `lg:size-services-card`, etc.) rather than magic numbers in components.

## Assets

Static files are in `public/`:

- `public/images/` — Photography and section imagery
- `public/fonts/` — General Sans, Satoshi
- `public/icons/` — Logo, social, partner marks

## Conventions

- No `console.log` in production code
- No `any` types
- Prefer composition; shared UI only when reused across sections
- Desktop horizontal panels use explicit widths / `w-max` + `shrink-0` to avoid flex collapse in the scroll track

## License

Private — Nilsson project.
