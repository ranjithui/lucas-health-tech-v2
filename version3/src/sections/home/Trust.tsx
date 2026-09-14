import { motion } from 'motion/react'
import { Eyebrow, Explore } from '../../components/ui/Primitives'
import { useI18n } from '../../i18n/useI18n'
import { fadeUp, stagger, viewportOnce } from '../../animations/variants'

/** One reference, chosen for the audience. The rest live on the About page. */
export function Trust() {
  const { ui, content, t } = useI18n()
  const featured = content.testimonials.find((x) => x.id === 'marx') ?? content.testimonials[0]

  return (
    <section className="bg-paper-100 py-20 md:py-28">
      <div className="container-x">
        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={viewportOnce} className="grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
          <div>
            <motion.div variants={fadeUp}>
              <Eyebrow>{ui.home.trust.eyebrow}</Eyebrow>
            </motion.div>
            <motion.h2 variants={fadeUp} className="display-lg mt-7 text-balance">
              {content.positioning.trustHeading}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 max-w-md text-pretty lead">
              {t(ui.home.trust.lead, { name: content.founder.name })}
            </motion.p>
          </div>

          <motion.figure variants={fadeUp} className="relative">
            <span aria-hidden className="pointer-events-none absolute -left-2 -top-10 font-display text-[120px] leading-none text-accent-500/10">
              &ldquo;
            </span>
            <blockquote className="relative font-display text-[clamp(1.5rem,2.6vw,2.05rem)] leading-[1.35] tracking-[-0.015em] text-text">
              {featured.quote}
            </blockquote>
            <figcaption className="mt-10 border-t border-paper-300 pt-6">
              <div className="font-display text-[17px] text-text">{featured.name}</div>
              <div className="mt-1 max-w-sm text-[13.5px] leading-relaxed text-muted">{featured.title}</div>
            </figcaption>
            <div className="mt-8">
              <Explore to="/about#references" label={ui.common.viewAllReferences} />
            </div>
          </motion.figure>
        </motion.div>
      </div>
    </section>
  )
}
