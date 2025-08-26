import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Food Critic",
      content: "DineHub offers an exceptional dining experience with innovative dishes and impeccable service.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Regular Customer",
      content: "The atmosphere is perfect for special occasions. The staff goes above and beyond to make every visit memorable.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Food Blogger",
      content: "Every dish is a work of art. The attention to detail in both presentation and flavor is outstanding.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-amber-600">Guests Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our valued customers about their dining experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;