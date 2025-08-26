import { Card, CardContent } from "@/components/ui/card";

const FeaturedDishes = () => {
  const dishes = [
    {
      name: "Truffle Arancini",
      description: "Crispy risotto balls filled with wild mushrooms and truffle oil",
      price: "$18",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Wagyu Beef Tenderloin",
      description: "Premium wagyu with truffle reduction and roasted vegetables",
      price: "$85",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Chocolate Soufflé",
      description: "Dark chocolate soufflé with vanilla bean ice cream",
      price: "$16",
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-amber-600">Dishes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our signature dishes crafted with the finest ingredients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Image Placeholder</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{dish.name}</h3>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <p className="text-2xl font-bold text-amber-600">{dish.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
