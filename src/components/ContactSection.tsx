const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-12">
          <h2 className="text-2xl font-bold text-primary-foreground bg-primary px-24 py-3 rounded-lg">
            Contact Us
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div>
            <p className="text-lg font-medium text-foreground mb-2">
              <span className="underline">Write to us at:</span>
            </p>
            <p className="text-lg text-foreground">sales@eigen.tech</p>
          </div>
          
          <div className="pt-6">
            <p className="text-lg font-medium text-foreground mb-2">
              <span className="underline">Our Address:</span>
            </p>
            <p className="text-lg text-foreground">
              Prestige Sunrise Park, Electronic City Phase I
            </p>
            <p className="text-lg text-foreground">
              Bengaluru, Karnataka - 560100
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
