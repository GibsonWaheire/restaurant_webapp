import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Clock, Star } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Award, label: "Awards Won", value: "12+" },
    { icon: Users, label: "Happy Customers", value: "50K+" },
    { icon: Clock, label: "Years Experience", value: "15+" },
    { icon: Star, label: "Average Rating", value: "4.9" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Our Story
            </div>
            
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8">
              Crafting <span className="text-amber-600 font-bold">Culinary</span> Excellence
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Founded in 2008 by Chef Marcus Chen, DineHub has been at the forefront of fine dining innovation. 
                Our commitment to culinary excellence and exceptional service has earned us recognition as one of 
                the city's most prestigious dining destinations.
              </p>
              
              <p>
                Every dish tells a story of passion, precision, and the finest ingredients sourced from local 
                artisans and global suppliers. We believe that dining is not just about food—it's about creating 
                memories that last a lifetime.
              </p>
              
              <p>
                Our team of world-class chefs, sommeliers, and service professionals work together to deliver 
                an unparalleled experience that celebrates the art of fine dining.
              </p>
            </div>

            {/* Chef Quote */}
            <div className="mt-12 p-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border-l-4 border-amber-600">
              <blockquote className="text-xl italic text-gray-700 mb-4">
                "Cooking is an art, but all art requires knowing something about the techniques and materials."
              </blockquote>
              <cite className="text-amber-600 font-semibold">— Chef Marcus Chen, Executive Chef & Founder</cite>
            </div>
          </div>

          {/* Image and Stats */}
          <div className="space-y-8">
            {/* Main Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Chef Marcus Chen in the kitchen"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6">
                <Badge className="bg-white/90 text-gray-900 px-4 py-2 text-sm font-medium">
                  <Star className="w-4 h-4 mr-2 fill-amber-400 text-amber-400" />
                  Michelin Star Chef
                </Badge>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-amber-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
