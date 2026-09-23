import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Git is the CMS: one Markdown file per article in src/content/articles/.
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      lang: z.enum(['en', 'lt']),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
    }),
});

export const collections = { articles };
