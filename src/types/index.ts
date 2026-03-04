/**
 * Tipos centralizados del portfolio
 * Single source of truth para tipado en toda la aplicación
 */

// ============ PROYECTO ============
export interface Project {
  title: string;
  desc: string;
  image?: string;
  tech: string[];
  url?: string;
  repo?: string;
}

// ============ SECCIONES ============
export interface HeroSection {
  title: string;
  subtitle: string;
  button: string;
}

export interface ContactFormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea';
}

export interface ContactForm {
  title: string;
  fields: ContactFormField[];
  submitButton: string;
}

export interface ContactSection {
  title: {
    desktop: string;
    mobile: string;
  };
  description: string;
  form: ContactForm;
}

export interface ContactInfo {
  email: string;
  phone?: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

// ============ PORTFOLIO DATA ============
export interface PortfolioData {
  name: string;
  contact: ContactInfo;
  sections: {
    hero: HeroSection;
    contact: ContactSection;
    projects: Project[];
  };
  footer: {
    socialLinks: SocialLink[];
  };
}

// ============ PROPS COMPONENTS ============
export interface HeaderProps {
  activeSection: string;
  name: string;
}

export interface HeroProps {
  data: HeroSection;
}

export interface ProjectPortfolioProps {
  data: Project[];
}

export interface ContactProps {
  data: ContactSection;
  contactInfo: ContactInfo;
}

export interface FooterProps {
  name: string;
  socialLinks: SocialLink[];
}

export interface SplashScreenProps {
  onStart: () => void;
}

// ============ FORM STATE ============
export interface FormState {
  succeeded: boolean;
  errors?: Array<{
    message: string;
  }>;
}
