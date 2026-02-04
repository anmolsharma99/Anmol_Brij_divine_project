import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import heroKrishna from "@/assets/hero-krishna.jpg";

const blessings = [
  "श्री बांके बिहारी जी",
  "श्री राधा वल्लभ जी",
  "श्री गोविंद देव जी",
  "श्री राधा रमण जी",
  "श्री राधा दामोदर जी",
  "श्री राधा गोकुलानंद जी",
  "श्री राधा श्यामसुंदर जी",
];

const HeroSection = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [currentBlessing, setCurrentBlessing] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    if (showIntro) {
      const timer = setTimeout(() => {
        if (currentBlessing < blessings.length - 1) {
          setFadeIn(false);
          setTimeout(() => {
            setCurrentBlessing((prev) => prev + 1);
            setFadeIn(true);
          }, 500);
        } else {
          setTimeout(() => setShowIntro(false), 2000);
        }
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentBlessing, showIntro]);

  if (showIntro) {
    return (
      <div className="fixed inset-0 z-50 bg-foreground flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-6 sm:space-y-8 max-w-lg mx-auto">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full flex items-center justify-center animate-glow"
            style={{ background: "var(--gradient-divine)" }}
          >
            <span className="text-3xl sm:text-4xl font-display text-primary-foreground">ॐ</span>
          </motion.div>
          <div className={`transition-all duration-500 ${fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <p className="text-primary text-xs sm:text-sm tracking-widest mb-2">BLESSINGS OF</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-background px-4">
              {blessings[currentBlessing]}
            </h2>
          </div>
          <div className="flex gap-1.5 sm:gap-2 justify-center flex-wrap px-4">
            {blessings.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index <= currentBlessing ? "bg-primary" : "bg-background/30"
                }`}
              />
            ))}
          </div>
          <p className="text-background/60 font-display text-sm sm:text-lg mt-6 sm:mt-8 px-4">
            ✨ Shri Radhe welcomes you to the divine land of Vrindavan ✨
          </p>
          <Button
            variant="ghost"
            onClick={() => setShowIntro(false)}
            className="text-background/60 hover:text-background hover:bg-background/10"
          >
            Skip Intro →
          </Button>
        </div>
      </div>
    );
  }

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroKrishna}
          alt="Divine Krishna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/60 to-foreground/30 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-12 sm:py-16 md:py-20 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl space-y-6 sm:space-y-8"
        >
          <div className="space-y-3 sm:space-y-4">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-primary font-medium tracking-widest text-xs sm:text-sm md:text-base"
            >
              🙏 RADHE RADHE | WELCOME TO
            </motion.p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background leading-tight">
              ANMOL <span className="text-primary">BRIJ</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-background/80 font-light">
              Your Divine Gateway to Vrindavan's Spiritual Treasures
            </p>
          </div>

          <p className="text-background/70 text-base sm:text-lg leading-relaxed max-w-xl">
            Experience the sacred essence of Braj from anywhere. Shop authentic spiritual products, 
            plan your holy pilgrimage, and receive divine blessings of the Seven Thakur Ji.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/shop" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto btn-divine group text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                className="w-full sm:w-auto border-2 border-background text-background hover:bg-background hover:text-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
              >
                Plan Your Visit
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 border-t border-background/20">
            <div className="text-center min-w-[80px]">
              <p className="font-display text-2xl sm:text-3xl font-bold text-primary">10K+</p>
              <p className="text-xs sm:text-sm text-background/60">Happy Devotees</p>
            </div>
            <div className="text-center min-w-[80px]">
              <p className="font-display text-2xl sm:text-3xl font-bold text-primary">500+</p>
              <p className="text-xs sm:text-sm text-background/60">Sacred Products</p>
            </div>
            <div className="text-center min-w-[80px]">
              <p className="font-display text-2xl sm:text-3xl font-bold text-primary">100%</p>
              <p className="text-xs sm:text-sm text-background/60">Authentic Items</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
