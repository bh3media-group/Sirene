import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Heart } from "lucide-react";
import { useEffect, useState } from "react";

const products = [
  { id: 1, name: "Rose Elegance", price: 89.99, originalPrice: 129.99, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400" },
  { id: 2, name: "Midnight Oud", price: 119.99, originalPrice: 159.99, image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400" },
  { id: 3, name: "Citrus Bloom", price: 69.99, originalPrice: 99.99, image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400" },
  { id: 4, name: "Vanilla Dreams", price: 79.99, originalPrice: 109.99, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400" },
];

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 md:mb-0">
            Flash Sales
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Ends in:</span>
            <div className="flex gap-2">
              {[
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Min', value: timeLeft.minutes },
                { label: 'Sec', value: timeLeft.seconds }
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col items-center bg-primary text-primary-foreground px-3 py-2 rounded-md min-w-[50px]">
                  <span className="text-lg font-bold">{value.toString().padStart(2, '0')}</span>
                  <span className="text-xs opacity-80">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden group cursor-pointer elegant-shadow hover:luxury-shadow smooth-transition">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 elegant-transition"
                />
                <button className="absolute top-3 right-3 bg-background/90 p-2 rounded-full hover:bg-accent hover:text-primary smooth-transition">
                  <Heart className="h-4 w-4" />
                </button>
                <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-2 py-1 rounded-md text-xs font-medium">
                  -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2 text-sm md:text-base">{product.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-accent">${product.price}</span>
                  <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                </div>
                <Button className="w-full bg-primary hover:bg-accent hover:text-primary smooth-transition group/btn" size="sm">
                  <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSales;
