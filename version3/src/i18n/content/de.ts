import type { ContentPack } from './types'

/**
 * Deutsch — redaktionelle Inhalte. Jeder Eintrag entspricht einer id/einem slug
 * aus src/data; Zahlen, Technologien, Routen und Bilder werden mit Englisch geteilt.
 */
export const deContent: ContentPack = {
  company: {
    tagline: 'Architektur klinischer Systeme & operative Führung für das Gesundheitswesen',
    motto: 'Klinische Tiefe. Technische Architektur. Operative Führung.',
    positioning: 'Fractional & Standing CTO/COO • Plattformstrategie • KI & Automatisierung • Klinische Governance',
    hours: 'Mo–Fr, 9:00–17:00 Uhr (US-Ostküstenzeit)',
  },
  founder: {
    role: 'CEO & Gründerin',
    credentials: ['Ehemalige Klinikerin', 'Board Director, Signature Health'],
    summary: 'Fractional und Standing CTO/COO für Health-Tech-Unternehmen und Gesundheitssysteme.',
    quote:
      'Gesundheitsorganisationen geraten ins Straucheln, wenn klinische Systeme fragmentiert, schlecht abgestimmt oder mangelhaft gesteuert sind – und wenn die technische Führung die klinische Realität nicht versteht. Ich entwerfe Plattformen und führe den Betrieb dort, wo sich klinische Abläufe, regulatorische Anforderungen und Unternehmensgröße überschneiden.',
  },
  positioning: {
    headline: 'Die Komplexität des Gesundheitswesens verlangt mehr als Technologie.',
    accentWord: 'Technologie.',
    supporting:
      'Lucas Health Tech verbindet klinische Strategie, Technologie, Betrieb und Innovation, damit Gesundheitsorganisationen ihre Transformation mit mehr Klarheit und Wirkung umsetzen.',
    statement: 'Gemacht für die Realitäten des modernen Gesundheitswesens.',
    statementBody:
      'Klinische Systeme, Betrieb, Technologie und Innovation werden meist getrennt gesteuert – und genau dort gerät die Transformation ins Stocken. Wir arbeiten über alle vier Bereiche hinweg, geführt von einer ehemaligen Klinikerin, die die betreffenden Plattformen entworfen und den Betrieb verantwortet hat.',
    trustHeading: 'Erfahrung, die das Gesundheitswesen von innen versteht.',
    ctaHeading: 'Transformation im Gesundheitswesen beginnt mit Klarheit.',
    ctaSupporting: 'Lassen Sie uns gemeinsam herausfinden, wo Technologie, Betrieb und Strategie für Ihre Organisation echte Wirkung entfalten können.',
  },
  metrics: [
    { label: 'Produktive Automatisierungen geliefert', detail: 'Über Epic, Oracle Health, Kostenträgerportale und Fachnetzwerke hinweg.' },
    { label: 'Jährliche Transaktionen', detail: 'Ausgerichtet auf einen quantifizierten ROI.' },
    { label: 'Jahre Erfahrung im Gesundheitswesen', detail: 'Beraterinnen und Berater mit klinischen Abschlüssen.' },
    { label: 'Versorgte Mitglieder', detail: 'Stabilisierungsprojekt bei Trillium Health Resources.' },
  ],
  homeMetrics: ['Jahre Erfahrung im Gesundheitswesen', 'Produktive Automatisierungen', 'Jährlich unterstützte Transaktionen'],
  differentiators: [
    { title: 'Klinische Tiefe', body: 'Geführt von einer ehemaligen Klinikerin. Beraterinnen und Berater mit klinischen Abschlüssen, die verstehen, wie Versorgung tatsächlich erbracht wird.' },
    { title: 'Technische Architektur', body: 'FHIR-natives Design, HL7-Interoperabilität und regulatorische SaMD-Positionierung, gebaut für klinische Abläufe und Unternehmensgröße.' },
    { title: 'Operative Führung', body: 'Operative Rollen als CTO, COO und auf VP-Ebene, die klinische Teams, technische Architektur und die Strategie auf Vorstandsebene verbinden.' },
    { title: 'Automatisierung in großem Maßstab', body: 'Über 200 produktive Automatisierungen und über 2,1 Mio. jährliche Transaktionen, ausgerichtet auf einen quantifizierten ROI über Epic, Oracle Health, Kostenträgerportale und Fachnetzwerke hinweg.' },
    { title: 'Persönliche Betreuung', body: 'Persönliche Betreuung in IT, Marketing und Geschäft statt Ticket-Support. Über 20 Jahre Erfahrung im Gesundheitswesen.' },
  ],
  domains: {
    clinical: { label: 'Klinik', detail: 'Wie Versorgung tatsächlich erbracht, dokumentiert und gesteuert wird.' },
    technology: { label: 'Technologie', detail: 'FHIR-native Plattformen, Interoperabilität und Unternehmensarchitektur.' },
    operations: { label: 'Betrieb', detail: 'Operative Führung über Standorte, Anbieter und Teams hinweg.' },
    innovation: { label: 'Innovation', detail: 'KI und Automatisierung, eingebettet dort, wo die Arbeit stattfindet.' },
  },
  audiences: {
    provider: { label: 'Leistungserbringer', description: 'Gesundheitssysteme, Arztpraxen und Fachnetzwerke.' },
    venture: { label: 'Health-Tech-Unternehmen', description: 'Digital-Health-Unternehmen, die klinische Plattformen und SaMD entwickeln.' },
    partner: { label: 'Technologiepartner', description: 'Beratungen, Anbieter und Datenteams in Unternehmen.' },
  },
  solutions: {
    'clinical-systems': {
      title: 'Klinische Systeme',
      fullTitle: 'Klinische Systeme & Plattformarchitektur',
      kicker: 'FHIR-native Plattformen • SaMD-Pfade • Unternehmens-Governance',
      short: 'Technologieumgebungen im Gesundheitswesen entwerfen und optimieren.',
      summary: 'Architektur klinischer Governance-Plattformen und Plattformmodernisierung mit Blick auf klinische Abläufe, regulatorische Anforderungen und Unternehmensgröße.',
      description:
        'Wir entwerfen klinische Governance-Plattformen und führen Plattformmodernisierungen dort, wo sich klinische Abläufe, regulatorische Anforderungen und Unternehmensgröße überschneiden. Der Fokus liegt auf FHIR-nativem Design, HL7-Interoperabilität und regulatorischer SaMD-Positionierung.',
      capabilities: ['FHIR-natives Plattformdesign', 'HL7-Interoperabilität', 'Regulatorische SaMD-Positionierung', 'Klinische Governance-Plattformen', 'Plattformmodernisierung', 'Unternehmens-Governance'],
      workflow: [
        { label: 'Klinische Abläufe', detail: 'Erst abbilden, wie Versorgung erbracht wird, dann das System entwerfen.' },
        { label: 'Regulatorische Anforderungen', detail: 'SaMD-Pfade und Governance frühzeitig positionieren.' },
        { label: 'FHIR-native Architektur', detail: 'Interoperabel per Design mit HL7 und FHIR.' },
        { label: 'Unternehmensgröße', detail: 'Governance, die über Standorte und Anbieter hinweg trägt.' },
      ],
      proof: 'Gründende Chief Technology Architect einer FHIR-nativen Governance-Plattform für die Onkologie (LORiMDT).',
      imageAlt: 'Klinikerinnen und Kliniker im Gespräch im verglasten Atrium eines modernen Krankenhauses',
    },
    'executive-operations': {
      title: 'Operative Führung',
      fullTitle: 'Operative Führung & Führungsrollen',
      kicker: 'Fractional & Standing CTO • COO • VP Clinical Systems',
      short: 'Operative Leistung und Umsetzung verbessern.',
      summary: 'CTO-, COO- und VP-Rollen für Health-Tech-Unternehmen und Gesundheitssysteme.',
      description:
        'Fractional und Standing CTO-, COO- und VP-Clinical-Systems-Rollen für Health-Tech-Unternehmen und Gesundheitssysteme. Unternehmensweite Produktstrategie, klinischer Betrieb über mehrere Standorte, Abstimmung der Führungs-Governance und eine Führung, die klinische Teams mit technischer Architektur und der Strategie auf Vorstandsebene verbindet.',
      capabilities: ['Fractional & Standing CTO', 'Fractional & Standing COO', 'VP Clinical Systems', 'Unternehmensweite Produktstrategie', 'Klinischer Betrieb über mehrere Standorte', 'Abstimmung der Führungs-Governance'],
      workflow: [
        { label: 'Strategie auf Vorstandsebene', detail: 'Führungs-Governance und Produktausrichtung in Einklang bringen.' },
        { label: 'Technische Architektur', detail: 'Strategie in Plattformentscheidungen übersetzen.' },
        { label: 'Klinische Teams', detail: 'Die Menschen, die Versorgung leisten, mit den Systemen verbinden, die sie nutzen.' },
        { label: 'Betrieb an mehreren Standorten', detail: 'Klinischen Betrieb im Unternehmensmaßstab führen.' },
      ],
      proof: 'VP Clinical Systems Operations bei Trillium Health Resources: über 40 Stakeholder, ein Anbieterportfolio von über 5 Mio. $, über 60.000 Mitglieder.',
      imageAlt: 'Führungskraft bei einem Vortrag am Rednerpult einer Gesundheitsführungsveranstaltung',
    },
    'ai-automation': {
      title: 'KI & Automatisierung',
      fullTitle: 'KI- & Automatisierungsstrategie',
      kicker: 'RPA • API-Orchestrierung • Prädiktive Modelle • Centers of Excellence',
      short: 'Intelligente Automatisierung für komplexe Arbeitsabläufe im Gesundheitswesen.',
      summary: 'KI-gestützte Automatisierung, eingebettet in klinische Abläufe, mit Automation Centers of Excellence und unternehmensweiten Investitionsmodellen.',
      description:
        'KI-gestützte Automatisierung, eingebettet in klinische Abläufe. Wir entwerfen Automation Centers of Excellence, entwickeln unternehmensweite Investitionsmodelle für Automatisierung und liefern produktive Automatisierungen über Epic, Oracle Health, Kostenträgerportale und Fachnetzwerke hinweg.',
      capabilities: ['Robotic Process Automation (RPA)', 'API-Orchestrierung', 'Prädiktive Modelle', 'Automation Centers of Excellence', 'Unternehmensweite Investitionsmodelle für Automatisierung', 'Produktive Automatisierungen in Epic & Oracle Health'],
      workflow: [
        { label: 'Anwendungsfälle identifizieren', detail: 'Automatisierungskandidaten mit spürbarer Wirkung finden.' },
        { label: 'Das CoE entwerfen', detail: 'Governance, Investitionsmodell und operativer Rhythmus.' },
        { label: 'Bauen & orchestrieren', detail: 'RPA, API-Orchestrierung und prädiktive Modelle.' },
        { label: 'ROI quantifizieren', detail: 'Transaktionen, ausgerichtet auf einen quantifizierten Ertrag.' },
      ],
      proof: 'Über 200 produktive Automatisierungen geliefert. Über 2,1 Mio. jährliche Transaktionen, ausgerichtet auf einen quantifizierten ROI.',
      imageAlt: 'Pflegekraft prüft ein KI-gestütztes klinisches Dashboard auf einem Tablet',
    },
    'digital-innovation': {
      title: 'Digitale Innovation',
      fullTitle: 'Digitale Innovation & Transformation',
      kicker: 'Infrastrukturmodernisierung • Patientenerlebnis • Technologiestrategie',
      short: 'Technologiestrategien für moderne Gesundheitsorganisationen entwickeln.',
      summary: 'Technologie auf die geschäftlichen Anforderungen Ihrer Organisation ausrichten – für eine dauerhafte Transformation.',
      description:
        'Wir helfen Gesundheitsorganisationen, die Kraft der Technologie zu nutzen. Unsere Expertinnen und Experten identifizieren und implementieren Lösungen, die auf Ihre Bedürfnisse zugeschnitten sind – ob Infrastruktur erneuern, bestehende digitale Werkzeuge verbessern oder Arbeitsabläufe verschlanken. Technologie sollte für Sie arbeiten und Ihren Arbeitsalltag leichter machen, nicht schwerer.',
      capabilities: ['Digitale Infrastruktur modernisieren', 'Patientenkommunikation und -erlebnis verbessern', 'Analyse des Technologiebestands', 'Bewertung der langfristigen Wirtschaftlichkeit', 'Technologiestrategie und Roadmap', 'Verpflichtet zu reibungsloser Technologie'],
      workflow: [
        { label: 'Technologiebestand', detail: 'Bewerten, was Sie haben und was es langfristig kostet.' },
        { label: 'Strategie', detail: 'Planen, wie Technologie Ihre Ziele erreicht.' },
        { label: 'Umsetzen', detail: 'Infrastruktur erneuern oder bestehende Werkzeuge verbessern.' },
        { label: 'Erhalten', detail: 'Die Systemlandschaft kohärent halten, während die Organisation wächst.' },
      ],
      proof: 'Principal Digital Consultant für Eli Lilly: Modernisierung von Unternehmensdatenprodukten und Einwilligungen auf AWS.',
      imageAlt: 'Referent führt ein Publikum durch eine Roadmap zur digitalen Transformation',
    },
    'practice-optimization': {
      title: 'Praxisoptimierung',
      fullTitle: 'Praxisoptimierung',
      kicker: 'Effiziente Arbeitsabläufe • Administrative Automatisierung • Kostensenkung',
      short: 'Verbessern, wie Gesundheitsorganisationen arbeiten und wachsen.',
      summary: 'Effiziente Arbeitsabläufe und administrative Automatisierung, damit klinisch ausgebildetes Personal seine Zeit sinnvoller Arbeit widmet.',
      description:
        'Praxen und Fachnetzwerke verlieren Kapazität an Verwaltungsarbeit, die Technologie übernehmen sollte. Wir optimieren die Effizienz der Arbeitsabläufe, automatisieren administrative Aufgaben und stärken Compliance und Genauigkeit, damit sich klinisch ausgebildetes Personal auf die Versorgung konzentrieren kann statt auf das System.',
      capabilities: ['Effizienz der Arbeitsabläufe optimieren', 'Administrative Aufgaben automatisieren', 'Personal-, Betriebs- und Softwarekosten senken', 'Genauigkeit der Abläufe erhöhen und Compliance stärken', 'Persönliche Roboterassistenten für die Produktivität des Personals', 'Schnellere, effizientere digitale Versorgung'],
      workflow: [
        { label: 'Die Arbeit beobachten', detail: 'Verstehen, wohin die Praxiskapazität tatsächlich fließt.' },
        { label: 'Reibung beseitigen', detail: 'Die Abläufe verschlanken, die klinische Teams ausbremsen.' },
        { label: 'Routine automatisieren', detail: 'Administrative Aufgaben, erledigt durch Automatisierung statt durch Menschen.' },
        { label: 'Skalieren, was funktioniert', detail: 'Arbeitsmuster, die auch beim Wachsen der Praxis tragen.' },
      ],
      proof: 'Wir unterstützen Ärztinnen, Ärzte und ihre Praxen dabei, durch schnellere und effizientere digitale Versorgung erhebliche Einsparungen zu erzielen.',
      imageAlt: 'Publikum aus Führungskräften des Gesundheitswesens bei einem Briefing zum Betrieb',
    },
  },
  rpaBenefits: [
    'Die digitale Transformation beschleunigen',
    'Ziele der operativen Effizienz erreichen',
    'Personal-, Betriebs- und Softwarekosten schnell senken',
    'Genauigkeit der Abläufe erhöhen und Compliance stärken',
    'Produktivität der Mitarbeitenden mit persönlichen Roboterassistenten steigern',
    'Gewinne steigern durch Automatisierung administrativer Aufgaben',
  ],
  industries: {
    'health-systems': {
      title: 'Gesundheitssysteme',
      short: 'Strategische und operative Transformation.',
      description: 'Klinischer Betrieb über mehrere Standorte, Plattformmodernisierung und Führungs-Governance für Gesundheitssysteme und die Managed-Care-Organisationen, die mit ihnen zusammenarbeiten.',
      needs: ['Plattformmodernisierung', 'Klinischer Betrieb über mehrere Standorte', 'Abstimmung der Führungs-Governance', 'Produktive Automatisierung in Epic und Oracle Health', 'Strategie für Care-Management-Plattformen'],
      evidence: 'VP Clinical Systems Operations bei Trillium Health Resources – Unternehmensstabilisierung unter regulatorischer Aufsicht für über 60.000 Mitglieder. Referenzen von Führungskräften der University Hospitals of Cleveland, der Cleveland Clinic und von UW Health.',
    },
    'healthcare-organizations': {
      title: 'Gesundheitsorganisationen',
      short: 'Leistungssteigerung durch Technologie.',
      description: 'Arztpraxen und Fachnetzwerke, deren Technologielandschaft, Arbeitsabläufe und Verwaltungslast nicht länger mit der klinischen Arbeit konkurrieren dürfen.',
      needs: ['Modernisierung der digitalen Infrastruktur', 'Patientenkommunikation und -erlebnis', 'Effiziente Arbeitsabläufe', 'Automatisierung administrativer Aufgaben'],
      evidence: 'Wir unterstützen Ärztinnen, Ärzte und ihre Praxen dabei, durch schnellere und effizientere digitale Versorgung erhebliche Einsparungen zu erzielen.',
    },
    'technology-partners': {
      title: 'Technologiepartner im Gesundheitswesen',
      short: 'Technologiestrategie und Umsetzungskompetenz.',
      description: 'Health-Tech-Unternehmen, Beratungen, Anbieter und Datenteams, die technische Architektur auf Gründerniveau und klinische Glaubwürdigkeit hinter ihrer Plattform brauchen.',
      needs: ['FHIR-natives Plattformdesign', 'Regulatorische SaMD-Positionierung', 'Produkt-Roadmap und technische Architektur', 'Unternehmensdatenprodukte und Modernisierung von Einwilligungen'],
      evidence: 'Gründende Chief Technology Architect von LORiMDT, einer FHIR-nativen Governance-Plattform für die Onkologie. Principal Digital Consultant für Eli Lilly bei landesweiten Unternehmensdatenprodukten.',
    },
    investors: {
      title: 'Investoren',
      short: 'Technologischer und operativer Einblick ins Gesundheitswesen.',
      description: 'Eine klinische und operative Perspektive auf Gesundheitstechnologie: ob eine Plattform für die regulatorische und prozessuale Realität gebaut ist, auf die sie treffen wird, und ob das Betriebsmodell dahinter skalieren kann.',
      needs: ['Perspektive auf die technische Architektur', 'Regulatorische und klinische Governance-Positionierung', 'Betriebsmodell und Umsetzungsreife', 'Automatisierungs-ROI und Investitionsmodelle'],
      evidence: 'Eine Perspektive, gegründet auf gründender technischer Architektur, Unternehmensstabilisierung unter regulatorischer Aufsicht und landesweiten Unternehmensprogrammen – geführt von einer ehemaligen Klinikerin und Board Director bei Signature Health.',
    },
  },
  sectors: {
    'enterprise-health-systems': { title: 'Gesundheitssysteme', description: 'Klinischer Betrieb über mehrere Standorte, Plattformmodernisierung und Führungs-Governance.', evidence: 'Referenzen von Führungskräften der University Hospitals of Cleveland, der Cleveland Clinic und von UW Health.' },
    'health-tech-ventures': { title: 'Health-Tech-Unternehmen', description: 'Technische Architektur auf Gründerniveau, SaMD-Positionierung und Fractional-CTO/COO-Führung.', evidence: 'Gründende Chief Technology Architect von LORiMDT.' },
    'managed-care': { title: 'Managed Care & Kostenträger', description: 'Unternehmensstabilisierung, Strategie für Care-Management-Plattformen und Automatisierung von Kostenträgerportalen.', evidence: 'VP Clinical Systems Operations bei Trillium Health Resources, für über 60.000 Mitglieder.' },
    'physician-practices': { title: 'Arztpraxen & Fachnetzwerke', description: 'Digitale Transformation, effiziente Arbeitsabläufe und Automatisierung von Verwaltungsarbeit.', evidence: 'Erhebliche Einsparungen für Praxen durch schnellere und effizientere digitale Versorgung.' },
    'life-sciences': { title: 'Pharma & Life Sciences', description: 'Unternehmensdatenprodukte, Modernisierung von Einwilligungen und datenschutzfreundliche Personalisierung.', evidence: 'Principal Digital Consultant für Eli Lilly.' },
  },
  engagements: {
    lorimdt: {
      role: 'Gründende Chief Technology Architect',
      sector: 'Onkologie • Gemeinnützig',
      headline: 'Eine FHIR-native klinische Governance-Plattform für die komplexe onkologische Versorgung.',
      challenge: 'Komplexe onkologische Versorgung erfordert koordinierte, gesteuerte klinische Entscheidungen über Teams hinweg – mit patientenberichteten Ergebnissen und regulatorischen Überlegungen von Anfang an.',
      approach: 'Gründende technische Führung: Definition der technischen Architektur, der Produkt-Roadmap, der ePRO-Integrationsstrategie und der regulatorischen Positionierung.',
      solution: 'Eine FHIR-native klinische Governance-Plattform, entworfen für die komplexe onkologische Versorgung.',
      outcome: 'Technische Architektur, Produkt-Roadmap, ePRO-Integrationsstrategie und regulatorische Positionierung für die Plattform etabliert.',
      facts: [
        { value: 'FHIR', label: 'Native Architektur' },
        { value: 'ePRO', label: 'Integrationsstrategie' },
      ],
      note: 'Hope for Liver Cancer Foundation (501c3).',
    },
    trillium: {
      role: 'VP Clinical Systems Operations',
      sector: 'Managed Care • Gesundheitssystem',
      headline: 'Unternehmensstabilisierung und CMP-Ablösestrategie unter regulatorischer Aufsicht.',
      challenge: 'Ein Unternehmen unter regulatorischer Aufsicht brauchte Stabilisierung und eine Ablösestrategie für seine Care-Management-Plattform – bei einem großen Anbieterportfolio und vielen Stakeholdern.',
      approach: 'Operative Führung über mehr als 40 bereichsübergreifende Stakeholder und ein Anbieterportfolio von über 5 Mio. $, mit Abstimmung des klinischen Betriebs auf technische und regulatorische Anforderungen.',
      solution: 'Ein Stabilisierungsprogramm und eine Ablösestrategie für die Care-Management-Plattform (CMP).',
      outcome: 'Stabilisierungs- und Ablösestrategie unter regulatorischer Aufsicht geliefert, für über 60.000 Mitglieder.',
      facts: [
        { value: '40+', label: 'Bereichsübergreifende Stakeholder' },
        { value: '5 Mio. $+', label: 'Anbieterportfolio' },
        { value: '60.000+', label: 'Mitglieder' },
      ],
    },
    'eli-lilly': {
      role: 'Principal Digital Consultant',
      sector: 'Pharma • Unternehmensdaten',
      headline: 'Modernisierung von Unternehmensdatenprodukten und Einwilligungen im landesweiten Maßstab.',
      challenge: 'Personalisierung im landesweiten Maßstab liefern, dabei Einwilligungen modernisieren und den Datenschutz über die gesamte Datenlandschaft des Unternehmens an erste Stelle setzen.',
      approach: 'Leitende Digitalberatung zum Design von Unternehmensdatenprodukten und zur Modernisierung von Einwilligungen.',
      solution: 'Landesweite, datenschutzfreundliche Personalisierung auf einer AWS-basierten Architektur.',
      outcome: 'Modernisierung von Unternehmensdatenprodukten und Einwilligungen auf AWS-basierter Architektur geliefert.',
      facts: [
        { value: 'AWS', label: 'Architektur' },
        { value: 'Landesweit', label: 'Maßstab' },
      ],
    },
  },
  testimonials: {
    lake: { title: 'Clinical Applications Manager, University Hospitals of Cleveland', headline: 'Eine Bereicherung für jede Organisation', quote: 'Sie zeichnet sich durch Geduld und Detailgenauigkeit aus, mit wertvoller Führungsstärke und Anwendungswissen.' },
    marx: { title: 'Ehemaliger CIO, Cleveland Clinic & University Hospitals of Cleveland; CEO, Marx Advisory', headline: 'Herausragende Führungskraft im klinischen Betrieb', quote: 'Sie beherrschte die technischen Fähigkeiten und war eine starke Kommunikatorin; Kolleginnen, Kollegen und Kunden schätzten sie sehr.' },
    neu: { title: 'Senior Information Services Project Manager, UW Health', headline: 'Die richtigen Leute', quote: 'Ihr Umgang mit KI war durchdacht und professionell, und sie hielt Projekte durch wirksame Kommunikation auf Kurs.' },
    maduskar: { title: 'Sr. Director, Healthcare Programs & Projects', quote: 'Sie bringt ein solides Verständnis des Gesundheitsgeschäfts (Kostenträger und Leistungserbringer) mit und war maßgeblich daran beteiligt, Kunden bei der Identifikation von Automatisierungsanwendungsfällen mit spürbarer Wirkung zu unterstützen.' },
    whiteside: { title: 'Sr. Director, Healthcare Programs & Projects', quote: 'Die Beraterinnen und Berater zeigen Fachwissen, Professionalität und Verlässlichkeit und übertreffen in zahlreichen Projekten beständig die Erwartungen der Kunden.' },
    arguello: { title: 'Premier Account Director, Healthcare IT Leaders', quote: 'Ich hatte das Vergnügen, mit der CEO von LHT an RPA-Projekten im Gesundheitswesen zu arbeiten, und kann mit Überzeugung sagen, dass sie über außergewöhnliches Wissen auf diesem Gebiet verfügt. Ihre technischen Fähigkeiten und ihre Fähigkeit, komplexe digitale Prozesse und Arbeitsabläufe im Gesundheitswesen zu analysieren, waren für unser Team unverzichtbar.' },
    kangas: { title: 'Gründer & CTO, LuxSci', quote: 'Ich würde LHT für jedes digitale Projekt wärmstens empfehlen, bei dem Detailgenauigkeit, Kommunikation und Geschäftsentwicklung entscheidend für den Erfolg des Unternehmens sind.' },
    patel: { title: 'Sr. Data Scientist', quote: 'Sie bewies außergewöhnliche Führungsstärke in der Umsetzung, übertraf beständig die Erwartungen und lieferte herausragende Ergebnisse. Ihre klare und prägnante Kommunikation ermöglicht eine wirksame Zusammenarbeit und stellt sicher, dass alle Beteiligten gut informiert sind.' },
  },
  insights: {
    'when-technical-leadership-doesnt-understand-clinical-reality': {
      title: 'Wenn die technische Führung die klinische Realität nicht versteht',
      excerpt: 'Fragmentierte, schlecht abgestimmte oder mangelhaft gesteuerte klinische Systeme sind selten allein ein Technologieproblem. Sie sind ein Führungsproblem an der Schnittstelle von klinischen Abläufen, Regulierung und Größe.',
      body: `Gesundheitsorganisationen geraten ins Straucheln, wenn klinische Systeme fragmentiert, schlecht abgestimmt oder mangelhaft gesteuert sind. Ebenso oft straucheln sie, weil die Menschen, die die Technologie führen, nie in einem klinischen Ablauf gearbeitet haben.

## Drei Kräfte, die sich überschneiden

Jede Entscheidung über eine klinische Plattform fällt dort, wo drei Kräfte aufeinandertreffen:

- Klinische Abläufe: wie Versorgung tatsächlich erbracht, dokumentiert und koordiniert wird.
- Regulatorische Anforderungen: was Governance, Datenschutz und Zulassungspfade verlangen.
- Unternehmensgröße: was über Standorte, Anbieter und Systeme hinweg tragen muss.

Eine Architektur, die eine dieser Kräfte auf Kosten der anderen optimiert, erzeugt die Fragmentierung, die die Führung anschließend jahrelang zu stabilisieren versucht.

## Wie operative Führung aussieht

Fractional und Standing CTO-, COO- und VP-Clinical-Systems-Rollen gibt es, um klinische Teams mit technischer Architektur und der Strategie auf Vorstandsebene zu verbinden. Das heißt: unternehmensweite Produktstrategie, klinischer Betrieb über mehrere Standorte und Abstimmung der Führungs-Governance aus einer Hand – statt aufgeteilt zwischen einem technischen Team, das die Klinik nicht sieht, und einem klinischen Team, das die Plattform nicht sieht.

## Wo man anfängt

Beginnen Sie bei den Abläufen. Bilden Sie ab, wie Versorgung erbracht wird, bevor Sie das System entwerfen, positionieren Sie regulatorische Pfade früh und bauen Sie eine Governance, die den Unternehmensmaßstab übersteht. Klinische Tiefe, technische Architektur und operative Führung sind eine Disziplin, nicht drei.`,
    },
    'fhir-native-by-design': {
      title: 'FHIR-nativ per Design: klinische Governance-Plattformen architektieren',
      excerpt: 'Interoperabilität ist eine Designentscheidung, keine nachträgliche Integration. Warum FHIR-native Architektur, HL7-Interoperabilität und SaMD-Positionierung in den ersten Sprint gehören.',
      body: `Plattformmodernisierung im Gesundheitswesen scheitert am häufigsten an den Nahtstellen: dort, wo klinische Daten zwischen Systemen, Teams und Aufsichtsbehörden bewegt werden müssen.

## FHIR-nativ, nicht FHIR-nah

Eine FHIR-native Plattform behandelt FHIR-Ressourcen als ihr zentrales Datenmodell statt als Übersetzungsschicht, die am Rand angeschraubt wird. Kombiniert mit HL7-Interoperabilität für die Systeme, die diese Sprache bereits sprechen, kann die Plattform vom ersten Tag an Teil des Unternehmens sein.

## SaMD-Pfade beginnen früh

Wenn ein Teil einer klinischen Plattform als Software as a Medical Device reguliert werden könnte, prägt seine regulatorische Positionierung die Architektur. Das erst nach dem Bau des Produkts zu entscheiden, heißt, es neu zu bauen.

## Governance im Unternehmensmaßstab

Klinische Governance-Plattformen brauchen eine eigene Governance: wer entscheidet, wie Änderungen kontrolliert werden und wie sich die Plattform über Standorte und Anbieter hinweg verhält. Unternehmens-Governance ist Teil der Architektur, kein nachträglich verfasstes Richtliniendokument.

Unsere Praxis für klinische Plattformarchitektur konzentriert sich genau auf diese drei Elemente: FHIR-natives Design, HL7-Interoperabilität und regulatorische SaMD-Positionierung.`,
    },
    'what-is-rpa-in-healthcare': {
      title: 'Was ist RPA, und warum ist sie für den Betrieb im Gesundheitswesen wichtig?',
      excerpt: 'Robotic Process Automation setzt digitale Mitarbeiter ein, um Aufgaben innerhalb von Arbeitsabläufen zu automatisieren, damit sich klinisch ausgebildetes Personal auf sinnvollere Arbeit konzentrieren kann.',
      body: `Robotic Process Automation (RPA) nutzt digitale Mitarbeiter, um Aufgaben innerhalb von Arbeitsabläufen zu automatisieren. Das steigert die operative Effizienz und erlaubt Ihren Mitarbeitenden und dem klinisch ausgebildeten Personal, sich auf sinnvollere Arbeit zu konzentrieren.

## Warum RPA im Gesundheitswesen

Administrative Aufgaben im Gesundheitswesen sind repetitiv, volumenstark und über Systeme wie elektronische Patientenakten, Kostenträgerportale und Fachnetzwerke verteilt. Genau unter diesen Bedingungen leisten digitale Mitarbeiter ihre beste Arbeit.

## Wie Praxen und Gesundheitssysteme profitieren

- Die digitale Transformation beschleunigen
- Ziele der operativen Effizienz erreichen
- Personal-, Betriebs- und Softwarekosten schnell senken
- Genauigkeit der Abläufe erhöhen und Compliance stärken
- Produktivität der Mitarbeitenden mit persönlichen Roboterassistenten steigern
- Gewinne steigern durch Automatisierung administrativer Aufgaben

## Vom Pilot zur Produktion

Automatisierung schafft Wert, wenn sie in klinische Abläufe eingebettet und als Unternehmensfähigkeit gesteuert wird. Lucas Health Tech hat über 200 produktive Automatisierungen über Epic, Oracle Health, Kostenträgerportale und Fachnetzwerke hinweg geliefert, mit über 2,1 Mio. jährlichen Transaktionen, ausgerichtet auf einen quantifizierten ROI.`,
    },
    'automation-centers-of-excellence': {
      title: 'Ein Automation Center of Excellence aufbauen, das sich selbst trägt',
      excerpt: 'Einzelne Automatisierungen sparen Stunden. Ein Center of Excellence macht daraus eine Unternehmensinvestition mit quantifiziertem Ertrag.',
      body: `Eine Automatisierung ist ein Projekt. Zweihundert sind ein Betriebsmodell. Der Unterschied ist ein Center of Excellence.

## Was ein CoE tatsächlich tut

Ein Automation Center of Excellence legt Governance, Investitionsmodell und operativen Rhythmus für Automatisierung im gesamten Unternehmen fest. Es entscheidet, welche Anwendungsfälle zählen, wie sie gebaut werden und wie ihr Ertrag gemessen wird.

## Das Investitionsmodell

Unternehmensweite Investitionsmodelle für Automatisierung knüpfen jede Automatisierung an Transaktionen und an einen quantifizierten ROI. Diese Disziplin erlaubt es der Führung, Automatisierung als Fähigkeit zu finanzieren statt als Reihe von Einzelanfragen.

## RPA, Orchestrierung und Prognose zusammen

Moderne Automatisierung kombiniert RPA für Aufgaben auf Systemebene, API-Orchestrierung zur Verbindung von Plattformen und prädiktive Modelle dort, wo sie echten Entscheidungswert liefern. Sie in klinische Abläufe einzubetten – statt daneben zu stellen – ist die Quelle der Wirkung.

Unsere Praxis für KI- und Automatisierungsstrategie entwirft Automation Centers of Excellence und unternehmensweite Investitionsmodelle für Automatisierung und liefert produktive Automatisierungen über Epic, Oracle Health, Kostenträgerportale und Fachnetzwerke hinweg.`,
    },
    'lorimdt-fhir-native-oncology-governance': {
      title: 'Projekt: eine FHIR-native Governance-Plattform für die komplexe onkologische Versorgung',
      excerpt: 'Als gründende Chief Technology Architect von LORiMDT definierte Lucas Health Tech die technische Architektur, die Produkt-Roadmap, die ePRO-Integrationsstrategie und die regulatorische Positionierung.',
      body: `LORiMDT ist eine FHIR-native klinische Governance-Plattform für die komplexe onkologische Versorgung, verbunden mit der Hope for Liver Cancer Foundation (501c3).

## Die Rolle

Gründende Chief Technology Architect.

## Die Arbeit

- Technische Architektur einer FHIR-nativen klinischen Governance-Plattform
- Produkt-Roadmap
- ePRO-Integrationsstrategie (elektronisch erfasste patientenberichtete Ergebnisse)
- Regulatorische Positionierung

## Warum das wichtig ist

Komplexe onkologische Versorgung hängt von koordinierten, gesteuerten Entscheidungen über Teams hinweg ab. Die Plattform von Anfang an FHIR-nativ zu entwerfen – mit ePRO und regulatorischer Positionierung in der Roadmap – vermeidet die Fragmentierung, die so oft auf eine überhastete erste Version folgt.`,
    },
    'digital-transformation-for-physician-practices': {
      title: 'Digitale Transformation für Arztpraxen: Technologie, die für Sie arbeitet',
      excerpt: 'Technologie sollte Ihren Arbeitsalltag leichter machen, nicht schwerer. Ein praktischer Ansatz zur Modernisierung von Infrastruktur, Patientenkommunikation und Arbeitsabläufen.',
      body: `Wir sind darauf spezialisiert, Arztpraxen dabei zu unterstützen, die Kraft der Technologie zu nutzen. Ob Infrastruktur erneuern, bestehende digitale Werkzeuge verbessern oder Arbeitsabläufe verschlanken: Der richtige Ansatz beginnt bei dem, was die Praxis braucht, nicht bei dem, was ein Anbieter verkaufen will.

## Mit einer Bestandsaufnahme beginnen

Eine Analyse des Technologiebestands bewertet die langfristige Wirtschaftlichkeit einer neuen Infrastruktur gegenüber der Optimierung des Bestehenden. Die meisten Praxen besitzen bereits mehr Möglichkeiten, als sie nutzen.

## Drei Ergebnisse, auf die es ankommt

- Digitale Infrastruktur modernisieren
- Patientenkommunikation und -erlebnis verbessern
- Effizienz der Arbeitsabläufe optimieren

## Strategie vor Werkzeugen

Mit dem richtigen Ansatz kann die digitale Transformation den Return on Investment und den Erfolg einer Praxis steigern. Dieser Ansatz ist ein Plan dafür, wie Technologie Ihre Ziele erreicht – bewusst gewählt und reibungsloser Technologie im Arbeitsalltag verpflichtet.`,
    },
    'enterprise-stabilization-under-regulatory-oversight': {
      title: 'Projekt: Unternehmensstabilisierung und CMP-Ablösestrategie',
      excerpt: 'Als VP Clinical Systems Operations bei Trillium Health Resources: über 40 bereichsübergreifende Stakeholder, ein Anbieterportfolio von über 5 Mio. $ und über 60.000 Mitglieder unter regulatorischer Aufsicht.',
      body: `Trillium Health Resources beauftragte Lucas Health Tech in der Rolle VP Clinical Systems Operations mit der Unternehmensstabilisierung und einer Ablösestrategie für die Care-Management-Plattform (CMP) unter regulatorischer Aufsicht.

## Umfang des Projekts

- Über 40 bereichsübergreifende Stakeholder
- Anbieterportfolio von über 5 Mio. $
- Über 60.000 Mitglieder

## Der Ansatz

Die operative Führung stimmte den klinischen Betrieb über alle Stakeholder und das gesamte Anbieterportfolio hinweg auf technische und regulatorische Anforderungen ab und lieferte ein Stabilisierungsprogramm sowie eine Ablösestrategie für die Care-Management-Plattform.`,
    },
  },
  ecosystemNodes: {
    patients: { label: 'Patienten', short: 'Wo Versorgung und Daten beginnen', description: 'Patientenkommunikation, Patientenerlebnis und elektronisch erfasste patientenberichtete Ergebnisse (ePRO) speisen die klinische Plattform.', capabilities: ['Patientenkommunikation & -erlebnis', 'ePRO-Integrationsstrategie', 'Datenschutzfreundliche Personalisierung'] },
    providers: { label: 'Leistungserbringer', short: 'Klinische Teams und Abläufe', description: 'Gesundheitssysteme, Arztpraxen und Fachnetzwerke, deren klinische Abläufe jede Plattformentscheidung prägen.', capabilities: ['Gestaltung klinischer Arbeitsabläufe', 'Klinischer Betrieb über mehrere Standorte', 'Klinisch ausgebildetes Personal konzentriert sich auf sinnvolle Arbeit'] },
    technology: { label: 'Technologie', short: 'FHIR-native Plattformen', description: 'FHIR-native Plattformen, HL7-Interoperabilität und SaMD-Pfade, die Epic, Oracle Health, Kostenträgerportale und Fachnetzwerke verbinden.', capabilities: ['FHIR-native Architektur', 'HL7-Interoperabilität', 'Regulatorische SaMD-Positionierung', 'Epic & Oracle Health'] },
    data: { label: 'Daten', short: 'Unternehmensdatenprodukte', description: 'Unternehmensdatenprodukte, Modernisierung von Einwilligungen und prädiktive Modelle auf Basis interoperabler klinischer Daten.', capabilities: ['Unternehmensdatenprodukte', 'Modernisierung von Einwilligungen', 'Prädiktive Modelle', 'AWS-basierte Architektur'] },
    operations: { label: 'Betrieb', short: 'Automatisierung und Governance', description: 'Automation Centers of Excellence, RPA und API-Orchestrierung, eingebettet in klinische Abläufe unter Führungs-Governance.', capabilities: ['RPA & API-Orchestrierung', 'Automation Centers of Excellence', 'Abstimmung der Führungs-Governance', 'Governance des Anbieterportfolios'] },
    outcomes: { label: 'Ergebnisse', short: 'Quantifizierter ROI', description: 'Produktive Automatisierungen und Transaktionen, ausgerichtet auf einen quantifizierten ROI; Plattformen, die im Unternehmensmaßstab tragen.', capabilities: ['Über 200 produktive Automatisierungen', 'Über 2,1 Mio. jährliche Transaktionen', 'Quantifizierter ROI'] },
  },
  pipeline: {
    data: { label: 'Daten', title: 'Interoperable klinische Daten', description: 'FHIR-native Plattformen und HL7-Interoperabilität machen klinische Daten über Epic, Oracle Health, Kostenträgerportale und Fachnetzwerke hinweg nutzbar.' },
    processing: { label: 'Verarbeitung', title: 'Orchestrierung und Automatisierung', description: 'API-Orchestrierung und digitale RPA-Mitarbeiter bewegen und verarbeiten Transaktionen innerhalb klinischer Abläufe.' },
    intelligence: { label: 'Intelligenz', title: 'Prädiktive Modelle', description: 'Prädiktive Modelle, eingebettet dort, wo sie Entscheidungswert liefern, gesteuert über ein Automation Center of Excellence.' },
    insight: { label: 'Erkenntnis', title: 'Quantifizierter ROI', description: 'Unternehmensweite Investitionsmodelle für Automatisierung richten jede Transaktion auf einen quantifizierten Ertrag aus.' },
    action: { label: 'Umsetzung', title: 'Produktion im großen Maßstab', description: 'Über 200 produktive Automatisierungen geliefert, damit sich klinisch ausgebildetes Personal auf sinnvollere Arbeit konzentrieren kann.' },
  },
}
