import HeroSection from "@/components/home/HeroSection";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import Testimonials from "@/components/home/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedDishes />
      <Testimonials />
    </div>
  );
};

export default Index;
