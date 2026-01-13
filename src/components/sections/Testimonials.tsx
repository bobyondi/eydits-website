import SectionHeader from '@/components/SectionHeader';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data/testimonials';

const Testimonials = () => {
  return (
    <section className="py-24 px-[5%] bg-white">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="Client Success"
          title="What our clients say"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
