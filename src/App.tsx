import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SettingsProvider } from "@/contexts/SettingsContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import Services from "./pages/Services";
import SadhuVaani from "./pages/SadhuVaani";
import CEOVision from "./pages/CEOVision";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MandirTimings from "./pages/MandirTimings";
import LadduGopal from "./pages/LadduGopal";
import Cart from "./pages/Cart";
import VrindavanEssentials from "./pages/VrindavanEssentials";
import SevenThakurs from "./pages/SevenThakurs";
import SpiritualBooks from "./pages/SpiritualBooks";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
      <SettingsProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/services" element={<Services />} />
              <Route path="/sadhu-vaani" element={<SadhuVaani />} />
              <Route path="/ceo-vision" element={<CEOVision />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/mandir-timings" element={<MandirTimings />} />
              <Route path="/laddu-gopal" element={<LadduGopal />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/vrindavan-essentials" element={<VrindavanEssentials />} />
              <Route path="/seven-thakurs" element={<SevenThakurs />} />
              <Route path="/spiritual-books" element={<SpiritualBooks />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-success" element={<OrderSuccess />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </SettingsProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
