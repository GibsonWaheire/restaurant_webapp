import HeroSection from "@/components/home/HeroSection";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import AboutSection from "@/components/home/AboutSection";
import GallerySection from "@/components/home/GallerySection";
import Testimonials from "@/components/home/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedDishes />
      <AboutSection />
      <GallerySection />
      <Testimonials />
    </div>
  );
};

export default Index;
