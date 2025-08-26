import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Award, ChevronDown, Play, Pause } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Restaurant-specific imagery only
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Fine Dining Experience"
    },
    {
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Elegant Restaurant Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Chef's Kitchen"
    },
    {
      url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Artisanal Cuisine"
    },
    {
      url: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Intimate Dining"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % heroImages.length
        );
      }, 6000); // Change image every 6 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, heroImages.length]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
    setIsPlaying(false); // Pause when manually selecting
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70 z-10"></div>
        
        {/* Image Carousel with Ken Burns Effect */}
        <div className="relative w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-110 animate-ken-burns"
                style={{
                  backgroundImage: `url(${image.url})`,
                  animationDelay: `${index * 0.5}s`
                }}
              />
            </div>
          ))}
        </div>

        {/* Carousel Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-amber-400 scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Play/Pause Control */}
        <div className="absolute top-8 right-8 z-20">
          <Button
            variant="ghost"
            size="icon"
            onClick={togglePlayPause}
            className="bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Minimal Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Single Award Badge */}
          <div className="mb-12">
            <div className="inline-flex items-center bg-amber-600/20 text-amber-300 border border-amber-600/30 px-6 py-3 rounded-full backdrop-blur-sm">
              <Award className="w-5 h-5 mr-3" />
              <span className="text-lg font-medium">Michelin Star 2024</span>
            </div>
          </div>

          {/* Minimal Heading */}
          <h1 className={`text-7xl md:text-8xl lg:text-9xl font-light mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="block text-white tracking-tight">DineHub</span>
            <span className="block text-amber-400 text-3xl md:text-4xl lg:text-5xl mt-4 font-light">
              Fine Dining
            </span>
          </h1>

          {/* Single CTA */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-4 text-xl font-light shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link to="/reservations">Reserve Table</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center text-white/40 hover:text-white/60 transition-colors duration-300 cursor-pointer">
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;