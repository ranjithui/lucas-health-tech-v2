import { motion } from 'motion/react'
import { LinkedInIcon as Linkedin } from '../components/ui/LinkedInIcon'
import { Seo } from '../components/seo/Seo'
import { PageHero } from '../sections/PageHero'
import { Section, Eyebrow, Tag } from '../components/ui/Primitives'
import { WhyLHT } from '../sections/WhyLHT'
import { Impact } from '../sections/Impact'
import { Testimonials } from '../sections/Testimonials'
import { ClosingCta } from '../sections/ClosingCta'
import { company, founder, technologies, positioningV2 } from '../data/company'
import { fadeUp, stagger, viewportOnce } from '../animations/variants'

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="Lucas Health Tech is led by Casi Vician Ischay, a former clinician, Board Director at Signature Health, and fractional and standing CTO/COO for health tech ventures and enterprise health systems."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: founder.name,
          jobTitle: founder.role,
          worksFor: { '@type': 'Organization', name: company.name },
          sameAs: founder.linkedin,
        }}
      />
      <PageHero
        eyebrow="About"
        title={positioningV2.trustHeading}
        lead="An executive services firm for healthcare, founded and led by a former clinician who architects the platforms and runs the operations in question."
      />

      {/* Founder */}
      <Section>
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.25fr] lg:gap-24">
          <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <motion.div variants={fadeUp}>
              <Eyebrow>Leadership</Eyebrow>
            </motion.div>
            <motion.h2 variants={fadeUp} className="mt-7 font-display text-[clamp(1.8rem,3vw,2.4rem)] leading-tight text-text">
              {founder.name}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-600">
              {founder.role}
            </motion.p>
            <motion.ul variants={fadeUp} className="mt-8 space-y-3 border-t border-paper-300 pt-6">
              {founder.credentials.map((c) => (
                <li key={c} className="text-[15.5px] text-text/85">
                  {c}
                </li>
              ))}
            </motion.ul>
            <motion.p variants={fadeUp} className="mt-6 text-[15.5px] leading-[1.6] text-muted">
              {founder.summary}
            </motion.p>
            <motion.a
              variants={fadeUp}
              href={founder.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-accent-600 transition-colors hover:text-text"
            >
              <Linkedin className="h-3.5 w-3.5" aria-hidden /> Connect on LinkedIn
            </motion.a>
          </motion.div>

          <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <motion.blockquote variants={fadeUp} className="font-display text-[clamp(1.5rem,2.6vw,2.05rem)] leading-[1.35] tracking-[-0.015em] text-text">
              {founder.quote}
            </motion.blockquote>
            <motion.p variants={fadeUp} className="mt-10 max-w-xl text-pretty lead">
              Lucas Health Tech brings over 20 years of healthcare expertise, with consultants armed with clinical degrees. We
              provide personal IT, business, and executive attention rather than ticket-based support, and we work where clinical
              workflows, regulatory requirements, and enterprise scale intersect.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-1.5" aria-label="Technologies and platforms">
              {technologies.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Section>

      <WhyLHT />
      <Impact />

      {/* Location */}
      <Section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <Eyebrow>Location</Eyebrow>
            <h2 className="display-md mt-7 max-w-md text-balance">Based in Concord, Ohio. Working with organizations nationally.</h2>
            <p className="mt-6 max-w-md text-[16px] leading-[1.65] text-muted">
              Engagements have spanned Ohio, Wisconsin, North Carolina, and national-scale enterprise programs.
            </p>
          </div>
          <dl className="grid gap-4 self-start sm:grid-cols-3 lg:grid-cols-1">
            {[
              { label: 'Address', value: company.location, href: company.mapsHref },
              { label: 'Phone', value: company.phone, href: company.phoneHref },
              { label: 'Hours', value: company.hours },
            ].map(({ label, value, href }) => (
              <div key={label} className="panel px-6 py-6">
                <dt className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">{label}</dt>
                <dd className="mt-2 text-[15px] text-text">
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="transition-colors hover:text-accent-700">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Testimonials />
      <ClosingCta />
    </>
  )
}
