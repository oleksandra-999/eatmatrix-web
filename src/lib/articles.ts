import { getCollection, type CollectionEntry } from 'astro:content';

/** English articles, newest first. */
export async function getArticles(): Promise<CollectionEntry<'articles'>[]> {
  const all = await getCollection('articles', (a) => a.data.lang === 'en');
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
