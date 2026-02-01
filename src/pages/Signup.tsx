import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Phone, Eye, EyeOff, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import heroKrishna from "@/assets/hero-krishna.jpg";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signupMethod, setSignupMethod] = useState<"email" | "phone">("email");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });
  const [otpSent, setOtpSent] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure both passwords are the same.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Account Created! 🙏",
      description: "Welcome to ANMOL BRIJ! Radhe Radhe!",
    });
    navigate("/");
  };

  const sendOTP = () => {
    setOtpSent(true);
    toast({
      title: "OTP Sent! 📱",
      description: `OTP has been sent to ${formData.phone}`,
    });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
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
              {[
                "Access exclusive spiritual products",
                "Book Vrindavan trips easily",
                "Connect with saints and sages",
                "Get member-only discounts",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-background/80">{benefit}</span>
                </div>
              ))}
            </div>
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
            <h2 className="font-display text-3xl font-bold mb-2">Create Account</h2>
            <p className="text-muted-foreground">Join our spiritual community today</p>
          </div>

          <Tabs defaultValue="email" className="w-full" onValueChange={(v) => setSignupMethod(v as "email" | "phone")}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> Email
              </TabsTrigger>
              <TabsTrigger value="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> Phone
              </TabsTrigger>
            </TabsList>

            <TabsContent value="email">
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    required
                  />
                </div>
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
                      placeholder="Create a password"
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
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    placeholder="Confirm your password"
                    required
                  />
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <input type="checkbox" className="mt-1 rounded border-border" required />
                  <span className="text-muted-foreground">
                    I agree to the{" "}
                    <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and{" "}
                    <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                  </span>
                </div>
                <Button type="submit" className="w-full btn-divine">
                  Create Account <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="phone">
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phoneName">Full Name</Label>
                  <Input
                    id="phoneName"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
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
                    <div className="flex items-start gap-2 text-sm">
                      <input type="checkbox" className="mt-1 rounded border-border" required />
                      <span className="text-muted-foreground">
                        I agree to the{" "}
                        <Link to="/terms" className="text-primary hover:underline">Terms</Link> and{" "}
                        <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                      </span>
                    </div>
                    <Button type="submit" className="w-full btn-divine">
                      Create Account <ArrowRight className="w-4 h-4 ml-2" />
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
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-medium hover:underline">
                Login
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

export default Signup;
