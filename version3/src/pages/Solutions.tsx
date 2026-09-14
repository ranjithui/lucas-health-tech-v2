import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Seo } from '../components/seo/Seo'
import { PageHero } from '../sections/PageHero'
import { Tag } from '../components/ui/Primitives'
import { ClosingCta } from '../sections/ClosingCta'
import { company } from '../data/company'
import { useI18n } from '../i18n/useI18n'
import { fadeUp, stagger, viewportOnce } from '../animations/variants'

export default function Solutions() {
  const { ui, content } = useI18n()
  const p = ui.pages.solutions
  const { solutions } = content
  return (
    <>
      <Seo
        title={p.seoTitle}
        description={p.seoDescription}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: solutions.map((s, i) => ({
            '@type': 'Service',
            position: i + 1,
            name: s.fullTitle,
            description: s.summary,
            url: `${company.url}/solutions/${s.id}`,
            provider: { '@type': 'Organization', name: company.name },
          })),
        }}
      />
      <PageHero eyebrow={p.eyebrow} title={p.title} lead={p.lead} />

      <section className="bg-paper-100">
        <div className="container-x">
          <motion.ul variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce} className="border-t border-paper-300">
            {solutions.map((s) => (
              <motion.li key={s.id} variants={fadeUp} className="border-b border-paper-300">
                <Link
                  to={`/solutions/${s.id}`}
                  className="group grid gap-6 py-12 transition-colors duration-500 md:grid-cols-[100px_1fr_auto] md:items-start md:gap-10 md:py-16 lg:grid-cols-[100px_260px_1fr_auto]"
                >
                  <span className="font-mono text-[11px] tracking-[0.2em] text-accent-600">{s.index}</span>

                  <span className="block overflow-hidden rounded-2xl border border-paper-300/70 bg-paper-200 md:col-span-2 lg:col-span-1">
                    <img
                      src={s.image.src}
                      alt={s.image.alt}
                      loading="lazy"
                      decoding="async"
                      width={600}
                      height={450}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.03]"
                    />
                  </span>

                  <div className="max-w-2xl">
                    <h2 className="display-md text-text transition-colors duration-300 group-hover:text-accent-700">{s.fullTitle}</h2>
                    <p className="mt-4 text-[16px] leading-[1.65] text-muted">{s.summary}</p>
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {s.capabilities.slice(0, 4).map((c) => (
                        <Tag key={c}>{c}</Tag>
                      ))}
                    </div>
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

      <ClosingCta />
    </>
  )
}
