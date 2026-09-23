# eatmatrix-web

Marketing site for EatMatrix: Astro (static output), Tailwind, Markdown articles, EN at `/` and LT at `/lt/`.

## Commands

```sh
npm install        # once
npm run dev        # http://localhost:4321 with live reload
npm run build      # type-check (astro check) + build to dist/
npm run preview    # serve dist/ locally
node scripts/fetch-framer-assets.mjs   # download the live site's images into src/assets/framer/
```

## Where things live

- `src/i18n/landing.ts`: all landing page copy (EN, and the LT object a translator replaces).
- `src/i18n/links.ts`: App Store, checkout, legal and social links.
- `src/styles/global.css`: design tokens (colors, font). Provisional until the Framer palette is confirmed.
- `src/content/articles/*.md`: articles. Frontmatter: `title`, `description`, `date`, `lang` (`en`|`lt`), `tags`, optional `cover`.
- `src/assets/framer/manifest.ts`: the live site's images; placeholders render until they are downloaded.

## Translations

Lithuanian strings are never machine-translated. Untranslated strings render as `[TODO LT] …` and
LT pages carry `noindex` until none remain. Find them with `grep -rn "ltTodo(" src`.
