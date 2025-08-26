import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Award, Users } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Food Critic",
      company: "Culinary Times",
      content: "DineHub redefines fine dining with their innovative approach to traditional cuisine. Every dish is a masterpiece, and the service is absolutely impeccable. This is what Michelin-starred dining should be.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      verified: true
    },
    {
      name: "Michael Chen",
      role: "Regular Customer",
      company: "Local Business Owner",
      content: "I've been coming to DineHub for three years, and every visit exceeds my expectations. The atmosphere is perfect for special occasions, and the staff goes above and beyond to make every moment memorable.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      verified: true
    },
    {
      name: "Emily Rodriguez",
      role: "Food Blogger",
      company: "Taste & Travel",
      content: "As a food blogger, I've dined at hundreds of restaurants worldwide. DineHub stands out for their attention to detail in both presentation and flavor. Every dish tells a story, and every bite is an experience.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      verified: true
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-amber-600/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Quote className="w-4 h-4 mr-2" />
            Guest Reviews
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            What Our <span className="text-amber-400 font-bold">Guests Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover why our guests return time and again for exceptional dining experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-amber-400" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-200 mb-8 text-center leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-center">
                    <div className="flex items-center space-x-2">
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      {testimonial.verified && (
                        <Badge className="bg-green-600/20 text-green-400 border-green-400/30 text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-amber-400 text-sm font-medium">{testimonial.role}</p>
                    <p className="text-gray-400 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">4.9</h3>
            <p className="text-gray-300">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">2,500+</h3>
            <p className="text-gray-300">Happy Guests</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">12</h3>
            <p className="text-gray-300">Awards Won</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Quote className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">98%</h3>
            <p className="text-gray-300">Would Recommend</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;