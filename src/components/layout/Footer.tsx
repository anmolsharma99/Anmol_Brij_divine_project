import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-divine flex items-center justify-center text-primary-foreground font-display text-xl font-bold">
                अ
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-primary">ANMOL BRIJ</h3>
                <p className="text-xs opacity-80">Divine Shopping Experience</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Your one-stop destination for authentic spiritual products, Vrindavan services, 
              and divine blessings. Experience the sacred essence of Braj from anywhere.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Shop All", path: "/shop" },
                { name: "Laddu Gopal Collection", path: "/laddu-gopal" },
                { name: "Pooja Samagri", path: "/shop?category=pooja" },
                { name: "Vrindavan Services", path: "/services" },
                { name: "Mandir Timings", path: "/mandir-timings" },
                { name: "Sadhu Vaani", path: "/sadhu-vaani" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-primary">Customer Service</h4>
            <ul className="space-y-3">
              {[
                { name: "My Account", path: "/profile" },
                { name: "My Orders", path: "/orders" },
                { name: "Wishlist", path: "/wishlist" },
                { name: "Track Order", path: "/track-order" },
                { name: "Returns & Refunds", path: "/returns" },
                { name: "FAQs", path: "/faqs" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-primary">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm opacity-80">
                  Near Banke Bihari Temple,<br />
                  Vrindavan, Mathura,<br />
                  Uttar Pradesh - 281121
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm opacity-80">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm opacity-80">radhe@anmolbrij.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-60">
            © 2024 ANMOL BRIJ. All rights reserved. | 🙏 Radhe Radhe
          </p>
          <div className="flex gap-6 text-sm opacity-60">
            <Link to="/privacy" className="hover:opacity-100 hover:text-primary">Privacy Policy</Link>
            <Link to="/terms" className="hover:opacity-100 hover:text-primary">Terms of Service</Link>
            <Link to="/shipping" className="hover:opacity-100 hover:text-primary">Shipping Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
