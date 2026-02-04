import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactCTA = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto">
        <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 text-center relative overflow-hidden" style={{ background: "var(--gradient-divine)" }}>
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-background/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-background/10 rounded-full translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 sm:mb-8">
              <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-background" />
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4 sm:mb-6">
              Need Help? We're Here for You!
            </h2>
            <p className="text-background/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto">
              Our dedicated team is available 24/7 to assist you with orders, Vrindavan trip planning, 
              or any spiritual guidance you need.
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8 sm:mb-10">
              <div className="flex items-center gap-2 text-background/90 text-sm sm:text-base">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-background/90 text-sm sm:text-base">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center gap-2 text-background/90 text-sm sm:text-base">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>Expert Guidance</span>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-background text-foreground hover:bg-background/90 font-semibold px-6 sm:px-8"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </Link>
              <a href="tel:+919876543210" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-2 border-background text-background hover:bg-background hover:text-foreground font-semibold px-6 sm:px-8"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>

            <p className="text-background/60 text-xs sm:text-sm mt-6 sm:mt-8 flex items-center justify-center gap-1">
              <Clock className="w-4 h-4" />
              Average response time: Under 30 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactCTA.displayName = "ContactCTA";

export default ContactCTA;
