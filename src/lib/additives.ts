import data from '../data/additives.json';

/**
 * The additive encyclopedia, copied from the live eatmatrix.com/additives pages on 2026-09-23
 * (scratch script parse_add.py). One entry per E-number; `research` items are trusted HTML from that copy.
 */
export type Verdict = 'safe' | 'moderation' | 'caution' | 'avoid' | 'unknown';

export interface Additive {
  slug: string;
  code: string;
  name: string;
  title: string;
  description: string;
  verdict: Verdict;
  reviewed: string;
  reviewer: string;
  unratedNote: string | null;
  regulators: { name: string; verdict: Verdict }[];
  flags: { label: string; ok: boolean }[];
  whatIs: string[];
  aliases: string;
  evidence: string[];
  research: string[];
  faq: { q: string; a: string }[];
}

export const verdictLabel: Record<Verdict, string> = {
  safe: 'Safe',
  moderation: 'Safe in moderation',
  caution: 'Use caution',
  avoid: 'Better avoided',
  unknown: 'Not yet rated',
};

export const additives = data.additives as Additive[];
export const additiveIntro = data.intro;
export const bySlug = new Map(additives.map((a) => [a.slug, a]));

/** Sections of the index page, in the live page's order (ranges and categories as published there). */
export const additiveGroups = data.groups.map((g) => ({ ...g, items: g.slugs.map((s) => bySlug.get(s)!) }));
