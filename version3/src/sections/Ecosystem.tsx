import { Section, SectionHeading } from '../components/ui/Primitives'
import { EcosystemGraph } from '../components/visuals/EcosystemGraph'
import { useI18n } from '../i18n/useI18n'

export function Ecosystem() {
  const { ui } = useI18n()
  return (
    <Section id="ecosystem" className="overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />
      <div className="container-x">
        <SectionHeading eyebrow={ui.sections.ecosystem.eyebrow} title={ui.sections.ecosystem.title} lead={ui.sections.ecosystem.lead} />
        <div className="mt-14">
          <EcosystemGraph />
        </div>
      </div>
    </Section>
  )
}
