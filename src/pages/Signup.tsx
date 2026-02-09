import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import heroKrishna from "@/assets/hero-krishna.jpg";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast({ title: "Passwords don't match", description: "Please make sure both passwords are the same.", variant: "destructive" });
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        emailRedirectTo: window.location.origin,
        data: { full_name: formData.name, phone: formData.phone },
      },
    });
    setLoading(false);

    if (error) {
      toast({ title: "Signup Failed", description: error.message, variant: "destructive" });
      return;
    }

    toast({ title: "Account Created! 🙏", description: "Please check your email to verify your account. Radhe Radhe!" });
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:block lg:w-1/2 relative">
        <img src={heroKrishna} alt="Divine Krishna" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="text-background">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-divine flex items-center justify-center mb-6">
              <span className="text-3xl font-display text-primary-foreground">अ</span>
            </div>
            <h1 className="font-display text-4xl font-bold mb-6 text-center">Join ANMOL BRIJ</h1>
            <div className="space-y-4">
              {["Access exclusive spiritual products", "Book Vrindavan trips easily", "Connect with saints and sages", "Get member-only discounts"].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-background/80">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8 lg:hidden">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-gradient-divine flex items-center justify-center text-primary-foreground font-display text-xl font-bold">अ</div>
              <span className="font-display text-2xl font-bold gradient-text">ANMOL BRIJ</span>
            </Link>
          </div>
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold mb-2">Create Account</h2>
            <p className="text-muted-foreground">Join our spiritual community today</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Enter your name" required disabled={loading} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" required disabled={loading} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 98765 43210" disabled={loading} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input id="password" type={showPassword ? "text" : "password"} value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="Create a password (min 6 chars)" required minLength={6} disabled={loading} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} placeholder="Confirm your password" required disabled={loading} />
            </div>
            <div className="flex items-start gap-2 text-sm">
              <input type="checkbox" className="mt-1 rounded border-border" required />
              <span className="text-muted-foreground">
                I agree to the <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              </span>
            </div>
            <Button type="submit" className="w-full btn-divine" disabled={loading}>
              {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              Create Account <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-medium hover:underline">Login</Link>
            </p>
          </div>
          <div className="mt-4 text-center">
            <Link to="/" className="text-muted-foreground hover:text-primary text-sm">← Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
