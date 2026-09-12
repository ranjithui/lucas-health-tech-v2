import { motion } from 'motion/react'
import { Counter } from '../../components/visuals/Counter'
import { homeMetrics } from '../../data/company'
import { Explore } from '../../components/ui/Primitives'
import { fadeUp, stagger, viewportOnce } from '../../animations/variants'

/** A quiet credibility strip. Three verified figures, no dashboard. */
export function Proof() {
  return (
    <section className="bg-paper-100 py-20 md:py-28">
      <div className="container-x">
        <motion.dl
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-12 border-y border-paper-300 py-14 sm:grid-cols-3 sm:gap-8"
        >
          {homeMetrics.map((m) => (
            <motion.div key={m.label} variants={fadeUp} className="sm:px-2">
              <dd className="font-display text-[clamp(2.6rem,5vw,3.6rem)] leading-none tracking-[-0.03em] text-text">
                <Counter value={m.value} suffix={m.suffix} decimals={'decimals' in m ? m.decimals : 0} />
              </dd>
              <dt className="mt-4 font-mono text-[10.5px] uppercase leading-relaxed tracking-[0.18em] text-muted">{m.label}</dt>
            </motion.div>
          ))}
        </motion.dl>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-8">
          <Explore to="/case-studies" label="See the engagements" />
        </motion.div>
      </div>
    </section>
  )
}
