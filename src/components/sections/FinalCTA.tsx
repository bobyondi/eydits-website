import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  return (
    <section className="py-24 px-[5%] bg-neutral-50 text-center" id="contact">
      <div className="max-w-[700px] mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-8 text-foreground">
          Ready to perfect your AI outputs?
        </h2>
        <p className="text-lg text-primary-600 mb-12">
          Join 10,000+ professionals who trust eydits to make their AI work production-ready
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button asChild size="lg" variant="cta">
            <a href="#">Get Your Free Quote →</a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href="#">Book 15-Min Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
