export interface Industry {
  id: string
  title: string
  /** One line. All the homepage "Who we serve" section is allowed to show. */
  short: string
  description: string
  needs: string[]
  solutionIds: string[]
  evidence: string
  /** Verified sectors that sit inside this buyer segment. */
  sectorIds: string[]
}

export interface Sector {
  id: string
  title: string
  description: string
  evidence: string
}

/**
 * Version 2 leads with the four decision-maker groups the business is
 * positioned for. Every evidence line below is drawn from published
 * engagements and executive references — nothing is aspirational.
 */
export const industries: Industry[] = [
  {
    id: 'health-systems',
    title: 'Health Systems',
    short: 'Strategic and operational transformation.',
    description:
      'Multi-site clinical operations, platform modernization, and executive governance for enterprise health systems and the managed care organizations that work alongside them.',
    needs: [
      'Platform modernization',
      'Multi-site clinical operations',
      'Executive governance alignment',
      'Production automation across Epic and Oracle Health',
      'Care management platform strategy',
    ],
    solutionIds: ['executive-operations', 'clinical-systems', 'ai-automation'],
    evidence:
      'VP Clinical Systems Operations at Trillium Health Resources — enterprise stabilization under regulatory oversight, serving 60,000+ members. Executive references from leaders at University Hospitals of Cleveland, Cleveland Clinic, and UW Health.',
    sectorIds: ['enterprise-health-systems', 'managed-care'],
  },
  {
    id: 'healthcare-organizations',
    title: 'Healthcare Organizations',
    short: 'Technology-enabled performance improvement.',
    description:
      'Physician practices and specialty networks that need their technology estate, workflows, and administrative load to stop competing with clinical work.',
    needs: [
      'Digital infrastructure modernization',
      'Patient communication and experience',
      'Workflow efficiency',
      'Administrative task automation',
    ],
    solutionIds: ['practice-optimization', 'digital-innovation', 'ai-automation'],
    evidence:
      'Assisting physicians and their practices in achieving substantial savings through faster and more efficient digital care.',
    sectorIds: ['physician-practices'],
  },
  {
    id: 'technology-partners',
    title: 'Healthcare Technology Partners',
    short: 'Technology strategy and implementation expertise.',
    description:
      'Health tech ventures, consultancies, vendors, and enterprise data teams that need founding-level technical architecture and clinical credibility behind their platform.',
    needs: [
      'FHIR-native platform design',
      'SaMD regulatory positioning',
      'Product roadmap and technical architecture',
      'Enterprise data products and consent modernization',
    ],
    solutionIds: ['clinical-systems', 'executive-operations', 'digital-innovation'],
    evidence:
      'Founding Chief Technology Architect for LORiMDT, a FHIR-native oncology governance platform. Principal Digital Consultant for Eli Lilly on national-scale enterprise data products.',
    sectorIds: ['health-tech-ventures', 'life-sciences'],
  },
  {
    id: 'investors',
    title: 'Investors',
    short: 'Healthcare technology and operational insight.',
    description:
      'A clinical and operating perspective on healthcare technology: whether a platform is architected for the regulatory and workflow reality it will meet, and whether the operating model behind it can scale.',
    needs: [
      'Technical architecture perspective',
      'Regulatory and clinical governance positioning',
      'Operating model and execution readiness',
      'Automation ROI and investment models',
    ],
    solutionIds: ['clinical-systems', 'executive-operations', 'ai-automation'],
    evidence:
      'Perspective grounded in founding technical architecture, enterprise stabilization under regulatory oversight, and national-scale enterprise programs — led by a former clinician and Board Director at Signature Health.',
    sectorIds: ['health-tech-ventures', 'enterprise-health-systems', 'life-sciences'],
  },
]

/** The verified verticals the firm has worked in. */
export const sectors: Sector[] = [
  {
    id: 'enterprise-health-systems',
    title: 'Enterprise Health Systems',
    description: 'Multi-site clinical operations, platform modernization, and executive governance.',
    evidence: 'References from leaders at University Hospitals of Cleveland, Cleveland Clinic, and UW Health.',
  },
  {
    id: 'health-tech-ventures',
    title: 'Health Tech Ventures',
    description: 'Founding-level technical architecture, SaMD positioning, and fractional CTO/COO leadership.',
    evidence: 'Founding Chief Technology Architect for LORiMDT.',
  },
  {
    id: 'managed-care',
    title: 'Managed Care & Payers',
    description: 'Enterprise stabilization, care management platform strategy, and payer-portal automation.',
    evidence: 'VP Clinical Systems Operations at Trillium Health Resources, serving 60,000+ members.',
  },
  {
    id: 'physician-practices',
    title: 'Physician Practices & Specialty Networks',
    description: 'Digital transformation, workflow efficiency, and automation of administrative work.',
    evidence: 'Substantial practice savings through faster and more efficient digital care.',
  },
  {
    id: 'life-sciences',
    title: 'Pharmaceutical & Life Sciences',
    description: 'Enterprise data products, consent modernization, and privacy-first personalization.',
    evidence: 'Principal Digital Consultant for Eli Lilly.',
  },
]

export const getIndustry = (id: string) => industries.find((i) => i.id === id)
