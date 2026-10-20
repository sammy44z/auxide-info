# AUXIDE AI

Marketing website for **AUXIDE AI** — commercial intelligence and bidding for infrastructure contractors.

Live site: https://auxide.ai

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — positioning, problem, differentiators |
| `/services` | Service pillars: direct tenders, subcontracting, EPC |
| `/about` | Vision, market, founders |
| `/contact` | Request early access |
| `/privacy`, `/terms` | Legal |

## Stack

- [TanStack Start](https://tanstack.com/start) (React 19 + Vite) — file-based routes, server-rendered pages
- Tailwind CSS v4 with semantic design tokens (`src/styles.css`)
- shadcn/ui + Radix primitives, Lucide icons
- Bun as package manager

## Getting started

```bash
bun install
bun run dev        # local dev server
bun run build      # production build
bun run lint       # eslint
bun run format     # prettier
```

## Layout

```text
src/routes/          one file per page (incl. sitemap[.]xml.ts server route)
src/components/site/ Navbar, Footer, shared primitives
src/styles.css       design tokens: palette, fonts, custom utilities
public/              robots.txt, favicon
```

## SEO

- `public/robots.txt` points at `https://auxide.ai/sitemap.xml`
- `src/routes/sitemap[.]xml.ts` generates the sitemap from the public route list
- Per-route `head()` metadata (title, description, Open Graph, canonical)
- Organization JSON-LD on the homepage
- Google Search Console verified, sitemap submitted

## Notes

- Contact form submissions are not persisted yet — the form only shows a confirmation locally.
- Founder and brand imagery is served from a CDN; the repo holds `.asset.json` pointers, not the binaries.
