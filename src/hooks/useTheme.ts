import { useSyncExternalStore } from 'react'

export type Theme = 'light' | 'dark'

/** Shared with the boot script in index.html — keep the key and default in sync. */
const KEY = 'lht-theme'
const DEFAULT: Theme = 'light'

/** Browser UI chrome matches the page ground. */
const GROUND: Record<Theme, string> = { light: '#f5f7fa', dark: '#04081c' }

const listeners = new Set<() => void>()

function read(): Theme {
  try {
    const v = localStorage.getItem(KEY)
    if (v === 'light' || v === 'dark') return v
  } catch {
    /* private mode / blocked storage — fall through to the default */
  }
  return DEFAULT
}

let theme: Theme = read()

/** Paint the choice. The boot script does this first so there is no flash. */
function apply() {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', GROUND[theme])
}

export function setTheme(next: Theme) {
  if (next === theme) return
  theme = next
  try {
    localStorage.setItem(KEY, next)
  } catch {
    /* not persisting is survivable; the session still honours the choice */
  }
  apply()
  listeners.forEach((l) => l())
}

export function toggleTheme() {
  setTheme(theme === 'dark' ? 'light' : 'dark')
}

function subscribe(l: () => void) {
  listeners.add(l)
  return () => {
    listeners.delete(l)
  }
}

const snapshot = () => theme

/** Theme state, held in a module store so any component can read it without a provider. */
export function useTheme() {
  return { theme: useSyncExternalStore(subscribe, snapshot, snapshot), setTheme, toggleTheme }
}
