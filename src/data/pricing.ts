import { PricingRule } from '@/types';

export const pricingRules: PricingRule[] = [
  {
    serviceId: 'documents-compliance',
    basePrice: 99,
    unit: 'document',
    urgencyMultipliers: {
      standard: 1.0,   // 48-72 hours
      rush: 1.5,       // 24 hours
      express: 2.0,    // 12 hours
    },
    complexityMultipliers: {
      basic: 1.0,      // Simple documents
      standard: 1.3,   // Standard contracts
      complex: 1.8,    // Complex legal documents
    },
    quantityBased: true,  // Changed to true for per-document pricing
  },
  {
    serviceId: 'content-humanization',
    basePrice: 49,
    unit: '1000 words',
    urgencyMultipliers: {
      standard: 1.0,   // 48 hours
      rush: 1.4,       // 24 hours
      express: 1.8,    // 12 hours
    },
    complexityMultipliers: {
      basic: 1.0,      // Blog posts, simple content
      standard: 1.2,   // Marketing copy, articles
      complex: 1.5,    // Technical content, whitepapers
    },
    quantityBased: true,
  },
  {
    serviceId: 'video-audio-polish',
    basePrice: 149,
    unit: 'video',
    urgencyMultipliers: {
      standard: 1.0,   // 5-7 days
      rush: 1.6,       // 48 hours
      express: 2.2,    // 24 hours
    },
    complexityMultipliers: {
      basic: 1.0,      // Simple cuts, basic editing
      standard: 1.4,   // Color grading, audio mixing
      complex: 2.0,    // Advanced effects, motion graphics
    },
    quantityBased: true,  // Changed to true for per-video pricing
  },
  {
    serviceId: 'graphic-design-refinement',
    basePrice: 79,
    unit: 'design',
    urgencyMultipliers: {
      standard: 1.0,   // 3-5 days
      rush: 1.5,       // 24 hours
      express: 2.0,    // 12 hours
    },
    complexityMultipliers: {
      basic: 1.0,      // Simple graphics
      standard: 1.3,   // Brand materials
      complex: 1.7,    // Complex illustrations
    },
    quantityBased: true,  // Changed to true for per-design pricing
  },
  {
    serviceId: 'ai-training-optimization',
    basePrice: 499,
    unit: 'project',
    urgencyMultipliers: {
      standard: 1.0,   // 2-3 weeks
      rush: 1.4,       // 1 week
      express: 1.8,    // 3-5 days
    },
    complexityMultipliers: {
      basic: 1.0,      // Fine-tuning existing models
      standard: 1.5,   // Custom model training
      complex: 2.5,    // Complex AI systems
    },
    quantityBased: false,
  },
  {
    serviceId: 'academic-research-validation',
    basePrice: 199,
    unit: 'paper',
    urgencyMultipliers: {
      standard: 1.0,   // 7-10 days
      rush: 1.5,       // 3-5 days
      express: 2.0,    // 48 hours
    },
    complexityMultipliers: {
      basic: 1.0,      // Undergraduate papers
      standard: 1.4,   // Graduate research
      complex: 1.9,    // PhD dissertations
    },
    quantityBased: true,  // Changed to true for per-paper pricing
  },
];

// Helper function to calculate price
export const calculatePrice = (
  serviceId: string,
  urgency: 'standard' | 'rush' | 'express',
  complexity: 'basic' | 'standard' | 'complex',
  quantity: number = 1
): { finalPrice: number; breakdown: Array<{ label: string; amount: number }> } => {
  const rule = pricingRules.find((r) => r.serviceId === serviceId);
  
  if (!rule) {
    return { finalPrice: 0, breakdown: [] };
  }

  // For word-based pricing, calculate number of 1000-word units
  const effectiveQuantity = rule.unit === '1000 words' ? Math.ceil(quantity / 1000) : quantity;
  
  const baseAmount = rule.basePrice * effectiveQuantity;
  const urgencyMultiplier = rule.urgencyMultipliers[urgency];
  const complexityMultiplier = rule.complexityMultipliers[complexity];
  
  const finalPrice = Math.round(baseAmount * urgencyMultiplier * complexityMultiplier);

  const breakdown = [
    { 
      label: `Base price (${effectiveQuantity} ${rule.unit}${effectiveQuantity > 1 ? 's' : ''})`, 
      amount: baseAmount 
    },
  ];

  if (urgencyMultiplier > 1) {
    const urgencyAmount = Math.round(baseAmount * (urgencyMultiplier - 1) * complexityMultiplier);
    breakdown.push({ 
      label: `${urgency.charAt(0).toUpperCase() + urgency.slice(1)} delivery`, 
      amount: urgencyAmount
    });
  }

  if (complexityMultiplier > 1) {
    const complexityAmount = Math.round(baseAmount * (complexityMultiplier - 1) * urgencyMultiplier);
    breakdown.push({ 
      label: `${complexity.charAt(0).toUpperCase() + complexity.slice(1)} complexity`, 
      amount: complexityAmount
    });
  }

  return { finalPrice, breakdown };
};

// Helper to get turnaround time
export const getTurnaroundTime = (serviceId: string, urgency: 'standard' | 'rush' | 'express'): string => {
  const turnaroundTimes: Record<string, Record<string, string>> = {
    'documents-compliance': { standard: '48-72 hours', rush: '24 hours', express: '12 hours' },
    'content-humanization': { standard: '48 hours', rush: '24 hours', express: '12 hours' },
    'video-audio-polish': { standard: '5-7 days', rush: '48 hours', express: '24 hours' },
    'graphic-design-refinement': { standard: '3-5 days', rush: '24 hours', express: '12 hours' },
    'ai-training-optimization': { standard: '2-3 weeks', rush: '1 week', express: '3-5 days' },
    'academic-research-validation': { standard: '7-10 days', rush: '3-5 days', express: '48 hours' },
  };

  return turnaroundTimes[serviceId]?.[urgency] || 'Contact us';
};
