import SectionHeader from '@/components/SectionHeader';
import { steps } from '@/data/whyCards';

const HowItWorks = () => {
  return (
    <section className="py-24 px-[5%] bg-neutral-50" id="how">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="How It Works"
          title="Three simple steps to perfection"
          subtitle="Get professional results in as little as 24 hours"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16">
          {steps.map((step) => (
            <div key={step.number} className="text-center relative">
              <div className="relative w-20 h-20 gradient-accent text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-accent">
                <span className="font-display text-3xl font-extrabold">{step.number}</span>
                <span className="absolute inset-0 border-2 border-accent rounded-full animate-pulse-ring" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-primary-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
