import { lazy, Suspense } from 'react'
import { motion } from 'motion/react'
import { Eyebrow } from '../../components/ui/Primitives'
import { InteractiveCard } from '../../components/ui/InteractiveCard'
import { fadeUp, stagger, viewportOnce } from '../../animations/variants'
import { useTheme } from '../../hooks/useTheme'
import { useI18n } from '../../i18n/context'

const SystemVisual = lazy(() => import('../../components/visuals/SystemVisual').then((m) => ({ default: m.SystemVisual })))

/**
 * Executive positioning, now a two-column moment: the statement and the four
 * domains on the left, the animated system flow on the right. The visual used
 * to be the hero's hook; in Version 3 the hero carries video, so the flow sits
 * beside the copy that explains it.
 */
export function Positioning() {
  const { theme } = useTheme()
  const { ui, content } = useI18n()
  const { positioning, domains } = content

  return (
    <section id="positioning" className="relative overflow-hidden bg-mist-50 py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-accent-500/[0.07] blur-3xl dark:bg-accent-500/[0.12]"
      />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <motion.div variants={fadeUp}>
            <Eyebrow>{ui.home.positioning.eyebrow}</Eyebrow>
          </motion.div>

          <motion.h2 variants={fadeUp} className="mt-8 max-w-xl text-balance font-display text-[clamp(2.1rem,4.2vw,3.3rem)] leading-[1.06] tracking-[-0.02em]">
            {positioning.statement}
          </motion.h2>

          <motion.span variants={fadeUp} className="rule-gold mt-8 block" aria-hidden />

          <motion.p variants={fadeUp} className="mt-8 max-w-xl text-pretty lead">
            {positioning.statementBody}
          </motion.p>

          <motion.ul variants={stagger(0.08)} className="mt-12 grid gap-4 sm:grid-cols-2">
            {domains.map((d) => (
              <InteractiveCard key={d.id} as="li" variant="tilt" className="panel px-6 py-7">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-accent-600 transition-colors duration-300 group-hover/card:text-gold-600">
                  {d.label}
                </span>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-muted">{d.detail}</p>
              </InteractiveCard>
            ))}
          </motion.ul>
        </motion.div>

        {/* The animated system flow, to the right of the content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:sticky lg:top-28"
        >
          <Suspense fallback={<div className="mx-auto aspect-[680/570] w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[560px]" aria-hidden />}>
            <SystemVisual dark={theme === 'dark'} className="max-w-[340px] sm:max-w-[460px] lg:max-w-[560px]" />
          </Suspense>
        </motion.div>
      </div>
    </section>
  )
}
