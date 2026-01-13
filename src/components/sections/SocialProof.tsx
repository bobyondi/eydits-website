import { clientLogos } from '@/data/footer';

const SocialProof = () => {
  return (
    <section className="py-16 px-[5%] bg-neutral-50 text-center">
      <p className="text-sm uppercase tracking-widest text-primary-600 font-semibold mb-8">
        Trusted by leading companies
      </p>
      <div className="flex justify-center items-center gap-16 flex-wrap opacity-60">
        {clientLogos.map((logo) => (
          <span
            key={logo}
            className="font-display text-xl font-bold text-primary-700"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SocialProof;
