import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="h-12 w-12 text-accent mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">
            Subscribe for Exclusive Offers
          </h2>
          <p className="text-muted-foreground mb-8 text-sm md:text-base">
            Join our community and be the first to know about new arrivals, special promotions, and luxury beauty tips
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-background border-border"
            />
            <Button className="bg-accent text-primary hover:bg-accent/90 gold-glow smooth-transition">
              Subscribe
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
