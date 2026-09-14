import { lazy, Suspense, useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Button } from '../../components/ui/Button'
import { positioningV2 } from '../../data/company'
import { stagger, wordReveal, fadeUp } from '../../animations/variants'
import { usePrefersReducedMotion } from '../../hooks/useMediaQuery'
import { useTheme } from '../../hooks/useTheme'
import { cn } from '../../utils/cn'

const SystemVisual = lazy(() => import('../../components/visuals/SystemVisual').then((m) => ({ default: m.SystemVisual })))

const headline = positioningV2.headline.split(' ')

/**
 * Two hero treatments, one per theme.
 *
 * Dark: the executive well — navy ground, white display type, the system visual
 * glowing out of it. Light: Apple's silver-white ground with the same structure
 * inverted — navy type, a brand-blue accent, and a soft bloom instead of a glow.
 * The light theme gets a genuinely light hero rather than a dark band bolted
 * onto a light page, which is what made light mode read as half-dark before.
 */
const TREATMENT = {
  dark: {
    section: 'bg-ink-950 text-white',
    grid: 'grid-bg opacity-60',
    bloom:
      'radial-gradient(70% 55% at 78% 28%, rgba(23, 107, 135, 0.22), transparent 62%), radial-gradient(50% 45% at 8% 88%, rgba(58, 157, 181, 0.08), transparent 60%)',
    eyebrow: 'text-accent-300',
    accentWord: 'text-accent-300',
    lead: 'text-muted-dark',
    fade: 'from-paper-100/90',
    primary: 'inverse',
    secondary: 'outline',
    secondaryClass: 'text-white',
  },
  light: {
    section: 'bg-silver-100 text-text',
    grid: 'grid-bg-light opacity-60',
    bloom:
      'radial-gradient(70% 55% at 78% 28%, rgba(58, 157, 181, 0.14), transparent 62%), radial-gradient(58% 50% at 6% 86%, rgba(255, 255, 255, 0.85), transparent 64%)',
    eyebrow: 'text-accent-600',
    accentWord: 'text-accent-500',
    lead: 'text-muted',
    fade: 'from-silver-100',
    primary: 'primary',
    secondary: 'outline',
    secondaryClass: 'text-text',
  },
} as const

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()
  const { theme } = useTheme()
  const t = TREATMENT[theme]
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 80])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section ref={ref} id="hero" className={cn('relative isolate overflow-hidden', t.section)}>
      <div aria-hidden className={cn('absolute inset-0', t.grid)} />
      <div aria-hidden className="absolute inset-0" style={{ background: t.bloom }} />
      <div aria-hidden className={cn('absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t to-transparent', t.fade)} />

      <div className="container-x relative grid items-center gap-12 pb-16 pt-32 md:min-h-[82svh] md:pb-20 md:pt-36 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <motion.div style={{ y, opacity }} className="relative z-10">
          <motion.div variants={stagger(0.05, 0.08)} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className={cn('mb-8 font-mono text-[10.5px] uppercase tracking-[0.24em]', t.eyebrow)}>
              Healthcare technology &amp; strategic transformation
            </motion.div>

            <h1 className="display-xl text-balance">
              {headline.map((w, i) => (
                <motion.span key={`${w}-${i}`} variants={wordReveal} className="inline-block whitespace-pre" style={{ transformOrigin: 'bottom' }}>
                  {w === 'technology.' ? <em className={cn('not-italic', t.accentWord)}>{w}</em> : w}{' '}
                </motion.span>
              ))}
            </h1>

            <motion.p variants={fadeUp} className={cn('mt-8 max-w-xl text-[17px] leading-[1.65] md:text-[19px]', t.lead)}>
              {positioningV2.supporting}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/solutions" size="lg" icon variant={t.primary}>
                Explore Our Capabilities
              </Button>
              <Button to="/contact" size="lg" variant={t.secondary} className={t.secondaryClass}>
                Start a Conversation
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* System visual — the hook, not a hospital photograph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <Suspense fallback={<div className="mx-auto aspect-[680/640] w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[620px]" aria-hidden />}>
            <SystemVisual dark={theme === 'dark'} className="max-w-[340px] sm:max-w-[460px] lg:max-w-[620px]" />
          </Suspense>
        </motion.div>
      </div>
    </section>
  )
}
