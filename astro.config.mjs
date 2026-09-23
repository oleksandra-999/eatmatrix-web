// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Canonical URLs and the sitemap always point at production, even on the preview host.
  site: 'https://eatmatrix.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'lt'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', lt: 'lt' } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
