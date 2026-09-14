import { Sun, Moon } from 'lucide-react'
import { motion } from 'motion/react'
import { useTheme, type Theme } from '../../hooks/useTheme'
import { cn } from '../../utils/cn'

const OPTIONS: { value: Theme; label: string; Icon: typeof Sun }[] = [
  { value: 'light', label: 'Light', Icon: Sun },
  { value: 'dark', label: 'Dark', Icon: Moon },
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

  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
      className={cn(
        'relative inline-flex items-center rounded-full border p-[3px]',
        light ? 'border-white/15 bg-white/[0.06]' : 'border-paper-300 bg-paper-50',
        className,
      )}
    >
      {OPTIONS.map(({ value, label, Icon }) => {
        const on = theme === value
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={on}
            aria-label={label}
            title={`${label} theme`}
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
