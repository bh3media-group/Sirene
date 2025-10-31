import { Search, Heart, ShoppingBag, User } from "lucide-react";
import { Input } from "@/components/ui/input";

const MainHeader = () => {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-wider">
              SIRENE
            </h1>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for products..."
                className="pl-10 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-accent"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="relative hover:text-accent smooth-transition" aria-label="Wishlist">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-accent text-primary text-xs w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </button>
            
            <button className="relative hover:text-accent smooth-transition" aria-label="Shopping Cart">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-accent text-primary text-xs w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </button>
            
            <button className="hidden sm:block hover:text-accent smooth-transition" aria-label="Profile">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="md:hidden mt-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 bg-muted/50 border-0"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
