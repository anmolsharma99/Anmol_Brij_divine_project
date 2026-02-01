import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Hotel, Car, Map, Calendar, Users, Clock, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
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

const packages = [
  {
    id: 1,
    name: "Divine Day Trip",
    duration: "1 Day",
    price: 1499,
    originalPrice: 2499,
    features: ["All 7 Thakur Ji Darshan", "E-Rickshaw Transport", "Temple Guide", "Prasad Lunch"],
  },
  {
    id: 2,
    name: "Weekend Pilgrimage",
    duration: "2 Days, 1 Night",
    price: 3499,
    originalPrice: 4999,
    features: ["Hotel Stay", "Morning & Evening Aarti", "Yamuna Boat Ride", "All Meals", "Temple Visit"],
    popular: true,
  },
  {
    id: 3,
    name: "Complete Vrindavan",
    duration: "3 Days, 2 Nights",
    price: 4999,
    originalPrice: 7999,
    features: ["Premium Hotel", "All Major Temples", "84 Kos Partial", "Meet Sadhu", "Photography", "All Meals"],
  },
];

const Services = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dates: "",
    package: "",
    guests: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Received! 🙏",
      description: "Our team will contact you within 24 hours to confirm your trip.",
    });
    setFormData({ name: "", phone: "", email: "", dates: "", package: "", guests: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-[50vh] flex items-center">
        <img src={vrindavanTemple} alt="Vrindavan" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/50" />
        <div className="container relative z-10 text-background">
          <p className="text-primary font-medium tracking-widest text-sm mb-4">VRINDAVAN SERVICES</p>
          <h1 className="font-display text-5xl font-bold mb-4">
            Plan Your <span className="text-primary">Divine Journey</span>
          </h1>
          <p className="text-xl text-background/80 max-w-xl">
            Let us make your Vrindavan pilgrimage memorable. Book hotels, transport, and complete trip packages.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">Our <span className="gradient-text">Services</span></h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="card-divine hover:border-primary border border-transparent transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <p className="text-primary font-bold mb-4">{service.price}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-tulsi" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">Popular <span className="gradient-text">Packages</span></h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className={`card-divine relative ${pkg.popular ? "border-2 border-primary" : ""}`}>
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground mb-4">{pkg.duration}</p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-display text-4xl font-bold text-primary">₹{pkg.price}</span>
                  <span className="text-muted-foreground line-through">₹{pkg.originalPrice}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-tulsi" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${pkg.popular ? "btn-divine" : "btn-outline-divine"}`}>
                  Book Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="card-divine">
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl font-bold mb-2">Book Your <span className="gradient-text">Trip</span></h2>
              <p className="text-muted-foreground">Fill the form and our team will contact you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Enter your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="+91 98765 43210" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="your@email.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dates">Preferred Dates</Label>
                <Input id="dates" value={formData.dates} onChange={(e) => setFormData({...formData, dates: e.target.value})} placeholder="e.g., 15-17 March 2024" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="guests">Number of Guests</Label>
                <Input id="guests" type="number" value={formData.guests} onChange={(e) => setFormData({...formData, guests: e.target.value})} placeholder="2" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="package">Preferred Package</Label>
                <Input id="package" value={formData.package} onChange={(e) => setFormData({...formData, package: e.target.value})} placeholder="e.g., Weekend Pilgrimage" />
              </div>
              <div className="md:col-span-2">
                <Button type="submit" className="w-full btn-divine text-lg py-6">
                  Submit Booking Request
                </Button>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground mb-2">Need immediate assistance?</p>
              <a href="tel:+919876543210" className="inline-flex items-center gap-2 text-primary font-semibold">
                <Phone className="w-5 h-5" />
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
