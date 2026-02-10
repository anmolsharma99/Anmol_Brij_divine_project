import { useState } from "react";
import { useLocation, Link, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { CheckCircle2, Home, ShoppingCart, Stamp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ceoAnmol from "@/assets/ceo-anmol.jpg";
import cofounderSakshi from "@/assets/cofounder-sakshi.jpg";
import ScratchCard from "@/components/checkout/ScratchCard";
import { useCart, ScratchCoupon, CartItem } from "@/contexts/CartContext";

const OrderSuccess = () => {
  const location = useLocation();
  const { clearCart, addOrder, addScratchCoupon } = useCart();
  const [scratchRevealed, setScratchRevealed] = useState(false);
  const [cleared, setCleared] = useState(false);

  const order = location.state as {
    orderId: string;
    total: number;
    gst: number;
    subtotal: number;
    shipping: number;
    address: { name: string; phone: string; street: string; city: string; state: string; pincode: string };
    paymentMethod: string;
    userName: string;
    userEmail: string;
    items: CartItem[];
    isGift: boolean;
    giftMessage: string;
  } | null;

  if (!order) return <Navigate to="/" />;

  // Clear cart and save order once
  if (!cleared) {
    addOrder({
      orderId: order.orderId,
      date: new Date().toISOString(),
      total: order.total,
      items: order.items || [],
      status: order.paymentMethod === "cod" ? "Pending (COD)" : "Paid",
      paymentMethod: order.paymentMethod,
      address: order.address,
    });
    clearCart();
    setCleared(true);
  }

  const invoiceDate = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const paymentLabel = {
    upi: "UPI",
    qr: "QR Code",
    netbanking: "Net Banking",
    card: "Card Payment",
    cod: "Cash on Delivery",
  }[order.paymentMethod] || order.paymentMethod;

  const handleScratchReveal = (coupon: ScratchCoupon) => {
    addScratchCoupon(coupon);
    setScratchRevealed(true);
  };

  return (
    <Layout>
      <div className="container py-10 sm:py-16 max-w-3xl">
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="text-center mb-10"
        >
          <CheckCircle2 className="w-24 h-24 text-tulsi mx-auto mb-4" />
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2">Order Placed Successfully! 🎉</h1>
          <p className="text-muted-foreground text-lg">Radhe Radhe! Your divine order is confirmed 🙏</p>
          {order.paymentMethod === "cod" && (
            <p className="text-sm text-primary mt-2 font-medium">💵 Pay ₹{order.total} on delivery</p>
          )}
        </motion.div>

        {/* Invoice Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-divine relative overflow-hidden"
          id="invoice"
        >
          {/* ANMOL BRIJ Stamp Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none rotate-[-20deg]">
            <div className="border-[6px] border-primary rounded-full w-56 h-56 flex items-center justify-center">
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-primary">ANMOL BRIJ</p>
                <p className="text-xs text-primary font-medium">VERIFIED</p>
                <Stamp className="w-8 h-8 text-primary mx-auto mt-1" />
              </div>
            </div>
          </div>

          {/* Invoice Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-border">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-display text-lg font-bold">
                  अ
                </div>
                <h2 className="font-display text-2xl font-bold gradient-text">ANMOL BRIJ</h2>
              </div>
              <p className="text-xs text-muted-foreground">श्री वृन्दावन धाम | GST: 09XXXXX1234X1ZX</p>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-sm font-semibold">Invoice #{order.orderId}</p>
              <p className="text-xs text-muted-foreground">{invoiceDate}</p>
            </div>
          </div>

          {/* Bill To */}
          <div className="py-6 border-b border-border">
            <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Bill To</p>
            <p className="font-semibold">{order.address.name}</p>
            <p className="text-sm text-muted-foreground">
              {order.address.street}, {order.address.city}, {order.address.state} - {order.address.pincode}
            </p>
            <p className="text-sm text-muted-foreground">Phone: {order.address.phone}</p>
            {order.userEmail && <p className="text-sm text-muted-foreground">Email: {order.userEmail}</p>}
            {order.isGift && (
              <div className="mt-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-xs font-medium text-primary">🎁 Gift Order</p>
                {order.giftMessage && <p className="text-sm text-muted-foreground mt-1 italic">"{order.giftMessage}"</p>}
              </div>
            )}
          </div>

          {/* Items */}
          {order.items && order.items.length > 0 && (
            <div className="py-4 border-b border-border">
              <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Items Ordered</p>
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm py-1">
                  <span>{item.name} × {item.quantity}</span>
                  <span className="font-medium">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
          )}

          {/* Order Details */}
          <div className="py-6 border-b border-border space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span>₹{order.subtotal}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">GST (18%)</span>
              <span>₹{order.gst}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-tulsi">{(order.shipping || 0) === 0 ? "FREE" : `₹${order.shipping}`}</span>
            </div>
            <div className="flex justify-between pt-3 border-t border-border">
              <span className="font-bold text-lg">Total {order.paymentMethod === "cod" ? "(Pay on Delivery)" : "Paid"}</span>
              <span className="font-display text-2xl font-bold text-primary">₹{order.total}</span>
            </div>
          </div>

          {/* Payment Info */}
          <div className="py-4 border-b border-border text-sm">
            <span className="text-muted-foreground">Payment: </span>
            <span className="font-medium">{paymentLabel}</span>
            <span className="ml-3 text-tulsi font-medium">
              {order.paymentMethod === "cod" ? "⏳ Pay on Delivery" : "✓ Paid"}
            </span>
          </div>

          {/* Official ANMOL BRIJ Stamp */}
          <div className="py-6 flex justify-center">
            <div className="border-4 border-primary/60 rounded-xl px-8 py-4 text-center rotate-[-3deg]">
              <p className="font-display text-xl font-bold text-primary">ANMOL BRIJ</p>
              <p className="text-[10px] text-primary/80 tracking-widest uppercase">Officially Verified • {order.paymentMethod === "cod" ? "COD" : "Paid"}</p>
              <div className="w-12 h-0.5 bg-primary/40 mx-auto mt-1" />
            </div>
          </div>
        </motion.div>

        {/* Scratch Card Reward */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 card-divine"
        >
          <ScratchCard onReveal={handleScratchReveal} />
        </motion.div>

        {/* Thank You & Greetings from CEO & Co-Founder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 card-divine bg-foreground text-background"
        >
          <div className="text-center mb-6">
            <h2 className="font-display text-2xl font-bold text-primary mb-2">🙏 Thank You, {order.userName}!</h2>
            <p className="text-background/70 text-sm">Your support means the world to us. Radhe Radhe!</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-5 text-center">
              <img src={ceoAnmol} alt="Anmol Sharma" className="w-16 h-16 rounded-full object-cover mx-auto mb-3 border-2 border-primary" />
              <h3 className="font-display text-lg font-bold text-primary">Mr. Anmol Sharma</h3>
              <p className="text-background/50 text-xs mb-3">Founder & CEO</p>
              <p className="text-background/80 text-sm italic">
                "Thank you for choosing ANMOL BRIJ! Your devotion inspires us to bring the best of Vrindavan to you. Jai Shri Krishna! 🙏"
              </p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-5 text-center">
              <img src={cofounderSakshi} alt="Sakshi Mishra" className="w-16 h-16 rounded-full object-cover mx-auto mb-3 border-2 border-primary" />
              <h3 className="font-display text-lg font-bold text-primary">Ms. Sakshi Mishra</h3>
              <p className="text-background/50 text-xs mb-3">Co-Founder</p>
              <p className="text-background/80 text-sm italic">
                "Every order is a blessing from Shri Radha-Krishna. We're grateful for your trust. May your home be filled with divine peace! 🙏"
              </p>
            </div>
          </div>

          <p className="text-center text-background/50 text-xs mt-6">
            A confirmation & invoice has been sent to {order.userEmail || "your email"}. We'll notify you with tracking updates!
          </p>
        </motion.div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link to="/">
            <Button variant="outline" className="w-full sm:w-auto gap-2">
              <Home className="w-4 h-4" /> Back to Home
            </Button>
          </Link>
          <Link to="/shop">
            <Button className="w-full sm:w-auto btn-divine gap-2">
              <ShoppingCart className="w-4 h-4" /> Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default OrderSuccess;
