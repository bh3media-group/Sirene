import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-perfume.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/20" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-primary-foreground animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-4 leading-tight">
            Discover Your
            <span className="block text-accent">Signature Scent</span>
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-lg">
            Explore our exclusive collection of luxury fragrances and premium beauty products
          </p>
          <Button 
            size="lg" 
            className="bg-accent text-primary hover:bg-accent/90 gold-glow smooth-transition font-medium group"
          >
            Discover Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
