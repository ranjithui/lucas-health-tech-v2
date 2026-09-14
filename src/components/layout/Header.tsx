import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Logo } from './Logo'
import { Button } from '../ui/Button'
import { ThemeToggle } from '../ui/ThemeToggle'
import { useScrolled } from '../../hooks/useScrollSpy'
import { useTheme } from '../../hooks/useTheme'
import { company } from '../../data/company'
import { cn } from '../../utils/cn'

/** Minimal by design — four destinations and one call to action. */
export const navItems = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'Industries', to: '/industries' },
  { label: 'About', to: '/about' },
  { label: 'Insights', to: '/insights' },
]

/**
 * Transparent over the hero, picking up a blur and a hairline on scroll.
 *
 * `atTop` is about the background; `light` is about the text. They used to be
 * the same flag, which broke once the light theme got a light hero — the bar
 * was still painting white type over a pale ground.
 */
export function Header({ overHero }: { overHero: boolean }) {
  const scrolled = useScrolled(16)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { theme } = useTheme()
  const atTop = overHero && !scrolled && !open
  const light = (atTop && theme === 'dark') || open

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-accent-500 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-[60] transition-[background-color,border-color,backdrop-filter,height] duration-500 ease-[cubic-bezier(.16,1,.3,1)]',
          atTop
            ? 'border-b border-transparent bg-transparent'
            : open
              ? 'border-b border-white/8 bg-ink-950'
              : 'glass-light border-b border-paper-300',
        )}
      >
        <div className={cn('container-x flex items-center justify-between transition-all duration-500', scrolled ? 'h-[64px]' : 'h-[92px]')}>
          <Logo light={light} className={scrolled ? 'h-9' : 'h-16'} />

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'relative py-1 text-[14px] font-semibold tracking-[-0.005em] transition-colors duration-300',
                    light ? 'text-white/80 hover:text-white' : 'text-muted hover:text-text',
                    isActive && (light ? 'text-white' : 'text-text'),
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className={cn('absolute inset-x-0 -bottom-1 h-px', light ? 'bg-accent-400' : 'bg-accent-600')}
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <ThemeToggle light={light} />
            <Button to="/contact" size="sm" icon variant={light ? 'inverse' : 'primary'}>
              Start a Conversation
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={cn('relative z-10 -mr-2 grid h-11 w-11 place-items-center md:hidden', light ? 'text-white' : 'text-text')}
          >
            <span className="relative block h-3 w-6">
              <span
                className={cn(
                  'absolute left-0 block h-px w-6 bg-current transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)]',
                  open ? 'top-1.5 rotate-45' : 'top-0',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 block h-px w-6 bg-current transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)]',
                  open ? 'top-1.5 -rotate-45' : 'top-3',
                )}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu — full screen, large type, one CTA */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-ink-950 text-white md:hidden"
          >
            <div aria-hidden className="absolute inset-0 grid-bg opacity-60" />
            <motion.nav
              aria-label="Mobile"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } } }}
              className="container-x relative flex h-full flex-col justify-between pb-10 pt-32"
            >
              <ul>
                {navItems.map((item) => (
                  <motion.li
                    key={item.to}
                    variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
                    className="border-b border-white/8"
                  >
                    <NavLink to={item.to} className="flex items-center justify-between py-5">
                      <span className="display-md text-white">{item.label}</span>
                      <ArrowRight className="h-5 w-5 text-accent-400" aria-hidden />
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
                className="space-y-5"
              >
                <Button to="/contact" size="lg" icon variant="inverse" className="w-full">
                  Start a Conversation
                </Button>
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                  <a href={company.phoneHref} className="hover:text-white">
                    {company.phone}
                  </a>
                  <ThemeToggle light />
                </div>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
