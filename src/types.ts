export type ViewMode = 
  | 'home' 
  | 'criptomonedas' 
  | 'blockchain' 
  | 'bitcoin' 
  | 'ethereum' 
  | 'articulos' 
  | 'articulo_detalle' 
  | 'glosario' 
  | 'aprende' 
  | 'faq' 
  | 'comparativas'
  | 'cronologia'
  | 'mitos-riesgos'
  | 'sobre-nosotros' 
  | 'privacidad' 
  | 'terminos';

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Principiantes' | 'Blockchain' | 'Bitcoin' | 'Ethereum' | 'Seguridad' | 'DeFi' | 'Tecnología';
  readTime: string;
  publishDate: string;
  imageUrl: string;
  featured?: boolean;
  sections: {
    heading: string;
    content: string[];
    callout?: {
      title: string;
      text: string;
      type: 'info' | 'warning' | 'tip';
    };
  }[];
  relatedConcepts: string[];
  relatedArticleIds?: string[];
}

export interface GlossaryTerm {
  id: string;
  term: string;
  category: 'Fundamentos' | 'Arquitectura' | 'Criptografía' | 'Seguridad' | 'Consenso' | 'Ecosistema' | 'Finanzas';
  shortDefinition: string;
  detailedExplanation: string;
  analogyExample: string;
  importantNote: string;
  relatedTerms: string[];
}

export interface LearningConcept {
  id: string;
  title: string;
  summary: string;
  level: 1 | 2 | 3;
  category: string;
  relatedSlug?: string;
  keyPoints: string[];
}

export interface QuizQuestion {
  id: string;
  level: 1 | 2 | 3;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface HistoryEvent {
  year: string;
  period: string;
  title: string;
  description: string;
  significance: string;
  badge: string;
}

export interface BlockData {
  index: number;
  timestamp: string;
  data: string;
  previousHash: string;
  hash: string;
  nonce: number;
}
