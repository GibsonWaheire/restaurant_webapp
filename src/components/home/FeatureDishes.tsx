import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, ChefHat } from "lucide-react";

const FeaturedDishes = () => {
  const dishes = [
    {
      id: 1,
      name: "Wagyu Beef Tenderloin",
      description: "Premium wagyu beef with truffle reduction, seasonal vegetables, and herb-infused jus",
      price: "$85",
      rating: 4.9,
      prepTime: "25 min",
      chef: "Chef Marcus",
      image: "/api/placeholder/400/300",
      badge: "Chef's Special"
    },
    {
      id: 2,
      name: "Pan-Seared Salmon",
      description: "Atlantic salmon with citrus glaze, quinoa pilaf, and roasted asparagus",
      price: "$42",
      rating: 4.8,
      prepTime: "20 min",
      chef: "Chef Elena",
      image: "/api/placeholder/400/300",
      badge: "Popular"
    },
    {
      id: 3,
      name: "Lobster Risotto",
      description: "Creamy arborio rice with fresh lobster, saffron, and microgreens",
      price: "$68",
      rating: 4.9,
      prepTime: "30 min",
      chef: "Chef Antonio",
      image: "/api/placeholder/400/300",
      badge: "Signature"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Dishes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most celebrated creations, crafted with the finest ingredients and unmatched culinary expertise
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {dishes.map((dish) => (
            <Card key={dish.id} className="group overflow-hidden border-0 shadow-elegant hover:shadow-gold transition-all duration-300 hover:-translate-y-2">
              <div className="relative">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold-elegant text-burgundy-deep px-3 py-1 rounded-full text-sm font-medium">
                    {dish.badge}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-gold-elegant text-gold-elegant" />
                    <span className="text-sm font-medium">{dish.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading text-xl font-semibold text-foreground">{dish.name}</h3>
                  <span className="text-lg font-bold text-primary">{dish.price}</span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">{dish.description}</p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{dish.prepTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ChefHat className="h-4 w-4" />
                    <span>{dish.chef}</span>
                  </div>
                </div>
                
                <Button className="w-full" variant="outline">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="gold" size="lg">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;