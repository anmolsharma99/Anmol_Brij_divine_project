import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import heroKrishna from "@/assets/hero-krishna.jpg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    setLoading(false);

    if (error) {
      toast({ title: "Login Failed", description: error.message, variant: "destructive" });
      return;
    }

    toast({ title: "Login Successful! 🙏", description: "Welcome back, devotee! Radhe Radhe!" });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:block lg:w-1/2 relative">
        <img src={heroKrishna} alt="Divine Krishna" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="text-background text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-divine flex items-center justify-center mb-6">
              <span className="text-3xl font-display text-primary-foreground">अ</span>
            </div>
            <h1 className="font-display text-4xl font-bold mb-4">Welcome to ANMOL BRIJ</h1>
            <p className="text-background/80 text-lg">Your divine gateway to Vrindavan's treasures</p>
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
            <h2 className="font-display text-3xl font-bold mb-2">Login</h2>
            <p className="text-muted-foreground">Welcome back! Please login to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" required disabled={loading} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input id="password" type={showPassword ? "text" : "password"} value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="Enter your password" required disabled={loading} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <Button type="submit" className="w-full btn-divine" disabled={loading}>
              {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              Login <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary font-medium hover:underline">Sign Up</Link>
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

export default Login;
