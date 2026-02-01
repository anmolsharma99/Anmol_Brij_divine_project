import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const Logo = ({ size = "md", showText = true }: LogoProps) => {
  const sizes = {
    sm: { container: "w-10 h-10", text: "text-lg", sub: "text-[10px]" },
    md: { container: "w-14 h-14", text: "text-2xl", sub: "text-xs" },
    lg: { container: "w-20 h-20", text: "text-4xl", sub: "text-sm" },
  };

  return (
    <Link to="/" className="flex items-center gap-3 group">
      {/* Iconic Logo - Peacock Feather + Om + Lotus Design */}
      <motion.div
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className={`${sizes[size].container} relative`}
      >
        {/* Outer Golden Ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-gold to-primary animate-spin-slow opacity-80" style={{ animationDuration: "8s" }} />
        
        {/* Inner Circle with Peacock Pattern */}
        <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-secondary via-[hsl(180,60%,45%)] to-secondary overflow-hidden">
          {/* Peacock Feather Eye Pattern */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Central Om Symbol */}
            <span className="text-primary-foreground font-display font-bold relative z-10 drop-shadow-lg" style={{ fontSize: size === "lg" ? "2rem" : size === "md" ? "1.5rem" : "1.2rem" }}>
              ॐ
            </span>
          </div>
          
          {/* Decorative Lotus Petals */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-full"
                style={{ transform: `rotate(${i * 45}deg)` }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-3 bg-gradient-to-b from-gold/60 to-transparent rounded-full" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Glowing Effect */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-gold opacity-30 blur-md group-hover:opacity-50 transition-opacity" />
      </motion.div>

      {/* Text */}
      {showText && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <h1 className={`font-display ${sizes[size].text} font-bold leading-tight`}>
            <span className="bg-gradient-to-r from-primary via-gold to-primary bg-clip-text text-transparent">
              ANMOL
            </span>
            <span className="text-secondary ml-1">BRIJ</span>
          </h1>
          <p className={`${sizes[size].sub} text-muted-foreground font-medium tracking-widest`}>
            श्री राधे कृष्ण
          </p>
        </motion.div>
      )}
    </Link>
  );
};

export default Logo;
