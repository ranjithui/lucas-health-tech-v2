/**
 * The translatable slice of every data file in src/data. English stays in the
 * data files themselves (they are the verified source); each other locale
 * ships one ContentPack that is merged over the English base at runtime.
 *
 * Only human-readable copy is here. Ids, slugs, routes, images, numbers,
 * technology names and dates are shared across languages.
 */

export interface SolutionCopy {
  title: string
  fullTitle: string
  kicker: string
  short: string
  summary: string
  description: string
  capabilities: string[]
  workflow: { label: string; detail: string }[]
  proof?: string
  imageAlt: string
}

export interface IndustryCopy {
  title: string
  short: string
  description: string
  needs: string[]
  evidence: string
}

export interface SectorCopy {
  title: string
  description: string
  evidence: string
}

export interface EngagementCopy {
  role: string
  sector: string
  headline: string
  challenge: string
  approach: string
  solution: string
  outcome: string
  /** Same order as the English facts; values are usually shared. */
  facts: { value: string; label: string }[]
  note?: string
}

export interface TestimonialCopy {
  title: string
  headline?: string
  quote: string
}

export interface InsightCopy {
  title: string
  excerpt: string
  /** Same markdown-lite format as the English body. */
  body: string
}

export interface EcosystemNodeCopy {
  label: string
  short: string
  description: string
  capabilities: string[]
}

export interface PipelineStageCopy {
  label: string
  title: string
  description: string
}

export interface ContentPack {
  company: {
    tagline: string
    motto: string
    positioning: string
    hours: string
  }
  founder: {
    role: string
    credentials: string[]
    summary: string
    quote: string
  }
  positioning: {
    headline: string
    /** The word in the headline that takes the accent colour. */
    accentWord: string
    supporting: string
    statement: string
    statementBody: string
    trustHeading: string
    ctaHeading: string
    ctaSupporting: string
  }
  /** By index, same order as `metrics` in src/data/company.ts. */
  metrics: { label: string; detail: string }[]
  /** By index, same order as `homeMetrics`. */
  homeMetrics: string[]
  /** By index, same order as `differentiators`. */
  differentiators: { title: string; body: string }[]
  domains: Record<string, { label: string; detail: string }>
  audiences: Record<string, { label: string; description: string }>
  solutions: Record<string, SolutionCopy>
  rpaBenefits: string[]
  industries: Record<string, IndustryCopy>
  sectors: Record<string, SectorCopy>
  engagements: Record<string, EngagementCopy>
  testimonials: Record<string, TestimonialCopy>
  insights: Record<string, InsightCopy>
  ecosystemNodes: Record<string, EcosystemNodeCopy>
  pipeline: Record<string, PipelineStageCopy>
}
