import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users } from "lucide-react";

const FeaturedDishes = () => {
  const dishes = [
    {
      name: "Truffle Arancini",
      description: "Crispy risotto balls filled with wild mushrooms and truffle oil, served with aioli",
      price: "$18",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.8,
      prepTime: "15 min",
      category: "Appetizer",
      featured: true
    },
    {
      name: "Wagyu Beef Tenderloin",
      description: "Premium wagyu with truffle reduction, roasted vegetables, and herb jus",
      price: "$85",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.9,
      prepTime: "25 min",
      category: "Main Course",
      featured: true
    },
    {
      name: "Chocolate Soufflé",
      description: "Dark chocolate soufflé with vanilla bean ice cream and berry coulis",
      price: "$16",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.9,
      prepTime: "20 min",
      category: "Dessert",
      featured: true
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Chef's Signature
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Featured <span className="text-amber-600 font-bold">Dishes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience our most celebrated creations, each dish a testament to culinary artistry and exceptional ingredients
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
              <div className="relative overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <Badge className="bg-amber-600 text-white border-0">
                    {dish.category}
                  </Badge>
                  {dish.featured && (
                    <Badge className="bg-red-600 text-white border-0">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium">{dish.rating}</span>
                  </div>
                </div>

                {/* Prep Time */}
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center space-x-1 text-white">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{dish.prepTime}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                    {dish.name}
                  </h3>
                  <span className="text-3xl font-bold text-amber-600">
                    {dish.price}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {dish.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>2-4 people</span>
                    </div>
                  </div>
                  
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300 transform hover:scale-105">
                    Order Now
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience Excellence?</h3>
            <p className="text-xl mb-6 opacity-90">Reserve your table and let us create an unforgettable dining experience</p>
            <button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300 transform hover:scale-105">
              View Full Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
