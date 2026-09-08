export type Language = 'en' | 'es';

export interface Translations {
  nav: {
    home: string;
    foundations: string;
    crypto: string;
    blockchain: string;
    bitcoin: string;
    ethereum: string;
    toolsLab: string;
    hashSimulator: string;
    blockchainVisualizer: string;
    interactiveTools: string;
    learnGuides: string;
    learningPath: string;
    comparisons: string;
    timeline: string;
    mythsRisks: string;
    articles: string;
    glossary: string;
    faq: string;
    search: string;
    searchShortcut: string;
    exploreGuide: string;
    menu: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlinePart2: string;
    headlinePart3: string;
    subtitle: string;
    ctaExplore: string;
    ctaArticles: string;
    motionHint: string;
  };
  hub: {
    sectionTag: string;
    title: string;
    subtitle: string;
    timeTitle: string;
    timeSub: string;
    timeDesc: string;
    timeCta: string;
    timeBadge: string;
    pathTitle: string;
    pathSub: string;
    pathDesc: string;
    pathCta: string;
    pathBadge: string;
    compTitle: string;
    compSub: string;
    compDesc: string;
    compCta: string;
    compBadge: string;
    mythsTitle: string;
    mythsSub: string;
    mythsDesc: string;
    mythsCta: string;
    mythsBadge: string;
  };
  showcase: {
    tag: string;
    title: string;
    subtitle: string;
    viewAll: string;
    readTime: string;
    published: string;
  };
  footer: {
    desc: string;
    quickLinks: string;
    educational: string;
    disclaimer: string;
    allRightsReserved: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      foundations: 'Foundations',
      crypto: 'Cryptocurrencies',
      blockchain: 'Blockchain',
      bitcoin: 'Bitcoin',
      ethereum: 'Ethereum',
      toolsLab: 'Tools & Lab',
      hashSimulator: 'SHA-256 Simulator',
      blockchainVisualizer: 'Blockchain Visualizer',
      interactiveTools: 'All Lab Tools',
      learnGuides: 'Learn & Guides',
      learningPath: 'Learning Roadmap',
      comparisons: 'Direct Comparisons',
      timeline: 'Historical Timeline',
      mythsRisks: 'Myths & Security',
      articles: 'Articles',
      glossary: 'Glossary',
      faq: 'FAQ',
      search: 'Search',
      searchShortcut: '⌘K',
      exploreGuide: 'Start Learning',
      menu: 'Menu',
    },
    hero: {
      badge: 'Decentralized Educational Portal',
      headlinePart1: 'Cryptographic',
      headlinePart2: 'innovation',
      headlinePart3: 'made clear.',
      subtitle: 'Understand blockchain architectures, peer-to-peer money, and cryptographic protocols through rigorous papers and honest guides.',
      ctaExplore: 'Start Learning',
      ctaArticles: 'Read Articles',
      motionHint: 'Move your cursor or tilt screen to explore 3D depth',
    },
    hub: {
      sectionTag: 'FOCUSED & CALM LEARNING',
      title: 'Educational Modules at Your Own Pace',
      subtitle: 'No endless walls of text. Choose the topic you want to explore today.',
      timeTitle: 'Historical Timeline',
      timeSub: 'From Cypherpunks to Web3',
      timeDesc: 'Trace the cryptographic breakthroughs, genesis blocks, and pivotal milestones of decentralized systems.',
      timeCta: 'View Timeline',
      timeBadge: 'History',
      pathTitle: 'Guided Roadmap',
      pathSub: 'From Beginner to Advanced',
      pathDesc: 'Step-by-step curriculum across 3 structured tiers with mini-quizzes and progress saving.',
      pathCta: 'View Roadmap',
      pathBadge: 'Step-by-Step',
      compTitle: 'Direct Comparisons',
      compSub: 'High-Precision Conceptual Tables',
      compDesc: 'Clear breakdowns of Bitcoin vs Ethereum, Proof-of-Work vs Proof-of-Stake, and Coins vs Tokens.',
      compCta: 'View Comparisons',
      compBadge: 'Schematics',
      mythsTitle: 'Myths vs Realities & Risks',
      mythsSub: 'Transparent Web3 Security',
      mythsDesc: 'Debunk anonymity myths, understand self-custody challenges, and learn cold-storage defense.',
      mythsCta: 'Explore Security',
      mythsBadge: 'Safety First',
    },
    showcase: {
      tag: 'EDITORIAL SPOTLIGHTS',
      title: 'Learn with Deep-Dive Visual Guides',
      subtitle: 'Curated deep dives featuring high-fidelity architectural diagrams, plain explanations, and historical context.',
      viewAll: 'View all articles',
      readTime: 'min read',
      published: 'Updated 2026',
    },
    footer: {
      desc: 'An open, independent digital encyclopedia providing objective, jargon-free education on cryptocurrencies and distributed ledger systems.',
      quickLinks: 'Navigation',
      educational: 'Interactive Guides',
      disclaimer: 'Educational Content Only: CryptoGuide does not provide financial or investment advice. Always practice digital self-custody and personal security.',
      allRightsReserved: 'All rights reserved.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      foundations: 'Fundamentos',
      crypto: 'Criptomonedas',
      blockchain: 'Blockchain',
      bitcoin: 'Bitcoin',
      ethereum: 'Ethereum',
      toolsLab: 'Herramientas & Lab',
      hashSimulator: 'Simulador SHA-256',
      blockchainVisualizer: 'Visualizador de Bloques',
      interactiveTools: 'Todas las Herramientas',
      learnGuides: 'Aprender & Guías',
      learningPath: 'Ruta Didáctica',
      comparisons: 'Comparativas Directas',
      timeline: 'Cronología Histórica',
      mythsRisks: 'Mitos y Riesgos',
      articles: 'Artículos',
      glossary: 'Glosario',
      faq: 'FAQ',
      search: 'Buscar',
      searchShortcut: '⌘K',
      exploreGuide: 'Explorar Guía',
      menu: 'Menú',
    },
    hero: {
      badge: 'Portal Educativo Descentralizado',
      headlinePart1: 'Criptografía',
      headlinePart2: 'que cobra',
      headlinePart3: 'forma.',
      subtitle: 'Comprende las redes blockchain, el dinero descentralizado y los protocolos criptográficos a través de tratados rigurosos y explicaciones claras.',
      ctaExplore: 'Comenzar Aprendizaje',
      ctaArticles: 'Artículos Educativos',
      motionHint: 'Mueve el cursor o inclina el dispositivo para interactuar con la perspectiva espacial',
    },
    hub: {
      sectionTag: 'EXPLORACIÓN CALMADA Y ESTRUCTURADA',
      title: 'Módulos Educativos a tu Propio Ritmo',
      subtitle: 'Sin páginas interminables ni sobrecarga de información. Elige el área que deseas profundizar hoy.',
      timeTitle: 'Cronología Histórica',
      timeSub: 'De los Cypherpunks a la Actualidad',
      timeDesc: 'Evolución cronológica de la criptografía de clave pública, el bloque génesis y los hitos de la Web3.',
      timeCta: 'Ver cronología',
      timeBadge: 'Historia',
      pathTitle: 'Ruta Didáctica por Niveles',
      pathSub: 'Desde cero hasta conceptos avanzados',
      pathDesc: 'Currículo organizado en 3 niveles con mini-quizzes de refuerzo y progreso guardado localmente.',
      pathCta: 'Ver ruta educativa',
      pathBadge: 'Paso a paso',
      compTitle: 'Comparativas Directas',
      compSub: 'Tablas conceptuales de alta precisión',
      compDesc: 'Diferencia de manera clara Bitcoin vs Ethereum, Prueba de Trabajo vs Participación, y Monedas vs Tokens.',
      compCta: 'Ver comparativas',
      compBadge: 'Esquemático',
      mythsTitle: 'Mitos vs Realidades y Riesgos',
      mythsSub: 'Educación honesta y seguridad',
      mythsDesc: 'Desmonta mitos sobre anonimato y comprende los riesgos reales de custodia propia y volatilidad.',
      mythsCta: 'Explorar seguridad',
      mythsBadge: 'Seguridad',
    },
    showcase: {
      tag: 'DESTACADOS EDITORIALES',
      title: 'Aprende con artículos visuales en profundidad',
      subtitle: 'Lecturas esenciales diseñadas con explicaciones claras, diagramas de alta fidelidad y rigor pedagógico.',
      viewAll: 'Ver todos los artículos',
      readTime: 'min de lectura',
      published: 'Actualizado 2026',
    },
    footer: {
      desc: 'Una enciclopedia digital abierta e independiente dedicada a la divulgación pedagógica y objetiva sobre blockchain y criptomonedas.',
      quickLinks: 'Navegación',
      educational: 'Guías Interactivas',
      disclaimer: 'Aviso Educativo: CryptoGuía no ofrece asesoramiento financiero ni de inversión. La tecnología blockchain debe estudiarse con rigor y responsabilidad.',
      allRightsReserved: 'Todos los derechos reservados.',
    },
  },
};
