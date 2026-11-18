# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A one-page marketing site (React + Vite, no backend/no forms) for Leticia Martins, an
architect ("Moratta Arquitetura e Interiores"). Every "contact" action redirects to WhatsApp —
there is no server, no database, no contact form to wire up.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start Vite dev server at http://localhost:5173
npm run build     # production build to dist/
npm run preview   # serve the production build locally
npm run lint       # oxlint (react + oxc plugin rules)
npm run deploy     # build then publish dist/ to the gh-pages branch (GitHub Pages)
```

There is no test suite/framework configured in this repo.

## Architecture

**One page, six sections, no router.** `src/App.jsx` renders `Header`, then `<main>` with
`Hero → Prazer → Projetos → Arquitetura`, then `Footer`, in that fixed order — this mirrors
the single Figma frame ("Website") the whole site was built from. Each section lives in its
own `src/components/<Name>/` folder as a colocated `<Name>.jsx` + `<Name>.module.css` pair
(CSS Modules, no Tailwind/styled-components/UI kit). When adding a new section, follow that
same colocation pattern.

**Images are ES module imports, not `public/` assets.** All site imagery lives in `src/img/`
(including `src/img/icons/*.svg` for the footer's social icons) and components `import` them
directly, e.g. `import leticia from '../../img/leticia2.png'` then `<img src={leticia} />`.
This lets Vite fingerprint/hash them into `dist/assets/` on build. Do not add new images to
`public/` and reference them by absolute `/img/...` path — that was the original approach and
was deliberately refactored away; `public/` is now empty except for build-time passthrough
needs. (Note: `index.html`'s favicon `<link>` still points at the old `/img/logo.png` public
path and is currently broken after that refactor — worth fixing next time you touch
`index.html`.)

**Contact/CTA logic is centralized in `src/constants.js`.** `WHATSAPP_NUMBER`,
`WHATSAPP_MESSAGE`, `INSTAGRAM_URL`, `EMAIL_ADDRESS`, and a `getWhatsAppLink(message?)` helper
that builds a `wa.me` URL with the message URL-encoded. `Header` and `Footer` both import from
here rather than hardcoding contact details — do the same for any new CTA.

**Header nav is partly inert by design.** Of the four nav items, `PROJETOS` is a same-page
anchor (`#projetos`, smooth-scrolled via `scroll-behavior: smooth` set globally in
`src/index.css`), `FALE COMIGO`/`ORÇAMENTO` both open `getWhatsAppLink()`, and
`PARA ARQUITETOS` intentionally renders as a plain `<span>` with no `href` — that section
doesn't exist yet (client is building the content for it separately). Don't wire it to
anything without being asked.

**Header logo overlaps the hero on purpose.** In `Header.module.css`, `.logo` is
`position: absolute` (not a normal flex child) so the circular badge visually overlaps
past the header bar into the Hero section below, matching the Figma design. The header's
`box-shadow` is on `.header` itself (the thin bar), separate from the logo, so it doesn't
get stretched or crossed by the logo. If the header ever needs to grow to fit the logo
inline instead, that's a deliberate layout change, not a bug fix.

**Desktop-only fluid layout — not responsive to mobile/tablet.** Sections use CSS Grid/Flexbox
with explicit `grid-column`/`grid-row` placement (not absolute pixel positioning) and
`clamp()` for font sizes so the layout scales smoothly across desktop widths (~1280px–2560px,
capped at the Figma reference width of 1931px via `max-width` on `.page` in
`src/App.module.css`). There are no mobile/tablet breakpoints yet — that's an explicit,
client-confirmed scope decision, not an oversight. When converting more of the design from
Figma's absolute pixel coordinates, reuse this pattern: pick a reference viewport width (1931px),
convert each `px` value to a `clamp(min, vw, max)` triple rather than hardcoding a fixed pixel.

**Design tokens live in `src/index.css`** as CSS custom properties on `:root`
(`--color-header`, `--color-bg`, `--color-accent`, `--color-secondary`) — reuse these rather
than hardcoding hex values in a component's module CSS. Fonts (Cinzel, Cinzel Decorative,
Baskervville, Baskervville SC, Poppins) are loaded via a Google Fonts `<link>` in `index.html`,
not as npm packages.

**`design-reference/` is not part of the app.** It holds a full-page Figma export
(`Frame 1.png`) and a color/font swatch sheet (`paleta-de-cores.jpg`) kept for visual
comparison only — never imported by any component.

## Deployment

Configured for GitHub Pages: `vite.config.js` sets `base: '/Moratta/'` and `package.json` has
a `homepage` field plus `predeploy`/`deploy` scripts using `gh-pages` to publish `dist/` to the
`gh-pages` branch. (`README.md` mentions Hostinger as a longer-term hosting target — if that
changes, the Vite `base` path will need to change too.)
