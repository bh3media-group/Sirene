import { Globe, User } from "lucide-react";

const TopHeader = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4">
      <div className="container mx-auto flex justify-between items-center text-xs md:text-sm">
        <div className="flex items-center gap-6">
          <p className="hidden md:block">Free Shipping on Orders Over $100</p>
          <p className="md:hidden">Free Shipping $100+</p>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 hover:text-accent smooth-transition">
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">EN</span>
          </button>
          <button className="flex items-center gap-1 hover:text-accent smooth-transition">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Login / Register</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
