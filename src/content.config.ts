import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Git is the CMS: one folder per article in src/content/articles/<slug>/ holding index.md and its cover.
 * The folder name is the URL slug (/articles/<slug>). Inline figures live in public/images/articles/<slug>/.
 */
const articles = defineCollection({
  loader: glob({
    pattern: '*/index.md',
    base: './src/content/articles',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** <title> and og:title when it should differ from the on-page headline. */
      seoTitle: z.string().optional(),
      description: z.string(),
      /** Card text on article lists when it should differ from the meta description. */
      excerpt: z.string().optional(),
      date: z.coerce.date(),
      lang: z.enum(['en', 'lt']),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      readingTime: z.number().int().positive(),
      /** Shown in "From the Research Desk" on the landing page. */
      featured: z.boolean().default(false),
      tldr: z.string(),
      takeaways: z.array(z.string()).default([]),
      faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    }),
});

export const collections = { articles };
