import { useState, useEffect } from "react";

interface LayeredHeroBackgroundProps {
  isActive: boolean;
}

const LayeredHeroBackground = ({ isActive }: LayeredHeroBackgroundProps) => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const layeredImages = [
    {
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Fine Dining Experience",
      className: "parallax-slow",
      style: { 
        '--parallax-offset': `${scrollOffset * 0.3}px`,
        top: "10%",
        right: "5%",
        width: "300px",
        height: "200px"
      }
    },
    {
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Restaurant Interior",
      className: "parallax-medium",
      style: { 
        '--parallax-offset': `${scrollOffset * 0.2}px`,
        top: "60%",
        left: "8%",
        width: "250px",
        height: "180px"
      }
    },
    {
      url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
      alt: "Chef's Kitchen",
      className: "parallax-fast",
      style: { 
        '--parallax-offset': `${scrollOffset * 0.1}px`,
        top: "30%",
        left: "70%",
        width: "200px",
        height: "300px"
      }
    },
    {
      url: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      alt: "Intimate Dining",
      className: "parallax-slow",
      style: { 
        '--parallax-offset': `${scrollOffset * 0.25}px`,
        bottom: "15%",
        right: "15%",
        width: "180px",
        height: "150px"
      }
    }
  ];

  if (!isActive) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Main background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
      
      {/* Floating food images with parallax */}
      {layeredImages.map((image, index) => (
        <div
          key={index}
          className={`absolute parallax-layer ${image.className} rounded-lg shadow-2xl opacity-80 hover:opacity-100 transition-opacity duration-300`}
          style={image.style as React.CSSProperties}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
        </div>
      ))}
    </div>
  );
};

export default LayeredHeroBackground;
