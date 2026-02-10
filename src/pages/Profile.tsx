import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { User, Mail, Calendar, Shield, LogOut, ShoppingCart, Heart, MapPin, Package, Tag, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useState } from "react";

const Profile = () => {
  const { user, loading, signOut } = useAuth();
  const { orderHistory, scratchCoupons, wishlistCount, cartCount } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    toast({ title: "Logged out 🙏", description: "See you soon! Radhe Radhe!" });
    navigate("/");
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    toast({ title: "Coupon copied! 🎉" });
    setTimeout(() => setCopiedCode(null), 2000);
  };

  if (loading) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto" />
          <p className="mt-4 text-muted-foreground">Loading your profile...</p>
        </div>
      </Layout>
    );
  }

  if (!user) return null;

  const displayName = user.user_metadata?.full_name || user.email?.split("@")[0] || "Devotee";
  const joinDate = new Date(user.created_at).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Layout>
      <div className="bg-foreground text-background py-12 sm:py-16">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground text-4xl font-display font-bold shadow-2xl">
              {displayName.charAt(0).toUpperCase()}
            </div>
            <div className="text-center sm:text-left">
              <h1 className="font-display text-3xl sm:text-4xl font-bold">{displayName}</h1>
              <p className="text-background/60 mt-1">🙏 Radhe Radhe! Welcome to your divine space</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Account Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="card-divine col-span-full lg:col-span-2">
            <h2 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" /> Account Details
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Full Name</p>
                  <p className="font-medium">{displayName}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{user.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Member Since</p>
                  <p className="font-medium">{joinDate}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Region</p>
                  <p className="font-medium">Bharat 🇮🇳</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="card-divine">
            <h2 className="font-display text-xl font-bold mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start gap-3" onClick={() => navigate("/cart")}>
                <ShoppingCart className="w-4 h-4 text-primary" /> My Cart {cartCount > 0 && <span className="ml-auto text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">{cartCount}</span>}
              </Button>
              <Button variant="outline" className="w-full justify-start gap-3" onClick={() => navigate("/wishlist")}>
                <Heart className="w-4 h-4 text-primary" /> My Wishlist {wishlistCount > 0 && <span className="ml-auto text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full">{wishlistCount}</span>}
              </Button>
              <Button variant="outline" className="w-full justify-start gap-3" onClick={() => navigate("/shop")}>
                <ShoppingCart className="w-4 h-4 text-primary" /> Continue Shopping
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start gap-3 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                onClick={handleSignOut}
              >
                <LogOut className="w-4 h-4" /> Sign Out
              </Button>
            </div>
          </motion.div>

          {/* Scratch Coupons */}
          {scratchCoupons.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="card-divine col-span-full">
              <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5 text-primary" /> My Reward Coupons
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {scratchCoupons.map((coupon, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-primary/20 bg-primary/5">
                    <div>
                      <p className="font-display font-bold text-primary text-lg">{coupon.label}</p>
                      <p className="text-xs text-muted-foreground">Code: {coupon.code}</p>
                    </div>
                    <button onClick={() => copyCode(coupon.code)} className="p-2 hover:bg-muted rounded-lg transition-colors">
                      {copiedCode === coupon.code ? <Check className="w-4 h-4 text-tulsi" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Order History */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="card-divine col-span-full">
            <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
              <Package className="w-5 h-5 text-primary" /> Order History
            </h2>
            {orderHistory.length === 0 ? (
              <div className="text-center py-8">
                <Package className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">No orders yet. Start shopping!</p>
                <Button onClick={() => navigate("/shop")} className="btn-divine mt-4" size="sm">Browse Shop</Button>
              </div>
            ) : (
              <div className="space-y-4">
                {orderHistory.map((order) => (
                  <div key={order.orderId} className="p-4 rounded-xl border border-border hover:border-primary/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <p className="font-semibold">Order #{order.orderId}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(order.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                          order.status === "Paid" ? "bg-tulsi/10 text-tulsi" : "bg-primary/10 text-primary"
                        }`}>
                          {order.status}
                        </span>
                        <span className="font-display font-bold text-primary">₹{order.total}</span>
                      </div>
                    </div>
                    {order.items.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex items-center gap-2 bg-muted rounded-lg px-3 py-1.5 text-xs">
                            <img src={item.image} alt={item.name} className="w-6 h-6 rounded object-cover" />
                            <span className="truncate max-w-[120px]">{item.name}</span>
                            <span className="text-muted-foreground">×{item.quantity}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
