export type ProjectCategory = "web-development" | "seo" | "devops" | "mobile-app-development";

export type ServiceCategory =
  | "digital-marketing"
  | "web-development"
  | "design-branding"
  | "mobile-app-development"
  | "ecommerce-development"
  | "smart-ai-services";

export type ServiceStat = {
  label: string;
  value: number;
  suffix?: string;
};

export type Service = {
  slug: string;
  title: string;
  category: ServiceCategory;
  icon: string;
  summary: string;
  description: string;
  included: string[];
  heroHeadline: string;
  relatedProjectSlugs: string[];
  teamMemberSlugs: string[];
  stats: ServiceStat[];
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  functionality: string[];
  techStack: string[];
  screenshots: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export type Stat = {
  id: string;
  value: number;
  suffix?: string;
  label: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  fullBio: string;
  photo: string;
  email?: string;
  linkedin?: string;
  phone?: string;
  whatsapp?: string;
};

export type Founder = {
  name: string;
  title: string;
  bio: string;
  photo: string;
};

export type TechnologyCategory =
  | "Frontend"
  | "Backend"
  | "Databases"
  | "Mobile"
  | "Ecommerce"
  | "Smart AI"
  | "Design Tools"
  | "Integrations";

export type Technology = {
  name: string;
  category: TechnologyCategory;
};

export type Industry = {
  slug: string;
  name: string;
  description: string;
  icon: string;
};

export type LandingOffer = {
  slug: string;
  headline: string;
  subheadline: string;
  hookTitle: string;
  hookPoints: string[];
  ctaLabel: string;
  formTitle: string;
  testimonialId: string;
  relatedServiceSlug: string;
  thankYouHeadline: string;
  thankYouBody: string;
  nextStepNote: string;
};

export type PricingTier = {
  slug: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};
