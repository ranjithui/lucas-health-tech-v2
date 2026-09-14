import type { ContentPack } from './types'

/**
 * Français — contenu éditorial. Chaque entrée correspond à un id/slug de
 * src/data ; chiffres, technologies, routes et images sont partagés avec l’anglais.
 */
export const frContent: ContentPack = {
  company: {
    tagline: 'Architecture des systèmes cliniques et opérations de direction pour la santé',
    motto: 'Profondeur clinique. Architecture technique. Opérations de direction.',
    positioning: 'CTO/COO à temps partagé et permanent • Stratégie de plateforme • IA et automatisation • Gouvernance clinique',
    hours: 'Lun–Ven, 9h00–17h00 (heure de l’Est)',
  },
  founder: {
    role: 'PDG et fondatrice',
    credentials: ['Ancienne clinicienne', 'Administratrice, Signature Health'],
    summary: 'CTO/COO à temps partagé et permanente pour des entreprises de technologies de santé et des systèmes de santé.',
    quote:
      'Les organisations de santé peinent lorsque les systèmes cliniques sont fragmentés, mal alignés ou mal gouvernés — et lorsque la direction technique ne comprend pas la réalité clinique. Je conçois des plateformes et pilote des opérations là où se croisent flux cliniques, exigences réglementaires et échelle de l’entreprise.',
  },
  positioning: {
    headline: 'La complexité de la santé exige plus que de la technologie.',
    accentWord: 'technologie.',
    supporting:
      'Lucas Health Tech relie stratégie clinique, technologie, opérations et innovation pour aider les organisations de santé à mener leur transformation avec plus de clarté et d’impact.',
    statement: 'Conçu pour les réalités de la santé moderne.',
    statementBody:
      'Systèmes cliniques, opérations, technologie et innovation sont généralement gouvernés séparément — et c’est là que la transformation s’enlise. Nous intervenons sur les quatre, sous la direction d’une ancienne clinicienne qui a conçu les plateformes et piloté les opérations en question.',
    trustHeading: 'Une expérience qui comprend la santé de l’intérieur.',
    ctaHeading: 'La transformation de la santé commence par la clarté.',
    ctaSupporting: 'Explorons ensemble où la technologie, les opérations et la stratégie peuvent créer un impact réel pour votre organisation.',
  },
  metrics: [
    { label: 'Automatisations livrées en production', detail: 'Sur Epic, Oracle Health, les portails d’assureurs et les réseaux de spécialités.' },
    { label: 'Transactions annuelles', detail: 'Alignées sur un retour sur investissement quantifié.' },
    { label: 'Années d’expertise en santé', detail: 'Des consultants titulaires de diplômes cliniques.' },
    { label: 'Bénéficiaires servis', detail: 'Mission de stabilisation d’entreprise chez Trillium Health Resources.' },
  ],
  homeMetrics: ['Années d’expérience en santé', 'Automatisations en production', 'Transactions annuelles prises en charge'],
  differentiators: [
    { title: 'Profondeur clinique', body: 'Une direction assurée par une ancienne clinicienne. Des consultants diplômés en clinique qui comprennent comment les soins sont réellement délivrés.' },
    { title: 'Architecture technique', body: 'Conception native FHIR, interopérabilité HL7 et positionnement réglementaire SaMD, pensés pour les flux cliniques et l’échelle de l’entreprise.' },
    { title: 'Opérations de direction', body: 'Des rôles opérationnels de CTO, COO et niveau VP qui relient les équipes cliniques, l’architecture technique et la stratégie du conseil d’administration.' },
    { title: 'Automatisation à grande échelle', body: 'Plus de 200 automatisations en production et plus de 2,1 millions de transactions annuelles alignées sur un ROI quantifié sur Epic, Oracle Health, les portails d’assureurs et les réseaux de spécialités.' },
    { title: 'Attention personnelle', body: 'Une attention personnelle en informatique, marketing et affaires plutôt qu’un support par tickets. Plus de 20 ans d’expertise en santé.' },
  ],
  domains: {
    clinical: { label: 'Clinique', detail: 'Comment les soins sont réellement délivrés, documentés et gouvernés.' },
    technology: { label: 'Technologie', detail: 'Plateformes natives FHIR, interopérabilité et architecture d’entreprise.' },
    operations: { label: 'Opérations', detail: 'Leadership opérationnel de direction sur les sites, les fournisseurs et les équipes.' },
    innovation: { label: 'Innovation', detail: 'IA et automatisation intégrées là où le travail se fait.' },
  },
  audiences: {
    provider: { label: 'Prestataire de santé', description: 'Systèmes de santé, cabinets médicaux et réseaux de spécialités.' },
    venture: { label: 'Entreprise de technologies de santé', description: 'Entreprises de santé numérique qui construisent des plateformes cliniques et des SaMD.' },
    partner: { label: 'Partenaire technologique', description: 'Cabinets de conseil, éditeurs et équipes de données d’entreprise.' },
  },
  solutions: {
    'clinical-systems': {
      title: 'Systèmes cliniques',
      fullTitle: 'Systèmes cliniques et architecture de plateforme',
      kicker: 'Plateformes natives FHIR • Parcours SaMD • Gouvernance d’entreprise',
      short: 'Concevoir et optimiser les environnements technologiques de santé.',
      summary: 'Architecture de plateformes de gouvernance clinique et modernisation de plateformes répondant aux flux cliniques, aux exigences réglementaires et à l’échelle de l’entreprise.',
      description:
        'Nous concevons des plateformes de gouvernance clinique et pilotons la modernisation des plateformes là où se croisent flux cliniques, exigences réglementaires et échelle de l’entreprise. L’accent est mis sur la conception native FHIR, l’interopérabilité HL7 et le positionnement réglementaire SaMD.',
      capabilities: ['Conception de plateformes natives FHIR', 'Interopérabilité HL7', 'Positionnement réglementaire SaMD', 'Plateformes de gouvernance clinique', 'Modernisation de plateformes', 'Gouvernance d’entreprise'],
      workflow: [
        { label: 'Flux cliniques', detail: 'Cartographier la délivrance des soins avant de concevoir le système.' },
        { label: 'Exigences réglementaires', detail: 'Positionner tôt les parcours SaMD et la gouvernance.' },
        { label: 'Architecture native FHIR', detail: 'Interopérable par conception avec HL7 et FHIR.' },
        { label: 'Échelle de l’entreprise', detail: 'Une gouvernance qui tient entre les sites et les fournisseurs.' },
      ],
      proof: 'Architecte technologique en chef fondatrice d’une plateforme de gouvernance oncologique native FHIR (LORiMDT).',
      imageAlt: 'Cliniciens en réunion dans l’atrium vitré d’un hôpital moderne',
    },
    'executive-operations': {
      title: 'Opérations de direction',
      fullTitle: 'Opérations de direction et rôles opérationnels',
      kicker: 'CTO à temps partagé et permanent • COO • VP Systèmes cliniques',
      short: 'Améliorer la performance opérationnelle et l’exécution.',
      summary: 'Des rôles de CTO, COO et niveau VP pour les entreprises de technologies de santé et les systèmes de santé.',
      description:
        'Rôles de CTO, COO et VP Systèmes cliniques, à temps partagé ou permanents, pour les entreprises de technologies de santé et les systèmes de santé. Stratégie produit d’entreprise, opérations cliniques multisites, alignement de la gouvernance de direction et un leadership qui relie les équipes cliniques à l’architecture technique et à la stratégie du conseil.',
      capabilities: ['CTO à temps partagé et permanent', 'COO à temps partagé et permanent', 'VP Systèmes cliniques', 'Stratégie produit d’entreprise', 'Opérations cliniques multisites', 'Alignement de la gouvernance de direction'],
      workflow: [
        { label: 'Stratégie du conseil', detail: 'Aligner la gouvernance de direction et l’orientation produit.' },
        { label: 'Architecture technique', detail: 'Traduire la stratégie en décisions de plateforme.' },
        { label: 'Équipes cliniques', detail: 'Relier ceux qui délivrent les soins aux systèmes qu’ils utilisent.' },
        { label: 'Opérations multisites', detail: 'Piloter les opérations cliniques à l’échelle de l’entreprise.' },
      ],
      proof: 'VP Opérations des systèmes cliniques chez Trillium Health Resources : plus de 40 parties prenantes, un portefeuille fournisseurs de plus de 5 M$, plus de 60 000 bénéficiaires.',
      imageAlt: 'Dirigeante s’exprimant depuis un pupitre lors d’un événement de leadership en santé',
    },
    'ai-automation': {
      title: 'IA et automatisation',
      fullTitle: 'Stratégie d’IA et d’automatisation',
      kicker: 'RPA • Orchestration d’API • Modèles prédictifs • Centres d’excellence',
      short: 'Une automatisation intelligente pour les flux de travail complexes de la santé.',
      summary: 'Une automatisation pilotée par l’IA, intégrée aux flux cliniques, avec des centres d’excellence en automatisation et des modèles d’investissement d’entreprise.',
      description:
        'Une automatisation pilotée par l’IA, intégrée aux flux cliniques. Nous concevons des centres d’excellence en automatisation, construisons des modèles d’investissement en automatisation d’entreprise et livrons des automatisations en production sur Epic, Oracle Health, les portails d’assureurs et les réseaux de spécialités.',
      capabilities: ['Automatisation robotisée des processus (RPA)', 'Orchestration d’API', 'Modèles prédictifs', 'Centres d’excellence en automatisation', 'Modèles d’investissement en automatisation d’entreprise', 'Automatisations en production sur Epic et Oracle Health'],
      workflow: [
        { label: 'Identifier les cas d’usage', detail: 'Trouver les candidats à l’automatisation à fort impact.' },
        { label: 'Concevoir le CoE', detail: 'Gouvernance, modèle d’investissement et cadence opérationnelle.' },
        { label: 'Construire et orchestrer', detail: 'RPA, orchestration d’API et modèles prédictifs.' },
        { label: 'Quantifier le ROI', detail: 'Des transactions alignées sur un retour quantifié.' },
      ],
      proof: 'Plus de 200 automatisations livrées en production. Plus de 2,1 millions de transactions annuelles alignées sur un ROI quantifié.',
      imageAlt: 'Infirmière consultant un tableau de bord clinique assisté par l’IA sur une tablette',
    },
    'digital-innovation': {
      title: 'Innovation numérique',
      fullTitle: 'Innovation et transformation numériques',
      kicker: 'Modernisation de l’infrastructure • Expérience patient • Stratégie technologique',
      short: 'Construire des stratégies technologiques pour les organisations de santé modernes.',
      summary: 'Aligner la technologie sur les besoins métier de votre organisation pour une transformation durable.',
      description:
        'Nous aidons les organisations de santé à exploiter la puissance de la technologie. Nos experts identifient et mettent en œuvre des solutions adaptées à vos besoins, qu’il s’agisse de moderniser l’infrastructure, d’améliorer les outils numériques existants ou de rationaliser les flux de travail. La technologie doit travailler pour vous et rendre votre quotidien plus simple, pas plus compliqué.',
      capabilities: ['Moderniser l’infrastructure numérique', 'Améliorer la communication et l’expérience patient', 'Analyse de l’inventaire technologique', 'Évaluation de la rentabilité à long terme', 'Stratégie et feuille de route technologiques', 'Engagement pour une technologie sans friction'],
      workflow: [
        { label: 'Inventaire technologique', detail: 'Évaluer ce que vous possédez et ce que cela coûte à long terme.' },
        { label: 'Stratégie', detail: 'Planifier comment la technologie sert vos objectifs.' },
        { label: 'Mettre en œuvre', detail: 'Moderniser l’infrastructure ou améliorer les outils existants.' },
        { label: 'Pérenniser', detail: 'Garder le parc cohérent à mesure que l’organisation grandit.' },
      ],
      proof: 'Consultante numérique principale pour Eli Lilly : modernisation des produits de données d’entreprise et du consentement sur AWS.',
      imageAlt: 'Intervenant présentant une feuille de route de transformation numérique à un public',
    },
    'practice-optimization': {
      title: 'Optimisation des cabinets',
      fullTitle: 'Optimisation des cabinets',
      kicker: 'Efficacité des flux de travail • Automatisation administrative • Réduction des coûts',
      short: 'Améliorer la façon dont les organisations de santé fonctionnent et se développent.',
      summary: 'Efficacité des flux de travail et automatisation administrative pour que le personnel formé en clinique consacre son temps à un travail utile.',
      description:
        'Les cabinets et les réseaux de spécialités perdent de la capacité dans un travail administratif que la technologie devrait absorber. Nous optimisons l’efficacité des flux de travail, automatisons les tâches administratives et renforçons la conformité et la précision, afin que le personnel formé en clinique puisse se concentrer sur les soins plutôt que sur le système.',
      capabilities: ['Optimiser l’efficacité des flux de travail', 'Automatiser les tâches administratives', 'Réduire les coûts de main-d’œuvre, d’exploitation et de logiciels', 'Améliorer la précision des flux et renforcer la conformité', 'Assistants robotisés personnels pour la productivité du personnel', 'Des soins numériques plus rapides et plus efficaces'],
      workflow: [
        { label: 'Observer le travail', detail: 'Comprendre où passe réellement la capacité du cabinet.' },
        { label: 'Supprimer les frictions', detail: 'Rationaliser les flux qui ralentissent les équipes cliniques.' },
        { label: 'Automatiser la routine', detail: 'Des tâches administratives prises en charge par l’automatisation, pas par des personnes.' },
        { label: 'Étendre ce qui fonctionne', detail: 'Des modes de fonctionnement qui tiennent à mesure que le cabinet grandit.' },
      ],
      proof: 'Nous aidons les médecins et leurs cabinets à réaliser des économies substantielles grâce à des soins numériques plus rapides et plus efficaces.',
      imageAlt: 'Public de dirigeants de la santé lors d’un briefing sur les opérations',
    },
  },
  rpaBenefits: [
    'Accélérer la transformation numérique',
    'Atteindre les objectifs d’efficacité opérationnelle',
    'Réduire rapidement les coûts de main-d’œuvre, d’exploitation et de logiciels',
    'Améliorer la précision des flux de travail et renforcer la conformité',
    'Accroître la productivité du personnel grâce à des assistants robotisés personnels',
    'Augmenter les bénéfices en automatisant les tâches administratives',
  ],
  industries: {
    'health-systems': {
      title: 'Systèmes de santé',
      short: 'Transformation stratégique et opérationnelle.',
      description: 'Opérations cliniques multisites, modernisation des plateformes et gouvernance de direction pour les systèmes de santé et les organisations de soins gérés qui travaillent à leurs côtés.',
      needs: ['Modernisation des plateformes', 'Opérations cliniques multisites', 'Alignement de la gouvernance de direction', 'Automatisation en production sur Epic et Oracle Health', 'Stratégie de plateforme de gestion des soins'],
      evidence: 'VP Opérations des systèmes cliniques chez Trillium Health Resources — stabilisation d’entreprise sous supervision réglementaire, au service de plus de 60 000 bénéficiaires. Références de dirigeants de University Hospitals of Cleveland, de la Cleveland Clinic et de UW Health.',
    },
    'healthcare-organizations': {
      title: 'Organisations de santé',
      short: 'Amélioration de la performance par la technologie.',
      description: 'Cabinets médicaux et réseaux de spécialités dont le parc technologique, les flux de travail et la charge administrative doivent cesser de concurrencer le travail clinique.',
      needs: ['Modernisation de l’infrastructure numérique', 'Communication et expérience patient', 'Efficacité des flux de travail', 'Automatisation des tâches administratives'],
      evidence: 'Nous aidons les médecins et leurs cabinets à réaliser des économies substantielles grâce à des soins numériques plus rapides et plus efficaces.',
    },
    'technology-partners': {
      title: 'Partenaires technologiques de la santé',
      short: 'Stratégie technologique et expertise de mise en œuvre.',
      description: 'Entreprises de technologies de santé, cabinets de conseil, éditeurs et équipes de données d’entreprise qui ont besoin d’une architecture technique de niveau fondateur et d’une crédibilité clinique derrière leur plateforme.',
      needs: ['Conception de plateformes natives FHIR', 'Positionnement réglementaire SaMD', 'Feuille de route produit et architecture technique', 'Produits de données d’entreprise et modernisation du consentement'],
      evidence: 'Architecte technologique en chef fondatrice de LORiMDT, une plateforme de gouvernance oncologique native FHIR. Consultante numérique principale pour Eli Lilly sur des produits de données d’entreprise à l’échelle nationale.',
    },
    investors: {
      title: 'Investisseurs',
      short: 'Vision technologique et opérationnelle de la santé.',
      description: 'Un regard clinique et opérationnel sur les technologies de santé : une plateforme est-elle conçue pour la réalité réglementaire et les flux de travail qu’elle rencontrera, et le modèle opérationnel qui la porte peut-il passer à l’échelle ?',
      needs: ['Regard sur l’architecture technique', 'Positionnement réglementaire et gouvernance clinique', 'Modèle opérationnel et capacité d’exécution', 'ROI de l’automatisation et modèles d’investissement'],
      evidence: 'Un regard fondé sur une architecture technique fondatrice, une stabilisation d’entreprise sous supervision réglementaire et des programmes d’entreprise à l’échelle nationale — porté par une ancienne clinicienne et administratrice de Signature Health.',
    },
  },
  sectors: {
    'enterprise-health-systems': { title: 'Systèmes de santé', description: 'Opérations cliniques multisites, modernisation des plateformes et gouvernance de direction.', evidence: 'Références de dirigeants de University Hospitals of Cleveland, de la Cleveland Clinic et de UW Health.' },
    'health-tech-ventures': { title: 'Entreprises de technologies de santé', description: 'Architecture technique de niveau fondateur, positionnement SaMD et leadership de CTO/COO à temps partagé.', evidence: 'Architecte technologique en chef fondatrice de LORiMDT.' },
    'managed-care': { title: 'Soins gérés et assureurs', description: 'Stabilisation d’entreprise, stratégie de plateforme de gestion des soins et automatisation des portails d’assureurs.', evidence: 'VP Opérations des systèmes cliniques chez Trillium Health Resources, au service de plus de 60 000 bénéficiaires.' },
    'physician-practices': { title: 'Cabinets médicaux et réseaux de spécialités', description: 'Transformation numérique, efficacité des flux de travail et automatisation du travail administratif.', evidence: 'Des économies substantielles pour les cabinets grâce à des soins numériques plus rapides et plus efficaces.' },
    'life-sciences': { title: 'Pharmacie et sciences de la vie', description: 'Produits de données d’entreprise, modernisation du consentement et personnalisation respectueuse de la vie privée.', evidence: 'Consultante numérique principale pour Eli Lilly.' },
  },
  engagements: {
    lorimdt: {
      role: 'Architecte technologique en chef fondatrice',
      sector: 'Oncologie • Organisation à but non lucratif',
      headline: 'Une plateforme de gouvernance clinique native FHIR pour les soins oncologiques complexes.',
      challenge: 'Les soins oncologiques complexes exigent une prise de décision clinique coordonnée et gouvernée entre les équipes, avec des résultats rapportés par les patients et des considérations réglementaires intégrées dès le départ.',
      approach: 'Leadership technique fondateur : définition de l’architecture technique, de la feuille de route produit, de la stratégie d’intégration ePRO et du positionnement réglementaire.',
      solution: 'Une plateforme de gouvernance clinique native FHIR conçue pour les soins oncologiques complexes.',
      outcome: 'Architecture technique, feuille de route produit, stratégie d’intégration ePRO et positionnement réglementaire établis pour la plateforme.',
      facts: [
        { value: 'FHIR', label: 'Architecture native' },
        { value: 'ePRO', label: 'Stratégie d’intégration' },
      ],
      note: 'Hope for Liver Cancer Foundation (501c3).',
    },
    trillium: {
      role: 'VP Opérations des systèmes cliniques',
      sector: 'Soins gérés • Système de santé',
      headline: 'Stabilisation d’entreprise et stratégie de remplacement de la CMP sous supervision réglementaire.',
      challenge: 'Une organisation placée sous supervision réglementaire avait besoin d’une stabilisation et d’une stratégie de remplacement de sa plateforme de gestion des soins, avec un large portefeuille fournisseurs et de nombreuses parties prenantes.',
      approach: 'Leadership opérationnel de direction auprès de plus de 40 parties prenantes transverses et d’un portefeuille fournisseurs de plus de 5 M$, alignant les opérations cliniques sur les exigences techniques et réglementaires.',
      solution: 'Un programme de stabilisation d’entreprise et une stratégie de remplacement de la plateforme de gestion des soins (CMP).',
      outcome: 'Stratégie de stabilisation et de remplacement livrée sous supervision réglementaire, au service de plus de 60 000 bénéficiaires.',
      facts: [
        { value: '40+', label: 'Parties prenantes transverses' },
        { value: '5 M$+', label: 'Portefeuille fournisseurs' },
        { value: '60 000+', label: 'Bénéficiaires' },
      ],
    },
    'eli-lilly': {
      role: 'Consultante numérique principale',
      sector: 'Pharmacie • Données d’entreprise',
      headline: 'Modernisation des produits de données d’entreprise et du consentement à l’échelle nationale.',
      challenge: 'Offrir une personnalisation à l’échelle nationale tout en modernisant le consentement et en plaçant la vie privée au premier plan dans l’ensemble du patrimoine de données de l’entreprise.',
      approach: 'Conseil numérique principal sur la conception de produits de données d’entreprise et la modernisation du consentement.',
      solution: 'Une personnalisation à l’échelle nationale, respectueuse de la vie privée, sur une architecture basée sur AWS.',
      outcome: 'Modernisation des produits de données d’entreprise et du consentement livrée sur une architecture basée sur AWS.',
      facts: [
        { value: 'AWS', label: 'Architecture' },
        { value: 'Nationale', label: 'Échelle' },
      ],
    },
  },
  testimonials: {
    lake: { title: 'Responsable des applications cliniques, University Hospitals of Cleveland', headline: 'Un atout pour toute organisation', quote: 'Elle excelle par sa patience et son souci du détail, avec un leadership précieux et une solide connaissance des applications.' },
    marx: { title: 'Ancien DSI, Cleveland Clinic et University Hospitals of Cleveland ; PDG, Marx Advisory', headline: 'Une dirigeante hors pair des opérations cliniques', quote: 'Elle maîtrisait les compétences techniques et communiquait avec force ; ses pairs et ses clients l’adoraient.' },
    neu: { title: 'Chef de projet senior, Services d’information, UW Health', headline: 'Les bonnes personnes', quote: 'Son approche de l’IA était réfléchie et professionnelle, et elle a gardé les projets alignés grâce à une communication efficace.' },
    maduskar: { title: 'Directeur senior, Programmes et projets de santé', quote: 'Elle apporte une solide compréhension du métier de la santé (assureurs et prestataires) et a joué un rôle déterminant pour aider les clients à identifier des cas d’usage d’automatisation à fort impact.' },
    whiteside: { title: 'Directeur senior, Programmes et projets de santé', quote: 'Les consultants font preuve de compétence, de professionnalisme et de fiabilité, dépassant régulièrement les attentes des clients sur de nombreux projets.' },
    arguello: { title: 'Directrice de comptes Premier, Healthcare IT Leaders', quote: 'J’ai eu le plaisir de travailler avec la PDG de LHT sur des projets de RPA en santé et je peux affirmer avec confiance qu’elle possède une connaissance exceptionnelle de ce domaine. Ses compétences techniques et sa capacité à analyser des processus et flux de travail de santé numériques complexes ont été essentielles pour notre équipe.' },
    kangas: { title: 'Fondateur et CTO, LuxSci', quote: 'Je recommande vivement LHT pour tout projet numérique où le souci du détail, la communication et le développement commercial sont essentiels au succès de l’entreprise.' },
    patel: { title: 'Data scientist senior', quote: 'Elle a fait preuve d’un leadership exceptionnel dans la livraison, dépassant régulièrement les attentes et obtenant des résultats remarquables. Sa communication claire et concise permet une collaboration efficace et garantit que toutes les parties prenantes sont bien informées.' },
  },
  insights: {
    'when-technical-leadership-doesnt-understand-clinical-reality': {
      title: 'Quand la direction technique ne comprend pas la réalité clinique',
      excerpt: 'Des systèmes cliniques fragmentés, mal alignés ou mal gouvernés sont rarement un problème purement technologique. C’est un problème de leadership, à l’intersection des flux cliniques, de la réglementation et de l’échelle.',
      body: `Les organisations de santé peinent lorsque les systèmes cliniques sont fragmentés, mal alignés ou mal gouvernés. Tout aussi souvent, elles peinent parce que les personnes qui dirigent la technologie n’ont jamais travaillé dans un flux clinique.

## Trois forces qui se croisent

Chaque décision concernant une plateforme clinique se prend là où trois forces se rencontrent :

- Les flux cliniques : comment les soins sont réellement délivrés, documentés et coordonnés.
- Les exigences réglementaires : ce qu’imposent la gouvernance, la protection des données et les parcours des dispositifs.
- L’échelle de l’entreprise : ce qui doit tenir entre les sites, les fournisseurs et les systèmes.

Une architecture qui optimise l’une de ces forces au détriment des autres crée la fragmentation que la direction passe ensuite des années à tenter de stabiliser.

## À quoi ressemble un leadership opérationnel de direction

Les rôles de CTO, COO et VP Systèmes cliniques, à temps partagé ou permanents, existent pour relier les équipes cliniques à l’architecture technique et à la stratégie du conseil. Cela signifie une stratégie produit d’entreprise, des opérations cliniques multisites et un alignement de la gouvernance de direction assurés par le même leadership, plutôt que répartis entre une équipe technique qui ne voit pas la clinique et une équipe clinique qui ne voit pas la plateforme.

## Par où commencer

Commencez par les flux de travail. Cartographiez la délivrance des soins avant de concevoir le système, positionnez tôt les parcours réglementaires et bâtissez une gouvernance qui survit à l’échelle de l’entreprise. Profondeur clinique, architecture technique et opérations de direction forment une seule discipline, pas trois.`,
    },
    'fhir-native-by-design': {
      title: 'Natif FHIR par conception : architecturer des plateformes de gouvernance clinique',
      excerpt: 'L’interopérabilité est une décision de conception, pas une intégration ajoutée après coup. Pourquoi l’architecture native FHIR, l’interopérabilité HL7 et le positionnement SaMD ont leur place dès le premier sprint.',
      body: `La modernisation des plateformes en santé échoue le plus souvent aux jointures : là où les données cliniques doivent circuler entre systèmes, équipes et régulateurs.

## Natif FHIR, pas adjacent à FHIR

Une plateforme native FHIR traite les ressources FHIR comme son modèle de données central plutôt que comme une couche de traduction greffée en périphérie. Combinée à l’interopérabilité HL7 pour les systèmes qui le parlent déjà, la plateforme peut participer à l’entreprise dès le premier jour.

## Les parcours SaMD commencent tôt

Si une partie d’une plateforme clinique peut être réglementée comme logiciel dispositif médical, son positionnement réglementaire façonne l’architecture. Le décider après avoir construit le produit revient à le reconstruire.

## Une gouvernance à l’échelle de l’entreprise

Les plateformes de gouvernance clinique ont besoin de leur propre gouvernance : qui décide, comment le changement est contrôlé et comment la plateforme se comporte entre les sites et les fournisseurs. La gouvernance d’entreprise fait partie de l’architecture ; ce n’est pas un document de politique rédigé après coup.

Notre pratique d’architecture de plateformes cliniques se concentre précisément sur ces trois éléments : conception native FHIR, interopérabilité HL7 et positionnement réglementaire SaMD.`,
    },
    'what-is-rpa-in-healthcare': {
      title: 'Qu’est-ce que la RPA, et pourquoi compte-t-elle pour les opérations de santé ?',
      excerpt: 'L’automatisation robotisée des processus utilise des travailleurs numériques pour automatiser des tâches au sein des flux de travail, afin que le personnel formé en clinique puisse se consacrer à un travail plus utile.',
      body: `L’automatisation robotisée des processus (RPA) utilise des travailleurs numériques pour automatiser des tâches au sein des flux de travail. Elle améliore l’efficacité opérationnelle et permet à vos collaborateurs et au personnel formé en clinique de se concentrer sur un travail plus utile.

## Pourquoi la RPA en santé

Les tâches administratives en santé sont répétitives, volumineuses et dispersées entre des systèmes tels que les dossiers patients informatisés, les portails d’assureurs et les réseaux de spécialités. Ce sont précisément les conditions dans lesquelles les travailleurs numériques donnent le meilleur d’eux-mêmes.

## Comment les cabinets et les systèmes de santé en bénéficient

- Accélérer la transformation numérique
- Atteindre les objectifs d’efficacité opérationnelle
- Réduire rapidement les coûts de main-d’œuvre, d’exploitation et de logiciels
- Améliorer la précision des flux de travail et renforcer la conformité
- Accroître la productivité du personnel grâce à des assistants robotisés personnels
- Augmenter les bénéfices en automatisant les tâches administratives

## Du pilote à la production

L’automatisation crée de la valeur lorsqu’elle est intégrée aux flux cliniques et gouvernée comme une capacité d’entreprise. Lucas Health Tech a livré plus de 200 automatisations en production sur Epic, Oracle Health, les portails d’assureurs et les réseaux de spécialités, avec plus de 2,1 millions de transactions annuelles alignées sur un ROI quantifié.`,
    },
    'automation-centers-of-excellence': {
      title: 'Bâtir un centre d’excellence en automatisation qui s’autofinance',
      excerpt: 'Les automatisations individuelles font gagner des heures. Un centre d’excellence les transforme en un investissement d’entreprise au retour quantifié.',
      body: `Une automatisation est un projet. Deux cents forment un modèle opérationnel. La différence, c’est un centre d’excellence.

## Ce que fait réellement un CoE

Un centre d’excellence en automatisation fixe la gouvernance, le modèle d’investissement et la cadence opérationnelle de l’automatisation dans toute l’entreprise. Il décide quels cas d’usage comptent, comment ils sont construits et comment leur retour est mesuré.

## Le modèle d’investissement

Les modèles d’investissement en automatisation d’entreprise rattachent chaque automatisation à des transactions et à un ROI quantifié. C’est cette discipline qui permet à la direction de financer l’automatisation comme une capacité plutôt que comme une série de demandes ponctuelles.

## RPA, orchestration et prédiction ensemble

L’automatisation moderne combine la RPA pour les tâches au niveau des systèmes, l’orchestration d’API pour relier les plateformes et des modèles prédictifs là où ils apportent une réelle valeur décisionnelle. C’est en les intégrant dans les flux cliniques, et non à côté, que l’impact se crée.

Notre pratique de stratégie d’IA et d’automatisation conçoit des centres d’excellence en automatisation et des modèles d’investissement en automatisation d’entreprise, et livre des automatisations en production sur Epic, Oracle Health, les portails d’assureurs et les réseaux de spécialités.`,
    },
    'lorimdt-fhir-native-oncology-governance': {
      title: 'Mission : une plateforme de gouvernance native FHIR pour les soins oncologiques complexes',
      excerpt: 'En tant qu’architecte technologique en chef fondatrice de LORiMDT, Lucas Health Tech a défini l’architecture technique, la feuille de route produit, la stratégie d’intégration ePRO et le positionnement réglementaire.',
      body: `LORiMDT est une plateforme de gouvernance clinique native FHIR pour les soins oncologiques complexes, associée à la Hope for Liver Cancer Foundation (501c3).

## Le rôle

Architecte technologique en chef fondatrice.

## Le travail

- Architecture technique d’une plateforme de gouvernance clinique native FHIR
- Feuille de route produit
- Stratégie d’intégration ePRO (résultats électroniques rapportés par les patients)
- Positionnement réglementaire

## Pourquoi c’est important

Les soins oncologiques complexes dépendent d’une prise de décision coordonnée et gouvernée entre les équipes. Concevoir la plateforme native FHIR dès le départ, avec l’ePRO et le positionnement réglementaire intégrés à la feuille de route, évite la fragmentation qui suit si souvent une première version précipitée.`,
    },
    'digital-transformation-for-physician-practices': {
      title: 'Transformation numérique des cabinets médicaux : une technologie qui travaille pour vous',
      excerpt: 'La technologie doit rendre votre quotidien plus simple, pas plus compliqué. Une approche pratique pour moderniser l’infrastructure, la communication avec les patients et les flux de travail.',
      body: `Nous sommes spécialisés dans l’accompagnement des cabinets médicaux pour exploiter la puissance de la technologie. Qu’il s’agisse de moderniser l’infrastructure, d’améliorer les outils numériques existants ou de rationaliser les flux de travail, la bonne approche part de ce dont le cabinet a besoin, pas de ce qu’un fournisseur veut vendre.

## Commencer par un inventaire

Une analyse de l’inventaire technologique évalue la rentabilité à long terme d’une nouvelle infrastructure par rapport à l’optimisation de l’existant. La plupart des cabinets possèdent déjà plus de capacités qu’ils n’en utilisent.

## Trois résultats à viser

- Moderniser l’infrastructure numérique
- Améliorer la communication et l’expérience patient
- Optimiser l’efficacité des flux de travail

## La stratégie avant les outils

Avec la bonne approche, la transformation numérique peut accroître le retour sur investissement et la réussite d’un cabinet. Cette approche, c’est un plan qui décrit comment la technologie sert vos objectifs, choisi délibérément et engagé pour une technologie sans friction au quotidien.`,
    },
    'enterprise-stabilization-under-regulatory-oversight': {
      title: 'Mission : stabilisation d’entreprise et stratégie de remplacement de la CMP',
      excerpt: 'En tant que VP Opérations des systèmes cliniques chez Trillium Health Resources : plus de 40 parties prenantes transverses, un portefeuille fournisseurs de plus de 5 M$ et plus de 60 000 bénéficiaires sous supervision réglementaire.',
      body: `Trillium Health Resources a fait appel à Lucas Health Tech dans un rôle de VP Opérations des systèmes cliniques pour une stabilisation d’entreprise et une stratégie de remplacement de la plateforme de gestion des soins (CMP) sous supervision réglementaire.

## L’ampleur de la mission

- Plus de 40 parties prenantes transverses
- Un portefeuille fournisseurs de plus de 5 M$
- Plus de 60 000 bénéficiaires

## L’approche

Le leadership opérationnel de direction a aligné les opérations cliniques sur les exigences techniques et réglementaires auprès de l’ensemble des parties prenantes et du portefeuille fournisseurs, produisant un programme de stabilisation et une stratégie de remplacement de la plateforme de gestion des soins.`,
    },
  },
  ecosystemNodes: {
    patients: { label: 'Patients', short: 'Là où commencent les soins et les données', description: 'La communication avec les patients, leur expérience et les résultats électroniques rapportés par les patients (ePRO) alimentent la plateforme clinique.', capabilities: ['Communication et expérience patient', 'Stratégie d’intégration ePRO', 'Personnalisation respectueuse de la vie privée'] },
    providers: { label: 'Soignants', short: 'Équipes cliniques et flux de travail', description: 'Systèmes de santé, cabinets médicaux et réseaux de spécialités dont les flux cliniques façonnent chaque décision de plateforme.', capabilities: ['Conception des flux de travail cliniques', 'Opérations cliniques multisites', 'Un personnel formé en clinique concentré sur un travail utile'] },
    technology: { label: 'Technologie', short: 'Plateformes natives FHIR', description: 'Plateformes natives FHIR, interopérabilité HL7 et parcours SaMD reliant Epic, Oracle Health, les portails d’assureurs et les réseaux de spécialités.', capabilities: ['Architecture native FHIR', 'Interopérabilité HL7', 'Positionnement réglementaire SaMD', 'Epic et Oracle Health'] },
    data: { label: 'Données', short: 'Produits de données d’entreprise', description: 'Produits de données d’entreprise, modernisation du consentement et modèles prédictifs bâtis sur des données cliniques interopérables.', capabilities: ['Produits de données d’entreprise', 'Modernisation du consentement', 'Modèles prédictifs', 'Architecture basée sur AWS'] },
    operations: { label: 'Opérations', short: 'Automatisation et gouvernance', description: 'Centres d’excellence en automatisation, RPA et orchestration d’API intégrés aux flux cliniques sous gouvernance de direction.', capabilities: ['RPA et orchestration d’API', 'Centres d’excellence en automatisation', 'Alignement de la gouvernance de direction', 'Gouvernance du portefeuille fournisseurs'] },
    outcomes: { label: 'Résultats', short: 'ROI quantifié', description: 'Automatisations en production et transactions alignées sur un ROI quantifié ; des plateformes qui tiennent à l’échelle de l’entreprise.', capabilities: ['Plus de 200 automatisations en production', 'Plus de 2,1 M de transactions annuelles', 'ROI quantifié'] },
  },
  pipeline: {
    data: { label: 'Données', title: 'Des données cliniques interopérables', description: 'Les plateformes natives FHIR et l’interopérabilité HL7 rendent les données cliniques exploitables sur Epic, Oracle Health, les portails d’assureurs et les réseaux de spécialités.' },
    processing: { label: 'Traitement', title: 'Orchestration et automatisation', description: 'L’orchestration d’API et les travailleurs numériques RPA déplacent et traitent les transactions au sein des flux cliniques.' },
    intelligence: { label: 'Intelligence', title: 'Modèles prédictifs', description: 'Des modèles prédictifs intégrés là où ils apportent une valeur décisionnelle, gouvernés par un centre d’excellence en automatisation.' },
    insight: { label: 'Analyse', title: 'ROI quantifié', description: 'Les modèles d’investissement en automatisation d’entreprise alignent chaque transaction sur un retour quantifié.' },
    action: { label: 'Action', title: 'Production à grande échelle', description: 'Plus de 200 automatisations livrées en production, permettant au personnel formé en clinique de se consacrer à un travail plus utile.' },
  },
}
