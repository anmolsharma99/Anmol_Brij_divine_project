import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, Heart, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Laddu Gopal", path: "/laddu-gopal" },
  { name: "Vrindavan Services", path: "/services" },
  { name: "Mandir Timings", path: "/mandir-timings" },
  { name: "Sadhu Vaani", path: "/sadhu-vaani" },
  { name: "CEO Vision", path: "/ceo-vision" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+91 98765 43210</span>
          </div>
          <div className="hidden md:block">
            <span>🙏 Radhe Radhe | Free Shipping on Orders Above ₹999</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="hover:underline">Login</Link>
            <span>|</span>
            <Link to="/signup" className="hover:underline">Sign Up</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-divine flex items-center justify-center text-primary-foreground font-display text-xl font-bold">
              अ
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold gradient-text">ANMOL BRIJ</h1>
              <p className="text-xs text-muted-foreground">Divine Shopping Experience</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link to="/wishlist" className="relative p-2 hover:bg-muted rounded-full transition-colors">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
            <Link to="/cart" className="relative p-2 hover:bg-muted rounded-full transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
            <Link to="/profile" className="p-2 hover:bg-muted rounded-full transition-colors">
              <User className="w-5 h-5" />
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <div className="w-10 h-10 rounded-full bg-gradient-divine flex items-center justify-center text-primary-foreground font-display font-bold">
                      अ
                    </div>
                    <span className="font-display text-xl font-bold gradient-text">ANMOL BRIJ</span>
                  </div>
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`font-medium text-lg transition-colors hover:text-primary ${
                        location.pathname === link.path ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-border space-y-3">
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <Button className="w-full btn-divine">Login</Button>
                    </Link>
                    <Link to="/signup" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full btn-outline-divine">Sign Up</Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
