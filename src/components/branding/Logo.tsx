import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const Logo = ({ size = "md", showText = true }: LogoProps) => {
  const sizes = {
    sm: { container: "w-12 h-12", text: "text-lg", sub: "text-[10px]" },
    md: { container: "w-16 h-16", text: "text-2xl", sub: "text-xs" },
    lg: { container: "w-24 h-24", text: "text-4xl", sub: "text-sm" },
  };

  return (
    <Link to="/" className="flex items-center gap-3 group">
      {/* Unique ANMOL BRIJ Logo - Diamond with Flute & Peacock Feather */}
      <motion.div
        whileHover={{ scale: 1.08, rotate: 3 }}
        whileTap={{ scale: 0.95 }}
        className={`${sizes[size].container} relative`}
      >
        {/* Outer Glowing Aura */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary via-gold to-secondary blur-lg opacity-40"
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
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-full"
                style={{ transform: `rotate(${i * 30}deg)` }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-gradient-to-b from-secondary/80 to-transparent rounded-full" />
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Central Design - Krishna's Flute with A */}
        <div className="absolute inset-0 flex items-center justify-center transform -rotate-0">
          {/* Letter A with Flute Design */}
          <div className="relative">
            {/* Main A Letter */}
            <motion.span 
              animate={{ 
                textShadow: [
                  "0 0 10px hsl(var(--gold))",
                  "0 0 20px hsl(var(--gold))",
                  "0 0 10px hsl(var(--gold))"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="font-display font-black text-primary-foreground relative z-10 drop-shadow-lg"
              style={{ fontSize: size === "lg" ? "2.5rem" : size === "md" ? "1.8rem" : "1.4rem" }}
            >
              अ
            </motion.span>
            {/* Flute underneath */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full" />
          </div>
        </div>
        
        {/* Corner Lotus Petals */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2">
          <div className="w-2 h-2 bg-gradient-to-b from-accent to-accent/50 rounded-full shadow-lg" />
        </div>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
          <div className="w-2 h-2 bg-gradient-to-t from-tulsi to-tulsi/50 rounded-full shadow-lg" />
        </div>
        
        {/* Sparkle Effects */}
        <motion.div
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          className="absolute top-1 right-1 w-1.5 h-1.5 bg-primary-foreground rounded-full"
        />
        <motion.div
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
          className="absolute bottom-2 left-2 w-1 h-1 bg-primary-foreground rounded-full"
        />
      </motion.div>

      {/* Text - ANMOL BRIJ */}
      {showText && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <h1 className={`font-display ${sizes[size].text} font-black leading-none tracking-tight`}>
            <motion.span 
              className="bg-gradient-to-r from-primary via-gold to-accent bg-clip-text text-transparent bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              ANMOL
            </motion.span>
            <span className="text-secondary ml-1.5 relative">
              BRIJ
              {/* Peacock feather accent */}
              <svg className="absolute -right-3 -top-1 w-4 h-4 text-gold" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
              </svg>
            </span>
          </h1>
          <div className="flex items-center gap-1.5">
            <div className="h-px flex-1 bg-gradient-to-r from-primary via-gold to-transparent" />
            <p className={`${sizes[size].sub} text-muted-foreground font-medium tracking-[0.2em]`}>
              श्री वृन्दावन धाम
            </p>
            <div className="h-px flex-1 bg-gradient-to-l from-primary via-gold to-transparent" />
          </div>
        </motion.div>
      )}
    </Link>
  );
};

export default Logo;
