import { useSearchParams } from 'react-router-dom'
import { Phone, MapPin, Clock } from 'lucide-react'
import { LinkedInIcon as Linkedin } from '../components/ui/LinkedInIcon'
import { Seo } from '../components/seo/Seo'
import { PageHero } from '../sections/PageHero'
import { Section } from '../components/ui/Primitives'
import { ContactWizard } from '../components/forms/ContactWizard'
import { useI18n } from '../i18n/useI18n'

const validIntents = ['solution', 'partnership', 'consultation', 'business', 'other'] as const
type Intent = (typeof validIntents)[number]

export default function Contact() {
  const [params] = useSearchParams()
  const { ui, content } = useI18n()
  const p = ui.pages.contact
  const { company } = content
  const raw = params.get('intent')
  const intent = (validIntents as readonly string[]).includes(raw ?? '') ? (raw as Intent) : null

  return (
    <>
      <Seo title={p.seoTitle} description={p.seoDescription} />
      <PageHero eyebrow={p.eyebrow} title={p.title} lead={p.lead} />

      <Section>
        <div className="container-x grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <ContactWizard initialIntent={intent} />

          <aside className="space-y-4 lg:pt-4">
            <div className="rounded-2xl border border-paper-300 bg-surface p-6 shadow-soft">
              <h2 className="font-display text-lg font-medium text-text">{p.prefer}</h2>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-accent-600" aria-hidden />
                  <div>
                    <a href={company.phoneHref} className="font-medium text-text hover:text-accent-700">
                      {company.phone}
                    </a>
                    <div className="text-muted">{company.hours}</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-accent-600" aria-hidden />
                  <a href={company.mapsHref} target="_blank" rel="noreferrer" className="text-text hover:text-accent-700">
                    {company.location}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 text-accent-600" aria-hidden />
                  <span className="text-text">{p.responses}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Linkedin className="mt-0.5 h-4 w-4 text-accent-600" aria-hidden />
                  <a href={company.linkedin} target="_blank" rel="noreferrer" className="text-text hover:text-accent-700">
                    {p.linkedin}
                  </a>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-ink-900 p-6 text-white">
              <div className="eyebrow-dark">{p.privacy}</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-dark">{p.privacyBody}</p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  )
}
