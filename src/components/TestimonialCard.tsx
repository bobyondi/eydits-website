import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-neutral-50 p-12 rounded-2xl border-l-4 border-accent">
      <p className="text-lg text-primary-800 mb-8 leading-relaxed italic">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center gap-6">
        <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
          {testimonial.author.initials}
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{testimonial.author.name}</h4>
          <p className="text-sm text-primary-600">
            {testimonial.author.role}, {testimonial.author.company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
