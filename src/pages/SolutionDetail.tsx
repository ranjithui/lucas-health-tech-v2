import { Navigate, useParams, Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, Check } from 'lucide-react'
import { Seo } from '../components/seo/Seo'
import { PageHero } from '../sections/PageHero'
import { Section, Tag, Eyebrow } from '../components/ui/Primitives'
import { ClosingCta } from '../sections/ClosingCta'
import { Intelligence } from '../sections/Intelligence'
import { company } from '../data/company'
import { solutions, getSolution } from '../data/solutions'
import { industries } from '../data/industries'
import { fadeUp, stagger, viewportOnce } from '../animations/variants'

export default function SolutionDetail() {
  const { id } = useParams()
  const solution = id ? getSolution(id) : undefined

  if (!solution) return <Navigate to="/solutions" replace />
  // Old anchors resolved through legacyId — normalise the URL.
  if (solution.id !== id) return <Navigate to={`/solutions/${solution.id}`} replace />

  const related = industries.filter((i) => i.solutionIds.includes(solution.id))
  const others = solutions.filter((s) => s.id !== solution.id)

  return (
    <>
      <Seo
        title={solution.fullTitle}
        description={solution.summary}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: solution.fullTitle,
          description: solution.summary,
          url: `${company.url}/solutions/${solution.id}`,
          provider: { '@type': 'Organization', name: company.name },
        }}
      />
      <PageHero
        eyebrow={solution.kicker}
        title={solution.fullTitle}
        lead={solution.description}
        back={{ to: '/solutions', label: 'All solutions' }}
      />

      {/* What it includes + how it runs */}
      <Section>
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <motion.div variants={fadeUp}>
              <Eyebrow>What it includes</Eyebrow>
            </motion.div>
            <motion.ul variants={fadeUp} className="mt-8 space-y-4">
              {solution.capabilities.map((c) => (
                <li key={c} className="flex items-start gap-3 border-b border-paper-300 pb-4 text-[16px] text-text/90">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-gold-500" aria-hidden />
                  {c}
                </li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-1.5" aria-label="Technologies">
              {solution.technologies.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <motion.div variants={fadeUp}>
              <Eyebrow>How the work runs</Eyebrow>
            </motion.div>
            <motion.ol variants={fadeUp} className="mt-8 space-y-8">
              {solution.workflow.map((w, i) => (
                <li key={w.label} className="relative pl-12">
                  <span className="absolute left-0 top-0 font-mono text-[11px] tracking-[0.2em] text-accent-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {i < solution.workflow.length - 1 && (
                    <span aria-hidden className="absolute left-[7px] top-6 h-[calc(100%+1rem)] w-px bg-paper-300" />
                  )}
                  <h3 className="font-display text-xl text-text">{w.label}</h3>
                  <p className="mt-2 text-[15.5px] leading-[1.6] text-muted">{w.detail}</p>
                </li>
              ))}
            </motion.ol>

            {solution.proof && (
              <motion.figure variants={fadeUp} className="mt-12 border-l border-accent-600 pl-6">
                <span className="label">Evidence</span>
                <p className="mt-3 font-display text-[19px] leading-[1.45] text-text">{solution.proof}</p>
              </motion.figure>
            )}
          </motion.div>
        </div>
      </Section>

      {/* The automation pipeline belongs to one capability only */}
      {solution.id === 'ai-automation' && <Intelligence />}

      {/* Who this is for */}
      {related.length > 0 && (
        <Section className="bg-paper-200 py-20 md:py-28">
          <div className="container-x">
            <Eyebrow>Who this is for</Eyebrow>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <li key={r.id} className="panel panel-link">
                  <Link to={`/industries/${r.id}`} className="group block px-6 py-8">
                    <h3 className="font-display text-[19px] text-text">{r.title}</h3>
                    <p className="mt-2 text-[14px] leading-[1.55] text-muted">{r.short}</p>
                    <span className="mt-5 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-accent-600">
                      Explore
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      {/* Continue through the other capabilities */}
      <Section className="py-20 md:py-24">
        <div className="container-x">
          <Eyebrow>Other capabilities</Eyebrow>
          <ul className="mt-8 border-t border-paper-300">
            {others.map((s) => (
              <li key={s.id} className="border-b border-paper-300">
                <Link to={`/solutions/${s.id}`} className="group flex items-center justify-between gap-8 py-6">
                  <span className="flex items-baseline gap-6">
                    <span className="font-mono text-[10.5px] tracking-[0.2em] text-muted">{s.index}</span>
                    <span className="font-display text-[22px] text-text transition-colors duration-300 group-hover:text-accent-700">{s.title}</span>
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
