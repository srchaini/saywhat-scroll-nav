import backgroundImage from '@/assets/background.png';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-[400px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/30" />
    </section>
  );
};

export default HeroSection;
