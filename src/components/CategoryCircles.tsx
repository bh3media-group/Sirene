import { Sparkles, Droplet, Flower2, Gift, Star, Heart } from "lucide-react";

const categories = [
  { name: "Perfumes", icon: Sparkles },
  { name: "Skincare", icon: Droplet },
  { name: "Makeup", icon: Flower2 },
  { name: "Gift Sets", icon: Gift },
  { name: "New Arrivals", icon: Star },
  { name: "Bestsellers", icon: Heart },
];

const CategoryCircles = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
          Shop by Category
        </h2>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="flex flex-col items-center gap-3 cursor-pointer group"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-card border-2 border-border flex items-center justify-center group-hover:border-accent group-hover:gold-glow smooth-transition group-hover:scale-110">
                  <Icon className="h-8 w-8 md:h-10 md:w-10 text-accent" />
                </div>
                <p className="text-sm md:text-base font-medium text-center group-hover:text-accent smooth-transition">
                  {category.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryCircles;
