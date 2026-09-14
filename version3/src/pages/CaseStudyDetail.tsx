import { Navigate, useParams, Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Seo } from '../components/seo/Seo'
import { PageHero } from '../sections/PageHero'
import { Section, Tag, Eyebrow } from '../components/ui/Primitives'
import { ClosingCta } from '../sections/ClosingCta'
import { engagements } from '../data/engagements'
import { fadeUp, stagger, viewportOnce } from '../animations/variants'

const blocks = [
  { key: 'challenge', label: 'The challenge' },
  { key: 'approach', label: 'The approach' },
  { key: 'solution', label: 'The solution' },
  { key: 'outcome', label: 'The outcome' },
] as const

export default function CaseStudyDetail() {
  const { id } = useParams()
  const engagement = engagements.find((e) => e.id === id)

  if (!engagement) return <Navigate to="/case-studies" replace />

  const others = engagements.filter((e) => e.id !== engagement.id)

  return (
    <>
      <Seo title={`${engagement.client} — ${engagement.role}`} description={engagement.headline} type="article" />
      <PageHero
        eyebrow={engagement.sector}
        title={engagement.client}
        lead={engagement.headline}
        back={{ to: '/case-studies', label: 'All case studies' }}
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-300">{engagement.role}</p>
      </PageHero>

      <Section>
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:gap-24">
          <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce} className="lg:sticky lg:top-32 lg:self-start">
            <motion.dl variants={fadeUp} className="space-y-8">
              {engagement.facts.map((f) => (
                <div key={f.label} className="border-b border-paper-300 pb-6">
                  <dd className="font-display text-[clamp(2rem,3.4vw,2.6rem)] leading-none text-text">{f.value}</dd>
                  <dt className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">{f.label}</dt>
                </div>
              ))}
            </motion.dl>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-1.5">
              {engagement.technology.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </motion.div>
            {engagement.note && <motion.p variants={fadeUp} className="mt-8 text-[13px] text-muted">{engagement.note}</motion.p>}
          </motion.div>

          <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce} className="space-y-12">
            {blocks.map((b) => (
              <motion.section key={b.key} variants={fadeUp}>
                <Eyebrow>{b.label}</Eyebrow>
                <p className="mt-5 text-[17px] leading-[1.7] text-muted">{engagement[b.key]}</p>
              </motion.section>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section className="bg-paper-200 py-20 md:py-24">
        <div className="container-x">
          <Eyebrow>Other engagements</Eyebrow>
          <ul className="mt-8 border-t border-paper-300">
            {others.map((o) => (
              <li key={o.id} className="border-b border-paper-300">
                <Link to={`/case-studies/${o.id}`} className="group flex items-center justify-between gap-8 py-6">
                  <span>
                    <span className="block font-display text-[22px] text-text transition-colors duration-300 group-hover:text-accent-700">{o.client}</span>
                    <span className="mt-1 block text-[14px] text-muted">{o.role}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-accent-600 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <ClosingCta />
    </>
  )
}
