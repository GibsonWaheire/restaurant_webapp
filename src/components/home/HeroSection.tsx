import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-amber-600">DineHub</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Experience culinary excellence with our carefully crafted dishes and exceptional service
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
            View Menu
          </Button>
          <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
            Make Reservation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;