import { Link } from "react-router-dom";
import { Hotel, Car, Map, Clock, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import vrindavanTemple from "@/assets/vrindavan-temple.jpg";

const services = [
  {
    icon: Hotel,
    title: "Hotel Booking",
    description: "Comfortable stays near sacred temples",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Car,
    title: "E-Rickshaw & Tempo",
    description: "Easy temple hopping transport",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Map,
    title: "Braj 84 Kos Yatra",
    description: "Complete pilgrimage planning",
    color: "bg-tulsi/10 text-tulsi",
  },
  {
    icon: Clock,
    title: "Darshan Timings",
    description: "Real-time aarti schedules",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Calendar,
    title: "Festival Tours",
    description: "Special Holi & Janmashtami packages",
    color: "bg-gold/10 text-gold-foreground",
  },
  {
    icon: Users,
    title: "Meet Saints",
    description: "Personal sessions with Sadhus",
    color: "bg-primary/10 text-primary",
  },
];

const VrindavanServices = () => {
  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-medium tracking-widest text-sm mb-4">VRINDAVAN SERVICES</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Plan Your <span className="gradient-text">Divine Journey</span>
              </h2>
              <div className="section-divider !mx-0" />
              <p className="text-muted-foreground mt-6 text-lg">
                Let us handle every aspect of your Vrindavan pilgrimage. From comfortable stays to 
                seamless temple visits, we make your spiritual journey truly blessed.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="card-divine p-4 flex items-start gap-3 hover:border-primary border border-transparent transition-colors"
                >
                  <div className={`w-10 h-10 rounded-lg ${service.color} flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{service.title}</h4>
                    <p className="text-xs text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Link to="/services">
                <Button className="btn-divine">
                  Book Your Trip
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="btn-outline-divine">
                  Talk to Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={vrindavanTemple}
                alt="Vrindavan Temple"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-background">
                <p className="text-sm opacity-80 mb-2">MOST POPULAR</p>
                <h3 className="font-display text-2xl font-bold mb-2">
                  Complete Vrindavan Package
                </h3>
                <p className="text-sm opacity-70 mb-4">
                  3 Days, 2 Nights • All 7 Thakur Ji Darshan • Meals Included
                </p>
                <div className="flex items-center gap-4">
                  <span className="font-display text-3xl font-bold text-primary">₹4,999</span>
                  <span className="text-sm line-through opacity-60">₹7,999</span>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-tulsi/10 flex items-center justify-center">
                  <span className="text-2xl">🙏</span>
                </div>
                <div>
                  <p className="font-bold text-lg">500+</p>
                  <p className="text-xs text-muted-foreground">Happy Pilgrims</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VrindavanServices;
