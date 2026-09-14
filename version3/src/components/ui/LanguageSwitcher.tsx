import { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Check, Globe } from 'lucide-react'
import { LOCALES, LOCALE_META, type Locale } from '../../i18n/config'
import { useI18n } from '../../i18n/context'
import { cn } from '../../utils/cn'

/**
 * Compact menu for the header: a globe and the current code ("EN"), opening a
 * short list of native language names. `light` = sitting on a dark ground.
 *
 * Keyboard: Enter/Space opens, arrows move, Escape closes, focus returns to the
 * trigger. The list is a listbox so screen readers announce the selection.
 */
export function LanguageSwitcher({ light, className }: { light?: boolean; className?: string }) {
  const { locale, setLocale, ui, loading } = useI18n()
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const id = useId()

  useEffect(() => {
    if (!open) return
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        trigger.current?.focus()
      }
    }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const choose = (l: Locale) => {
    setLocale(l)
    setOpen(false)
    trigger.current?.focus()
  }

  const onListKey = (e: React.KeyboardEvent<HTMLUListElement>) => {
    const items = Array.from(e.currentTarget.querySelectorAll<HTMLButtonElement>('button'))
    const i = items.findIndex((el) => el === document.activeElement)
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      items[(i + 1) % items.length]?.focus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      items[(i - 1 + items.length) % items.length]?.focus()
    }
  }

  return (
    <div ref={root} className={cn('relative', className)}>
      <button
        ref={trigger}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-list`}
        aria-label={`${ui.language.change}: ${LOCALE_META[locale].nativeName}`}
        title={ui.language.label}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          'inline-flex h-[34px] items-center gap-1.5 rounded-full border px-3 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-300',
          light
            ? 'border-white/15 bg-white/[0.06] text-white/85 hover:border-white/30 hover:text-white'
            : 'border-paper-300 bg-paper-50 text-muted hover:border-accent-500/40 hover:text-text',
          open && (light ? 'border-white/30 text-white' : 'border-accent-500/40 text-text'),
        )}
      >
        <Globe className={cn('h-[14px] w-[14px]', loading && 'animate-pulse')} strokeWidth={1.75} aria-hidden />
        {LOCALE_META[locale].code}
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            id={`${id}-list`}
            role="listbox"
            aria-label={ui.language.label}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            onKeyDown={onListKey}
            className="absolute right-0 top-[calc(100%+8px)] z-50 min-w-[168px] overflow-hidden rounded-2xl border border-paper-300 bg-surface p-1.5 shadow-lift"
          >
            {LOCALES.map((l) => {
              const on = l === locale
              return (
                <li key={l} role="option" aria-selected={on}>
                  <button
                    type="button"
                    lang={l}
                    onClick={() => choose(l)}
                    className={cn(
                      'flex w-full items-center justify-between gap-4 rounded-xl px-3 py-2 text-left text-[13.5px] transition-colors',
                      on ? 'bg-accent-500/10 text-text' : 'text-muted hover:bg-paper-200 hover:text-text',
                    )}
                  >
                    <span className="flex items-baseline gap-2.5">
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-accent-600">{LOCALE_META[l].code}</span>
                      <span>{LOCALE_META[l].nativeName}</span>
                    </span>
                    {on && <Check className="h-3.5 w-3.5 text-accent-600" aria-hidden />}
                  </button>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

/** Inline row of four pills — for the full-screen mobile menu. */
export function LanguagePills({ className }: { className?: string }) {
  const { locale, setLocale, ui } = useI18n()
  return (
    <div role="radiogroup" aria-label={ui.language.label} className={cn('flex flex-wrap gap-2', className)}>
      {LOCALES.map((l) => {
        const on = l === locale
        return (
          <button
            key={l}
            type="button"
            role="radio"
            aria-checked={on}
            lang={l}
            onClick={() => setLocale(l)}
            className={cn(
              'rounded-full border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors',
              on ? 'border-accent-400 bg-accent-500 text-white' : 'border-white/15 text-white/60 hover:border-white/40 hover:text-white',
            )}
          >
            {LOCALE_META[l].code}
          </button>
        )
      })}
    </div>
  )
}
