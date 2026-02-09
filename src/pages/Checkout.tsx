import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Smartphone, QrCode, Building2, ArrowRight, Loader2, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const paymentMethods = [
  { id: "upi", label: "UPI Payment", icon: Smartphone, desc: "Google Pay, PhonePe, Paytm" },
  { id: "qr", label: "QR Code", icon: QrCode, desc: "Scan & Pay instantly" },
  { id: "netbanking", label: "Net Banking", icon: Building2, desc: "All major banks supported" },
  { id: "card", label: "Card Payment", icon: CreditCard, desc: "Visa, Mastercard, RuPay" },
];

const Checkout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedMethod, setSelectedMethod] = useState("upi");
  const [processing, setProcessing] = useState(false);
  const [address, setAddress] = useState({
    name: user?.user_metadata?.full_name || "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  // Demo order data
  const subtotal = 1647;
  const shipping = 0;
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + gst;

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.name || !address.phone || !address.street || !address.city || !address.pincode) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    setProcessing(true);
    // Simulate payment processing
    await new Promise((r) => setTimeout(r, 2500));
    setProcessing(false);

    const orderId = "AB" + Date.now().toString(36).toUpperCase();
    navigate("/order-success", {
      state: {
        orderId,
        total,
        gst,
        subtotal,
        address,
        paymentMethod: selectedMethod,
        userName: address.name,
        userEmail: user?.email,
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
        <form onSubmit={handlePlaceOrder}>
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left: Address + Payment */}
            <div className="lg:col-span-2 space-y-8">
              {/* Shipping Address */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card-divine">
                <h2 className="font-display text-xl font-bold mb-6">📦 Shipping Address</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input value={address.name} onChange={(e) => setAddress({ ...address, name: e.target.value })} placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone Number</Label>
                    <Input value={address.phone} onChange={(e) => setAddress({ ...address, phone: e.target.value })} placeholder="+91 98765 43210" required />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label>Street Address</Label>
                    <Input value={address.street} onChange={(e) => setAddress({ ...address, street: e.target.value })} placeholder="House no., Street, Locality" required />
                  </div>
                  <div className="space-y-2">
                    <Label>City</Label>
                    <Input value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} placeholder="City" required />
                  </div>
                  <div className="space-y-2">
                    <Label>State</Label>
                    <Input value={address.state} onChange={(e) => setAddress({ ...address, state: e.target.value })} placeholder="State" />
                  </div>
                  <div className="space-y-2">
                    <Label>PIN Code</Label>
                    <Input value={address.pincode} onChange={(e) => setAddress({ ...address, pincode: e.target.value })} placeholder="110001" required />
                  </div>
                </div>
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
                <h3 className="font-display text-xl font-bold mb-6">Order Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-green-600 font-medium">FREE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">GST (18%)</span>
                    <span>₹{gst}</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between">
                    <span className="font-bold text-base">Total</span>
                    <span className="font-display text-2xl font-bold text-primary">₹{total}</span>
                  </div>
                </div>

                <Button type="submit" className="w-full btn-divine text-lg py-6 mt-6" disabled={processing}>
                  {processing ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Processing...
                    </>
                  ) : (
                    <>
                      Place Order <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>

                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
                  <ShieldCheck className="w-4 h-4 text-green-600" />
                  <span>100% Secure Payment • Razorpay Protected</span>
                </div>
              </motion.div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Checkout;
