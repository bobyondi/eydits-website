import { Expert } from '@/types';
import { Check, Clock, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExpertCardProps {
  expert: Expert;
  isSelected: boolean;
  onSelect: (expert: Expert) => void;
}

const ExpertCard = ({ expert, isSelected, onSelect }: ExpertCardProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onSelect(expert);
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        'relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300',
        isSelected
          ? 'border-accent bg-accent/5 shadow-lg'
          : 'border-neutral-200 hover:border-accent/50 hover:shadow-md'
      )}
    >
      {isSelected && (
        <div className="absolute top-4 right-4 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
          <Check className="w-4 h-4 text-white" strokeWidth={3} />
        </div>
      )}

      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
          {expert.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-foreground">{expert.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-semibold">{expert.rating}</span>
            </div>
            <span className="text-sm text-primary-600">
              {expert.completedProjects} projects
            </span>
          </div>
        </div>
      </div>

      <p className="text-sm text-primary-700 mb-4">{expert.bio}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {expert.expertise.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-neutral-100 text-xs font-medium text-primary-700 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 text-sm">
        <Clock className="w-4 h-4 text-primary-500" />
        <span className="text-primary-600">Responds in {expert.responseTime}</span>
        <span
          className={cn(
            'ml-auto px-2 py-1 rounded text-xs font-semibold',
            expert.availability === 'available'
              ? 'bg-green-100 text-green-700'
              : 'bg-yellow-100 text-yellow-700'
          )}
        >
          {expert.availability === 'available' ? 'Available' : 'Busy'}
        </span>
      </div>
    </div>
  );
};

export default ExpertCard;
