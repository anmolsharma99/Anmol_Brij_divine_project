import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, ShoppingCart, Heart, User, Phone, ChevronDown, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "@/components/branding/Logo";
import LanguageSwitcher from "@/components/settings/LanguageSwitcher";
import ThemeSwitcher from "@/components/settings/ThemeSwitcher";
import { useSettings } from "@/contexts/SettingsContext";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, theme, setTheme, mode, setMode, t } = useSettings();
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    await signOut();
    toast({ title: "Logged out 🙏", description: "See you soon! Radhe Radhe!" });
    navigate("/");
  };

  const mainNavLinks = [
    { name: t("home"), path: "/" },
    { name: t("shop"), path: "/shop" },
    { name: t("vrindavanServices"), path: "/services" },
    { name: t("contact"), path: "/contact" },
  ];

  const moreLinks = [
    { name: t("ladduGopal"), path: "/laddu-gopal" },
    { name: "Vrindavan Essentials", path: "/vrindavan-essentials" },
    { name: "Seven Thakurs", path: "/seven-thakurs" },
    { name: "Spiritual Books", path: "/spiritual-books" },
    { name: t("mandirTimings"), path: "/mandir-timings" },
    { name: t("sadhuVaani"), path: "/sadhu-vaani" },
    { name: t("ceoVision"), path: "/ceo-vision" },
  ];

  const allNavLinks = [...mainNavLinks, ...moreLinks];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">+91 98765 43210</span>
          </div>
          <div className="hidden lg:block text-center flex-1 px-4">
            <span>🙏 {t("radheRadhe")} | {t("freeShipping")}</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
            <ThemeSwitcher currentTheme={theme} currentMode={mode} onThemeChange={setTheme} onModeChange={setMode} />
            <span className="hidden md:inline mx-2 text-primary-foreground/50">|</span>
            {user ? (
              <>
                <span className="hidden md:inline text-xs sm:text-sm truncate max-w-[120px]">
                  {user.user_metadata?.full_name || user.email?.split("@")[0]}
                </span>
                <span className="hidden md:inline text-primary-foreground/50">|</span>
                <button onClick={handleSignOut} className="hover:underline hidden md:inline text-xs sm:text-sm">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:underline hidden md:inline text-xs sm:text-sm">{t("login")}</Link>
                <span className="hidden md:inline text-primary-foreground/50">|</span>
                <Link to="/signup" className="hover:underline hidden md:inline text-xs sm:text-sm">{t("signUp")}</Link>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-shrink-0">
            <Logo size="sm" />
          </div>

          <nav className="hidden lg:flex items-center gap-1 xl:gap-3 flex-1 justify-center">
            {mainNavLinks.map((link) => (
              <Link key={link.path} to={link.path} className={`font-medium text-sm px-3 py-2 rounded-lg transition-all hover:text-primary hover:bg-primary/5 relative whitespace-nowrap ${location.pathname === link.path ? "text-primary bg-primary/10" : "text-foreground"}`}>
                {link.name}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="font-medium text-sm px-3 py-2 gap-1 hover:text-primary hover:bg-primary/5">
                  More <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56 bg-card border border-border shadow-xl z-[100]">
                {moreLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link to={link.path} className={`w-full cursor-pointer ${location.pathname === link.path ? "text-primary bg-primary/5" : ""}`}>
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <Link to="/wishlist" className="relative p-2 hover:bg-muted rounded-full transition-colors">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-accent-foreground text-[10px] rounded-full flex items-center justify-center font-medium">0</span>
            </Link>
            <Link to="/cart" className="relative p-2 hover:bg-muted rounded-full transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-medium">0</span>
            </Link>
            {user ? (
              <Link to="/profile" className="p-2 hover:bg-muted rounded-full transition-colors hidden sm:flex">
                <User className="w-5 h-5" />
              </Link>
            ) : (
              <Link to="/login" className="p-2 hover:bg-muted rounded-full transition-colors hidden sm:flex">
                <User className="w-5 h-5" />
              </Link>
            )}

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="ml-1">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] max-w-[85vw] overflow-y-auto">
                <div className="flex flex-col gap-4 mt-6">
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <Logo size="sm" showText={false} />
                    <div>
                      <h3 className="font-display font-bold text-lg">ANMOL BRIJ</h3>
                      <p className="text-xs text-muted-foreground">श्री वृन्दावन धाम</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pb-4 border-b border-border">
                    <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
                    <ThemeSwitcher currentTheme={theme} currentMode={mode} onThemeChange={setTheme} onModeChange={setMode} />
                  </div>
                  <div className="space-y-1">
                    {allNavLinks.map((link) => (
                      <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`block font-medium text-base py-2.5 px-3 rounded-lg transition-colors hover:bg-primary/5 hover:text-primary ${location.pathname === link.path ? "text-primary bg-primary/10" : "text-foreground"}`}>
                        {link.name}
                      </Link>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border space-y-3">
                    {user ? (
                      <>
                        <p className="text-sm text-muted-foreground px-3">Signed in as {user.user_metadata?.full_name || user.email}</p>
                        <Button onClick={() => { handleSignOut(); setIsOpen(false); }} variant="outline" className="w-full border-primary text-primary">
                          <LogOut className="w-4 h-4 mr-2" /> Logout
                        </Button>
                      </>
                    ) : (
                      <>
                        <Link to="/login" onClick={() => setIsOpen(false)} className="block">
                          <Button className="w-full btn-divine">{t("login")}</Button>
                        </Link>
                        <Link to="/signup" onClick={() => setIsOpen(false)} className="block">
                          <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">{t("signUp")}</Button>
                        </Link>
                      </>
                    )}
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
