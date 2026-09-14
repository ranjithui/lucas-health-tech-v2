import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ChevronLeft } from 'lucide-react'
import { Eyebrow } from '../components/ui/Primitives'
import { fadeUp, stagger } from '../animations/variants'
import { useTheme } from '../hooks/useTheme'
import { cn } from '../utils/cn'

interface PageHeroProps {
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  children?: ReactNode
  className?: string
  /** Shown as a quiet "back" affordance on detail pages. */
  back?: { to: string; label: string }
}

/**
 * Inner-page hero, in the same two treatments as the homepage hero: the navy
 * well on the dark theme, a pale sky band on the light one.
 */
export function PageHero({ eyebrow, title, lead, children, className, back }: PageHeroProps) {
  const dark = useTheme().theme === 'dark'
  return (
    <section
      className={cn(
        'relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44',
        dark ? 'bg-ink-950 text-white' : 'bg-mist-100 text-text',
        className,
      )}
    >
      <div aria-hidden className={cn('absolute inset-0', dark ? 'grid-bg opacity-60' : 'grid-bg-light opacity-50')} />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: dark
            ? 'radial-gradient(55% 60% at 85% 15%, rgba(31, 78, 140, 0.2), transparent 62%)'
            : 'radial-gradient(55% 60% at 85% 15%, rgba(59, 110, 168, 0.12), transparent 62%)',
        }}
      />
      <div
        aria-hidden
        className={cn('absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t to-transparent', dark ? 'from-paper-100/80' : 'from-paper-100')}
      />

      <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="container-x relative">
        {back && (
          <motion.div variants={fadeUp} className="mb-8">
            <Link
              to={back.to}
              className={cn(
                'inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] transition-colors',
                dark ? 'text-white/45 hover:text-white' : 'text-muted hover:text-text',
              )}
            >
              <ChevronLeft className="h-3.5 w-3.5" aria-hidden />
              {back.label}
            </Link>
          </motion.div>
        )}
        <motion.div variants={fadeUp}>
          <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        </motion.div>
        <motion.h1 variants={fadeUp} className="display-xl mt-7 max-w-4xl text-balance">
          {title}
        </motion.h1>
        {lead && (
          <motion.p variants={fadeUp} className={cn('mt-8 max-w-2xl text-pretty', dark ? 'lead-dark' : 'lead')}>
            {lead}
          </motion.p>
        )}
        {children && (
          <motion.div variants={fadeUp} className="mt-10">
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
