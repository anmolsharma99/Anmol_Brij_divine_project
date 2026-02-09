import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ceoAnmol from "@/assets/ceo-anmol.jpg";
import cofounderSakshi from "@/assets/cofounder-sakshi.jpg";
import radhaKrishna from "@/assets/radha-krishna.jpg";
import heroKrishna from "@/assets/hero-krishna.jpg";

const CEOVisionPreview = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-foreground text-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <img src={heroKrishna} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-primary font-medium tracking-widest text-xs sm:text-sm mb-3">FOUNDERS' VISION</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-primary">Founders</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 rounded-full mx-auto" style={{ background: "var(--gradient-divine)" }} />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* CEO - Anmol Sharma */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative max-w-[200px] mx-auto mb-6">
              <img
                src={ceoAnmol}
                alt="Mr. Anmol Sharma - CEO"
                className="w-full aspect-[3/4] object-cover rounded-xl sm:rounded-2xl shadow-2xl border-4 border-primary/30"
              />
              <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-12 h-12 sm:w-16 sm:h-16 border-2 border-primary/30 rounded-xl" />
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-12 h-12 sm:w-16 sm:h-16 border-2 border-primary/30 rounded-xl" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-primary mb-1">Mr. Anmol Sharma</h3>
            <p className="text-background/60 text-sm mb-4">Founder & CEO, ANMOL BRIJ</p>
            <div className="relative px-4">
              <Quote className="absolute -top-2 left-0 w-6 h-6 text-primary/30" />
              <p className="text-background/80 text-sm sm:text-base italic leading-relaxed pl-6">
                "My dream is to bring the divine essence of Vrindavan to every devotee's doorstep. 
                ANMOL BRIJ is not just a platform—it's a bridge between devotees and the sacred land of Braj."
              </p>
            </div>
          </motion.div>

          {/* Co-Founder - Sakshi Mishra */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-center"
          >
            <div className="relative max-w-[200px] mx-auto mb-6">
              <img
                src={cofounderSakshi}
                alt="Ms. Sakshi Mishra - Co-Founder"
                className="w-full aspect-[3/4] object-cover rounded-xl sm:rounded-2xl shadow-2xl border-4 border-primary/30"
              />
              <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-12 h-12 sm:w-16 sm:h-16 border-2 border-primary/30 rounded-xl" />
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-12 h-12 sm:w-16 sm:h-16 border-2 border-primary/30 rounded-xl" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-primary mb-1">Ms. Sakshi Mishra</h3>
            <p className="text-background/60 text-sm mb-4">Co-Founder, ANMOL BRIJ</p>
            <div className="relative px-4">
              <Quote className="absolute -top-2 left-0 w-6 h-6 text-primary/30" />
              <p className="text-background/80 text-sm sm:text-base italic leading-relaxed pl-6">
                "Every product we send is an offering to Shri Radha-Krishna. Our mission is to spread the 
                bhakti of Braj to every corner of the world with love and authenticity."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Thakur Ji Images */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-8 sm:mt-12">
          <img src={radhaKrishna} alt="Thakur Ji" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-primary" />
          <img src={heroKrishna} alt="Thakur Ji" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-gold" />
          <img src={radhaKrishna} alt="Thakur Ji" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-primary" />
        </div>

        <div className="text-center mt-8">
          <Link to="/ceo-vision">
            <Button className="btn-divine group">
              Read Full Vision
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CEOVisionPreview;
