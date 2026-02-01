import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Hotel, Car, Map, Calendar, Users, Clock, CheckCircle, ArrowRight, Phone, CreditCard, Shield, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import TripPlanner from "@/components/booking/TripPlanner";
import vrindavanTemple from "@/assets/vrindavan-temple.jpg";

const services = [
  {
    icon: Hotel,
    title: "Hotel Booking",
    description: "Premium accommodations near all major temples. AC/Non-AC options available.",
    price: "From ₹999/night",
    features: ["Near Banke Bihari", "24/7 Room Service", "Prasad Available", "Temple View"],
  },
  {
    icon: Car,
    title: "E-Rickshaw & Tempo",
    description: "Comfortable temple hopping with experienced local drivers.",
    price: "From ₹199/trip",
    features: ["Hourly Booking", "Full Day Package", "AC Tempo", "Multi-Temple Route"],
  },
  {
    icon: Map,
    title: "Braj 84 Kos Yatra",
    description: "Complete pilgrimage covering all 84 sacred kos of Braj Mandal.",
    price: "From ₹4,999",
    features: ["3-7 Day Options", "Expert Guide", "All Meals", "AC Transport"],
  },
  {
    icon: Calendar,
    title: "Festival Packages",
    description: "Special packages for Holi, Janmashtami, and other festivals.",
    price: "From ₹7,999",
    features: ["VIP Darshan", "Cultural Programs", "Photography", "Festive Meals"],
  },
  {
    icon: Users,
    title: "Meet Saints",
    description: "Personal sessions with revered Sadhus and spiritual teachers.",
    price: "On Request",
    features: ["Private Session", "Group Satsang", "Q&A Time", "Blessings"],
  },
  {
    icon: Clock,
    title: "Custom Itinerary",
    description: "Personalized trip planning based on your preferences and time.",
    price: "Free Consultation",
    features: ["Flexible Schedule", "Personal Guide", "Special Requests", "24/7 Support"],
  },
];

const Services = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const bookingData = location.state?.booking;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: bookingData?.guests || "2",
    package: bookingData?.package || "",
    specialRequests: "",
  });

  const [step, setStep] = useState(bookingData ? 2 : 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "🙏 Booking Confirmed!",
      description: "Our team will contact you within 24 hours to finalize your divine journey.",
    });

    // Reset and show success
    setStep(3);
  };

  const handleServiceBook = (serviceTitle: string) => {
    toast({
      title: `${serviceTitle} Selected! 🙏`,
      description: "Scroll down to complete your booking details.",
    });
    setFormData({ ...formData, package: serviceTitle });
    setStep(2);
    
    // Scroll to booking form
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-[50vh] flex items-center">
        <img src={vrindavanTemple} alt="Vrindavan" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/50" />
        <div className="container relative z-10 text-background">
          <Badge className="bg-primary text-primary-foreground mb-4">VRINDAVAN SERVICES</Badge>
          <h1 className="font-display text-5xl font-bold mb-4">
            Plan Your <span className="text-primary">Divine Journey</span>
          </h1>
          <p className="text-xl text-background/80 max-w-xl">
            Let us make your Vrindavan pilgrimage memorable. Book hotels, transport, and complete trip packages.
          </p>
        </div>
      </div>

      {/* Trip Planner Section */}
      <section className="py-16 container">
        <TripPlanner />
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">Our <span className="gradient-text">Services</span></h2>
            <div className="section-divider" />
            <p className="text-muted-foreground mt-4">Everything you need for the perfect Vrindavan experience</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="hover:border-primary border border-transparent transition-all hover:shadow-lg group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-display text-xl">{service.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-primary font-bold text-lg">{service.price}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-tulsi" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => handleServiceBook(service.title)}
                    className="w-full btn-divine mt-4"
                  >
                    Book Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="py-20">
        <div className="container max-w-4xl">
          {step === 3 ? (
            <Card className="text-center py-12">
              <CardContent>
                <div className="w-20 h-20 bg-tulsi/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-tulsi" />
                </div>
                <h2 className="font-display text-3xl font-bold mb-4">Booking Confirmed! 🙏</h2>
                <p className="text-muted-foreground mb-6">
                  Thank you for choosing ANMOL BRIJ for your spiritual journey. Our team will contact you within 24 hours.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button onClick={() => navigate("/")} variant="outline">
                    Back to Home
                  </Button>
                  <Button onClick={() => setStep(1)} className="btn-divine">
                    Book Another Trip
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="font-display text-3xl text-center">
                  Complete Your <span className="gradient-text">Booking</span>
                </CardTitle>
                <p className="text-muted-foreground text-center">
                  {bookingData ? "Complete your details to confirm" : "Fill the form and our team will contact you within 24 hours"}
                </p>
              </CardHeader>
              <CardContent>
                {/* Booking Summary if coming from trip planner */}
                {bookingData && (
                  <div className="bg-muted rounded-xl p-6 mb-8">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      Your Selected Trip
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Package</p>
                        <p className="font-medium capitalize">{bookingData.package.replace("-", " ")}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Guests</p>
                        <p className="font-medium">{bookingData.guests}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Duration</p>
                        <p className="font-medium">{bookingData.pricing?.days} Days</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Total</p>
                        <p className="font-bold text-primary">₹{bookingData.pricing?.finalTotal?.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name" 
                      value={formData.name} 
                      onChange={(e) => setFormData({...formData, name: e.target.value})} 
                      placeholder="Enter your name" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      value={formData.phone} 
                      onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                      placeholder="+91 98765 43210" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={(e) => setFormData({...formData, email: e.target.value})} 
                      placeholder="your@email.com" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Select value={formData.guests} onValueChange={(v) => setFormData({...formData, guests: v})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 8, 10, 15, 20].map((n) => (
                          <SelectItem key={n} value={n.toString()}>
                            {n} {n === 1 ? "Guest" : "Guests"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="requests">Special Requests</Label>
                    <Textarea 
                      id="requests"
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                      placeholder="Any special requirements, dietary preferences, mobility needs, etc."
                      rows={3}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Button type="submit" className="w-full btn-divine text-lg py-6">
                      Confirm Booking <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </form>

                {/* Trust Badges */}
                <div className="mt-8 pt-8 border-t border-border grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Shield className="w-6 h-6 text-tulsi mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Secure Booking</p>
                  </div>
                  <div className="text-center">
                    <CreditCard className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Pay Later Option</p>
                  </div>
                  <div className="text-center">
                    <Headphones className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">24/7 Support</p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-muted-foreground mb-2">Need immediate assistance?</p>
                  <a href="tel:+919876543210" className="inline-flex items-center gap-2 text-primary font-semibold text-lg">
                    <Phone className="w-5 h-5" />
                    +91 98765 43210
                  </a>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
