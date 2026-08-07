# Glossary

Plain-language definitions for terms used elsewhere in these docs and in the codebase,
aimed at someone new to Angular or this specific project.

**Standalone component** — an Angular component that declares its own dependencies
(`imports: [...]` in the `@Component` decorator) instead of belonging to an `NgModule`.
This entire app has zero `NgModule`s; every component, directive, and pipe is standalone.

**Signal** — a reactive value container (`signal(initialValue)`) that notifies only the
parts of the UI that actually read it when it changes, instead of Angular re-checking the
whole component tree. `computed()` derives a read-only signal from other signals;
`effect()` runs a side effect whenever the signals it reads change.

**`inject()`** — a function that retrieves a dependency (a service, `DestroyRef`,
`ElementRef`, etc.) from Angular's dependency-injection container, used instead of
declaring the same dependency as a constructor parameter. Both do the same thing;
`inject()` reads better when a class has many dependencies.

**Lazy-loaded route** — a route whose component code is only downloaded by the browser
the first time a user navigates to it (`loadComponent: () => import(...)`), rather than
being bundled into the initial page load. Every feature page in this app (`/about`,
`/projects`, etc.) is lazy-loaded — see [app.routes.ts](../src/app/app.routes.ts).

**`DestroyRef`** — an injectable handle for registering cleanup logic
(`destroyRef.onDestroy(() => ...)`) that runs when a component is destroyed, used
throughout this app to remove event listeners and disconnect `IntersectionObserver`s so
they don't leak after a user navigates away.

**`afterNextRender()`** — an Angular lifecycle hook that runs a callback once, after the
component has first rendered to the DOM, and only in the browser (never during
server-side rendering, which this app doesn't use but the API still guards against).
Used here to safely read `window`/`document` and set up animations/observers that need a
real DOM element to exist first.

**SPA (single-page application)** — an app where one HTML page is loaded once, and all
subsequent "page navigation" is handled by JavaScript rewriting the DOM and the URL
client-side, without a full page reload. This is why `netlify.toml` needs the catch-all
redirect to `index.html` — the server needs to hand back the same single page for every
URL and let Angular Router take it from there.

**CDN (content delivery network)** — a network of geographically distributed servers that
cache and serve static files close to each visitor. Netlify serves this site's build
output from its CDN, which is why there's no traditional "server" to reason about — the
files are just replicated static assets.

**GSAP / ScrollTrigger** — a JavaScript animation library (GreenSock Animation Platform)
used here for entrance animations, pointer-parallax, and scroll-triggered reveals.
`ScrollTrigger` is its plugin for tying an animation's progress to scroll position.

**`prefers-reduced-motion`** — a CSS/JS media feature that reflects a user's OS-level
accessibility setting requesting less motion. This app checks it via
`window.matchMedia('(prefers-reduced-motion: reduce)').matches` before playing any
GSAP-driven animation, and skips straight to the end state if it's set.

**Karma / Jasmine** — the unit-testing stack Angular CLI scaffolds by default. Jasmine
provides the `describe`/`it`/`expect` test syntax; Karma is the runner that launches a
real (here, headless Chrome) browser to execute the tests in.

**`TestBed`** — Angular's testing utility for constructing a component (or service) in
isolation with a controlled set of providers/imports, used in every `.spec.ts` file in
this repo.

**ESLint / `angular-eslint`** — static analysis that catches likely bugs and enforces
style rules at lint time (`npm run lint`), including Angular-specific rules like
component/directive selector prefixes.
