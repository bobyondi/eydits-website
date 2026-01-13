import { useParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import { FileText, Edit, Video, Image, Box, Book, ArrowLeft, Check } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  document: FileText,
  edit: Edit,
  video: Video,
  image: Image,
  box: Box,
  book: Book,
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-24 px-[5%] text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="text-primary-600 mb-8">The service you're looking for doesn't exist.</p>
          <Button asChild variant="cta">
            <Link to="/">Back to Home</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = iconMap[service.icon] || FileText;

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary-900 text-white py-16 md:py-24 px-[5%] overflow-hidden">
          <div className="absolute inset-0 gradient-hero" />
          <div className="relative z-10 max-w-[1200px] mx-auto">
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>

            <div className="flex flex-col md:flex-row items-start gap-12">
              <div className="w-20 h-20 gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
              <div>
                {service.badge && (
                  <span className="inline-block bg-accent text-white px-4 py-1 rounded text-xs font-bold uppercase tracking-wide mb-4">
                    {service.badge}
                  </span>
                )}
                <h1 className="font-display text-3xl md:text-5xl font-extrabold mb-6">
                  {service.title}
                </h1>
                <p className="text-xl text-white/90 max-w-[600px] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-24 px-[5%]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold mb-8">What's Included</h2>
              <ul className="space-y-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-teal-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-teal-500" strokeWidth={3} />
                    </div>
                    <span className="text-lg text-primary-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-16">
                <h2 className="font-display text-2xl font-bold mb-8">How It Works</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 gradient-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Submit Your Project</h3>
                      <p className="text-primary-600">Upload your AI-generated content through our secure platform.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 gradient-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Expert Review</h3>
                      <p className="text-primary-600">Our vetted professionals review and enhance your work.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 gradient-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Receive Deliverable</h3>
                      <p className="text-primary-600">Get your polished, production-ready work within 24-48 hours.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                <h3 className="font-display text-xl font-bold mb-6">Pricing</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-display text-4xl font-extrabold text-foreground">
                    {service.price}
                  </span>
                  <span className="text-primary-600">{service.priceLabel}</span>
                </div>
                <p className="text-sm text-primary-600 mb-8">
                  Final price depends on project scope and complexity.
                </p>
                <Button asChild className="w-full" size="lg" variant="cta">
                  <a href="#contact">Get Your Free Quote</a>
                </Button>
                <p className="text-xs text-center text-primary-500 mt-4">
                  100% satisfaction guarantee
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
