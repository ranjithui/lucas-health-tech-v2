import { useContext } from 'react'
import { I18nContext, fallbackI18n, type I18n } from './store'

/** Language state, strings and localized content for the current reader. */
export function useI18n(): I18n {
  // Allows components to render in isolation (tests, previews) without a provider.
  return useContext(I18nContext) ?? fallbackI18n
}

/** Shorthand for the two things almost every component needs. */
export const useUi = () => useI18n().ui
export const useContent = () => useI18n().content
