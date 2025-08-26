import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Star, Leaf, Flame } from "lucide-react";

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
        image: "/api/placeholder/300/200"
      },
      {
        id: 2,
        name: "Seared Scallops",
        description: "Pan-seared U10 scallops with cauliflower purée and pancetta crisps",
        price: "$24",
        dietary: ["gluten-free"],
        spicy: false,
        rating: 4.9,
        image: "/api/placeholder/300/200"
      },
      {
        id: 3,
        name: "Tuna Tartare",
        description: "Fresh yellowfin tuna with avocado, cucumber, and sesame-ginger dressing",
        price: "$22",
        dietary: ["gluten-free"],
        spicy: true,
        rating: 4.7,
        image: "/api/placeholder/300/200"
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
        image: "/api/placeholder/300/200"
      },
      {
        id: 5,
        name: "Chilean Sea Bass",
        description: "Miso-glazed sea bass with bok choy and shiitake mushroom broth",
        price: "$48",
        dietary: ["gluten-free"],
        spicy: false,
        rating: 4.8,
        image: "/api/placeholder/300/200"
      },
      {
        id: 6,
        name: "Duck Confit",
        description: "Slow-cooked duck leg with cherry gastrique and wild rice pilaf",
        price: "$42",
        dietary: [],
        spicy: false,
        rating: 4.7,
        image: "/api/placeholder/300/200"
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
        image: "/api/placeholder/300/200"
      },
      {
        id: 8,
        name: "Lemon Tart",
        description: "Classic lemon curd tart with shortbread crust and candied lemon zest",
        price: "$14",
        dietary: ["vegetarian"],
        spicy: false,
        rating: 4.6,
        image: "/api/placeholder/300/200"
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
        image: "/api/placeholder/300/200"
      },
      {
        id: 10,
        name: "Wine Selection",
        description: "Curated wines from our sommelier, available by glass or bottle",
        price: "$12-45",
        dietary: [],
        spicy: false,
        rating: 4.7,
        image: "/api/placeholder/300/200"
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Menu</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully crafted dishes, made with the finest ingredients and culinary expertise
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "gold" : "outline"}
                size="lg"
                onClick={() => setActiveCategory(category.id)}
                className="min-w-[140px]"
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems[activeCategory as keyof typeof menuItems]?.map((item) => (
              <Card key={item.id} className="group overflow-hidden border-0 shadow-elegant hover:shadow-gold transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-gold-elegant text-gold-elegant" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-heading text-xl font-semibold text-foreground">{item.name}</h3>
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

                  {/* Dietary Info */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {item.dietary.map((diet) => (
                        <Badge key={diet} variant="secondary" className="flex items-center space-x-1">
                          {getDietaryIcon(diet)}
                          <span className="capitalize">{diet}</span>
                        </Badge>
                      ))}
                      {item.spicy && (
                        <Badge variant="destructive" className="flex items-center space-x-1">
                          <Flame className="h-3 w-3" />
                          <span>Spicy</span>
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button className="w-full group" variant="outline">
                    <Plus className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-gold rounded-2xl p-8 text-burgundy-deep">
              <h3 className="font-heading text-2xl font-bold mb-4">
                Ready to Experience DineHub?
              </h3>
              <p className="mb-6">Make a reservation and let us create an unforgettable dining experience for you.</p>
              <Button variant="elegant" size="lg">
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