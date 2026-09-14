import { Seo } from '../components/seo/Seo'
import { Section } from '../components/ui/Primitives'
import { company } from '../data/company'
import { useI18n } from '../i18n/useI18n'

/**
 * Legal pages summarise the policies published on lucashealthtech.com
 * (effective January 1, 2026). Replace with the client's full legal text before launch.
 * The translations are courtesy renderings; the English text is the governing version.
 */
export function PrivacyPolicy() {
  const { ui } = useI18n()
  const p = ui.pages.legal
  return (
    <>
      <Seo title={p.privacyTitle} description={p.privacySeo} noIndex />
      <LegalShell title={p.privacyTitle} effective={p.effective} blocks={p.privacy} />
    </>
  )
}

export function Terms() {
  const { ui } = useI18n()
  const p = ui.pages.legal
  return (
    <>
      <Seo title={p.termsTitle} description={p.termsSeo} noIndex />
      <LegalShell title={p.termsTitle} effective={p.effective} blocks={p.terms} />
    </>
  )
}

function LegalShell({ title, effective, blocks }: { title: string; effective: string; blocks: { heading?: string; body: string }[] }) {
  const { t } = useI18n()
  const vars = { name: company.name, legalName: company.legalName, phone: company.phone }
  return (
    <Section className="pt-36 md:pt-44">
      <div className="container-x max-w-3xl">
        <span className="eyebrow">{effective}</span>
        <h1 className="display-lg mt-4 text-text">{title}</h1>
        <div className="prose-lht mt-10">
          {blocks.map((b, i) => (
            <div key={i}>
              {b.heading && <h2>{b.heading}</h2>}
              <p>{t(b.body, vars)}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
