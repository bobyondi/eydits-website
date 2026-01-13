import ServiceCard from '@/components/ServiceCard';
import SectionHeader from '@/components/SectionHeader';
import { services } from '@/data/services';

const Services = () => {
  return (
    <section className="py-24 px-[5%] bg-white" id="services">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          label="Our Services"
          title="Expert human review for every AI output type"
          subtitle="From legal documents to video editing, our vetted professionals ensure your AI work meets the highest standards"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
