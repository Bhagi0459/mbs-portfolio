# Frontend

## Stack

- **Angular 20** — standalone components only, no NgModules anywhere in the codebase.
- **TypeScript**, strict mode enabled in full: `strict`, `strictTemplates`,
  `strictInjectionParameters`, `strictInputAccessModifiers`, `noImplicitOverride`,
  `noPropertyAccessFromIndexSignature`. See [tsconfig.json](../tsconfig.json).
- **SCSS**, one stylesheet per component plus shared design tokens (see below).
- **GSAP** (+ `ScrollTrigger`) for scroll-triggered reveals, pointer-parallax, and the
  boot-intro sequence.
- **@lucide/angular** for line icons; brand/technology icons are inlined SVG path data
  (see [Tech and social icons](#tech-and-social-icons) below).
- **RxJS**, used sparingly — mainly for `Router.events` filtering (see `App` in
  [app.ts](../src/app/app.ts)) rather than as a general state-management tool.

## Component conventions

Every component is standalone and follows the same generated shape: a `.ts` class file,
a separate `.html` template, and a separate `.scss` stylesheet
(`schematics/angular:component.style: scss` in [angular.json](../angular.json)).

- **Signals over RxJS for local state.** `signal()`, `computed()`, and `effect()` are the
  default; RxJS shows up only where the platform requires it (router events).
- **`inject()` over constructor injection.** Every service is pulled in with
  `private readonly foo = inject(Foo)` at the top of the class.
- **Modern control flow.** Templates use `@if`, `@for`, and `@switch` — no `*ngIf` /
  `*ngFor` anywhere.
- **`input()` / `input.required()`** for component inputs instead of `@Input()`
  decorators, e.g. `ProjectCard.project = input.required<Project>()`.

## Feature pages are data-driven

Each `features/<name>/` folder pairs a component with a `<name>.data.ts` file exporting
typed constants (e.g. `EXPERIENCE: Experience[]` in
[experience.data.ts](../src/app/features/experience/experience.data.ts)). The component
imports the constant, assigns it to a `protected readonly` field, and the template loops
over it with `@for`. Updating page content — a new job, a new project, a new certification
— means editing the relevant `*.data.ts` file; no template changes are needed unless the
shape of the content itself changes.

## Scroll reveals

Most feature pages use the same pattern: mark elements `data-reveal` in the template, then
in the component's `afterNextRender()` hook set up an `IntersectionObserver` that adds an
`is-visible` class the first time an element scrolls into view (and immediately
unobserves it — a reveal only ever plays once). The observer is torn down via
`DestroyRef.onDestroy()`. See [about.ts](../src/app/features/about/about.ts) for a
representative example; the same ~20 lines are repeated per feature rather than factored
into a directive, since each page's reveal timing is otherwise independent.

## Tech and social icons

`shared/tech-chip/tech-icon-paths.ts` centralizes a technology-name → brand-icon lookup
(`TECH_ICON_PATHS: Record<string, TechIcon>`), sourced from simple-icons (CC0) and devicon
(MIT). Every path is monochrome, rendered via `currentColor`, with brand fill colors
deliberately stripped so a chip always matches the current theme rather than showing a
brand's own multi-color mark. Version-specific labels (`"Angular 19"`, `".NET 10"`) are
aliased to the same base icon rather than duplicated. Technologies with no accurate
lightweight mark available (SQL Server, Power BI, EF Core) render as text-only by design.

`shared/social-icon/` follows a different pattern — one `@switch` in the template per
platform, since there are only six and adding a seventh is rare.

## Design tokens

`src/styles/tokens/` holds SCSS partials for color, spacing, radii, shadows, typography,
and breakpoints, imported once via `src/styles/tokens/_index.scss`. Components reference
these tokens (mostly as CSS custom properties) rather than hardcoding values, per the
"prefer CSS variables for colors and themes" rule in [../CLAUDE.md](../CLAUDE.md).

## Reduced motion and pointer type

Anywhere GSAP drives an entrance or parallax effect, the component checks
`window.matchMedia('(prefers-reduced-motion: reduce)')` first and skips the animation
entirely if the user has that preference set. Pointer-driven effects (hero glow parallax,
project-card tilt) additionally check `(pointer: fine)` so touch devices never get a
`pointermove`-based effect that can't fire on them. See `setupParallax()` in
[home.ts](../src/app/features/home/home.ts) and `setupTilt()` in
[project-card.ts](../src/app/features/projects/project-card/project-card.ts).

## Testing

Unit tests run on Karma + Jasmine (`ng test`), one `.spec.ts` per component/service.
Component specs render the component with `TestBed` and assert on rendered DOM content —
list lengths matching the underlying data array, correct `href`/`target`/`rel` on external
links, correct text content — rather than only checking that the component instantiates.
`core/intro/intro.spec.ts` and `layout/intro/intro.spec.ts` cover the boot-intro state
machine's invariants (idempotency, one-way transitions, the reduced-motion bypass, and the
exit-delay/fallback timers via `fakeAsync`/`tick`).

Run the full suite headlessly: `npm run test:ci`. Run a single spec while developing:
`ng test --include='**/navbar.spec.ts'`, or narrow further with Jasmine's `fdescribe`/`fit`.
