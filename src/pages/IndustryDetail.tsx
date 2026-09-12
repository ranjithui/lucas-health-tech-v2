import { Navigate, useParams, Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, Check } from 'lucide-react'
import { Seo } from '../components/seo/Seo'
import { PageHero } from '../sections/PageHero'
import { Section, Eyebrow } from '../components/ui/Primitives'
import { Button } from '../components/ui/Button'
import { ClosingCta } from '../sections/ClosingCta'
import { industries, sectors, getIndustry } from '../data/industries'
import { solutions } from '../data/solutions'
import { fadeUp, stagger, viewportOnce } from '../animations/variants'

export default function IndustryDetail() {
  const { id } = useParams()
  const industry = id ? getIndustry(id) : undefined

  if (!industry) return <Navigate to="/industries" replace />

  const related = industry.solutionIds.map((sid) => solutions.find((s) => s.id === sid)).filter(Boolean)
  const relatedSectors = sectors.filter((s) => industry.sectorIds.includes(s.id))
  const others = industries.filter((i) => i.id !== industry.id)

  return (
    <>
      <Seo title={industry.title} description={industry.description} />
      <PageHero
        eyebrow="Industries"
        title={industry.title}
        lead={industry.description}
        back={{ to: '/industries', label: 'All industries' }}
      />

      <Section>
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <motion.div variants={fadeUp}>
              <Eyebrow>What this group asks us for</Eyebrow>
            </motion.div>
            <motion.ul variants={fadeUp} className="mt-8 space-y-4">
              {industry.needs.map((n) => (
                <li key={n} className="flex items-start gap-3 border-b border-paper-300 pb-4 text-[16px] text-text/90">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-signal-500" aria-hidden />
                  {n}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <motion.div variants={fadeUp}>
              <Eyebrow>Where the work applies</Eyebrow>
            </motion.div>
            <motion.ul variants={fadeUp} className="mt-8 border-t border-paper-300">
              {related.map((s) => (
                <li key={s!.id} className="border-b border-paper-300">
                  <Link to={`/solutions/${s!.id}`} className="group flex items-center justify-between gap-6 py-5">
                    <span>
                      <span className="block font-display text-[20px] text-text transition-colors duration-300 group-hover:text-accent-700">
                        {s!.title}
                      </span>
                      <span className="mt-1 block text-[14px] text-muted">{s!.short}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-accent-600 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                  </Link>
                </li>
              ))}
            </motion.ul>

            <motion.figure variants={fadeUp} className="mt-12 border-l border-accent-600 pl-6">
              <span className="label">Evidence</span>
              <p className="mt-3 text-[16px] leading-[1.65] text-text/85">{industry.evidence}</p>
            </motion.figure>

            <motion.div variants={fadeUp} className="mt-10">
              <Button to={`/contact?intent=solution&industry=${industry.id}`} icon>
                Start a Conversation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {relatedSectors.length > 0 && (
        <Section className="bg-paper-200 py-20 md:py-28">
          <div className="container-x">
            <Eyebrow>Sectors inside this group</Eyebrow>
            <ul className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
              {relatedSectors.map((s) => (
                <li key={s.id} className="panel px-7 py-9">
                  <h3 className="font-display text-[19px] text-text">{s.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-muted">{s.description}</p>
                  <p className="mt-5 border-t border-paper-300 pt-4 font-mono text-[11px] leading-[1.6] text-muted/80">{s.evidence}</p>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      <Section className="py-20 md:py-24">
        <div className="container-x">
          <Eyebrow>Other groups we serve</Eyebrow>
          <ul className="mt-8 border-t border-paper-300">
            {others.map((o) => (
              <li key={o.id} className="border-b border-paper-300">
                <Link to={`/industries/${o.id}`} className="group flex items-center justify-between gap-8 py-6">
                  <span className="font-display text-[22px] text-text transition-colors duration-300 group-hover:text-accent-700">{o.title}</span>
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
