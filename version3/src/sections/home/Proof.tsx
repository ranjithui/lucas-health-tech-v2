import { motion } from 'motion/react'
import { Counter } from '../../components/visuals/Counter'
import { Explore } from '../../components/ui/Primitives'
import { InteractiveCard } from '../../components/ui/InteractiveCard'
import { useI18n } from '../../i18n/useI18n'
import { fadeUp, stagger, viewportOnce } from '../../animations/variants'

/** A quiet credibility strip. Three verified figures, no dashboard. */
export function Proof() {
  const { ui, content } = useI18n()
  return (
    <section className="bg-paper-100 py-14 md:py-20">
      <div className="container-x">
        <motion.dl
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-12 border-y border-paper-300 py-10 sm:grid-cols-3 sm:gap-8"
        >
          {content.homeMetrics.map((m) => (
            <InteractiveCard key={m.label} variant="glow" className="rounded-xl px-4 py-3 sm:px-5">
              <dd className="font-display text-[clamp(2.6rem,5vw,3.6rem)] leading-none tracking-[-0.03em] text-text transition-colors duration-300 group-hover/card:text-accent-700">
                <Counter value={m.value} suffix={m.suffix} decimals={m.decimals ?? 0} />
              </dd>
              <span aria-hidden className="mt-4 block h-px w-8 origin-left scale-x-0 bg-gold-500 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover/card:scale-x-100" />
              <dt className="mt-3 font-mono text-[10.5px] uppercase leading-relaxed tracking-[0.18em] text-muted">{m.label}</dt>
            </InteractiveCard>
          ))}
        </motion.dl>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-8">
          <Explore to="/case-studies" label={ui.common.seeEngagements} />
        </motion.div>
      </div>
    </section>
  )
}
