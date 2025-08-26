import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Users, Phone, Mail, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Reservations = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    requests: ""
  });

  const timeSlots = [
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", 
    "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"
  ];

  const guestOptions = ["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5 Guests", "6 Guests", "7+ Guests"];

  const occasionOptions = [
    "Birthday", "Anniversary", "Date Night", "Business Dinner", 
    "Celebration", "Family Gathering", "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.guests) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Reservation Submitted!",
      description: "We'll confirm your reservation within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      occasion: "",
      requests: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-4">
            Make a <span className="text-primary">Reservation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reserve your table for an unforgettable dining experience at DineHub
          </p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Reservation Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-elegant border-0">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-foreground">
                    Reservation Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>Full Name *</span>
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center space-x-2">
                          <Mail className="h-4 w-4" />
                          <span>Email *</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>Phone Number *</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>

                    {/* Reservation Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date" className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>Date *</span>
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => handleInputChange("date", e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>Time *</span>
                        </Label>
                        <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="flex items-center space-x-2">
                          <Users className="h-4 w-4" />
                          <span>Party Size *</span>
                        </Label>
                        <Select value={formData.guests} onValueChange={(value) => handleInputChange("guests", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select guests" />
                          </SelectTrigger>
                          <SelectContent>
                            {guestOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Occasion */}
                    <div className="space-y-2">
                      <Label>Occasion (Optional)</Label>
                      <Select value={formData.occasion} onValueChange={(value) => handleInputChange("occasion", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select occasion" />
                        </SelectTrigger>
                        <SelectContent>
                          {occasionOptions.map((occasion) => (
                            <SelectItem key={occasion} value={occasion}>
                              {occasion}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Special Requests */}
                    <div className="space-y-2">
                      <Label htmlFor="requests">Special Requests</Label>
                      <Textarea
                        id="requests"
                        value={formData.requests}
                        onChange={(e) => handleInputChange("requests", e.target.value)}
                        placeholder="Any dietary restrictions, allergies, or special requests..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" variant="gold" size="lg" className="w-full">
                      Confirm Reservation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Restaurant Info & Policies */}
            <div className="space-y-6">
              <Card className="shadow-elegant border-0">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-foreground">
                    Restaurant Info
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Location</h4>
                    <p className="text-muted-foreground">123 Gourmet Street<br />Culinary District</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Contact</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567<br />info@dinehub.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Dress Code</h4>
                    <p className="text-muted-foreground">Smart Casual to Formal</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant border-0">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-foreground">
                    Reservation Policies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>• Reservations are confirmed within 24 hours</p>
                  <p>• Please arrive within 15 minutes of your reservation time</p>
                  <p>• Cancellations must be made 24 hours in advance</p>
                  <p>• Large parties (8+) may require a deposit</p>
                  <p>• Special dietary requirements can be accommodated with advance notice</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservations;