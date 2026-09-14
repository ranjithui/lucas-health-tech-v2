import { Section, SectionHeading } from '../components/ui/Primitives'
import { IntelligencePipeline } from '../components/visuals/IntelligencePipeline'
import { useI18n } from '../i18n/useI18n'
import { motion } from 'motion/react'
import { fadeUp, stagger, viewportOnce } from '../animations/variants'

export function Intelligence() {
  const { ui, content } = useI18n()
  return (
    <Section id="intelligence" dark className="border-t border-white/5 bg-ink-950 dark:bg-ink-900">
      <div className="container-x">
        <SectionHeading eyebrow={ui.sections.intelligence.eyebrow} dark title={ui.sections.intelligence.title} lead={ui.sections.intelligence.lead} />
        <div className="mt-14">
          <IntelligencePipeline />
        </div>

        <motion.ul
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          aria-label={ui.sections.intelligence.benefitsAria}
        >
          {content.rpaBenefits.map((b, i) => (
            <motion.li key={b} variants={fadeUp} className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-accent-500/40 hover:bg-white/[0.05]">
              <span className="mt-0.5 font-mono text-[11px] text-accent-400">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-[14.5px] text-white/85">{b}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  )
}
