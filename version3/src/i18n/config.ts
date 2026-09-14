/**
 * Supported locales. English is the default and the source of truth: every
 * other locale is typed against it, so a missing string is a compile error,
 * never an empty label in production.
 */
export const LOCALES = ['en', 'es', 'fr', 'de'] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'en'

/** Shared with nothing else — but keep the key stable so a stored choice survives upgrades. */
export const STORAGE_KEY = 'lht-lang'

export const LOCALE_META: Record<Locale, { code: string; nativeName: string; englishName: string; dateLocale: string }> = {
  en: { code: 'EN', nativeName: 'English', englishName: 'English', dateLocale: 'en-US' },
  es: { code: 'ES', nativeName: 'Español', englishName: 'Spanish', dateLocale: 'es-ES' },
  fr: { code: 'FR', nativeName: 'Français', englishName: 'French', dateLocale: 'fr-FR' },
  de: { code: 'DE', nativeName: 'Deutsch', englishName: 'German', dateLocale: 'de-DE' },
}

export const isLocale = (v: unknown): v is Locale => typeof v === 'string' && (LOCALES as readonly string[]).includes(v)

/** Stored choice wins; otherwise the first browser language we support; otherwise English. */
export function detectLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isLocale(stored)) return stored
  } catch {
    /* private mode / blocked storage */
  }
  if (typeof navigator !== 'undefined') {
    for (const tag of navigator.languages ?? [navigator.language]) {
      const base = tag?.slice(0, 2).toLowerCase()
      if (isLocale(base)) return base
    }
  }
  return DEFAULT_LOCALE
}

/** `{name}` placeholders → values. Unknown placeholders are left as-is. */
export function fmt(template: string, vars: Record<string, string | number> = {}): string {
  return template.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m))
}
