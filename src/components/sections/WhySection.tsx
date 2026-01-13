import SectionHeader from '@/components/SectionHeader';
import WhyCardComponent from '@/components/WhyCard';
import { whyCards } from '@/data/whyCards';

const WhySection = () => {
  return (
    <section className="relative py-24 px-[5%] bg-primary-900 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsla(25,95%,53%,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsla(168,76%,42%,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <SectionHeader
          label="Why eydits?"
          title="The perfect balance of AI speed and human excellence"
          subtitle="We're not replacing AI—we're making it safe and profitable for serious business use"
          variant="dark"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16">
          {whyCards.map((card) => (
            <WhyCardComponent key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
