import { Button } from "@/components/ui/button";
import bannerImage from "@/assets/banner-lifestyle.jpg";

const PromoBanner = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden elegant-shadow">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bannerImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
          </div>
          
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-8">
              <div className="max-w-lg">
                <p className="text-accent text-sm md:text-base font-medium mb-2 uppercase tracking-wider">
                  Limited Edition
                </p>
                <h3 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
                  Summer Collection 2025
                </h3>
                <p className="text-primary-foreground/90 mb-6 text-sm md:text-base">
                  Discover our exclusive fragrances inspired by Mediterranean gardens
                </p>
                <Button className="bg-accent text-primary hover:bg-accent/90 gold-glow smooth-transition">
                  Shop Collection
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
