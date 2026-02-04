import { Link } from "react-router-dom";
import { Hotel, Car, Map, Clock, Calendar, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TripPlanner from "@/components/booking/TripPlanner";

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
    <section className="py-12 sm:py-16 md:py-20 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <p className="text-primary font-medium tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">VRINDAVAN SERVICES</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Plan Your <span className="gradient-text">Divine Journey</span>
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground mt-4 sm:mt-6 text-base sm:text-lg px-4">
            Let us handle every aspect of your Vrindavan pilgrimage. From comfortable stays to 
            seamless temple visits, we make your spiritual journey truly blessed.
          </p>
        </div>

        {/* Trip Planner - Main Feature */}
        <TripPlanner />

        {/* Services Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {services.map((service) => (
            <Link
              key={service.title}
              to="/services"
              className="card-divine p-3 sm:p-4 text-center hover:border-primary border border-transparent transition-all hover:scale-105 group bg-card"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${service.color} flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-semibold text-xs sm:text-sm mb-1">{service.title}</h4>
              <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-2">{service.description}</p>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link to="/services">
            <Button className="btn-divine text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
              Explore All Services <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center p-4 rounded-xl bg-card/50">
            <div className="font-display text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">500+</div>
            <p className="text-muted-foreground text-xs sm:text-sm">Happy Pilgrims</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-card/50">
            <div className="font-display text-3xl sm:text-4xl font-bold text-secondary mb-1 sm:mb-2">50+</div>
            <p className="text-muted-foreground text-xs sm:text-sm">Partner Hotels</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-card/50">
            <div className="font-display text-3xl sm:text-4xl font-bold text-tulsi mb-1 sm:mb-2">100+</div>
            <p className="text-muted-foreground text-xs sm:text-sm">Temples Covered</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-card/50">
            <div className="font-display text-3xl sm:text-4xl font-bold text-gold-foreground mb-1 sm:mb-2">4.9★</div>
            <p className="text-muted-foreground text-xs sm:text-sm">Customer Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VrindavanServices;
