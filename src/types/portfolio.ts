export interface Project {
  title: string;
  desc: string;
  image?: string;
  tech?: string[];
  url?: string;
  repo?: string;
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
