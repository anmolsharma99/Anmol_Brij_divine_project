import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tag, Check, X, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CouponCodeProps {
  onApplyCoupon: (discount: number, code: string) => void;
  onRemoveCoupon: () => void;
  appliedCoupon: string | null;
}

const validCoupons: Record<string, { discount: number; minOrder: number; type: "percent" | "flat"; description: string }> = {
  "RADHE10": { discount: 10, minOrder: 500, type: "percent", description: "10% off on orders above ₹500" },
  "KRISHNA15": { discount: 15, minOrder: 1000, type: "percent", description: "15% off on orders above ₹1000" },
  "VRINDAVAN20": { discount: 20, minOrder: 2000, type: "percent", description: "20% off on orders above ₹2000" },
  "FIRST100": { discount: 100, minOrder: 599, type: "flat", description: "₹100 off on your first order" },
  "DHAM50": { discount: 50, minOrder: 0, type: "flat", description: "Flat ₹50 off on all orders" },
  "HOLI25": { discount: 25, minOrder: 1500, type: "percent", description: "Holi Special - 25% off" },
  "JANMASHTAMI": { discount: 30, minOrder: 2000, type: "percent", description: "Janmashtami Special - 30% off" },
};

const CouponCode = ({ onApplyCoupon, onRemoveCoupon, appliedCoupon }: CouponCodeProps) => {
  const [couponInput, setCouponInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showCoupons, setShowCoupons] = useState(false);
  const { toast } = useToast();

  const applyCoupon = (code: string) => {
    const upperCode = code.toUpperCase().trim();
    setIsLoading(true);

    setTimeout(() => {
      const coupon = validCoupons[upperCode];
      
      if (coupon) {
        onApplyCoupon(coupon.discount, upperCode);
        setCouponInput("");
        toast({
          title: "Coupon Applied! 🎉",
          description: coupon.description,
        });
      } else {
        toast({
          title: "Invalid Coupon",
          description: "This coupon code is not valid or has expired.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 500);
  };

  const removeCoupon = () => {
    onRemoveCoupon();
    toast({
      title: "Coupon Removed",
      description: "The coupon has been removed from your order.",
    });
  };

  return (
    <div className="space-y-4">
      {/* Applied Coupon */}
      {appliedCoupon && (
        <div className="flex items-center justify-between bg-tulsi/10 border border-tulsi/30 rounded-lg px-4 py-3">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-tulsi" />
            <div>
              <span className="font-semibold text-tulsi">{appliedCoupon}</span>
              <p className="text-xs text-muted-foreground">{validCoupons[appliedCoupon]?.description}</p>
            </div>
          </div>
          <button onClick={removeCoupon} className="text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Coupon Input */}
      {!appliedCoupon && (
        <>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Enter coupon code"
                value={couponInput}
                onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                className="pl-10 uppercase"
              />
            </div>
            <Button
              onClick={() => applyCoupon(couponInput)}
              disabled={!couponInput.trim() || isLoading}
              className="btn-divine"
            >
              {isLoading ? "Applying..." : "Apply"}
            </Button>
          </div>

          {/* Show Available Coupons Toggle */}
          <button
            onClick={() => setShowCoupons(!showCoupons)}
            className="flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <Sparkles className="w-4 h-4" />
            {showCoupons ? "Hide available coupons" : "View available coupons"}
          </button>

          {/* Available Coupons List */}
          {showCoupons && (
            <div className="space-y-2 border border-border rounded-lg p-4 bg-muted/50">
              <p className="text-sm font-semibold mb-3">🎁 Available Coupons</p>
              {Object.entries(validCoupons).map(([code, details]) => (
                <div
                  key={code}
                  className="flex items-center justify-between bg-card rounded-lg px-3 py-2 border border-border"
                >
                  <div>
                    <span className="font-mono font-bold text-primary">{code}</span>
                    <p className="text-xs text-muted-foreground">{details.description}</p>
                    {details.minOrder > 0 && (
                      <p className="text-xs text-muted-foreground">Min order: ₹{details.minOrder}</p>
                    )}
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => applyCoupon(code)}
                    className="text-xs"
                  >
                    Apply
                  </Button>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CouponCode;
