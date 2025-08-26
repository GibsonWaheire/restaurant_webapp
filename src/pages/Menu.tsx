import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Star, Leaf, Flame, Utensils } from "lucide-react";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("starters");

  const categories = [
    { id: "starters", name: "Starters", icon: "🥗" },
    { id: "mains", name: "Main Course", icon: "🥩" },
    { id: "desserts", name: "Desserts", icon: "🍰" },
    { id: "drinks", name: "Beverages", icon: "🍷" },
  ];

  const menuItems = {
    starters: [
      {
        id: 1,
        name: "Truffle Arancini",
        description: "Crispy risotto balls filled with wild mushrooms and truffle oil, served with aioli",
        price: "$18",
        dietary: ["vegetarian"],
        spicy: false,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 2,
        name: "Seared Scallops",
        description: "Pan-seared U10 scallops with cauliflower purée and pancetta crisps",
        price: "$24",
        dietary: ["gluten-free"],
        spicy: false,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 3,
        name: "Tuna Tartare",
        description: "Fresh yellowfin tuna with avocado, cucumber, and sesame-ginger dressing",
        price: "$22",
        dietary: ["gluten-free"],
        spicy: true,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      }
    ],
    mains: [
      {
        id: 4,
        name: "Wagyu Beef Tenderloin",
        description: "Premium wagyu with truffle reduction, roasted vegetables, and herb jus",
        price: "$85",
        dietary: ["gluten-free"],
        spicy: false,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 5,
        name: "Chilean Sea Bass",
        description: "Miso-glazed sea bass with bok choy and shiitake mushroom broth",
        price: "$48",
        dietary: ["gluten-free"],
        spicy: false,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 6,
        name: "Duck Confit",
        description: "Slow-cooked duck leg with cherry gastrique and wild rice pilaf",
        price: "$42",
        dietary: [],
        spicy: false,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      }
    ],
    desserts: [
      {
        id: 7,
        name: "Chocolate Soufflé",
        description: "Dark chocolate soufflé with vanilla bean ice cream and berry coulis",
        price: "$16",
        dietary: ["vegetarian"],
        spicy: false,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 8,
        name: "Lemon Tart",
        description: "Classic lemon curd tart with shortbread crust and candied lemon zest",
        price: "$14",
        dietary: ["vegetarian"],
        spicy: false,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      }
    ],
    drinks: [
      {
        id: 9,
        name: "Signature Cocktail",
        description: "House special with premium spirits and fresh botanicals",
        price: "$16",
        dietary: [],
        spicy: false,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 10,
        name: "Wine Selection",
        description: "Curated wines from our sommelier, available by glass or bottle",
        price: "$12-45",
        dietary: [],
        spicy: false,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      }
    ]
  };

  const getDietaryIcon = (dietary: string) => {
    switch (dietary) {
      case "vegetarian":
        return <Leaf className="h-4 w-4 text-green-600" />;
      case "gluten-free":
        return <span className="text-blue-600 font-bold text-xs">GF</span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-amber-600/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Utensils className="w-4 h-4 mr-2" />
            Culinary Excellence
          </div>
          <h1 className="text-6xl md:text-7xl font-light text-white mb-6">
            Our <span className="text-amber-400 font-bold">Menu</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully crafted dishes, made with the finest ingredients and culinary expertise
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="lg"
                onClick={() => setActiveCategory(category.id)}
                className={`min-w-[160px] ${
                  activeCategory === category.id 
                    ? 'bg-amber-600 hover:bg-amber-700 text-white' 
                    : 'border-amber-600 text-amber-600 hover:bg-amber-50'
                }`}
              >
                <span className="mr-2 text-lg">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems[activeCategory as keyof typeof menuItems]?.map((item) => (
              <Card key={item.id} className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <span className="text-2xl font-bold text-amber-600">{item.price}</span>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>

                  {/* Dietary Info */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      {item.dietary.map((diet) => (
                        <Badge key={diet} variant="secondary" className="flex items-center space-x-1 bg-gray-100 text-gray-700">
                          {getDietaryIcon(diet)}
                          <span className="capitalize text-xs">{diet}</span>
                        </Badge>
                      ))}
                      {item.spicy && (
                        <Badge className="flex items-center space-x-1 bg-red-100 text-red-700">
                          <Flame className="h-3 w-3" />
                          <span className="text-xs">Spicy</span>
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white group">
                    <Plus className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Add to Order
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Experience Excellence?</h3>
              <p className="text-xl mb-6 opacity-90">Make a reservation and let us create an unforgettable dining experience for you.</p>
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
                Book Your Table
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;