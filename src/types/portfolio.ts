export interface Project {
  title: string;
  desc: string;
  image?: string;
  tech?: string[];
  url?: string;
  repo?: string;
  badge?: string;
}

export interface Pack {
  name: string;
  price: string;
  description: string;
  idealFor: string[];
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  badge?: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}
