import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const Logo = ({ size = "md", showText = true }: LogoProps) => {
  const sizes = {
    sm: { container: "w-10 h-10 sm:w-12 sm:h-12", text: "text-base sm:text-lg", sub: "text-[8px] sm:text-[10px]", fontSize: "1.2rem" },
    md: { container: "w-12 h-12 sm:w-14 sm:h-14", text: "text-lg sm:text-xl", sub: "text-[10px] sm:text-xs", fontSize: "1.5rem" },
    lg: { container: "w-16 h-16 sm:w-20 sm:h-20", text: "text-2xl sm:text-3xl", sub: "text-xs sm:text-sm", fontSize: "2rem" },
  };

  return (
    <Link to="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
      {/* Unique ANMOL BRIJ Logo - Diamond with Flute & Peacock Feather */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${sizes[size].container} relative flex-shrink-0`}
      >
        {/* Outer Glowing Aura */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -inset-1 sm:-inset-2 rounded-full bg-gradient-to-r from-primary via-gold to-secondary blur-md opacity-40"
        />
        
        {/* Diamond Shape Background */}
        <div className="absolute inset-0 transform rotate-45 rounded-lg bg-gradient-to-br from-primary via-gold to-primary shadow-lg">
          <div className="absolute inset-[2px] rounded-lg bg-gradient-to-br from-card via-background to-card" />
        </div>
        
        {/* Inner Diamond with Design */}
        <div className="absolute inset-[3px] transform rotate-45 rounded-lg bg-gradient-to-br from-primary/90 via-gold/80 to-secondary/90 overflow-hidden">
          {/* Peacock Feather Eye Pattern */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-full"
                style={{ transform: `rotate(${i * 45}deg)` }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-gradient-to-b from-secondary/80 to-transparent rounded-full" />
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Central Design - Krishna's Flute with A */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span 
            animate={{ 
              textShadow: [
                "0 0 8px hsl(var(--gold))",
                "0 0 16px hsl(var(--gold))",
                "0 0 8px hsl(var(--gold))"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="font-display font-black text-primary-foreground relative z-10 drop-shadow-lg"
            style={{ fontSize: sizes[size].fontSize }}
          >
            अ
          </motion.span>
        </div>
        
        {/* Corner Accent Dots */}
        <div className="absolute -top-0.5 left-1/2 -translate-x-1/2">
          <div className="w-1.5 h-1.5 bg-gradient-to-b from-accent to-accent/50 rounded-full shadow-lg" />
        </div>
        <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2">
          <div className="w-1.5 h-1.5 bg-gradient-to-t from-tulsi to-tulsi/50 rounded-full shadow-lg" />
        </div>
      </motion.div>

      {/* Text - ANMOL BRIJ */}
      {showText && (
        <div className="flex flex-col min-w-0">
          <h1 className={`font-display ${sizes[size].text} font-black leading-none tracking-tight flex items-center gap-1`}>
            <motion.span 
              className="bg-gradient-to-r from-primary via-gold to-accent bg-clip-text text-transparent bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              ANMOL
            </motion.span>
            <span className="text-secondary">BRIJ</span>
          </h1>
          <div className="flex items-center gap-1 mt-0.5">
            <div className="h-px flex-1 bg-gradient-to-r from-primary via-gold to-transparent max-w-[30px]" />
            <p className={`${sizes[size].sub} text-muted-foreground font-medium tracking-wider whitespace-nowrap`}>
              श्री वृन्दावन
            </p>
            <div className="h-px flex-1 bg-gradient-to-l from-primary via-gold to-transparent max-w-[30px]" />
          </div>
        </div>
      )}
    </Link>
  );
};

export default Logo;
