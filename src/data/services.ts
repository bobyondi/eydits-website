import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'documents-compliance',
    title: 'Documents & Compliance',
    description: 'Legal, technical, and business documents reviewed for accuracy and compliance',
    features: [
      'Licensed attorneys review',
      'Regulatory compliance check',
      'Risk mitigation analysis',
    ],
    price: 'From $99',
    priceLabel: 'per document',
    icon: 'document',
    featured: true,
    badge: 'Most Popular',
  },
  {
    id: 'content-humanization',
    title: 'Content Humanization',
    description: 'AI content fact-checked and refined for authentic human voice',
    features: [
      'Professional copywriters',
      'Brand voice alignment',
      'SEO optimization',
    ],
    price: 'From $49',
    priceLabel: 'per 1000 words',
    icon: 'edit',
  },
  {
    id: 'video-audio-polish',
    title: 'Video & Audio Polish',
    description: 'AI-generated media edited to broadcast-quality standards',
    features: [
      'Professional video editors',
      'Audio enhancement',
      'Color grading',
    ],
    price: 'From $149',
    priceLabel: 'per video',
    icon: 'video',
  },
  {
    id: 'graphic-design-refinement',
    title: 'Graphic Design Refinement',
    description: 'AI visuals elevated to professional brand standards',
    features: [
      'Expert designers',
      'Brand guideline compliance',
      'Print/digital optimization',
    ],
    price: 'From $79',
    priceLabel: 'per design',
    icon: 'image',
  },
  {
    id: 'ai-training-optimization',
    title: 'AI Training & Optimization',
    description: 'Custom AI models fine-tuned for your specific needs',
    features: [
      'ML engineers & data scientists',
      'Custom model training',
      'Performance optimization',
    ],
    price: 'Custom',
    priceLabel: 'pricing',
    icon: 'box',
  },
  {
    id: 'academic-research-validation',
    title: 'Academic Research Validation',
    description: 'Scholarly work verified for accuracy and academic rigor',
    features: [
      'PhDs & subject experts',
      'Citation verification',
      'Methodology review',
    ],
    price: 'From $199',
    priceLabel: 'per paper',
    icon: 'book',
  },
];
