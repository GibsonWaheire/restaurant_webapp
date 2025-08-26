import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, MapPin, Users, Utensils } from "lucide-react";

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All", icon: Camera },
    { id: "food", name: "Food", icon: Utensils },
    { id: "interior", name: "Interior", icon: MapPin },
    { id: "events", name: "Events", icon: Users }
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Signature Wagyu Steak",
      category: "food",
      title: "Signature Wagyu Steak",
      description: "Perfectly seared with truffle butter"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Fine Dining Experience",
      category: "interior",
      title: "Elegant Dining Room",
      description: "Intimate atmosphere for special occasions"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Artisanal Pasta",
      category: "food",
      title: "Handmade Pasta",
      description: "Fresh ingredients, traditional techniques"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Restaurant Interior",
      category: "interior",
      title: "Modern Interior",
      description: "Contemporary design meets classic elegance"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Chef's Dessert",
      category: "food",
      title: "Artisanal Desserts",
      description: "Sweet endings to perfect meals"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Intimate Dining",
      category: "interior",
      title: "Private Dining",
      description: "Exclusive spaces for special moments"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Wine Selection",
      category: "food",
      title: "Wine Collection",
      description: "Curated selection from renowned vineyards"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Chef's Kitchen",
      category: "interior",
      title: "Open Kitchen",
      description: "Watch our chefs create culinary masterpieces"
    }
  ];

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Camera className="w-4 h-4 mr-2" />
            Visual Journey
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Our <span className="text-amber-600 font-bold">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take a visual journey through our restaurant, from our elegant dining spaces to our culinary creations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-amber-50 hover:text-amber-600 border border-gray-200'
              }`}
            >
              <category.icon className="w-5 h-5 mr-2" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <Card 
              key={image.id} 
              className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                index === 0 || index === 7 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-gray-900 border-0 capitalize">
                    {image.category}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Experience It Yourself</h3>
            <p className="text-xl mb-6 opacity-90">Book a table and immerse yourself in our world of culinary excellence</p>
            <button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300 transform hover:scale-105">
              Make a Reservation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
