const ServicesSection = () => {
  const services = [
    'Technology Adoption',
    'BI & Reporting',
    'Sales & GTM',
    'Portfolio Health & Credit Risk'
  ];

  return (
    <section id="services" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-12">
          <h2 className="text-2xl font-bold text-primary-foreground bg-primary px-24 py-3 rounded-lg">
            Our Services
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <a 
              key={index} 
              href="#"
              className={`text-center text-lg font-medium text-foreground hover:text-accent transition-colors cursor-pointer ${
                index === 3 ? 'md:col-span-3' : ''
              }`}
            >
              {service}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
