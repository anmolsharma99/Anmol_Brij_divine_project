import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ShoppingCart, Heart, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/branding/Logo";
import LanguageSwitcher from "@/components/settings/LanguageSwitcher";
import ThemeSwitcher from "@/components/settings/ThemeSwitcher";
import { useSettings } from "@/contexts/SettingsContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, theme, setTheme, mode, setMode, t } = useSettings();

  const navLinks = [
    { name: t("home"), path: "/" },
    { name: t("shop"), path: "/shop" },
    { name: t("ladduGopal"), path: "/laddu-gopal" },
    { name: t("vrindavanServices"), path: "/services" },
    { name: t("mandirTimings"), path: "/mandir-timings" },
    { name: t("sadhuVaani"), path: "/sadhu-vaani" },
    { name: t("ceoVision"), path: "/ceo-vision" },
    { name: t("contact"), path: "/contact" },
  ];

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
            <span>🙏 {t("radheRadhe")} | {t("freeShipping")}</span>
          </div>
          <div className="flex items-center gap-2">
            <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
            <ThemeSwitcher
              currentTheme={theme}
              currentMode={mode}
              onThemeChange={setTheme}
              onModeChange={setMode}
            />
            <span className="hidden sm:inline mx-2">|</span>
            <Link to="/login" className="hover:underline hidden sm:inline">{t("login")}</Link>
            <span className="hidden sm:inline">|</span>
            <Link to="/signup" className="hover:underline hidden sm:inline">{t("signUp")}</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium text-sm transition-all hover:text-primary relative group ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
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
            <Link to="/profile" className="p-2 hover:bg-muted rounded-full transition-colors hidden sm:flex">
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
                    <Logo size="sm" />
                  </div>
                  
                  {/* Mobile Language & Theme */}
                  <div className="flex items-center gap-2 pb-4 border-b border-border">
                    <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
                    <ThemeSwitcher
                      currentTheme={theme}
                      currentMode={mode}
                      onThemeChange={setTheme}
                      onModeChange={setMode}
                    />
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
                      <Button className="w-full btn-divine">{t("login")}</Button>
                    </Link>
                    <Link to="/signup" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full btn-outline-divine">{t("signUp")}</Button>
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
