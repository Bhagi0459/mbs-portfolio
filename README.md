# MBS Portfolio

Personal portfolio site for Bhagya Sankar Maddela, Senior Angular Developer — experience, projects, skills, and technical writing in one place.

**Live site:** [mbsfolio.netlify.app](https://mbsfolio.netlify.app/)

Deployed on **Netlify**.

## Sections

- **Home** — intro and highlights
- **About** — background and education
- **Experience** — work history
- **Skills** — grouped tech stack
- **Projects** — featured personal and enterprise work
- **Insights** — Angular Performance Series and other technical posts, sourced from LinkedIn
- **Certifications**
- **Resume**
- **Contact**

## Tech stack

- Angular 20 — Standalone Components, lazy-loaded feature routes
- GSAP for animation, Lucide Angular for icons
- RxJS

## Project structure

```
src/app/
  core/        # animation, intro sequence, contact, SEO services
  layout/      # navbar, footer, intro
  features/    # home, about, experience, skills, projects, insights, certifications, resume, contact
  shared/      # ambient background, tech chip, section heading, social icons, not-found
  models/      # shared TypeScript interfaces
```

Each entry in the Insights feature (`src/app/features/insights/insights.data.ts`) links to the original LinkedIn post.

## Getting started

```bash
npm install
npm start        # ng serve, http://localhost:4200
```

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Run the Angular dev server |
| `npm run build` | Production build to `dist/mbs-portfolio/browser` |
| `npm run watch` | Incremental dev build |
| `npm test` | Run unit tests (Karma/Jasmine) |
| `npm run lint` | Lint the project |

## Deployment

Netlify builds `npm run build` and publishes `dist/mbs-portfolio/browser`, with all routes rewritten to `index.html` for client-side routing (`netlify.toml`).
