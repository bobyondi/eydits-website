import { Link } from 'react-router-dom';
import { FileText, Edit, Video, Image, Box, Book } from 'lucide-react';
import { Service } from '@/types';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ElementType> = {
  document: FileText,
  edit: Edit,
  video: Video,
  image: Image,
  box: Box,
  book: Book,
};

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = iconMap[service.icon] || FileText;

  return (
    <div
      className={cn(
        'relative p-12 rounded-2xl transition-all duration-300 cursor-pointer border-2 border-transparent overflow-hidden group',
        service.featured
          ? 'bg-gradient-to-br from-primary-900 to-primary-800 text-white border-accent'
          : 'bg-white shadow-md hover:shadow-xl hover:-translate-y-2 hover:border-accent'
      )}
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

      {service.badge && (
        <span className="inline-block bg-accent text-white px-4 py-1 rounded text-xs font-bold uppercase tracking-wide mb-6">
          {service.badge}
        </span>
      )}

      <div className="w-16 h-16 gradient-accent rounded-lg flex items-center justify-center mb-8">
        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
      </div>

      <h3 className={cn(
        'font-display text-xl font-bold mb-4',
        service.featured ? 'text-white' : 'text-foreground'
      )}>
        {service.title}
      </h3>

      <p className={cn(
        'text-sm mb-8 leading-relaxed',
        service.featured ? 'text-white/90' : 'text-primary-600'
      )}>
        {service.description}
      </p>

      <ul className="space-y-4 mb-8">
        {service.features.map((feature) => (
          <li
            key={feature}
            className={cn(
              'flex items-start gap-4 text-sm',
              service.featured ? 'text-white/90' : 'text-primary-700'
            )}
          >
            <span className="text-teal-500 font-bold flex-shrink-0">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <div className={cn(
        'flex items-baseline gap-4 pt-8 border-t',
        service.featured ? 'border-white/20' : 'border-neutral-200'
      )}>
        <span className={cn(
          'font-display text-2xl font-extrabold',
          service.featured ? 'text-white' : 'text-foreground'
        )}>
          {service.price}
        </span>
        <span className={cn(
          'text-sm',
          service.featured ? 'text-white/70' : 'text-primary-600'
        )}>
          {service.priceLabel}
        </span>
      </div>

      <Link
        to={`/services/${service.id}`}
        className={cn(
          'inline-flex items-center gap-4 mt-8 text-sm font-semibold transition-all hover:gap-6',
          service.featured ? 'text-accent-400' : 'text-accent'
        )}
      >
        Learn More →
      </Link>
    </div>
  );
};

export default ServiceCard;
