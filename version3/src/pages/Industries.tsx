import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Seo } from '../components/seo/Seo'
import { PageHero } from '../sections/PageHero'
import { Section, Eyebrow } from '../components/ui/Primitives'
import { ClosingCta } from '../sections/ClosingCta'
import { Ecosystem } from '../sections/Ecosystem'
import { useI18n } from '../i18n/useI18n'
import { fadeUp, stagger, viewportOnce } from '../animations/variants'

export default function Industries() {
  const { ui, content } = useI18n()
  const p = ui.pages.industries
  return (
    <>
      <Seo title={p.seoTitle} description={p.seoDescription} />
      <PageHero eyebrow={p.eyebrow} title={p.title} lead={p.lead} />

      <section className="bg-paper-100">
        <div className="container-x">
          <motion.ul variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce} className="border-t border-paper-300">
            {content.industries.map((ind, i) => (
              <motion.li key={ind.id} variants={fadeUp} className="border-b border-paper-300">
                <Link to={`/industries/${ind.id}`} className="group grid gap-6 py-12 md:grid-cols-[100px_1fr_auto] md:items-start md:gap-10 md:py-16">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-accent-600">{String(i + 1).padStart(2, '0')}</span>
                  <div className="max-w-2xl">
                    <h2 className="display-md text-text transition-colors duration-300 group-hover:text-accent-700">{ind.title}</h2>
                    <p className="mt-4 text-[16px] leading-[1.65] text-muted">{ind.description}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-accent-600 md:mt-3">
                    {ui.common.explore}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Verified sectors */}
      <Section className="bg-paper-200">
        <div className="container-x">
          <Eyebrow>{p.sectors}</Eyebrow>
          <ul className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {content.sectors.map((s) => (
              <li key={s.id} id={s.id} className="panel px-7 py-9">
                <h3 className="font-display text-[20px] leading-tight text-text">{s.title}</h3>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-muted">{s.description}</p>
                <p className="mt-5 border-t border-paper-300 pt-4 font-mono text-[11px] leading-[1.6] text-muted/80">{s.evidence}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Ecosystem />
      <ClosingCta />
    </>
  )
}
