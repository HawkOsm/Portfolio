<div align="center">

# osmansahinguler.com

**Personal portfolio of Osman Şahin Güler** — software engineer working on computer vision and machine learning.

[![Live site](https://img.shields.io/badge/live-osmansahinguler.com-5EE6C4?style=flat-square&labelColor=0C0D0E)](https://osmansahinguler.com)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white&labelColor=0C0D0E)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white&labelColor=0C0D0E)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white&labelColor=0C0D0E)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/code-MIT-9A9EA3?style=flat-square&labelColor=0C0D0E)](LICENSE)

</div>

## Contents

[About](#about) · [Features](#features) · [Tech stack](#tech-stack) · [Getting started](#getting-started) · [Project structure](#project-structure) · [Editing content](#editing-content) · [Design system](#design-system) · [Deployment & automation](#deployment--automation) · [License](#license)

## About

A dark, detection-HUD identity built from scratch — no template, no UI kit. The site covers
my projects (autonomous UAV, Linux tooling, a project-management platform, an error logger,
an RSVP reader), education, experience, certificates and a downloadable CV, with a contact form
that needs no backend.

**Live:** [osmansahinguler.com](https://osmansahinguler.com)

## Features

- **Four routes** — Home, About, Projects, Contact — on a small custom history-API router
  (`src/router.jsx`), no routing library. Project rows deep-link into `/projects#<id>`.
- **Hero** with a canvas "digital rain" backdrop, a HUD status line and a live stats strip.
  A wheel tick past the hero glides to the next section; trackpad and touch scrolling are untouched.
- **Scroll-reveal motion** via a small `IntersectionObserver` hook. Everything respects
  `prefers-reduced-motion` (rain pauses, hero snap is disabled).
- **Certificates gallery**, project case studies (problem / what was built / stack) and CV download.
- **Contact form** via EmailJS; without keys it degrades gracefully and shows the direct email address.
- **English / Türkçe** — a toggle in the navbar. The choice is saved in `localStorage` and defaults to the
  browser language. Built with a tiny custom context in `src/i18n/`, no i18n library.
- **No heavy dependencies** — no router, animation or canvas library.

## Tech stack

| | |
|---|---|
| Framework | [React 19](https://react.dev) · [Vite](https://vite.dev) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) with design tokens in `src/index.css` |
| Contact | [EmailJS](https://www.emailjs.com) |
| Quality | [Vitest](https://vitest.dev) + Testing Library · ESLint |
| Hosting | [Vercel](https://vercel.com) |

## Getting started

Requires Node.js 22.23.4+ or 24.22.1+ (the October 2026 security releases, which fix the Brotli
RCE [CVE-2026-111497](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases)).
CI uses the latest 22.x.

```bash
git clone https://github.com/HawkOsm/Portfolio.git
cd Portfolio
npm install
npm run dev        # http://localhost:5173
```

| Script | What it does |
|---|---|
| `npm run dev` | Dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint |
| `npm test` | Vitest, single run |

**Environment variables** — the contact form needs three EmailJS keys. Copy `.env.example`
to `.env.local` and fill them in.

## Project structure

```
src/
├── pages/          Home, About, Projects, Contact — one file per route
├── sections/       AnnouncementBar, Navbar, Footer — shared across every page
├── components/     MatrixRain, Reveal, Alert, TechBadge
├── constants/      All site content in one file
├── hooks/          useInView, useAlert, useHeroSnap
├── test/           Vitest setup and the contact-form test
└── router.jsx      History-API router (Link, useRouter, RouterProvider)
scripts/            content-refresh.mjs, used by the monthly workflow
public/assets/      Icons, project images, certificates, portrait, CV PDF
```

## Editing content

All copy lives in `src/constants/index.js` — projects, experience, education, certificates,
socials, HUD values. Edit it without touching components.

**Translations:** English is the base. UI strings live in `src/i18n/ui.js` (a missing Turkish key falls
back to English); Turkish versions of the project, experience, education and certificate data live in
`src/i18n/content.tr.js`, keyed by `id`. Change English copy in `constants/index.js` and mirror it there —
`npm test` checks the Turkish files cover every project and keep the same list lengths. To add a language,
add it to `LANGS` and `ui` in `ui.js` and add a `content.<lang>.js` override file to `useContent.js`.

- **Tech logos** are mapped once in `techIcons` (files under `public/assets/icons/`); any
  project `stack` / `logos` entry that matches renders with its logo.
- A project's optional `todo` list renders a dashed "TODO — fill in" box on the Projects
  page for numbers and media only the author can supply. An empty list hides it.

## Design system

| Token | Value | Role |
|---|---|---|
| Ink | `#0C0D0E` | Background |
| Panel | `#141517` | Raised surfaces (contact card) |
| Line / Border | `#1D1F22` / `#2A2B2F` | Hairlines / component borders |
| Paper | `#ECEEF0` | Headings |
| Body / Muted / Faint | `#C3C6CA` / `#9A9EA3` / `#6B6F74` | Body copy → secondary → labels |
| Accent / Accent hover | `#5EE6C4` / `#7AF0D3` | Mint — CTAs, links, highlights |
| Warn | `#E4572E` | "TODO — fill in" callouts |

**Type:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (display) ·
[Inter](https://fonts.google.com/specimen/Inter) (body) ·
[Spline Sans Mono](https://fonts.google.com/specimen/Spline+Sans+Mono) (HUD labels)

## Deployment & automation

- **Vercel** — pushes to `main` deploy automatically (`npm run build`, output `dist/`, SPA
  rewrite in `vercel.json`). Set the EmailJS variables in the Vercel project settings.
- **Dependabot** — monthly grouped dependency updates (`.github/dependabot.yml`).
- **Content refresh** — on the 1st of each month `.github/workflows/content-refresh.yml`
  runs `scripts/content-refresh.mjs`, which asks GitHub Models whether the text in
  `src/constants/index.js` is stale given recent public GitHub activity. If so, the build is
  verified and a PR is opened for review. Nothing is pushed to `main` automatically.

## License

Code is [MIT licensed](LICENSE). The content — text, CV, images and personal branding — is
© Osman Şahin Güler and not covered by the license.
