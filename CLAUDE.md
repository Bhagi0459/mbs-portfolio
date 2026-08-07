# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

`mbs-portfolio` is an Angular 20 personal portfolio site — a fully static, client-rendered
SPA with no backend, deployed to Netlify ([mbsfolio.netlify.app](https://mbsfolio.netlify.app/)).
Nine routed feature pages (home, about, experience, skills, projects, insights,
certifications, resume, contact), each lazy-loaded and driven by a typed `*.data.ts` file
holding the actual content. Full architecture, frontend conventions, and deployment
details live in [`docs/`](docs/README.md) — read that before making structural changes.

## Commands

```bash
npm start           # ng serve — dev server at http://localhost:4200/, auto-reloads on change
npm run build        # ng build — production build to dist/mbs-portfolio/browser
npm run watch         # ng build --watch --configuration development
npm test           # ng test — unit tests via Karma/Jasmine (watches by default)
npm run test:ci      # ng test --watch=false --browsers=ChromeHeadless — CI mode
npm run lint         # ng lint
```

Run a single test file/suite: use Karma's standard filtering, e.g. `ng test --include='**/navbar.spec.ts'`, or narrow with Jasmine `fdescribe`/`fit` in the spec.

Generate a new component (uses the project's scss schematic default): `ng generate component <path/name>`.

There is no e2e framework set up.

## Architecture

- **`src/app/layout/`** — structural shell components (`navbar`, `footer`, boot `intro` overlay) rendered once in `app.html` around `<router-outlet>`. `App` (`src/app/app.ts`) is the root standalone component that wires these together.
- **`src/app/core/`** — singleton services and app-wide data: `SeoService` (per-route meta tags), `IntroService` (the boot-intro/hero-entrance handoff state machine — see [docs/architecture.md](docs/architecture.md)), GSAP plugin registration, and contact/social-link source data.
- **`src/app/features/`** — one folder per routed, lazy-loaded page. Each pairs a component with a `*.data.ts` file holding that page's content.
- **`src/app/shared/`** — reusable presentational components used across features: tech-chip (brand icon + label), section headings, ambient background, social icons, 404 page.
- **`src/app/models/`** — shared TypeScript interfaces, one per content shape (`Project`, `Experience`, `Skill`, etc.).
- **`src/app/app.routes.ts`** — central route table; every entry lazy-loads via `loadComponent()`. New pages are registered here.
- **`src/app/app.config.ts`** — `ApplicationConfig` composition root (zone-based change detection with event coalescing, router providers with view transitions, global error listeners). Add new app-wide providers here rather than in `main.ts`.

Components are standalone (no NgModules) and follow Angular CLI's default generated shape: a `.ts` class, separate `.html` template, and separate `.scss` stylesheet per component (set via the `@schematics/angular:component` `style: scss` default in `angular.json`).

## Conventions

- Single quotes, 100-char print width, Prettier's `angular` parser for `.html` files (see `prettier` block in `package.json`).
- TypeScript strict mode is fully enabled, including `strictTemplates`, `strictInjectionParameters`, `strictInputAccessModifiers`, `noImplicitOverride`, and `noPropertyAccessFromIndexSignature` — write template and DI code accordingly (e.g., explicit access modifiers on `@Input()`s, no implicit `any` template access).
- 2-space indentation, UTF-8, final newline required (`.editorconfig`).

---

# Project AURA Engineering Standards

## Vision

This is not a template portfolio.

This repository represents Bhagya Sankar Maddela as a Senior Angular Developer with 5+ years of enterprise experience.

Every engineering decision should optimize for:

- Recruiter Experience
- Maintainability
- Performance
- Accessibility
- Modern Angular Architecture

---

## Angular Standards

Always use Angular 20 best practices.

Preferred patterns:

- Standalone Components
- Signals for local component state
- inject() over constructor injection where appropriate
- Modern Control Flow (@if, @for)
- Lazy Loaded Routes
- Strong typing

Avoid:

- NgModules
- Legacy structural directives when modern control flow is available
- Unnecessary RxJS
- Over-engineering
- Deep component nesting

---

## Design Philosophy

Inspired by:

- Apple
- Vercel
- Linear

Characteristics:

- Premium
- Minimal
- Elegant
- Professional

Never create flashy or distracting UI.

Animations must support UX.

---

## Performance

Target Lighthouse:

Performance: 95+

Accessibility: 95+

SEO: 95+

Best Practices: 95+

Avoid unnecessary JavaScript.

Prefer CSS animations when appropriate.

---

## Component Rules

Each component must have one responsibility.

Prefer reusable components.

Keep templates clean.

Avoid business logic inside HTML.

---

## Styling

Use SCSS.

Prefer CSS variables for colors and themes.

Avoid inline styles.

Avoid !important.

Keep responsive design mobile-first.

---

## Accessibility

Use semantic HTML.

Provide keyboard navigation.

Use ARIA only when necessary.

Maintain proper heading hierarchy.

Ensure sufficient color contrast.

---

## Git

Use conventional commits.

Examples:

feat:

fix:

refactor:

style:

docs:

chore:

---

## Code Reviews

Before implementing anything significant:

- Explain the approach.
- Wait for approval.
- Then implement.

Never make architectural decisions without discussion.

---

## AI Collaboration

Assume ChatGPT acts as the Software Architect.

Claude acts as the Senior Frontend Engineer responsible for implementation.

If architectural ambiguity exists, ask questions before coding.