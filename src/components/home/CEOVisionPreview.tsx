import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ceoAnmol from "@/assets/ceo-anmol.jpg";
import radhaKrishna from "@/assets/radha-krishna.jpg";
import heroKrishna from "@/assets/hero-krishna.jpg";

const CEOVisionPreview = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-foreground text-background relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 opacity-10">
        <img src={heroKrishna} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* CEO Image & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-xs sm:max-w-sm mx-auto">
              <img
                src={ceoAnmol}
                alt="Mr. Anmol Sharma - CEO"
                className="w-full aspect-[3/4] object-cover rounded-xl sm:rounded-2xl shadow-2xl border-4 border-primary/30"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-24 sm:h-24 border-2 border-primary/30 rounded-xl sm:rounded-2xl" />
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 border-2 border-primary/30 rounded-xl sm:rounded-2xl" />
            </div>

            {/* Thakur Ji Images */}
            <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <img
                src={radhaKrishna}
                alt="Thakur Ji"
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-primary"
              />
              <img
                src={heroKrishna}
                alt="Thakur Ji"
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-gold"
              />
              <img
                src={radhaKrishna}
                alt="Thakur Ji"
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-primary"
              />
            </div>
          </motion.div>

          {/* Vision Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 order-1 lg:order-2 text-center lg:text-left"
          >
            <div>
              <p className="text-primary font-medium tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">FOUNDER'S VISION</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Meet Our <span className="text-primary">Founder</span>
              </h2>
              <div className="w-20 sm:w-24 h-1 rounded-full mx-auto lg:mx-0" style={{ background: "var(--gradient-divine)" }} />
            </div>

            <div className="relative px-4 sm:px-0">
              <Quote className="absolute -top-2 -left-0 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 text-primary/30" />
              <p className="text-lg sm:text-xl leading-relaxed text-background/80 italic pl-6 sm:pl-8">
                "My dream is to bring the divine essence of Vrindavan to every devotee's doorstep. 
                ANMOL BRIJ is not just a platform—it's a bridge between devotees and the sacred land of Braj."
              </p>
            </div>

            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-left">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-primary mb-1 sm:mb-2">
                Mr. Anmol Sharma
              </h3>
              <p className="text-background/60 text-sm sm:text-base mb-3 sm:mb-4">Founder & CEO, ANMOL BRIJ</p>
              <p className="text-background/70 text-sm leading-relaxed">
                A devoted follower of Shri Krishna and Vrindavan lover, Mr. Anmol Sharma founded 
                ANMOL BRIJ with a vision to make spiritual products and Vrindavan services accessible 
                to devotees worldwide. His mission is to spread the bhakti of Braj to every corner of the world.
              </p>
            </div>

            <div className="pt-2">
              <Link to="/ceo-vision">
                <Button className="btn-divine group">
                  Read Full Vision
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CEOVisionPreview;
