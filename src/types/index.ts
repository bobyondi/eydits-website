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
  avatar?: string;
  specializations: string[]; // service IDs they handle
  rating: number;
  completedProjects: number;
  responseTime: string;
  bio: string;
  expertise: string[];
  availability: 'available' | 'busy' | 'offline';
}

export interface PricingCriteria {
  urgency: 'standard' | 'rush' | 'express';
  complexity: 'basic' | 'standard' | 'complex';
  quantity?: number; // words, pages, videos, etc.
}

export interface PricingRule {
  serviceId: string;
  basePrice: number;
  unit: string; // 'document', '1000 words', 'video', 'design'
  urgencyMultipliers: {
    standard: number;
    rush: number;
    express: number;
  };
  complexityMultipliers: {
    basic: number;
    standard: number;
    complex: number;
  };
  quantityBased: boolean;
}

export interface PriceBreakdown {
  label: string;
  amount: number;
}

export interface Quote {
  serviceId: string;
  serviceName: string;
  basePrice: number;
  finalPrice: number;
  turnaroundTime: string;
  breakdown: PriceBreakdown[];
  criteria: PricingCriteria;
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
