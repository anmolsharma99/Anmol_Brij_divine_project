import { Link } from "react-router-dom";
import { Hotel, Car, Map, Clock, Calendar, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TripPlanner from "@/components/booking/TripPlanner";
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
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-widest text-sm mb-4">VRINDAVAN SERVICES</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Plan Your <span className="gradient-text">Divine Journey</span>
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground mt-6 text-lg">
            Let us handle every aspect of your Vrindavan pilgrimage. From comfortable stays to 
            seamless temple visits, we make your spiritual journey truly blessed.
          </p>
        </div>

        {/* Trip Planner - Main Feature */}
        <TripPlanner />

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service) => (
            <Link
              key={service.title}
              to="/services"
              className="card-divine p-4 text-center hover:border-primary border border-transparent transition-all hover:scale-105 group"
            >
              <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-sm mb-1">{service.title}</h4>
              <p className="text-xs text-muted-foreground">{service.description}</p>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link to="/services">
            <Button className="btn-divine text-lg px-8 py-6">
              Explore All Services <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="font-display text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground text-sm">Happy Pilgrims</p>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl font-bold text-secondary mb-2">50+</div>
            <p className="text-muted-foreground text-sm">Partner Hotels</p>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl font-bold text-tulsi mb-2">100+</div>
            <p className="text-muted-foreground text-sm">Temples Covered</p>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl font-bold text-gold-foreground mb-2">4.9★</div>
            <p className="text-muted-foreground text-sm">Customer Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VrindavanServices;
