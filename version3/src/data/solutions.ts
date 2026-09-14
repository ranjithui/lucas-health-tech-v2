export type WorkflowStep = { label: string; detail: string }

export type Audience = 'provider' | 'venture' | 'partner'

export interface Solution {
  id: string
  index: string
  /** Short name used in navigation and on the homepage. */
  title: string
  /** Full name used on the solution's own page. */
  fullTitle: string
  kicker: string
  /** One line. This is all the homepage is allowed to show. */
  short: string
  summary: string
  description: string
  capabilities: string[]
  workflow: WorkflowStep[]
  technologies: string[]
  audiences: Audience[]
  proof?: string
  /** Version 1 anchor, preserved so old deep links keep resolving. */
  legacyId?: string
  /** Editorial photograph in /public/images, 4:3. */
  image: { src: string; alt: string }
}

export const audiences: { id: Audience; label: string; description: string }[] = [
  {
    id: 'provider',
    label: 'Healthcare Provider',
    description: 'Health systems, physician practices, and specialty networks.',
  },
  {
    id: 'venture',
    label: 'Health Tech Venture',
    description: 'Digital health companies building clinical platforms and SaMD.',
  },
  {
    id: 'partner',
    label: 'Technology Partner',
    description: 'Consultancies, vendors, and enterprise data teams.',
  },
]

export const solutions: Solution[] = [
  {
    id: 'clinical-systems',
    image: { src: '/images/solution-clinical-systems.webp', alt: 'Clinicians meeting in a modern glass-walled hospital atrium' },
    legacyId: 'clinical-platform-architecture',
    index: '01',
    title: 'Clinical Systems',
    fullTitle: 'Clinical Systems & Platform Architecture',
    kicker: 'FHIR-Native Platforms • SaMD Pathways • Enterprise Governance',
    short: 'Design and optimize healthcare technology environments.',
    summary:
      'Architecture of clinical governance platforms and platform modernization addressing clinical workflows, regulatory requirements, and enterprise scale.',
    description:
      'We architect clinical governance platforms and lead platform modernization where clinical workflows, regulatory requirements, and enterprise scale intersect. The focus is FHIR-native design, HL7 interoperability, and SaMD regulatory positioning.',
    capabilities: [
      'FHIR-native platform design',
      'HL7 interoperability',
      'SaMD regulatory positioning',
      'Clinical governance platforms',
      'Platform modernization',
      'Enterprise governance',
    ],
    workflow: [
      { label: 'Clinical workflows', detail: 'Map how care is delivered before designing the system.' },
      { label: 'Regulatory requirements', detail: 'Position SaMD pathways and governance early.' },
      { label: 'FHIR-native architecture', detail: 'Interoperable by design with HL7 and FHIR.' },
      { label: 'Enterprise scale', detail: 'Governance that holds across sites and vendors.' },
    ],
    technologies: ['FHIR', 'HL7', 'SaMD', 'ePRO'],
    audiences: ['venture', 'provider'],
    proof: 'Founding Chief Technology Architect for a FHIR-native oncology governance platform (LORiMDT).',
  },
  {
    id: 'executive-operations',
    image: { src: '/images/solution-executive-operations.webp', alt: 'Executive presenting from a podium at a healthcare leadership event' },
    legacyId: 'executive-operating-roles',
    index: '02',
    title: 'Executive Operations',
    fullTitle: 'Executive Operations & Operating Roles',
    kicker: 'Fractional & Standing CTO • COO • VP Clinical Systems',
    short: 'Improve operational performance and execution.',
    summary: 'CTO, COO, and VP-level roles for health tech ventures and enterprise health systems.',
    description:
      'Fractional and standing CTO, COO, and VP Clinical Systems roles for health tech ventures and enterprise health systems. Enterprise product strategy, multi-site clinical operations, executive governance alignment, and leadership that bridges clinical teams with technical architecture and board-level strategy.',
    capabilities: [
      'Fractional & standing CTO',
      'Fractional & standing COO',
      'VP Clinical Systems',
      'Enterprise product strategy',
      'Multi-site clinical operations',
      'Executive governance alignment',
    ],
    workflow: [
      { label: 'Board-level strategy', detail: 'Align executive governance and product direction.' },
      { label: 'Technical architecture', detail: 'Translate strategy into platform decisions.' },
      { label: 'Clinical teams', detail: 'Bridge the people delivering care and the systems they use.' },
      { label: 'Multi-site operations', detail: 'Run clinical operations at enterprise scale.' },
    ],
    technologies: ['Epic', 'Oracle Health', 'Enterprise Governance'],
    audiences: ['venture', 'provider'],
    proof:
      'VP Clinical Systems Operations at Trillium Health Resources: 40+ stakeholders, $5M+ vendor portfolio, 60,000+ members.',
  },
  {
    id: 'ai-automation',
    image: { src: '/images/solution-ai-automation.webp', alt: 'Nurse reviewing an AI-assisted clinical dashboard on a tablet' },
    legacyId: 'ai-automation-strategy',
    index: '03',
    title: 'AI & Automation',
    fullTitle: 'AI & Automation Strategy',
    kicker: 'RPA • API Orchestration • Predictive Models • Centers of Excellence',
    short: 'Intelligent automation for complex healthcare workflows.',
    summary:
      'AI-driven automation embedded in clinical workflows, with Automation Centers of Excellence and enterprise investment models.',
    description:
      'AI-driven automation embedded in clinical workflows. We design Automation Centers of Excellence, build enterprise automation investment models, and deliver production automations across Epic, Oracle Health, payer portals, and specialty networks.',
    capabilities: [
      'Robotic Process Automation (RPA)',
      'API orchestration',
      'Predictive models',
      'Automation Centers of Excellence',
      'Enterprise automation investment models',
      'Production automations in Epic & Oracle Health',
    ],
    workflow: [
      { label: 'Identify use cases', detail: 'Find automation candidates with meaningful impact.' },
      { label: 'Design the CoE', detail: 'Governance, investment model, and operating cadence.' },
      { label: 'Build & orchestrate', detail: 'RPA, API orchestration, and predictive models.' },
      { label: 'Quantify ROI', detail: 'Transactions aligned to quantified return.' },
    ],
    technologies: ['RPA', 'API Orchestration', 'Predictive Models', 'Epic', 'Oracle Health', 'Payer Portals'],
    audiences: ['provider', 'partner', 'venture'],
    proof: '200+ production automations delivered. 2.1M+ annual transactions aligned to quantified ROI.',
  },
  {
    id: 'digital-innovation',
    image: { src: '/images/solution-digital-innovation.webp', alt: 'Speaker walking an audience through a digital transformation roadmap' },
    legacyId: 'digital-transformation',
    index: '04',
    title: 'Digital Innovation',
    fullTitle: 'Digital Innovation & Transformation',
    kicker: 'Infrastructure Modernization • Patient Experience • Technology Strategy',
    short: 'Build technology strategies for modern healthcare organizations.',
    summary: 'Align technology with your organization’s business needs for durable transformation.',
    description:
      'We help healthcare organizations harness the power of technology. Our experts identify and implement solutions tailored to your needs, whether updating infrastructure, enhancing current digital tools, or streamlining workflows. Technology should work for you, making your work life easier, not more difficult.',
    capabilities: [
      'Modernize digital infrastructure',
      'Enhance patient communication and experience',
      'Technology inventory analysis',
      'Long-term cost-effectiveness evaluation',
      'Technology strategy and roadmap',
      'Dedicated to seamless technology',
    ],
    workflow: [
      { label: 'Technology inventory', detail: 'Evaluate what you have and what it costs long term.' },
      { label: 'Strategy', detail: 'Plan how technology meets your objectives.' },
      { label: 'Implement', detail: 'Update infrastructure or enhance existing tools.' },
      { label: 'Sustain', detail: 'Keep the estate coherent as the organization grows.' },
    ],
    technologies: ['Digital Infrastructure', 'Patient Communication', 'AWS', 'Enterprise Data Products'],
    audiences: ['provider', 'partner'],
    proof: 'Principal Digital Consultant for Eli Lilly: enterprise data product and consent modernization on AWS.',
  },
  {
    id: 'practice-optimization',
    image: { src: '/images/solution-practice-optimization.webp', alt: 'Healthcare leadership audience at an operations briefing' },
    index: '05',
    title: 'Practice Optimization',
    fullTitle: 'Practice Optimization',
    kicker: 'Workflow Efficiency • Administrative Automation • Cost Reduction',
    short: 'Improve how healthcare organizations operate and scale.',
    summary:
      'Workflow efficiency and administrative automation so clinically trained staff spend their time on meaningful work.',
    description:
      'Practices and specialty networks lose capacity to administrative work that technology should be absorbing. We optimize workflow efficiency, automate administrative tasks, and strengthen compliance and accuracy, so clinically trained staff can focus on care rather than on the system.',
    capabilities: [
      'Optimize workflow efficiency',
      'Automate administrative tasks',
      'Reduce labor, operations, and software costs',
      'Enhance workflow accuracy and strengthen compliance',
      'Personal robotic assistants for staff productivity',
      'Faster, more efficient digital care',
    ],
    workflow: [
      { label: 'Observe the work', detail: 'Understand where practice capacity is actually going.' },
      { label: 'Remove the friction', detail: 'Streamline the workflows that slow clinical teams down.' },
      { label: 'Automate the routine', detail: 'Administrative tasks handled by automation, not people.' },
      { label: 'Scale what works', detail: 'Operating patterns that hold as the practice grows.' },
    ],
    technologies: ['RPA', 'Workflow Design', 'Patient Communication', 'Specialty Networks'],
    audiences: ['provider'],
    proof:
      'Assisting physicians and their practices in achieving substantial savings through faster and more efficient digital care.',
  },
]

export const rpaBenefits = [
  'Accelerate digital transformation',
  'Achieve operational efficiency goals',
  'Reduce labor, operations, and software costs rapidly',
  'Enhance workflow accuracy and strengthen compliance',
  'Boost worker productivity with personal robotic assistants',
  'Grow profits by automating administrative tasks',
]

export const getSolution = (id: string) =>
  solutions.find((s) => s.id === id || s.legacyId === id)
