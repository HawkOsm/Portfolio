# osmansahinguler.com

Personal portfolio of **Osman Şahin Güler** — software engineer working on computer
vision and machine learning.

**Live:** [osmansahinguler.com](https://osmansahinguler.com)

![Site preview](public/og.png)

## Design

A dark, detection-HUD identity, built from scratch — no template.

| Token | Value | Role |
|---|---|---|
| Ink | `#0C0D0E` | Background |
| Panel | `#141517` | Raised surfaces (contact card) |
| Line / Border | `#1D1F22` / `#2A2B2F` | Hairlines / component borders |
| Paper | `#ECEEF0` | Headings |
| Body / Muted / Faint | `#C3C6CA` / `#9A9EA3` / `#6B6F74` | Body copy → secondary → labels |
| Accent / Accent hover | `#5EE6C4` / `#7AF0D3` | Mint — CTAs, links, highlights |
| Warn | `#E4572E` | "TODO — fill in" callouts on the Projects page |

- **Type:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (display) ·
  [Inter](https://fonts.google.com/specimen/Inter) (body) ·
  [Spline Sans Mono](https://fonts.google.com/specimen/Spline+Sans+Mono) (hero HUD labels)
- **Pages:** four routes — Home, About, Projects, Contact — handled by a small custom
  history-API router (`src/router.jsx`), no routing library. Project rows on Home and About
  deep-link into `/projects#<id>`.
- **Hero:** a canvas "digital rain" backdrop (`src/components/MatrixRain.jsx`, pauses under
  reduced-motion) behind a HUD status line and a live stats strip. A wheel tick past the hero
  glides straight to the next section (`src/hooks/useHeroSnap.js`) — trackpad/touch scrolling
  elsewhere is untouched, and reduced-motion disables it entirely.
- **Motion:** scroll-reveals via a small `IntersectionObserver` hook (`src/components/Reveal.jsx`).
  Everything respects `prefers-reduced-motion`.

## Stack

- [React 19](https://react.dev) + [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com) with the design tokens above (`src/index.css`)
- [EmailJS](https://www.emailjs.com) for the contact form — no backend
- Zero heavy runtime dependencies: no router library, no animation libraries, no canvas library.

## Structure

```
src/
├── pages/          Home, About, Projects, Contact — one file per route
├── sections/       AnnouncementBar, Navbar, Footer — shared across every page
├── components/     MatrixRain (hero canvas), Reveal (scroll-in), Alert (form feedback)
├── constants/      All site content (projects, experience, skills, links) in one file
├── hooks/          useInView, useAlert, useHeroSnap
└── router.jsx      Minimal history-API router (Link, useRouter, RouterProvider)
```

All copy lives in `src/constants/index.js` — edit content there without touching components.
Each project's Projects-page detail includes a dashed "TODO — fill in" box for the numbers
and media that only the author has (results, metrics, screenshots).

## Development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build to dist/
npm run preview    # serve the production build locally
```

### Environment variables

The contact form needs three EmailJS keys — see `.env.example`. Copy it to `.env.local`
for local dev. Without them the form degrades gracefully (shows the direct email address).

## Deployment

Pushes to `main` deploy automatically via [Vercel](https://vercel.com) — build command
`npm run build`, output `dist/`. Environment variables are set in the Vercel project settings.

## License

Code is [MIT licensed](LICENSE). The content — text, CV, images, and personal branding —
is © Osman Şahin Güler and not covered by the license.
