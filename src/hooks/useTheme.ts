import { useSyncExternalStore } from 'react'

export type Theme = 'light' | 'dark'

/** Shared with the boot script in index.html — keep the key in sync. */
const KEY = 'lht-theme'

/** Browser UI chrome matches the page ground. */
const GROUND: Record<Theme, string> = { light: '#f6f8fa', dark: '#0a1420' }

const listeners = new Set<() => void>()

const systemQuery = () => (typeof window !== 'undefined' && 'matchMedia' in window ? window.matchMedia('(prefers-color-scheme: dark)') : null)

/** Stored choice wins; otherwise follow the operating system. */
function read(): Theme {
  try {
    const v = localStorage.getItem(KEY)
    if (v === 'light' || v === 'dark') return v
  } catch {
    /* private mode / blocked storage — fall through to the system */
  }
  return systemQuery()?.matches ? 'dark' : 'light'
}

let theme: Theme = read()
let transitionTimer: number | undefined

/**
 * Paint the choice. The boot script does this first so there is no flash; here
 * the switch cross-fades colours via the `theme-transition` class for one beat.
 */
function apply(animate: boolean) {
  const root = document.documentElement
  if (animate) {
    root.classList.add('theme-transition')
    window.clearTimeout(transitionTimer)
    transitionTimer = window.setTimeout(() => root.classList.remove('theme-transition'), 480)
  }
  root.classList.toggle('dark', theme === 'dark')
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', GROUND[theme])
}

function commit(next: Theme, persist: boolean) {
  if (next === theme) return
  theme = next
  if (persist) {
    try {
      localStorage.setItem(KEY, next)
    } catch {
      /* not persisting is survivable; the session still honours the choice */
    }
  }
  apply(true)
  listeners.forEach((l) => l())
}

export function setTheme(next: Theme) {
  commit(next, true)
}

export function toggleTheme() {
  setTheme(theme === 'dark' ? 'light' : 'dark')
}

/* Follow the OS while the user has not chosen explicitly. */
systemQuery()?.addEventListener('change', (e) => {
  try {
    if (localStorage.getItem(KEY)) return
  } catch {
    /* ignore */
  }
  commit(e.matches ? 'dark' : 'light', false)
})

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
