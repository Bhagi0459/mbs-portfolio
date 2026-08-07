# Deployment

## Where it's hosted

**Netlify.** Live at [mbsfolio.netlify.app](https://mbsfolio.netlify.app/). Configuration
lives entirely in [netlify.toml](../netlify.toml):

```toml
[build]
  command = "npm run build"
  publish = "dist/mbs-portfolio/browser"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

- **Build command**: `npm run build` → `ng build`, which produces a production bundle
  (optimized, hashed filenames, budgets enforced — see `production` config in
  [angular.json](../angular.json)).
- **Publish directory**: `dist/mbs-portfolio/browser` — note the `/browser` suffix.
  Angular's application builder emits the browser bundle under a `browser/` subfolder of
  `dist/<project-name>/`; pointing Netlify at `dist/mbs-portfolio` directly (without
  `/browser`) would serve nothing.
- **SPA fallback redirect**: the `[[redirects]]` rule rewrites every path to
  `/index.html` with a `200` (not a `302`/`301`). Angular Router then reads the real URL
  client-side and renders the matching route. Without this rule, a hard refresh or direct
  link to e.g. `/projects` would 404 at the CDN before Angular ever loads.

Netlify auto-deploys on every push to `main` (standard Netlify Git integration — there's
no custom webhook or deploy script in this repo). Build/deploy logs are on the Netlify
dashboard for this site, not in this repository.

## CI (separate from deployment)

[.github/workflows/ci.yml](../.github/workflows/ci.yml) runs on every push and pull
request against `main`: `npm ci` → `npm run lint` → `npm run test:ci` → `npm run build`.
This is a quality gate, not what actually deploys the site — Netlify does its own
independent build from the same repo. A green GitHub Actions run and a successful Netlify
deploy are two separate signals; check both after pushing.

## Environment

No environment variables, secrets, or backend credentials are involved anywhere in this
project — it's a static SPA with no API calls and no server-side code, so there's nothing
to configure or leak in either GitHub Actions or the Netlify build environment.

## Local production build

To reproduce exactly what Netlify builds, locally:

```bash
npm ci
npm run build
```

Output lands in `dist/mbs-portfolio/browser`. Serving it with any static file server
(rather than `ng serve`) is the closest local approximation of the deployed site, since it
skips the dev-server's live-reload/HMR layer entirely.
