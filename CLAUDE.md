# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

`mbs-portfolio` is an Angular 20 personal portfolio site, scaffolded with Angular CLI 20.3.31. The codebase is currently minimal (fresh scaffold): only a navbar/footer layout exists, and the `core`, `features`, `models`, and `shared` directories under `src/app/` are empty placeholders establishing the intended architecture.

## Commands

```bash
npm start           # ng serve — dev server at http://localhost:4200/, auto-reloads on change
npm run build        # ng build — production build to dist/ (optimized by default)
npm run watch         # ng build --watch --configuration development
npm test           # ng test — unit tests via Karma/Jasmine (watches by default)
```

Run a single test file/suite: use Karma's standard filtering, e.g. `ng test --include='**/navbar.spec.ts'`, or narrow with Jasmine `fdescribe`/`fit` in the spec.

Generate a new component (uses the project's scss schematic default): `ng generate component <path/name>`.

There is no configured lint script and no e2e framework set up.

## Architecture

- **`src/app/layout/`** — structural shell components (`navbar`, `footer`) rendered once in `app.html` around `<router-outlet>`. `App` (`src/app/app.ts`) is the root standalone component that wires these together.
- **`src/app/core/`** — intended for singleton services, app-wide providers, guards/interceptors (empty so far).
- **`src/app/features/`** — intended for routed, page-level feature modules/components (empty so far).
- **`src/app/shared/`** — intended for reusable, presentational components/directives/pipes used across features (empty so far).
- **`src/app/models/`** — intended for shared TypeScript interfaces/types (empty so far).
- **`src/app/app.routes.ts`** — central route table (currently empty `Routes` array); new pages should be registered here.
- **`src/app/app.config.ts`** — `ApplicationConfig` composition root (zoneless-friendly change detection, router providers, global error listeners). Add new app-wide providers here rather than in `main.ts`.

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