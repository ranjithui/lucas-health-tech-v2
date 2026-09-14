import { motion } from 'motion/react'
import { LinkedInIcon as Linkedin } from '../components/ui/LinkedInIcon'
import { Seo } from '../components/seo/Seo'
import { PageHero } from '../sections/PageHero'
import { Section, Eyebrow, Tag } from '../components/ui/Primitives'
import { WhyLHT } from '../sections/WhyLHT'
import { Impact } from '../sections/Impact'
import { Testimonials } from '../sections/Testimonials'
import { ClosingCta } from '../sections/ClosingCta'
import { company, technologies } from '../data/company'
import { useI18n } from '../i18n/useI18n'
import { fadeUp, stagger, viewportOnce } from '../animations/variants'

export default function About() {
  const { ui, content, t } = useI18n()
  const p = ui.pages.about
  const { founder, positioning } = content
  const details = content.company

  return (
    <>
      <Seo
        title={p.seoTitle}
        description={p.seoDescription}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: founder.name,
          jobTitle: founder.role,
          worksFor: { '@type': 'Organization', name: company.name },
          sameAs: founder.linkedin,
        }}
      />
      <PageHero eyebrow={p.eyebrow} title={positioning.trustHeading} lead={p.lead} />

      {/* Founder */}
      <Section>
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.25fr] lg:gap-24">
          <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <motion.div variants={fadeUp} className="mb-10 max-w-xs overflow-hidden rounded-3xl border border-paper-300/70 bg-paper-200 shadow-soft">
              <img
                src={founder.photo}
                alt={t(p.photoAlt, { name: founder.name, role: founder.role, company: company.name })}
                width={292}
                height={366}
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <Eyebrow>{p.leadership}</Eyebrow>
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
              <Linkedin className="h-3.5 w-3.5" aria-hidden /> {p.connect}
            </motion.a>
          </motion.div>

          <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <motion.span variants={fadeUp} className="rule-gold mb-8 block" aria-hidden />
            <motion.blockquote variants={fadeUp} className="font-display text-[clamp(1.5rem,2.6vw,2.05rem)] leading-[1.35] tracking-[-0.015em] text-text">
              {founder.quote}
            </motion.blockquote>
            <motion.p variants={fadeUp} className="mt-10 max-w-xl text-pretty lead">
              {p.body}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-1.5" aria-label={ui.common.technologiesAndPlatforms}>
              {technologies.map((x) => (
                <Tag key={x}>{x}</Tag>
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
            <Eyebrow>{p.location}</Eyebrow>
            <h2 className="display-md mt-7 max-w-md text-balance">{p.locationTitle}</h2>
            <p className="mt-6 max-w-md text-[16px] leading-[1.65] text-muted">{p.locationBody}</p>
          </div>
          <div className="grid gap-4 self-start">
            <a href={details.mapsHref} target="_blank" rel="noreferrer" aria-label={p.mapAria} className="panel panel-link block overflow-hidden">
              <img src="/images/map-concord-ohio.webp" alt={p.mapAlt} loading="lazy" decoding="async" width={614} height={384} className="aspect-[16/10] w-full object-cover" />
            </a>
            <dl className="grid gap-4 self-start sm:grid-cols-3">
              {[
                { label: p.address, value: details.location, href: details.mapsHref },
                { label: p.phone, value: details.phone, href: details.phoneHref },
                { label: p.hours, value: details.hours },
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
        </div>
      </Section>

      <Testimonials />
      <ClosingCta />
    </>
  )
}
