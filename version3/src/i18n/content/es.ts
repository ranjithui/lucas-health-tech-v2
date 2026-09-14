import type { ContentPack } from './types'

/**
 * Español — copia de contenido. Cada entrada se corresponde con un id/slug de
 * src/data; las cifras, tecnologías, rutas e imágenes se comparten con el inglés.
 */
export const esContent: ContentPack = {
  company: {
    tagline: 'Arquitectura de sistemas clínicos y operaciones ejecutivas para la sanidad',
    motto: 'Profundidad clínica. Arquitectura técnica. Operaciones ejecutivas.',
    positioning: 'CTO/COO fraccional y permanente • Estrategia de plataformas • IA y automatización • Gobernanza clínica',
    hours: 'Lun–Vie, 9:00–17:00 (hora del Este)',
  },
  founder: {
    role: 'CEO y fundadora',
    credentials: ['Exprofesional clínica', 'Miembro del consejo, Signature Health'],
    summary: 'CTO/COO fraccional y permanente para empresas de tecnología sanitaria y sistemas de salud.',
    quote:
      'Las organizaciones sanitarias sufren cuando los sistemas clínicos están fragmentados, desalineados o mal gobernados, y cuando el liderazgo técnico no entiende la realidad clínica. Yo diseño plataformas y dirijo operaciones donde se cruzan los flujos clínicos, los requisitos regulatorios y la escala empresarial.',
  },
  positioning: {
    headline: 'La complejidad sanitaria exige más que tecnología.',
    accentWord: 'tecnología.',
    supporting:
      'Lucas Health Tech conecta estrategia clínica, tecnología, operaciones e innovación para ayudar a las organizaciones sanitarias a ejecutar su transformación con mayor claridad e impacto.',
    statement: 'Diseñado para las realidades de la sanidad moderna.',
    statementBody:
      'Los sistemas clínicos, las operaciones, la tecnología y la innovación suelen gobernarse por separado, y ahí es donde la transformación se estanca. Trabajamos en los cuatro ámbitos, dirigidos por una exprofesional clínica que ha diseñado las plataformas y dirigido las operaciones en cuestión.',
    trustHeading: 'Experiencia que entiende la sanidad desde dentro.',
    ctaHeading: 'La transformación sanitaria empieza con claridad.',
    ctaSupporting: 'Exploremos dónde la tecnología, las operaciones y la estrategia pueden generar un impacto real para su organización.',
  },
  metrics: [
    { label: 'Automatizaciones en producción entregadas', detail: 'En Epic, Oracle Health, portales de aseguradoras y redes de especialidades.' },
    { label: 'Transacciones anuales', detail: 'Alineadas con un ROI cuantificado.' },
    { label: 'Años de experiencia sanitaria', detail: 'Consultores con titulación clínica.' },
    { label: 'Afiliados atendidos', detail: 'Proyecto de estabilización empresarial en Trillium Health Resources.' },
  ],
  homeMetrics: ['Años de experiencia sanitaria', 'Automatizaciones en producción', 'Transacciones anuales gestionadas'],
  differentiators: [
    { title: 'Profundidad clínica', body: 'Liderazgo de una exprofesional clínica. Consultores con titulación clínica que entienden cómo se presta realmente la atención.' },
    { title: 'Arquitectura técnica', body: 'Diseño nativo en FHIR, interoperabilidad HL7 y posicionamiento regulatorio SaMD, construidos para los flujos clínicos y la escala empresarial.' },
    { title: 'Operaciones ejecutivas', body: 'Roles operativos de CTO, COO y nivel VP que unen a los equipos clínicos, la arquitectura técnica y la estrategia del consejo.' },
    { title: 'Automatización a escala', body: 'Más de 200 automatizaciones en producción y más de 2,1 millones de transacciones anuales alineadas con un ROI cuantificado en Epic, Oracle Health, portales de aseguradoras y redes de especialidades.' },
    { title: 'Atención personal', body: 'Atención personal en TI, marketing y negocio en lugar de soporte por tickets. Más de 20 años de experiencia sanitaria.' },
  ],
  domains: {
    clinical: { label: 'Clínico', detail: 'Cómo se presta, documenta y gobierna realmente la atención.' },
    technology: { label: 'Tecnología', detail: 'Plataformas nativas en FHIR, interoperabilidad y arquitectura empresarial.' },
    operations: { label: 'Operaciones', detail: 'Liderazgo operativo ejecutivo en centros, proveedores y equipos.' },
    innovation: { label: 'Innovación', detail: 'IA y automatización integradas donde ocurre el trabajo.' },
  },
  audiences: {
    provider: { label: 'Proveedor sanitario', description: 'Sistemas de salud, consultas médicas y redes de especialidades.' },
    venture: { label: 'Empresa de tecnología sanitaria', description: 'Empresas de salud digital que construyen plataformas clínicas y SaMD.' },
    partner: { label: 'Socio tecnológico', description: 'Consultoras, proveedores y equipos de datos empresariales.' },
  },
  solutions: {
    'clinical-systems': {
      title: 'Sistemas clínicos',
      fullTitle: 'Sistemas clínicos y arquitectura de plataformas',
      kicker: 'Plataformas nativas en FHIR • Vías SaMD • Gobernanza empresarial',
      short: 'Diseñar y optimizar entornos tecnológicos sanitarios.',
      summary: 'Arquitectura de plataformas de gobernanza clínica y modernización de plataformas que atienden los flujos clínicos, los requisitos regulatorios y la escala empresarial.',
      description:
        'Diseñamos plataformas de gobernanza clínica y lideramos la modernización de plataformas donde se cruzan los flujos clínicos, los requisitos regulatorios y la escala empresarial. El foco está en el diseño nativo en FHIR, la interoperabilidad HL7 y el posicionamiento regulatorio SaMD.',
      capabilities: ['Diseño de plataformas nativas en FHIR', 'Interoperabilidad HL7', 'Posicionamiento regulatorio SaMD', 'Plataformas de gobernanza clínica', 'Modernización de plataformas', 'Gobernanza empresarial'],
      workflow: [
        { label: 'Flujos clínicos', detail: 'Mapear cómo se presta la atención antes de diseñar el sistema.' },
        { label: 'Requisitos regulatorios', detail: 'Definir pronto las vías SaMD y la gobernanza.' },
        { label: 'Arquitectura nativa en FHIR', detail: 'Interoperable por diseño con HL7 y FHIR.' },
        { label: 'Escala empresarial', detail: 'Una gobernanza que se sostiene entre centros y proveedores.' },
      ],
      proof: 'Arquitecta jefe de tecnología fundadora de una plataforma de gobernanza oncológica nativa en FHIR (LORiMDT).',
      imageAlt: 'Profesionales clínicos reunidos en el atrio acristalado de un hospital moderno',
    },
    'executive-operations': {
      title: 'Operaciones ejecutivas',
      fullTitle: 'Operaciones ejecutivas y roles operativos',
      kicker: 'CTO fraccional y permanente • COO • VP de Sistemas Clínicos',
      short: 'Mejorar el rendimiento operativo y la ejecución.',
      summary: 'Roles de CTO, COO y nivel VP para empresas de tecnología sanitaria y sistemas de salud.',
      description:
        'Roles fraccionales y permanentes de CTO, COO y VP de Sistemas Clínicos para empresas de tecnología sanitaria y sistemas de salud. Estrategia de producto empresarial, operaciones clínicas multicentro, alineación de la gobernanza ejecutiva y un liderazgo que une a los equipos clínicos con la arquitectura técnica y la estrategia del consejo.',
      capabilities: ['CTO fraccional y permanente', 'COO fraccional y permanente', 'VP de Sistemas Clínicos', 'Estrategia de producto empresarial', 'Operaciones clínicas multicentro', 'Alineación de la gobernanza ejecutiva'],
      workflow: [
        { label: 'Estrategia del consejo', detail: 'Alinear la gobernanza ejecutiva y la dirección del producto.' },
        { label: 'Arquitectura técnica', detail: 'Traducir la estrategia en decisiones de plataforma.' },
        { label: 'Equipos clínicos', detail: 'Unir a quienes prestan la atención con los sistemas que utilizan.' },
        { label: 'Operaciones multicentro', detail: 'Dirigir operaciones clínicas a escala empresarial.' },
      ],
      proof: 'VP de Operaciones de Sistemas Clínicos en Trillium Health Resources: más de 40 partes interesadas, una cartera de proveedores de más de 5 M$ y más de 60.000 afiliados.',
      imageAlt: 'Ejecutiva presentando desde un atril en un evento de liderazgo sanitario',
    },
    'ai-automation': {
      title: 'IA y automatización',
      fullTitle: 'Estrategia de IA y automatización',
      kicker: 'RPA • Orquestación de API • Modelos predictivos • Centros de excelencia',
      short: 'Automatización inteligente para flujos de trabajo sanitarios complejos.',
      summary: 'Automatización impulsada por IA integrada en los flujos clínicos, con Centros de Excelencia en Automatización y modelos de inversión empresarial.',
      description:
        'Automatización impulsada por IA integrada en los flujos clínicos. Diseñamos Centros de Excelencia en Automatización, construimos modelos de inversión en automatización empresarial y entregamos automatizaciones en producción en Epic, Oracle Health, portales de aseguradoras y redes de especialidades.',
      capabilities: ['Automatización robótica de procesos (RPA)', 'Orquestación de API', 'Modelos predictivos', 'Centros de Excelencia en Automatización', 'Modelos de inversión en automatización empresarial', 'Automatizaciones en producción en Epic y Oracle Health'],
      workflow: [
        { label: 'Identificar casos de uso', detail: 'Encontrar candidatos a automatización con un impacto significativo.' },
        { label: 'Diseñar el CoE', detail: 'Gobernanza, modelo de inversión y cadencia operativa.' },
        { label: 'Construir y orquestar', detail: 'RPA, orquestación de API y modelos predictivos.' },
        { label: 'Cuantificar el ROI', detail: 'Transacciones alineadas con un retorno cuantificado.' },
      ],
      proof: 'Más de 200 automatizaciones en producción entregadas. Más de 2,1 millones de transacciones anuales alineadas con un ROI cuantificado.',
      imageAlt: 'Enfermera revisando un panel clínico asistido por IA en una tableta',
    },
    'digital-innovation': {
      title: 'Innovación digital',
      fullTitle: 'Innovación y transformación digital',
      kicker: 'Modernización de infraestructura • Experiencia del paciente • Estrategia tecnológica',
      short: 'Construir estrategias tecnológicas para organizaciones sanitarias modernas.',
      summary: 'Alinear la tecnología con las necesidades de negocio de su organización para una transformación duradera.',
      description:
        'Ayudamos a las organizaciones sanitarias a aprovechar el poder de la tecnología. Nuestros expertos identifican e implementan soluciones adaptadas a sus necesidades, ya sea actualizando la infraestructura, mejorando las herramientas digitales actuales o simplificando los flujos de trabajo. La tecnología debe trabajar para usted y hacer su trabajo más fácil, no más difícil.',
      capabilities: ['Modernizar la infraestructura digital', 'Mejorar la comunicación y la experiencia del paciente', 'Análisis del inventario tecnológico', 'Evaluación de la rentabilidad a largo plazo', 'Estrategia y hoja de ruta tecnológica', 'Compromiso con una tecnología sin fricciones'],
      workflow: [
        { label: 'Inventario tecnológico', detail: 'Evaluar qué tiene y cuánto cuesta a largo plazo.' },
        { label: 'Estrategia', detail: 'Planificar cómo la tecnología cumple sus objetivos.' },
        { label: 'Implementar', detail: 'Actualizar la infraestructura o mejorar las herramientas existentes.' },
        { label: 'Sostener', detail: 'Mantener el parque tecnológico coherente a medida que crece la organización.' },
      ],
      proof: 'Consultora digital principal para Eli Lilly: modernización de productos de datos empresariales y del consentimiento en AWS.',
      imageAlt: 'Ponente guiando a una audiencia por una hoja de ruta de transformación digital',
    },
    'practice-optimization': {
      title: 'Optimización de consultas',
      fullTitle: 'Optimización de consultas',
      kicker: 'Eficiencia de flujos de trabajo • Automatización administrativa • Reducción de costes',
      short: 'Mejorar cómo operan y escalan las organizaciones sanitarias.',
      summary: 'Eficiencia de flujos de trabajo y automatización administrativa para que el personal con formación clínica dedique su tiempo a un trabajo con sentido.',
      description:
        'Las consultas y las redes de especialidades pierden capacidad en trabajo administrativo que la tecnología debería absorber. Optimizamos la eficiencia de los flujos de trabajo, automatizamos las tareas administrativas y reforzamos el cumplimiento y la precisión, para que el personal con formación clínica pueda centrarse en la atención y no en el sistema.',
      capabilities: ['Optimizar la eficiencia de los flujos de trabajo', 'Automatizar tareas administrativas', 'Reducir costes de personal, operaciones y software', 'Mejorar la precisión de los flujos y reforzar el cumplimiento', 'Asistentes robóticos personales para la productividad del personal', 'Atención digital más rápida y eficiente'],
      workflow: [
        { label: 'Observar el trabajo', detail: 'Entender adónde va realmente la capacidad de la consulta.' },
        { label: 'Eliminar la fricción', detail: 'Simplificar los flujos que frenan a los equipos clínicos.' },
        { label: 'Automatizar lo rutinario', detail: 'Tareas administrativas gestionadas por automatización, no por personas.' },
        { label: 'Escalar lo que funciona', detail: 'Patrones operativos que se sostienen a medida que crece la consulta.' },
      ],
      proof: 'Ayudamos a los médicos y a sus consultas a lograr ahorros sustanciales mediante una atención digital más rápida y eficiente.',
      imageAlt: 'Audiencia de directivos sanitarios en una sesión informativa sobre operaciones',
    },
  },
  rpaBenefits: [
    'Acelerar la transformación digital',
    'Alcanzar los objetivos de eficiencia operativa',
    'Reducir rápidamente los costes de personal, operaciones y software',
    'Mejorar la precisión de los flujos y reforzar el cumplimiento',
    'Aumentar la productividad del personal con asistentes robóticos personales',
    'Aumentar los beneficios automatizando tareas administrativas',
  ],
  industries: {
    'health-systems': {
      title: 'Sistemas de salud',
      short: 'Transformación estratégica y operativa.',
      description: 'Operaciones clínicas multicentro, modernización de plataformas y gobernanza ejecutiva para sistemas de salud y las organizaciones de atención gestionada que trabajan junto a ellos.',
      needs: ['Modernización de plataformas', 'Operaciones clínicas multicentro', 'Alineación de la gobernanza ejecutiva', 'Automatización en producción en Epic y Oracle Health', 'Estrategia de plataforma de gestión de la atención'],
      evidence: 'VP de Operaciones de Sistemas Clínicos en Trillium Health Resources: estabilización empresarial bajo supervisión regulatoria, atendiendo a más de 60.000 afiliados. Referencias ejecutivas de líderes de University Hospitals of Cleveland, Cleveland Clinic y UW Health.',
    },
    'healthcare-organizations': {
      title: 'Organizaciones sanitarias',
      short: 'Mejora del rendimiento habilitada por la tecnología.',
      description: 'Consultas médicas y redes de especialidades que necesitan que su parque tecnológico, sus flujos de trabajo y su carga administrativa dejen de competir con el trabajo clínico.',
      needs: ['Modernización de la infraestructura digital', 'Comunicación y experiencia del paciente', 'Eficiencia de los flujos de trabajo', 'Automatización de tareas administrativas'],
      evidence: 'Ayudamos a los médicos y a sus consultas a lograr ahorros sustanciales mediante una atención digital más rápida y eficiente.',
    },
    'technology-partners': {
      title: 'Socios tecnológicos sanitarios',
      short: 'Estrategia tecnológica y experiencia en implantación.',
      description: 'Empresas de tecnología sanitaria, consultoras, proveedores y equipos de datos empresariales que necesitan arquitectura técnica de nivel fundador y credibilidad clínica detrás de su plataforma.',
      needs: ['Diseño de plataformas nativas en FHIR', 'Posicionamiento regulatorio SaMD', 'Hoja de ruta de producto y arquitectura técnica', 'Productos de datos empresariales y modernización del consentimiento'],
      evidence: 'Arquitecta jefe de tecnología fundadora de LORiMDT, una plataforma de gobernanza oncológica nativa en FHIR. Consultora digital principal para Eli Lilly en productos de datos empresariales de escala nacional.',
    },
    investors: {
      title: 'Inversores',
      short: 'Conocimiento tecnológico y operativo en sanidad.',
      description: 'Una perspectiva clínica y operativa sobre la tecnología sanitaria: si una plataforma está diseñada para la realidad regulatoria y de flujos de trabajo que encontrará, y si el modelo operativo que hay detrás puede escalar.',
      needs: ['Perspectiva de arquitectura técnica', 'Posicionamiento regulatorio y de gobernanza clínica', 'Modelo operativo y preparación para la ejecución', 'ROI de la automatización y modelos de inversión'],
      evidence: 'Perspectiva basada en arquitectura técnica fundadora, estabilización empresarial bajo supervisión regulatoria y programas empresariales de escala nacional, dirigida por una exprofesional clínica y miembro del consejo de Signature Health.',
    },
  },
  sectors: {
    'enterprise-health-systems': { title: 'Sistemas de salud', description: 'Operaciones clínicas multicentro, modernización de plataformas y gobernanza ejecutiva.', evidence: 'Referencias de líderes de University Hospitals of Cleveland, Cleveland Clinic y UW Health.' },
    'health-tech-ventures': { title: 'Empresas de tecnología sanitaria', description: 'Arquitectura técnica de nivel fundador, posicionamiento SaMD y liderazgo fraccional de CTO/COO.', evidence: 'Arquitecta jefe de tecnología fundadora de LORiMDT.' },
    'managed-care': { title: 'Atención gestionada y aseguradoras', description: 'Estabilización empresarial, estrategia de plataforma de gestión de la atención y automatización de portales de aseguradoras.', evidence: 'VP de Operaciones de Sistemas Clínicos en Trillium Health Resources, atendiendo a más de 60.000 afiliados.' },
    'physician-practices': { title: 'Consultas médicas y redes de especialidades', description: 'Transformación digital, eficiencia de los flujos de trabajo y automatización del trabajo administrativo.', evidence: 'Ahorros sustanciales en las consultas mediante una atención digital más rápida y eficiente.' },
    'life-sciences': { title: 'Farmacéutica y ciencias de la vida', description: 'Productos de datos empresariales, modernización del consentimiento y personalización con la privacidad por delante.', evidence: 'Consultora digital principal para Eli Lilly.' },
  },
  engagements: {
    lorimdt: {
      role: 'Arquitecta jefe de tecnología fundadora',
      sector: 'Oncología • Sin ánimo de lucro',
      headline: 'Una plataforma de gobernanza clínica nativa en FHIR para la atención oncológica compleja.',
      challenge: 'La atención oncológica compleja requiere una toma de decisiones clínicas coordinada y gobernada entre equipos, con resultados reportados por el paciente y consideraciones regulatorias incorporadas desde el principio.',
      approach: 'Liderazgo técnico fundador: definición de la arquitectura técnica, la hoja de ruta del producto, la estrategia de integración de ePRO y el posicionamiento regulatorio.',
      solution: 'Una plataforma de gobernanza clínica nativa en FHIR diseñada para la atención oncológica compleja.',
      outcome: 'Arquitectura técnica, hoja de ruta del producto, estrategia de integración de ePRO y posicionamiento regulatorio establecidos para la plataforma.',
      facts: [
        { value: 'FHIR', label: 'Arquitectura nativa' },
        { value: 'ePRO', label: 'Estrategia de integración' },
      ],
      note: 'Hope for Liver Cancer Foundation (501c3).',
    },
    trillium: {
      role: 'VP de Operaciones de Sistemas Clínicos',
      sector: 'Atención gestionada • Sistema de salud',
      headline: 'Estabilización empresarial y estrategia de sustitución de la CMP bajo supervisión regulatoria.',
      challenge: 'Una organización bajo supervisión regulatoria necesitaba estabilización y una estrategia de sustitución de su plataforma de gestión de la atención, con una amplia cartera de proveedores y base de partes interesadas.',
      approach: 'Liderazgo operativo ejecutivo con más de 40 partes interesadas multifuncionales y una cartera de proveedores de más de 5 M$, alineando las operaciones clínicas con los requisitos técnicos y regulatorios.',
      solution: 'Programa de estabilización empresarial y estrategia de sustitución de la plataforma de gestión de la atención (CMP).',
      outcome: 'Estrategia de estabilización y sustitución entregada bajo supervisión regulatoria, atendiendo a más de 60.000 afiliados.',
      facts: [
        { value: '40+', label: 'Partes interesadas multifuncionales' },
        { value: '5 M$+', label: 'Cartera de proveedores' },
        { value: '60.000+', label: 'Afiliados' },
      ],
    },
    'eli-lilly': {
      role: 'Consultora digital principal',
      sector: 'Farmacéutica • Datos empresariales',
      headline: 'Modernización de productos de datos empresariales y del consentimiento a escala nacional.',
      challenge: 'Ofrecer personalización a escala nacional mientras se moderniza el consentimiento y se mantiene la privacidad por delante en todo un patrimonio de datos empresarial.',
      approach: 'Consultoría digital principal en diseño de productos de datos empresariales y modernización del consentimiento.',
      solution: 'Personalización a escala nacional con la privacidad por delante sobre una arquitectura basada en AWS.',
      outcome: 'Modernización de productos de datos empresariales y del consentimiento entregada sobre una arquitectura basada en AWS.',
      facts: [
        { value: 'AWS', label: 'Arquitectura' },
        { value: 'Nacional', label: 'Escala' },
      ],
    },
  },
  testimonials: {
    lake: { title: 'Gerente de Aplicaciones Clínicas, University Hospitals of Cleveland', headline: 'Un activo para cualquier organización', quote: 'Destaca por su paciencia y atención al detalle, con un valioso liderazgo y conocimiento de las aplicaciones.' },
    marx: { title: 'Ex-CIO, Cleveland Clinic y University Hospitals of Cleveland; CEO, Marx Advisory', headline: 'Una líder excepcional en operaciones clínicas', quote: 'Dominaba las competencias técnicas y era una gran comunicadora; sus compañeros y clientes la adoraban.' },
    neu: { title: 'Gerente sénior de proyectos de Servicios de Información, UW Health', headline: 'Las personas adecuadas', quote: 'Su enfoque de la IA fue reflexivo y profesional, manteniendo los proyectos alineados mediante una comunicación eficaz.' },
    maduskar: { title: 'Director sénior, Programas y Proyectos Sanitarios', quote: 'Aporta un sólido conocimiento del negocio sanitario (aseguradoras y proveedores) y fue decisiva para ayudar a los clientes a identificar casos de uso de automatización con un impacto significativo.' },
    whiteside: { title: 'Director sénior, Programas y Proyectos Sanitarios', quote: 'Los consultores demuestran conocimiento, profesionalidad y fiabilidad, superando sistemáticamente las expectativas de los clientes en múltiples proyectos.' },
    arguello: { title: 'Directora de Cuentas Premier, Healthcare IT Leaders', quote: 'He tenido el placer de trabajar con la CEO de LHT en proyectos sanitarios de RPA y puedo afirmar con confianza que tiene un conocimiento excepcional en este campo. Sus competencias técnicas y su capacidad para analizar procesos y flujos de trabajo sanitarios digitales complejos han sido esenciales para nuestro equipo.' },
    kangas: { title: 'Fundador y CTO, LuxSci', quote: 'Recomendaría encarecidamente a LHT para cualquier proyecto digital en el que la atención al detalle, la comunicación y el desarrollo de negocio sean clave para el éxito de la empresa.' },
    patel: { title: 'Científica de datos sénior', quote: 'Demostró un liderazgo de entrega excepcional, superando sistemáticamente las expectativas y logrando resultados sobresalientes. Su comunicación clara y concisa permite una colaboración eficaz y garantiza que todas las partes interesadas estén bien informadas.' },
  },
  insights: {
    'when-technical-leadership-doesnt-understand-clinical-reality': {
      title: 'Cuando el liderazgo técnico no entiende la realidad clínica',
      excerpt: 'Los sistemas clínicos fragmentados, desalineados o mal gobernados rara vez son solo un problema tecnológico. Son un problema de liderazgo en la intersección de los flujos clínicos, la regulación y la escala.',
      body: `Las organizaciones sanitarias sufren cuando los sistemas clínicos están fragmentados, desalineados o mal gobernados. Con la misma frecuencia, sufren porque quienes dirigen la tecnología nunca han trabajado dentro de un flujo clínico.

## Tres fuerzas que se cruzan

Cada decisión sobre una plataforma clínica se toma donde se encuentran tres fuerzas:

- Flujos clínicos: cómo se presta, documenta y coordina realmente la atención.
- Requisitos regulatorios: qué exigen la gobernanza, la privacidad y las vías de dispositivos.
- Escala empresarial: qué tiene que sostenerse entre centros, proveedores y sistemas.

Una arquitectura que optimiza una de estas fuerzas a costa de las demás crea la fragmentación que el liderazgo pasa después años intentando estabilizar.

## Cómo es el liderazgo operativo ejecutivo

Los roles fraccionales y permanentes de CTO, COO y VP de Sistemas Clínicos existen para unir a los equipos clínicos con la arquitectura técnica y la estrategia del consejo. Eso significa estrategia de producto empresarial, operaciones clínicas multicentro y alineación de la gobernanza ejecutiva gestionadas por el mismo liderazgo, en lugar de repartidas entre un equipo técnico que no ve la clínica y un equipo clínico que no ve la plataforma.

## Por dónde empezar

Empiece por los flujos de trabajo. Mapee cómo se presta la atención antes de diseñar el sistema, defina pronto las vías regulatorias y construya una gobernanza que sobreviva a la escala empresarial. Profundidad clínica, arquitectura técnica y operaciones ejecutivas son una sola disciplina, no tres.`,
    },
    'fhir-native-by-design': {
      title: 'Nativo en FHIR por diseño: arquitectura de plataformas de gobernanza clínica',
      excerpt: 'La interoperabilidad es una decisión de diseño, no una integración de última hora. Por qué la arquitectura nativa en FHIR, la interoperabilidad HL7 y el posicionamiento SaMD pertenecen al primer sprint.',
      body: `La modernización de plataformas en sanidad falla sobre todo en las costuras: los lugares donde los datos clínicos tienen que moverse entre sistemas, equipos y reguladores.

## Nativo en FHIR, no adyacente a FHIR

Una plataforma nativa en FHIR trata los recursos FHIR como su modelo de datos central en lugar de como una capa de traducción añadida en el borde. Combinada con la interoperabilidad HL7 para los sistemas que ya lo hablan, la plataforma puede participar en la empresa desde el primer día.

## Las vías SaMD empiezan pronto

Si alguna parte de una plataforma clínica puede regularse como software como producto sanitario, su posicionamiento regulatorio condiciona la arquitectura. Decidirlo después de construir el producto significa reconstruirlo.

## Gobernanza a escala empresarial

Las plataformas de gobernanza clínica necesitan una gobernanza propia: quién decide, cómo se controla el cambio y cómo se comporta la plataforma entre centros y proveedores. La gobernanza empresarial forma parte de la arquitectura, no es un documento de políticas escrito después.

Nuestra práctica de arquitectura de plataformas clínicas se centra exactamente en estos tres elementos: diseño nativo en FHIR, interoperabilidad HL7 y posicionamiento regulatorio SaMD.`,
    },
    'what-is-rpa-in-healthcare': {
      title: '¿Qué es la RPA y por qué importa para las operaciones sanitarias?',
      excerpt: 'La automatización robótica de procesos utiliza trabajadores digitales para automatizar tareas dentro de los flujos de trabajo, de modo que el personal con formación clínica pueda centrarse en un trabajo con más sentido.',
      body: `La automatización robótica de procesos (RPA) utiliza trabajadores digitales para automatizar tareas dentro de los flujos de trabajo. Esto mejora la eficiencia operativa y permite que sus empleados y el personal con formación clínica se centren en un trabajo con más sentido.

## Por qué la RPA en sanidad

Las tareas administrativas en sanidad son repetitivas, de gran volumen y están repartidas entre sistemas como historias clínicas electrónicas, portales de aseguradoras y redes de especialidades. Esas son las condiciones en las que los trabajadores digitales rinden mejor.

## Cómo se benefician las consultas y los sistemas de salud

- Acelerar la transformación digital
- Alcanzar los objetivos de eficiencia operativa
- Reducir rápidamente los costes de personal, operaciones y software
- Mejorar la precisión de los flujos y reforzar el cumplimiento
- Aumentar la productividad del personal con asistentes robóticos personales
- Aumentar los beneficios automatizando tareas administrativas

## Del piloto a la producción

La automatización aporta valor cuando está integrada en los flujos clínicos y se gobierna como una capacidad empresarial. Lucas Health Tech ha entregado más de 200 automatizaciones en producción en Epic, Oracle Health, portales de aseguradoras y redes de especialidades, con más de 2,1 millones de transacciones anuales alineadas con un ROI cuantificado.`,
    },
    'automation-centers-of-excellence': {
      title: 'Construir un Centro de Excelencia en Automatización que se pague solo',
      excerpt: 'Las automatizaciones individuales ahorran horas. Un Centro de Excelencia las convierte en una inversión empresarial con un retorno cuantificado.',
      body: `Una automatización es un proyecto. Doscientas son un modelo operativo. La diferencia es un Centro de Excelencia.

## Qué hace realmente un CoE

Un Centro de Excelencia en Automatización establece la gobernanza, el modelo de inversión y la cadencia operativa de la automatización en toda la empresa. Decide qué casos de uso importan, cómo se construyen y cómo se mide su retorno.

## El modelo de inversión

Los modelos de inversión en automatización empresarial vinculan cada automatización a transacciones y a un ROI cuantificado. Esa disciplina es lo que permite al liderazgo financiar la automatización como una capacidad y no como una serie de peticiones puntuales.

## RPA, orquestación y predicción juntas

La automatización moderna combina RPA para tareas a nivel de sistema, orquestación de API para conectar plataformas y modelos predictivos donde aportan valor real a la decisión. Integrarlos en los flujos clínicos, y no junto a ellos, es de donde viene el impacto.

Nuestra práctica de estrategia de IA y automatización diseña Centros de Excelencia en Automatización y modelos de inversión en automatización empresarial, y entrega automatizaciones en producción en Epic, Oracle Health, portales de aseguradoras y redes de especialidades.`,
    },
    'lorimdt-fhir-native-oncology-governance': {
      title: 'Proyecto: una plataforma de gobernanza nativa en FHIR para la atención oncológica compleja',
      excerpt: 'Como arquitecta jefe de tecnología fundadora de LORiMDT, Lucas Health Tech definió la arquitectura técnica, la hoja de ruta del producto, la estrategia de integración de ePRO y el posicionamiento regulatorio.',
      body: `LORiMDT es una plataforma de gobernanza clínica nativa en FHIR para la atención oncológica compleja, asociada a la Hope for Liver Cancer Foundation (501c3).

## El rol

Arquitecta jefe de tecnología fundadora.

## El trabajo

- Arquitectura técnica de una plataforma de gobernanza clínica nativa en FHIR
- Hoja de ruta del producto
- Estrategia de integración de ePRO (resultados electrónicos reportados por el paciente)
- Posicionamiento regulatorio

## Por qué importa

La atención oncológica compleja depende de una toma de decisiones coordinada y gobernada entre equipos. Diseñar la plataforma nativa en FHIR desde el principio, con ePRO y posicionamiento regulatorio integrados en la hoja de ruta, evita la fragmentación que tan a menudo sigue a una primera versión apresurada.`,
    },
    'digital-transformation-for-physician-practices': {
      title: 'Transformación digital para consultas médicas: tecnología que trabaja para usted',
      excerpt: 'La tecnología debería hacer su trabajo más fácil, no más difícil. Un enfoque práctico para modernizar la infraestructura, la comunicación con el paciente y los flujos de trabajo.',
      body: `Estamos especializados en ayudar a las consultas médicas a aprovechar el poder de la tecnología. Ya sea actualizando la infraestructura, mejorando las herramientas digitales actuales o simplificando los flujos de trabajo, el enfoque correcto empieza por lo que la consulta necesita, no por lo que un proveedor quiere vender.

## Empiece con un inventario

Un análisis del inventario tecnológico evalúa la rentabilidad a largo plazo de implantar una nueva infraestructura frente a optimizar la existente. La mayoría de las consultas ya poseen más capacidad de la que utilizan.

## Tres resultados para los que diseñar

- Modernizar la infraestructura digital
- Mejorar la comunicación y la experiencia del paciente
- Optimizar la eficiencia de los flujos de trabajo

## Estrategia antes que herramientas

Con el enfoque correcto, la transformación digital puede elevar el retorno de la inversión y el éxito de una consulta. Ese enfoque es un plan sobre cómo la tecnología cumple sus objetivos, elegido deliberadamente y comprometido con una tecnología sin fricciones en el trabajo diario.`,
    },
    'enterprise-stabilization-under-regulatory-oversight': {
      title: 'Proyecto: estabilización empresarial y estrategia de sustitución de la CMP',
      excerpt: 'Como VP de Operaciones de Sistemas Clínicos en Trillium Health Resources: más de 40 partes interesadas multifuncionales, una cartera de proveedores de más de 5 M$ y más de 60.000 afiliados bajo supervisión regulatoria.',
      body: `Trillium Health Resources contrató a Lucas Health Tech en un rol de VP de Operaciones de Sistemas Clínicos para la estabilización empresarial y una estrategia de sustitución de la plataforma de gestión de la atención (CMP) bajo supervisión regulatoria.

## Escala del proyecto

- Más de 40 partes interesadas multifuncionales
- Cartera de proveedores de más de 5 M$
- Más de 60.000 afiliados

## El enfoque

El liderazgo operativo ejecutivo alineó las operaciones clínicas con los requisitos técnicos y regulatorios en toda la base de partes interesadas y la cartera de proveedores, produciendo un programa de estabilización y una estrategia de sustitución de la plataforma de gestión de la atención.`,
    },
  },
  ecosystemNodes: {
    patients: { label: 'Pacientes', short: 'Donde empiezan la atención y los datos', description: 'La comunicación con el paciente, la experiencia y los resultados electrónicos reportados por el paciente (ePRO) alimentan la plataforma clínica.', capabilities: ['Comunicación y experiencia del paciente', 'Estrategia de integración de ePRO', 'Personalización con la privacidad por delante'] },
    providers: { label: 'Proveedores', short: 'Equipos clínicos y flujos de trabajo', description: 'Sistemas de salud, consultas médicas y redes de especialidades cuyos flujos clínicos condicionan cada decisión de plataforma.', capabilities: ['Diseño de flujos de trabajo clínicos', 'Operaciones clínicas multicentro', 'Personal con formación clínica centrado en un trabajo con sentido'] },
    technology: { label: 'Tecnología', short: 'Plataformas nativas en FHIR', description: 'Plataformas nativas en FHIR, interoperabilidad HL7 y vías SaMD que conectan Epic, Oracle Health, portales de aseguradoras y redes de especialidades.', capabilities: ['Arquitectura nativa en FHIR', 'Interoperabilidad HL7', 'Posicionamiento regulatorio SaMD', 'Epic y Oracle Health'] },
    data: { label: 'Datos', short: 'Productos de datos empresariales', description: 'Productos de datos empresariales, modernización del consentimiento y modelos predictivos construidos sobre datos clínicos interoperables.', capabilities: ['Productos de datos empresariales', 'Modernización del consentimiento', 'Modelos predictivos', 'Arquitectura basada en AWS'] },
    operations: { label: 'Operaciones', short: 'Automatización y gobernanza', description: 'Centros de Excelencia en Automatización, RPA y orquestación de API integrados en los flujos clínicos bajo gobernanza ejecutiva.', capabilities: ['RPA y orquestación de API', 'Centros de Excelencia en Automatización', 'Alineación de la gobernanza ejecutiva', 'Gobernanza de la cartera de proveedores'] },
    outcomes: { label: 'Resultados', short: 'ROI cuantificado', description: 'Automatizaciones en producción y transacciones alineadas con un ROI cuantificado; plataformas que se sostienen a escala empresarial.', capabilities: ['Más de 200 automatizaciones en producción', 'Más de 2,1 M de transacciones anuales', 'ROI cuantificado'] },
  },
  pipeline: {
    data: { label: 'Datos', title: 'Datos clínicos interoperables', description: 'Las plataformas nativas en FHIR y la interoperabilidad HL7 hacen que los datos clínicos sean utilizables en Epic, Oracle Health, portales de aseguradoras y redes de especialidades.' },
    processing: { label: 'Procesamiento', title: 'Orquestación y automatización', description: 'La orquestación de API y los trabajadores digitales de RPA mueven y procesan transacciones dentro de los flujos clínicos.' },
    intelligence: { label: 'Inteligencia', title: 'Modelos predictivos', description: 'Modelos predictivos integrados donde aportan valor a la decisión, gobernados a través de un Centro de Excelencia en Automatización.' },
    insight: { label: 'Conocimiento', title: 'ROI cuantificado', description: 'Los modelos de inversión en automatización empresarial alinean cada transacción con un retorno cuantificado.' },
    action: { label: 'Acción', title: 'Producción a escala', description: 'Más de 200 automatizaciones en producción entregadas, permitiendo que el personal con formación clínica se centre en un trabajo con más sentido.' },
  },
}
