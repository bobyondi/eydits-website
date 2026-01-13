import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  variant?: 'light' | 'dark';
}

const SectionHeader = ({ label, title, subtitle, variant = 'light' }: SectionHeaderProps) => {
  return (
    <div className="text-center max-w-[700px] mx-auto mb-16">
      <span
        className={cn(
          'inline-block px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide mb-6',
          variant === 'dark'
            ? 'bg-white/20 text-white'
            : 'bg-accent text-white'
        )}
      >
        {label}
      </span>
      <h2
        className={cn(
          'font-display text-3xl md:text-4xl font-extrabold mb-6 leading-tight',
          variant === 'dark' ? 'text-white' : 'text-foreground'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-lg leading-relaxed',
            variant === 'dark' ? 'text-white/90' : 'text-primary-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
