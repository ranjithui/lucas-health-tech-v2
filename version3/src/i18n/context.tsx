import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { LOCALE_META, STORAGE_KEY, detectLocale, fmt, type Locale } from './config'
import { englishBundle, loadBundle, type Bundle } from './locales'
import { I18nContext, type I18n } from './store'

/**
 * Holds the language for the whole app. English renders synchronously; another
 * language keeps English on screen until its bundle arrives, then swaps in one
 * commit — no flash of empty labels and no per-key suspense.
 *
 * The context object lives in ./store.ts and the hooks in ./useI18n.ts, so this
 * file exports only a component and Fast Refresh can hot-swap it.
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
