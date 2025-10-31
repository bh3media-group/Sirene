import TopHeader from "@/components/TopHeader";
import MainHeader from "@/components/MainHeader";
import HeroSection from "@/components/HeroSection";
import CategoryCircles from "@/components/CategoryCircles";
import FlashSales from "@/components/FlashSales";
import PromoBanner from "@/components/PromoBanner";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopHeader />
      <MainHeader />
      <main>
        <HeroSection />
        <CategoryCircles />
        <FlashSales />
        <PromoBanner />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
