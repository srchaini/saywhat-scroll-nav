const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-foreground mb-8">
          Empowering Businesses with Purpose-Built Solutions and Services
        </h1>
        
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-lg text-accent leading-relaxed">
            Indian businesses are unique, and so are their challenges. Our products and services are crafted 
            and purpose-built for Indian MSMEs and enterprises, focusing on what truly drives progress: 
            tangible, real-world value.
          </p>
          
          <p className="text-lg text-accent leading-relaxed">
            We don't chase technology trends and buzzwords; we create solutions that work, empowering 
            your business to thrive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
