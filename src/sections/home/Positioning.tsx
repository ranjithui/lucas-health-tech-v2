import { motion } from 'motion/react'
import { positioningV2, domains } from '../../data/company'
import { Eyebrow } from '../../components/ui/Primitives'
import { fadeUp, stagger, viewportOnce } from '../../animations/variants'

/** Executive positioning. Large type, a short paragraph, and a lot of air. */
export function Positioning() {
  return (
    <section className="relative bg-mist-50 py-20 md:py-28">
      <div className="container-x">
        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <motion.div variants={fadeUp}>
            <Eyebrow>Positioning</Eyebrow>
          </motion.div>

          <motion.h2 variants={fadeUp} className="mt-8 max-w-4xl text-balance font-display text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.06] tracking-[-0.02em]">
            {positioningV2.statement}
          </motion.h2>

          <motion.span variants={fadeUp} className="rule-gold mt-8 block" aria-hidden />

          <motion.p variants={fadeUp} className="mt-8 max-w-2xl text-pretty lead">
            {positioningV2.statementBody}
          </motion.p>

          <motion.ul variants={fadeUp} className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {domains.map((d) => (
              <li key={d.id} className="panel px-6 py-8">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-accent-600">{d.label}</span>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-muted">{d.detail}</p>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  )
}
