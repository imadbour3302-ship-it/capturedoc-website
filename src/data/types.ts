export interface Pair {
  t: string;
  d: string;
}

export interface Triple {
  t: string;
  s: string;
  d: string | null;
}

export interface DetailPage {
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  heroImage: string;
  stages: Pair[];
  challengeTitle: string;
  challenges: Pair[];
  approachTitle: string;
  approach: Pair[];
  casesTitle: string;
  cases: Pair[];
  benefitTitle: string;
  benefits: Pair[];
  images: string[];
}

export interface IndustryPage {
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  hero: Triple[];
  challenges: Triple[];
  innovationTitle: string;
  useCasesTitle: string;
  useCases: Triple[];
  images: string[];
  caseStudy: string | null;
}

export interface ExpertiseCard {
  t: string;
  d: string;
  slug: string;
}

export interface Country {
  id: string;
  name: string;
  role: string;
  details: string;
}

export interface CaseStudy {
  logo: string;
  badge: string;
  quote: string;
  stats: { v: string; l: string }[];
  person: string;
  personTitle: string;
  personImage: string;
  pdf: string;
}

export interface Award {
  title: string;
  provider: string;
  details: string;
}

export interface HomeData {
  ticker: string[];
  expertiseCards: ExpertiseCard[];
  countries: Country[];
  cases: CaseStudy[];
  awards: Award[];
  teamCards: Pair[];
  faq: { q: string; a: string }[];
}

export interface AboutData {
  pillars: Pair[];
  timeline: Pair[];
  stats: string[];
}

export interface ClientLogo {
  name: string;
  src: string;
}

export interface SiteContent {
  expertises: Record<string, DetailPage>;
  industries: Record<string, IndustryPage>;
  services: Record<string, DetailPage>;
  home: HomeData;
  about: AboutData;
}
