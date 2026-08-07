# Documentation

Engineering docs for the `mbs-portfolio` codebase (deployed to
[mbsfolio.netlify.app](https://mbsfolio.netlify.app/)). Start with whichever doc matches
what you're trying to do:

- **[Architecture](architecture.md)** — what this app is, how it's structured, routing,
  state, and the one genuinely stateful piece (the boot-intro handoff).
- **[Frontend](frontend.md)** — the Angular stack, component conventions, how feature
  pages are data-driven, and the testing approach.
- **[Deployment](deployment.md)** — Netlify configuration, the CI pipeline, and how to
  reproduce a production build locally.
- **[Glossary](glossary.md)** — plain-language definitions of the Angular and web
  platform terms used throughout these docs.

There's no separate backend doc because there is no backend — this is a fully static
single-page application with no API, database, or server-side code. That's covered in
[Architecture](architecture.md#what-this-is).

See the root [README.md](../README.md) for the quick-start commands.
