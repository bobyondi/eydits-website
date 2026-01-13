import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ProblemBar from '@/components/sections/ProblemBar';
import SocialProof from '@/components/sections/SocialProof';
import Services from '@/components/sections/Services';
import HowItWorks from '@/components/sections/HowItWorks';
import Testimonials from '@/components/sections/Testimonials';
import WhySection from '@/components/sections/WhySection';
import TrustIndicators from '@/components/sections/TrustIndicators';
import Guarantee from '@/components/sections/Guarantee';
import FinalCTA from '@/components/sections/FinalCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-accent focus:text-white focus:px-4 focus:py-2">
        Skip to main content
      </a>
      <Header />
      <Hero />
      <ProblemBar />
      <SocialProof />
      <main id="main">
        <Services />
        <HowItWorks />
        <Testimonials />
        <WhySection />
        <TrustIndicators />
        <Guarantee />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
