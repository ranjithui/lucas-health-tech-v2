import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { DEFAULT_LOCALE, LOCALE_META, STORAGE_KEY, detectLocale, fmt, type Locale } from './config'
import { englishBundle, loadBundle, type Bundle } from './locales'
import type { UiDict } from './locales/en'
import type { LocalizedContent } from './localize'

interface I18n {
  /** The locale the reader has chosen (may still be loading). */
  locale: Locale
  /** The locale whose strings are currently on screen. */
  activeLocale: Locale
  loading: boolean
  ui: UiDict
  content: LocalizedContent
  dateLocale: string
  setLocale: (l: Locale) => void
  /** `t('{n} min read', { n: 4 })` */
  t: (template: string, vars?: Record<string, string | number>) => string
}

const I18nContext = createContext<I18n | null>(null)

/**
 * Holds the language for the whole app. English renders synchronously; another
 * language keeps English on screen until its bundle arrives, then swaps in one
 * commit — no flash of empty labels and no per-key suspense.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => detectLocale())
  const [bundle, setBundle] = useState<Bundle>(englishBundle)

  useEffect(() => {
    let alive = true
    loadBundle(locale).then((b) => {
      if (alive) setBundle(b)
    })
    return () => {
      alive = false
    }
  }, [locale])

  useEffect(() => {
    document.documentElement.lang = bundle.locale
  }, [bundle.locale])

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* the session still honours the choice */
    }
  }, [])

  const value = useMemo<I18n>(
    () => ({
      locale,
      activeLocale: bundle.locale,
      loading: bundle.locale !== locale,
      ui: bundle.ui,
      content: bundle.content,
      dateLocale: LOCALE_META[bundle.locale].dateLocale,
      setLocale,
      t: fmt,
    }),
    [locale, bundle, setLocale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18n {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    // Allows components to render in isolation (tests, previews) without a provider.
    return {
      locale: DEFAULT_LOCALE,
      activeLocale: DEFAULT_LOCALE,
      loading: false,
      ui: englishBundle.ui,
      content: englishBundle.content,
      dateLocale: LOCALE_META.en.dateLocale,
      setLocale: () => {},
      t: fmt,
    }
  }
  return ctx
}

/** Shorthand for the two things almost every component needs. */
export const useUi = () => useI18n().ui
export const useContent = () => useI18n().content
