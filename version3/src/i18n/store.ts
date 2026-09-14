import { createContext } from 'react'
import { DEFAULT_LOCALE, LOCALE_META, fmt, type Locale } from './config'
import { englishBundle } from './locales'
import type { UiDict } from './locales/en'
import type { LocalizedContent } from './localize'

export interface I18n {
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

export const I18nContext = createContext<I18n | null>(null)

/** What a component sees when rendered outside the provider: English, non-switchable. */
export const fallbackI18n: I18n = {
  locale: DEFAULT_LOCALE,
  activeLocale: DEFAULT_LOCALE,
  loading: false,
  ui: englishBundle.ui,
  content: englishBundle.content,
  dateLocale: LOCALE_META.en.dateLocale,
  setLocale: () => {},
  t: fmt,
}
