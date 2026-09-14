import { company, founder, positioningV2, metrics, homeMetrics, differentiators, domains } from '../data/company'
import { solutions, audiences, rpaBenefits, type Solution } from '../data/solutions'
import { industries, sectors, type Industry, type Sector } from '../data/industries'
import { engagements, type Engagement } from '../data/engagements'
import { testimonials, type Testimonial } from '../data/testimonials'
import { insights, type Insight } from '../data/insights'
import { ecosystemNodes, intelligencePipeline, type EcosystemNode, type PipelineStage } from '../data/ecosystem'
import type { ContentPack } from './content/types'

/** Everything a page can read. English is the data files verbatim. */
export interface LocalizedContent {
  company: Omit<typeof company, 'tagline' | 'motto' | 'positioning' | 'hours'> & { tagline: string; motto: string; positioning: string; hours: string }
  founder: { name: string; role: string; credentials: readonly string[]; summary: string; quote: string; linkedin: string; photo: string }
  positioning: {
    headline: string
    accentWord: string
    supporting: string
    statement: string
    statementBody: string
    trustHeading: string
    ctaHeading: string
    ctaSupporting: string
  }
  metrics: { value: number; suffix: string; decimals?: number; label: string; detail: string }[]
  homeMetrics: { value: number; suffix: string; decimals?: number; label: string }[]
  differentiators: { step: string; title: string; body: string }[]
  domains: { id: string; label: string; detail: string }[]
  audiences: typeof audiences
  solutions: Solution[]
  rpaBenefits: string[]
  industries: Industry[]
  sectors: Sector[]
  engagements: Engagement[]
  testimonials: Testimonial[]
  insights: Insight[]
  ecosystemNodes: EcosystemNode[]
  intelligencePipeline: PipelineStage[]
  getSolution: (id: string) => Solution | undefined
  getIndustry: (id: string) => Industry | undefined
}

const withDecimals = <T extends { decimals?: number }>(m: T) => ('decimals' in m && m.decimals !== undefined ? { decimals: m.decimals } : {})

/** The English base, built once. */
export const englishContent: LocalizedContent = {
  company: { ...company },
  founder: { ...founder },
  positioning: { ...positioningV2, accentWord: 'technology.' },
  metrics: metrics.map((m) => ({ value: m.value, suffix: m.suffix, ...withDecimals(m), label: m.label, detail: m.detail })),
  homeMetrics: homeMetrics.map((m) => ({ value: m.value, suffix: m.suffix, ...withDecimals(m), label: m.label })),
  differentiators: differentiators.map((d) => ({ ...d })),
  domains: domains.map((d) => ({ ...d })),
  audiences,
  solutions,
  rpaBenefits,
  industries,
  sectors,
  engagements,
  testimonials,
  insights,
  ecosystemNodes,
  intelligencePipeline,
  getSolution: (id) => solutions.find((s) => s.id === id || s.legacyId === id),
  getIndustry: (id) => industries.find((i) => i.id === id),
}

/**
 * Merge a locale's ContentPack over the English base. Anything the pack does
 * not cover (an id it never mentions) falls back to English rather than
 * disappearing, so an incomplete pack degrades gracefully.
 */
export function localize(pack: ContentPack): LocalizedContent {
  const sol: Solution[] = solutions.map((s) => {
    const c = pack.solutions[s.id]
    if (!c) return s
    return {
      ...s,
      title: c.title,
      fullTitle: c.fullTitle,
      kicker: c.kicker,
      short: c.short,
      summary: c.summary,
      description: c.description,
      capabilities: c.capabilities,
      workflow: c.workflow,
      proof: c.proof ?? s.proof,
      image: { ...s.image, alt: c.imageAlt },
    }
  })
  const ind: Industry[] = industries.map((i) => {
    const c = pack.industries[i.id]
    return c ? { ...i, title: c.title, short: c.short, description: c.description, needs: c.needs, evidence: c.evidence } : i
  })

  return {
    company: { ...company, ...pack.company },
    founder: { ...founder, ...pack.founder },
    positioning: { ...pack.positioning },
    metrics: metrics.map((m, i) => ({ value: m.value, suffix: m.suffix, ...withDecimals(m), label: pack.metrics[i]?.label ?? m.label, detail: pack.metrics[i]?.detail ?? m.detail })),
    homeMetrics: homeMetrics.map((m, i) => ({ value: m.value, suffix: m.suffix, ...withDecimals(m), label: pack.homeMetrics[i] ?? m.label })),
    differentiators: differentiators.map((d, i) => ({ step: d.step, title: pack.differentiators[i]?.title ?? d.title, body: pack.differentiators[i]?.body ?? d.body })),
    domains: domains.map((d) => ({ ...d, ...pack.domains[d.id] })),
    audiences: audiences.map((a) => ({ ...a, ...pack.audiences[a.id] })),
    solutions: sol,
    rpaBenefits: pack.rpaBenefits.length ? pack.rpaBenefits : rpaBenefits,
    industries: ind,
    sectors: sectors.map((s) => ({ ...s, ...pack.sectors[s.id] })),
    engagements: engagements.map((e) => {
      const c = pack.engagements[e.id]
      return c ? { ...e, ...c, note: c.note ?? e.note } : e
    }),
    testimonials: testimonials.map((t) => {
      const c = pack.testimonials[t.id]
      return c ? { ...t, title: c.title, headline: c.headline ?? t.headline, quote: c.quote } : t
    }),
    insights: insights.map((i) => ({ ...i, ...pack.insights[i.slug] })),
    ecosystemNodes: ecosystemNodes.map((n) => ({ ...n, ...pack.ecosystemNodes[n.id] })),
    intelligencePipeline: intelligencePipeline.map((p) => ({ ...p, ...pack.pipeline[p.id] })),
    getSolution: (id) => sol.find((s) => s.id === id || s.legacyId === id),
    getIndustry: (id) => ind.find((i) => i.id === id),
  }
}
