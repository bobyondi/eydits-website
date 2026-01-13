import { Shield, Clock, CheckCircle } from 'lucide-react';
import { WhyCard } from '@/types';

const iconMap: Record<string, React.ElementType> = {
  shield: Shield,
  clock: Clock,
  'check-circle': CheckCircle,
};

interface WhyCardProps {
  card: WhyCard;
}

const WhyCardComponent = ({ card }: WhyCardProps) => {
  const Icon = iconMap[card.icon] || Shield;

  return (
    <div className="text-center p-12 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
      <div className="w-20 h-20 gradient-accent rounded-lg flex items-center justify-center mx-auto mb-8">
        <Icon className="w-10 h-10 text-white" strokeWidth={2} />
      </div>
      <h3 className="font-display text-xl font-bold mb-6">{card.title}</h3>
      <p className="opacity-90 leading-relaxed mb-8">{card.description}</p>
      <div className="pt-8 border-t border-white/20">
        <span className="block font-display text-3xl font-extrabold text-accent-400">
          {card.statNumber}
        </span>
        <span className="text-sm opacity-80">{card.statLabel}</span>
      </div>
    </div>
  );
};

export default WhyCardComponent;
