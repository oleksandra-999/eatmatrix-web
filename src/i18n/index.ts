export const locales = ['en', 'lt'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'en';

/**
 * Marks a string that still needs a human Lithuanian translation.
 * Never machine-translate: leave the English source here and a translator replaces the whole call.
 * Find them all with: grep -rn "ltTodo(" src
 */
export function ltTodo(english: string): string {
  return `${LT_TODO_PREFIX}${english}`;
}
export const LT_TODO_PREFIX = '[TODO LT] ';

/** Path for `path` (written without a locale prefix, e.g. "/articles") in `lang`. */
export function localizePath(path: string, lang: Lang): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  return lang === defaultLang ? clean || '/' : `/${lang}${clean}`;
}

/** Strips the locale prefix from a pathname: "/lt/articles" -> "/articles". */
export function unlocalizePath(pathname: string): string {
  const stripped = pathname.replace(/^\/lt(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}

export function getLangFromUrl(url: URL): Lang {
  return url.pathname === '/lt' || url.pathname.startsWith('/lt/') ? 'lt' : 'en';
}

export const ogLocale: Record<Lang, string> = { en: 'en_US', lt: 'lt_LT' };
