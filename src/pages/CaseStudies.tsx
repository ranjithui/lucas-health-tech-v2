import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Seo } from '../components/seo/Seo'
import { PageHero } from '../sections/PageHero'
import { Section, Tag } from '../components/ui/Primitives'
import { ClosingCta } from '../sections/ClosingCta'
import { engagements } from '../data/engagements'
import { fadeUp, stagger, viewportOnce } from '../animations/variants'

export default function CaseStudies() {
  return (
    <>
      <Seo
        title="Case Studies"
        description="Select engagements: a FHIR-native oncology governance platform, enterprise stabilization under regulatory oversight, and enterprise data product and consent modernization."
      />
      <PageHero
        eyebrow="Case studies"
        title="Select engagements."
        lead="Three engagements, described as they were delivered. No invented outcomes and no client logos we have not been given."
      />

      <Section>
        <div className="container-x">
          <motion.ul variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={viewportOnce} className="grid gap-5">
            {engagements.map((e) => (
              <motion.li key={e.id} variants={fadeUp} className="panel panel-link">
                <Link to={`/case-studies/${e.id}`} className="group grid gap-8 px-7 py-12 md:grid-cols-[1fr_1.4fr] md:gap-14 md:px-12 md:py-16">
                  <div>
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-accent-600">{e.sector}</span>
                    <h2 className="mt-4 display-md text-text transition-colors duration-300 group-hover:text-accent-700">{e.client}</h2>
                    <p className="mt-2 text-[14.5px] text-muted">{e.role}</p>
                  </div>
                  <div>
                    <p className="font-display text-[21px] leading-[1.4] text-text">{e.headline}</p>
                    <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-5">
                      {e.facts.map((f) => (
                        <div key={f.label}>
                          <dd className="font-display text-[26px] leading-none text-text">{f.value}</dd>
                          <dt className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">{f.label}</dt>
                        </div>
                      ))}
                    </dl>
                    <div className="mt-8 flex flex-wrap items-center gap-1.5">
                      {e.technology.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                    <span className="mt-8 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-accent-600">
                      Read the engagement
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                    </span>
                  </div>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Section>

      <ClosingCta />
    </>
  )
}
