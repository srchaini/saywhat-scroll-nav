import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import CareersSection from '@/components/CareersSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ServicesSection />
        <ContactSection />
        <CareersSection />
      </main>
    </div>
  );
};

export default Index;
