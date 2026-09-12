import type { HTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../utils/cn'
import { fadeUp, stagger, viewportOnce } from '../../animations/variants'

export function Tag({ children, dark, className }: { children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 font-mono text-[10.5px] tracking-[0.04em]',
        dark ? 'border-white/10 bg-white/[0.04] text-white/70' : 'border-paper-300 bg-paper-50 text-muted',
        className,
      )}
    >
      {children}
    </span>
  )
}

/** `onAccent` is the azure brand field, where the accent blues are unreadable. */
export function Eyebrow({
  children,
  dark,
  onAccent,
  className,
}: {
  children: ReactNode
  dark?: boolean
  onAccent?: boolean
  className?: string
}) {
  return (
    <span className={cn('inline-flex items-center gap-3', onAccent ? 'eyebrow-accent' : dark ? 'eyebrow-dark' : 'eyebrow', className)}>
      <span className={cn('h-px w-6', onAccent ? 'bg-white/60' : dark ? 'bg-accent-400/50' : 'bg-accent-600/40')} aria-hidden />
      {children}
    </span>
  )
}

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  dark?: boolean
  align?: 'left' | 'center'
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}

export function SectionHeading({ eyebrow, title, lead, dark, align = 'left', className, as = 'h2' }: SectionHeadingProps) {
  const Heading = motion[as]
  return (
    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}
    >
      {eyebrow && (
        <motion.div variants={fadeUp} className="mb-6">
          <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        </motion.div>
      )}
      <Heading variants={fadeUp} className={cn('display-lg text-balance', dark ? 'text-white' : 'text-text')}>
        {title}
      </Heading>
      {lead && (
        <motion.p variants={fadeUp} className={cn('mt-6 text-pretty', dark ? 'lead-dark' : 'lead')}>
          {lead}
        </motion.p>
      )}
    </motion.div>
  )
}

export function Section({
  id,
  dark,
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLElement> & { dark?: boolean; children: ReactNode }) {
  return (
    <section
      id={id}
      className={cn('relative py-24 md:py-36', dark ? 'bg-ink-900 text-white' : 'bg-paper-100 text-text', className)}
      {...rest}
    >
      {children}
    </section>
  )
}

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** The single, repeated affordance that sends a reader from hook to depth. */
export function Explore({
  to,
  label = 'Explore',
  dark,
  onAccent,
  className,
}: {
  to: string
  label?: string
  dark?: boolean
  onAccent?: boolean
  className?: string
}) {
  return (
    <Link
      to={to}
      className={cn(
        'group/exp inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300',
        onAccent
          ? 'text-white underline-offset-4 hover:underline'
          : dark
            ? 'text-accent-300 hover:text-white'
            : 'text-accent-600 hover:text-text',
        className,
      )}
    >
      {label}
      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/exp:translate-x-1" aria-hidden />
    </Link>
  )
}
