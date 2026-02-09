import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { User, Mail, Calendar, Shield, LogOut, ShoppingCart, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Profile = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

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
      {/* Hero Banner */}
      <div className="bg-foreground text-background py-12 sm:py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card-divine col-span-full lg:col-span-2"
          >
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card-divine"
          >
            <h2 className="font-display text-xl font-bold mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start gap-3" onClick={() => navigate("/cart")}>
                <ShoppingCart className="w-4 h-4 text-primary" /> My Cart
              </Button>
              <Button variant="outline" className="w-full justify-start gap-3" onClick={() => navigate("/wishlist")}>
                <Heart className="w-4 h-4 text-primary" /> My Wishlist
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
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
