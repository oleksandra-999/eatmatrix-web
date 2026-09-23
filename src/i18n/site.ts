import { ltTodo, type Lang } from './index';

/** Header and footer labels shared by every page. */
const en = {
  homeLabel: 'EatMatrix home',
  articles: 'Articles',
  additives: 'Additives',
  independence: 'Independence',
  getStarted: 'Get started',
  privacy: 'Privacy Policy',
  terms: 'Terms of Service',
  encyclopedia: 'Additive encyclopedia',
  support: 'Support',
  instagram: 'Instagram',
  facebook: 'Facebook',
  wordmarkAlt: 'EatMatrix',
};

export type SiteCopy = typeof en;

// Never machine-translate: a translator replaces these ltTodo() calls.
const lt: SiteCopy = Object.fromEntries(Object.entries(en).map(([k, v]) => [k, ltTodo(v)])) as SiteCopy;

export const site: Record<Lang, SiteCopy> = { en, lt };
