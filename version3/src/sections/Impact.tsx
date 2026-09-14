import { motion } from 'motion/react'
import { Section, Eyebrow } from '../components/ui/Primitives'
import { Counter } from '../components/visuals/Counter'
import { metrics, technologies } from '../data/company'
import { fadeUp, stagger, viewportOnce } from '../animations/variants'

/** The full, verified figures — the homepage only shows three of these. */
export function Impact() {
  return (
    <Section id="impact" className="bg-mist-100">
      <div className="container-x">
        <Eyebrow>Impact</Eyebrow>

        <motion.dl
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {metrics.map((m) => (
            <motion.div key={m.label} variants={fadeUp} className="panel px-7 py-10">
              <dd className="font-display text-[clamp(2.2rem,3.4vw,2.9rem)] leading-none tracking-[-0.03em] text-text">
                <Counter value={m.value} suffix={m.suffix} decimals={'decimals' in m ? m.decimals : 0} />
              </dd>
              <dt className="mt-4 font-display text-[16px] leading-snug text-text">{m.label}</dt>
              <p className="mt-2 text-[13.5px] leading-[1.55] text-muted">{m.detail}</p>
            </motion.div>
          ))}
        </motion.dl>

        <div className="mt-14 mask-fade-x overflow-hidden" aria-label="Technologies and platforms">
          <div className="flex w-max animate-marquee gap-2.5 hover:[animation-play-state:paused]">
            {[...technologies, ...technologies].map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="rounded-full border border-paper-300 bg-paper-50 px-4 py-2 font-mono text-[11.5px] tracking-wide text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
