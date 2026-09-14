import type { Locale } from '../config'
import type { UiDict } from './en'
import type { ContentPack } from '../content/types'
import { en } from './en'
import { englishContent, localize, type LocalizedContent } from '../localize'

export interface Bundle {
  locale: Locale
  ui: UiDict
  content: LocalizedContent
}

export const englishBundle: Bundle = { locale: 'en', ui: en, content: englishContent }

const cache = new Map<Locale, Bundle>([['en', englishBundle]])

/**
 * Non-English dictionaries and content packs are code-split: a reader who
 * never leaves English never downloads them. Each locale is two chunks —
 * ui strings and content — loaded together and cached for the session.
 */
const loaders: Record<Exclude<Locale, 'en'>, () => Promise<{ ui: UiDict; content: ContentPack }>> = {
  es: async () => {
    const [{ es }, { esContent }] = await Promise.all([import('./es'), import('../content/es')])
    return { ui: es, content: esContent }
  },
  fr: async () => {
    const [{ fr }, { frContent }] = await Promise.all([import('./fr'), import('../content/fr')])
    return { ui: fr, content: frContent }
  },
  de: async () => {
    const [{ de }, { deContent }] = await Promise.all([import('./de'), import('../content/de')])
    return { ui: de, content: deContent }
  },
}

export async function loadBundle(locale: Locale): Promise<Bundle> {
  const hit = cache.get(locale)
  if (hit) return hit
  const { ui, content } = await loaders[locale as Exclude<Locale, 'en'>]()
  const bundle: Bundle = { locale, ui, content: localize(content) }
  cache.set(locale, bundle)
  return bundle
}
