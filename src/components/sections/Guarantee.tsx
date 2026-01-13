import { Shield, Check } from 'lucide-react';

const Guarantee = () => {
  return (
    <section className="py-16 px-[5%] gradient-accent text-center text-white">
      <div className="max-w-[800px] mx-auto">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
          <div className="relative">
            <Shield className="w-14 h-14 text-accent" strokeWidth={2} />
            <Check className="w-6 h-6 text-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" strokeWidth={3} />
          </div>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-6">
          100% Satisfaction Guaranteed
        </h2>
        <p className="text-lg opacity-95 leading-relaxed">
          If you're not completely satisfied with the final deliverable, we'll revise it for free or provide a full refund. No questions asked.
        </p>
      </div>
    </section>
  );
};

export default Guarantee;
