// Core Entity Types

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  priceLabel: string;
  icon: string;
  featured?: boolean;
  badge?: string;
}

export interface Expert {
  id: string;
  name: string;
  initials: string;
  role: string;
  company: string;
  specialization: string[];
  yearsExperience: number;
  avatar?: string;
}

export interface Project {
  id: string;
  title: string;
  clientName: string;
  serviceType: string;
  status: 'pending' | 'in-progress' | 'completed' | 'revision';
  createdAt: Date;
  completedAt?: Date;
  price: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: {
    name: string;
    initials: string;
    role: string;
    company: string;
  };
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface TrustIndicator {
  text: string;
}

export interface WhyCard {
  title: string;
  description: string;
  icon: string;
  statNumber: string;
  statLabel: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}
