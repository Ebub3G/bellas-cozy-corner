
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="hero-text mb-6">
            Welcome to Bella's Café
          </h1>
          <p className="hero-subtitle mb-8 max-w-2xl mx-auto">
            Where every cup tells a story and every moment feels like home. 
            Experience the finest coffee and pastries in our cozy neighborhood café.
          </p>
          <button 
            onClick={scrollToMenu}
            className="hero-cta inline-flex items-center space-x-2"
          >
            <span>Explore Our Menu</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
