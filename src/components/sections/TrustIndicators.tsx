import { Check } from 'lucide-react';
import { trustIndicators } from '@/data/whyCards';

const TrustIndicators = () => {
  return (
    <section className="py-16 px-[5%] bg-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {trustIndicators.map((indicator) => (
          <div
            key={indicator.text}
            className="flex items-center gap-6 p-8 bg-neutral-50 rounded-lg"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center flex-shrink-0">
              <Check className="w-6 h-6 text-white" strokeWidth={3} />
            </div>
            <span className="font-semibold text-foreground text-sm">
              {indicator.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustIndicators;
