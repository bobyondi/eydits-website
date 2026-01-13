import { WhyCard, Step, TrustIndicator } from '@/types';

export const whyCards: WhyCard[] = [
  {
    title: 'Risk Mitigation',
    description: 'Avoid costly errors, compliance violations, and reputational damage with expert oversight from licensed professionals',
    icon: 'shield',
    statNumber: '$2.4M',
    statLabel: 'Avg. cost of compliance violation prevented',
  },
  {
    title: 'Save 40+ Hours Monthly',
    description: "Get AI efficiency with human quality—no endless back-and-forth revisions or quality concerns",
    icon: 'clock',
    statNumber: '24hrs',
    statLabel: 'Average turnaround time',
  },
  {
    title: 'Client-Ready Results',
    description: 'Every deliverable is polished, professional, and ready to use—not just "good enough"',
    icon: 'check-circle',
    statNumber: '99.8%',
    statLabel: 'Client satisfaction rate',
  },
];

export const steps: Step[] = [
  {
    number: 1,
    title: 'Upload Your AI Output',
    description: 'Share your draft, video, design, or document through our secure platform',
  },
  {
    number: 2,
    title: 'Expert Review & Enhancement',
    description: 'Vetted professionals with 10+ years experience refine your work to perfection',
  },
  {
    number: 3,
    title: 'Receive Final Deliverable',
    description: 'Production-ready work delivered on time with detailed revision notes',
  },
];

export const trustIndicators: TrustIndicator[] = [
  { text: 'Vetted professionals with 10+ years experience' },
  { text: 'Industry-specific expertise (legal, medical, technical)' },
  { text: 'Fast turnaround: 24-48 hours for most projects' },
  { text: '100% satisfaction guarantee or full refund' },
];
