# Architecture

## What this is

A static, client-side-rendered Angular 20 single-page application (SPA). There is no
backend, no database, and no API — every page is a component that renders content from
TypeScript data files bundled into the app at build time. Angular CLI builds the app to
static HTML/CSS/JS, and Netlify serves those files from a CDN.

```
Browser  ──requests──▶  Netlify CDN  ──serves──▶  static files (dist/mbs-portfolio/browser)
   │
   └─ Angular Router runs entirely client-side, lazy-loading each page's JS chunk on navigation
```

## Directory layout

```
src/app/
  core/        Singleton services shared app-wide: SEO tag updates, the boot-intro state
               machine, animation setup, and the contact/social-link data those services expose.
  layout/      Structural shell rendered once: navbar, footer, and the boot-intro overlay.
  features/    One folder per routed page (home, about, experience, skills, projects,
               insights, certifications, resume, contact). Each feature owns its component,
               template, styles, and a `*.data.ts` file holding the actual content.
  shared/      Small reusable presentational pieces used across features: tech-chip (brand
               icon + label), section headings, the ambient background glow, social icons,
               and the 404 page.
  models/      TypeScript interfaces shared between a feature's data file and its template.
```

## Routing

`app.routes.ts` defines one lazy-loaded route per feature page via `loadComponent()` —
nothing is eagerly bundled into the initial chunk except the app shell (navbar, footer,
router-outlet). A wildcard route (`**`) lazy-loads the not-found page. See
[app.routes.ts](../src/app/app.routes.ts).

## State

There's no global state store (no NgRx, no signal store). State lives in one of three
places:

- **Static data files** (`*.data.ts`) — content that never changes at runtime: experience
  history, project descriptions, skills, certifications.
- **Component-local signals** — UI state scoped to one component (e.g. `Navbar`'s
  `menuOpen`, `Home`'s entrance-animation gate).
- **Two root-provided services** — `IntroService` (see below) and `SeoService`, both
  `@Injectable({ providedIn: 'root' })` singletons injected wherever needed.

## The boot-intro handoff

The one genuinely stateful piece of this app is the coordination between the boot intro
overlay (`layout/intro/intro.ts`) and the Home page's entrance animation
(`features/home/home.ts`). Both read and write `IntroService`
(`core/intro/intro.ts`), which exposes two one-way signals:

- `active`: true while the intro overlay exists in the DOM. Only ever flips true → false.
- `handoff`: true once Home is allowed to begin its own entrance. Only ever flips
  false → true, and flips at the *start* of the intro's exit transition rather than its
  end, so Home's hero content is already animating in while the intro is still fading out.

This avoids a blank gap between "intro gone" and "hero visible." A hard fallback timer in
`Intro` calls `introService.complete()` even if the CSS `transitionend` event never fires
(e.g. the browser tab was backgrounded), so the site can never get stuck showing the boot
overlay forever. See [core/intro/intro.ts](../src/app/core/intro/intro.ts) and
[layout/intro/intro.ts](../src/app/layout/intro/intro.ts).

## Change detection

The app uses Angular's zone-based change detection with event coalescing
(`provideZoneChangeDetection({ eventCoalescing: true })`) rather than the newer zoneless
mode — `zone.js` is still a polyfill dependency. Components favor signals for local state
regardless, which keeps the door open to a future zoneless migration without a rewrite.

## SEO

Every routed feature component calls `SeoService.updateMetadata()` in its constructor to
set the page `<title>` and `description`/`og:*` meta tags client-side on navigation. This
is a standard SPA limitation worth knowing: since there's no server-side rendering, a
crawler that doesn't execute JavaScript sees only `index.html`'s default meta tags, not
each page's per-route metadata.
