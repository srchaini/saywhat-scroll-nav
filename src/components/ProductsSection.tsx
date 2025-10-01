import lekhaLogo from '@/assets/lekha-logo.png';
import prismLogo from '@/assets/prism-logo.png';
import sayWhatLogo from '@/assets/saywhat-logo.png';

const ProductsSection = () => {
  return (
    <section id="products" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-12">
          <h2 className="text-2xl font-bold text-primary-foreground bg-primary px-24 py-3 rounded-lg">
            Our Products
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <a 
            href="#" 
            className="flex flex-col items-center hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img src={lekhaLogo} alt="LEKHA" className="h-36 object-contain" />
          </a>
          <a 
            href="#" 
            className="flex flex-col items-center hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img src={prismLogo} alt="PRISM" className="h-36 object-contain" />
          </a>
          <a 
            href="#" 
            className="flex flex-col items-center hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img src={sayWhatLogo} alt="SayWhat!" className="h-36 object-contain" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
