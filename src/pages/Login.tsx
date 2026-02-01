import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Phone, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import heroKrishna from "@/assets/hero-krishna.jpg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    otp: "",
  });
  const [otpSent, setOtpSent] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Successful! 🙏",
      description: "Welcome back, devotee! Radhe Radhe!",
    });
    navigate("/");
  };

  const sendOTP = () => {
    setOtpSent(true);
    toast({
      title: "OTP Sent! 📱",
      description: `OTP has been sent to ${loginMethod === "phone" ? formData.phone : formData.email}`,
    });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
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

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8 lg:hidden">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-gradient-divine flex items-center justify-center text-primary-foreground font-display text-xl font-bold">
                अ
              </div>
              <span className="font-display text-2xl font-bold gradient-text">ANMOL BRIJ</span>
            </Link>
          </div>

          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold mb-2">Login</h2>
            <p className="text-muted-foreground">Welcome back! Please login to continue</p>
          </div>

          <Tabs defaultValue="email" className="w-full" onValueChange={(v) => setLoginMethod(v as "email" | "phone")}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> Email
              </TabsTrigger>
              <TabsTrigger value="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> Phone
              </TabsTrigger>
            </TabsList>

            <TabsContent value="email">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-border" />
                    Remember me
                  </label>
                  <Link to="/forgot-password" className="text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Button type="submit" className="w-full btn-divine">
                  Login <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="phone">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                {!otpSent ? (
                  <Button type="button" onClick={sendOTP} className="w-full btn-divine">
                    Send OTP
                  </Button>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="otp">Enter OTP</Label>
                      <Input
                        id="otp"
                        value={formData.otp}
                        onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                        placeholder="Enter 6-digit OTP"
                        maxLength={6}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full btn-divine">
                      Verify & Login <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <button type="button" onClick={sendOTP} className="w-full text-sm text-primary hover:underline">
                      Resend OTP
                    </button>
                  </>
                )}
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary font-medium hover:underline">
                Sign Up
              </Link>
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link to="/" className="text-muted-foreground hover:text-primary text-sm">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
