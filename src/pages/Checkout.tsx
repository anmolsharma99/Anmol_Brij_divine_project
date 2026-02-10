import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { CreditCard, Smartphone, QrCode, Building2, ArrowRight, Loader2, ShieldCheck, Gift, Banknote } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const paymentMethods = [
  { id: "upi", label: "UPI Payment", icon: Smartphone, desc: "Google Pay, PhonePe, Paytm" },
  { id: "qr", label: "QR Code", icon: QrCode, desc: "Scan & Pay instantly" },
  { id: "netbanking", label: "Net Banking", icon: Building2, desc: "All major banks supported" },
  { id: "card", label: "Card Payment", icon: CreditCard, desc: "Visa, Mastercard, RuPay" },
  { id: "cod", label: "Cash on Delivery", icon: Banknote, desc: "Pay when you receive" },
];

const Checkout = () => {
  const { user } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedMethod, setSelectedMethod] = useState("upi");
  const [processing, setProcessing] = useState(false);
  const [isGift, setIsGift] = useState(false);
  const [giftMessage, setGiftMessage] = useState("");
  const [address, setAddress] = useState({
    name: user?.user_metadata?.full_name || "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  const subtotal = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);
  const shipping = subtotal > 999 ? 0 : 99;
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + gst;

  const validateAddress = () => {
    if (!address.name.trim() || address.name.length < 2) {
      toast({ title: "Please enter a valid name", variant: "destructive" });
      return false;
    }
    if (!/^[6-9]\d{9}$/.test(address.phone.replace(/\s+/g, "").replace("+91", ""))) {
      toast({ title: "Please enter a valid 10-digit Indian phone number", variant: "destructive" });
      return false;
    }
    if (!address.street.trim() || address.street.length < 5) {
      toast({ title: "Please enter a complete street address", variant: "destructive" });
      return false;
    }
    if (!address.city.trim()) {
      toast({ title: "Please enter your city", variant: "destructive" });
      return false;
    }
    if (!address.state.trim()) {
      toast({ title: "Please enter your state", variant: "destructive" });
      return false;
    }
    if (!/^\d{6}$/.test(address.pincode)) {
      toast({ title: "Please enter a valid 6-digit PIN code", variant: "destructive" });
      return false;
    }
    return true;
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAddress()) return;
    if (cartItems.length === 0) {
      toast({ title: "Your cart is empty", variant: "destructive" });
      return;
    }

    setProcessing(true);
    await new Promise((r) => setTimeout(r, 2500));
    setProcessing(false);

    const orderId = "AB" + Date.now().toString(36).toUpperCase();
    navigate("/order-success", {
      state: {
        orderId,
        total,
        gst,
        subtotal,
        shipping,
        address,
        paymentMethod: selectedMethod,
        userName: address.name,
        userEmail: user?.email,
        items: cartItems,
        isGift,
        giftMessage,
      },
    });
  };

  return (
    <Layout>
      <div className="bg-muted py-10">
        <div className="container">
          <h1 className="font-display text-3xl sm:text-4xl font-bold">
            Secure <span className="gradient-text">Checkout</span>
          </h1>
          <p className="text-muted-foreground mt-2">Complete your order with Radhe Radhe blessings 🙏</p>
        </div>
      </div>

      <div className="container py-10">
        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg mb-4">Your cart is empty. Add items first!</p>
            <Button onClick={() => navigate("/shop")} className="btn-divine">Go to Shop</Button>
          </div>
        ) : (
          <form onSubmit={handlePlaceOrder}>
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                {/* Shipping Address */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card-divine">
                  <h2 className="font-display text-xl font-bold mb-6">📦 Shipping Address</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Full Name *</Label>
                      <Input value={address.name} onChange={(e) => setAddress({ ...address, name: e.target.value })} placeholder="Your full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Phone Number *</Label>
                      <Input value={address.phone} onChange={(e) => setAddress({ ...address, phone: e.target.value })} placeholder="9876543210" required />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label>Street Address *</Label>
                      <Input value={address.street} onChange={(e) => setAddress({ ...address, street: e.target.value })} placeholder="House no., Street, Locality" required />
                    </div>
                    <div className="space-y-2">
                      <Label>City *</Label>
                      <Input value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} placeholder="City" required />
                    </div>
                    <div className="space-y-2">
                      <Label>State *</Label>
                      <Input value={address.state} onChange={(e) => setAddress({ ...address, state: e.target.value })} placeholder="State" required />
                    </div>
                    <div className="space-y-2">
                      <Label>PIN Code *</Label>
                      <Input value={address.pincode} onChange={(e) => setAddress({ ...address, pincode: e.target.value })} placeholder="110001" maxLength={6} required />
                    </div>
                  </div>
                </motion.div>

                {/* Gift Option */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="card-divine">
                  <div className="flex items-center gap-3 mb-4">
                    <Gift className="w-5 h-5 text-primary" />
                    <h2 className="font-display text-xl font-bold">Send as Gift?</h2>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <Checkbox checked={isGift} onCheckedChange={(checked) => setIsGift(checked === true)} id="gift" />
                    <label htmlFor="gift" className="text-sm cursor-pointer">Yes, this is a gift — add gift wrapping & message</label>
                  </div>
                  {isGift && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}>
                      <Textarea
                        value={giftMessage}
                        onChange={(e) => setGiftMessage(e.target.value)}
                        placeholder="Write a personal message for the recipient... 🙏"
                        rows={3}
                        maxLength={200}
                      />
                      <p className="text-xs text-muted-foreground mt-1">{giftMessage.length}/200 characters</p>
                    </motion.div>
                  )}
                </motion.div>

                {/* Payment Method */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="card-divine">
                  <h2 className="font-display text-xl font-bold mb-6">💳 Payment Method</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {paymentMethods.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setSelectedMethod(m.id)}
                        className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                          selectedMethod === m.id
                            ? "border-primary bg-primary/5 shadow-md"
                            : "border-border hover:border-primary/40"
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${selectedMethod === m.id ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                          <m.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{m.label}</p>
                          <p className="text-xs text-muted-foreground">{m.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right: Order Summary */}
              <div className="lg:col-span-1">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="card-divine sticky top-24">
                  <h3 className="font-display text-xl font-bold mb-4">Order Summary</h3>

                  {/* Items list */}
                  <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-3 text-sm">
                        <img src={item.image} alt={item.name} className="w-12 h-12 rounded object-cover" />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{item.name}</p>
                          <p className="text-muted-foreground">₹{item.price} × {item.quantity}</p>
                        </div>
                        <p className="font-semibold">₹{item.price * item.quantity}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-sm border-t border-border pt-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-tulsi font-medium">{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">GST (18%)</span>
                      <span>₹{gst}</span>
                    </div>
                    {isGift && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Gift Wrapping</span>
                        <span className="text-tulsi font-medium">FREE 🎁</span>
                      </div>
                    )}
                    <div className="border-t border-border pt-3 flex justify-between">
                      <span className="font-bold text-base">Total</span>
                      <span className="font-display text-2xl font-bold text-primary">₹{total}</span>
                    </div>
                  </div>

                  <Button type="submit" className="w-full btn-divine text-lg py-6 mt-6" disabled={processing}>
                    {processing ? (
                      <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Processing...</>
                    ) : selectedMethod === "cod" ? (
                      <>Place Order (COD) <ArrowRight className="w-5 h-5 ml-2" /></>
                    ) : (
                      <>Place Order <ArrowRight className="w-5 h-5 ml-2" /></>
                    )}
                  </Button>

                  <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
                    <ShieldCheck className="w-4 h-4 text-tulsi" />
                    <span>100% Secure Payment • Razorpay Protected</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </form>
        )}
      </div>
    </Layout>
  );
};

export default Checkout;
