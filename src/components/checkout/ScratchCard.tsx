import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Sparkles, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScratchCoupon } from "@/contexts/CartContext";

const REWARDS: ScratchCoupon[] = [
  { code: "RADHE10", discount: 10, type: "percent", label: "10% OFF" },
  { code: "KRISHNA15", discount: 15, type: "percent", label: "15% OFF" },
  { code: "BRIJ50", discount: 50, type: "flat", label: "₹50 OFF" },
  { code: "DIVINE20", discount: 20, type: "percent", label: "20% OFF" },
  { code: "VRINDAVAN100", discount: 100, type: "flat", label: "₹100 OFF" },
];

interface ScratchCardProps {
  onReveal: (coupon: ScratchCoupon) => void;
}

const ScratchCard = ({ onReveal }: ScratchCardProps) => {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [reward] = useState(() => REWARDS[Math.floor(Math.random() * REWARDS.length)]);
  const scratchCount = useRef(0);

  const handleScratch = () => {
    scratchCount.current++;
    if (scratchCount.current >= 3 && !revealed) {
      setRevealed(true);
      onReveal(reward);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(reward.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-full max-w-sm mx-auto"
    >
      <div className="text-center mb-4">
        <Gift className="w-8 h-8 text-primary mx-auto mb-2" />
        <h3 className="font-display text-lg font-bold">🎁 Scratch Card from ANMOL BRIJ!</h3>
        <p className="text-sm text-muted-foreground">Tap multiple times to reveal your reward</p>
      </div>

      <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30">
        {/* Revealed content */}
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center min-h-[160px] flex flex-col items-center justify-center">
          <AnimatePresence>
            {revealed ? (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Sparkles className="w-10 h-10 text-primary mx-auto mb-2" />
                <p className="font-display text-3xl font-bold text-primary mb-1">{reward.label}</p>
                <p className="text-sm text-muted-foreground mb-3">Use code on your next order</p>
                <div className="flex items-center gap-2 justify-center bg-card rounded-lg px-4 py-2 border border-border">
                  <code className="font-mono font-bold text-lg text-primary">{reward.code}</code>
                  <button onClick={handleCopy} className="p-1 hover:bg-muted rounded">
                    {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
                  </button>
                </div>
              </motion.div>
            ) : (
              <p className="text-muted-foreground/50 text-sm">🎁 Your reward is hidden here!</p>
            )}
          </AnimatePresence>
        </div>

        {/* Scratch overlay */}
        {!revealed && (
          <motion.div
            className="absolute inset-0 cursor-pointer select-none flex items-center justify-center"
            style={{
              background: "repeating-linear-gradient(45deg, hsl(var(--primary)), hsl(var(--primary)) 10px, hsl(var(--primary)/0.8) 10px, hsl(var(--primary)/0.8) 20px)",
            }}
            onClick={handleScratch}
            onTouchStart={handleScratch}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-center text-primary-foreground">
              <Gift className="w-12 h-12 mx-auto mb-2 animate-bounce" />
              <p className="font-display text-xl font-bold">TAP TO SCRATCH!</p>
              <p className="text-sm opacity-80">ANMOL BRIJ Reward Card</p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ScratchCard;
