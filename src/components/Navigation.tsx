import { useState, useEffect } from 'react';
import eaigenLogo from '@/assets/eaigen-logo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background shadow-md' : 'bg-background'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={scrollToTop}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img src={eaigenLogo} alt="Eaigen Solutions" className="h-36" />
          </button>
          
          <div className="flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('products')} 
              className="text-foreground hover:text-accent transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-foreground hover:text-accent transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => {}} 
              className="text-muted-foreground cursor-default"
            >
              Resources
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground hover:text-accent transition-colors"
            >
              Contact Us
            </button>
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={scrollToTop} 
              className="text-foreground hover:text-accent transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('careers')} 
              className="text-foreground hover:text-accent transition-colors"
            >
              Careers
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-foreground hover:text-accent transition-colors"
            >
              About Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
