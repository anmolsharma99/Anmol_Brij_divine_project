import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="bg-gradient-divine rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-background/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-background/10 rounded-full translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="w-20 h-20 mx-auto bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-8">
              <MessageCircle className="w-10 h-10 text-background" />
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-bold text-background mb-6">
              Need Help? We're Here for You!
            </h2>
            <p className="text-background/80 text-lg mb-8 max-w-xl mx-auto">
              Our dedicated team is available 24/7 to assist you with orders, Vrindavan trip planning, 
              or any spiritual guidance you need.
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-background/90">
                <CheckCircle className="w-5 h-5" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-background/90">
                <CheckCircle className="w-5 h-5" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center gap-2 text-background/90">
                <CheckCircle className="w-5 h-5" />
                <span>Expert Guidance</span>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90 font-semibold px-8">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </Link>
              <a href="tel:+919876543210">
                <Button size="lg" variant="outline" className="border-2 border-background text-background hover:bg-background hover:text-foreground font-semibold px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>

            <p className="text-background/60 text-sm mt-8">
              <Clock className="w-4 h-4 inline mr-1" />
              Average response time: Under 30 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
