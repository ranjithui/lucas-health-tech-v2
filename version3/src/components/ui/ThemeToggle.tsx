import { Sun, Moon } from 'lucide-react'
import { motion } from 'motion/react'
import { useTheme, type Theme } from '../../hooks/useTheme'
import { useI18n } from '../../i18n/context'
import { cn } from '../../utils/cn'

const OPTIONS: { value: Theme; Icon: typeof Sun }[] = [
  { value: 'light', Icon: Sun },
  { value: 'dark', Icon: Moon },
]

/**
 * Two states, shown side by side rather than cycled, so the current theme is
 * readable at a glance. The selected pill slides between them with the same
 * layout transition the primary nav uses. `light` = sitting on a dark ground.
 *
 * The pill is the brand blue in both themes on purpose: a neutral pill has
 * to be darker than its track in one theme and lighter in the other, and the
 * losing case reads as nothing selected at all.
 */
export function ThemeToggle({ light, className }: { light?: boolean; className?: string }) {
  const { theme, setTheme } = useTheme()
  const { ui } = useI18n()
  const labels: Record<Theme, { label: string; title: string }> = {
    light: { label: ui.theme.light, title: ui.theme.lightTheme },
    dark: { label: ui.theme.dark, title: ui.theme.darkTheme },
  }

  return (
    <div
      role="radiogroup"
      aria-label={ui.theme.label}
      className={cn(
        'relative inline-flex items-center rounded-full border p-[3px]',
        light ? 'border-white/15 bg-white/[0.06]' : 'border-paper-300 bg-paper-50',
        className,
      )}
    >
      {OPTIONS.map(({ value, Icon }) => {
        const on = theme === value
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={on}
            aria-label={labels[value].label}
            title={labels[value].title}
            onClick={() => setTheme(value)}
            className={cn(
              'relative grid h-7 w-8 place-items-center rounded-full transition-colors duration-300',
              on ? 'text-white' : light ? 'text-white/50 hover:text-white/80' : 'text-muted hover:text-text',
            )}
          >
            {on && (
              <motion.span
                layoutId="theme-pill"
                className="absolute inset-0 rounded-full bg-accent-500"
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
              />
            )}
            <Icon className="relative h-[15px] w-[15px]" strokeWidth={1.75} aria-hidden />
          </button>
        )
      })}
    </div>
  )
}
