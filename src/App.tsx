import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
          <Route path="/wishlist" element={<Cart />} />
          <Route path="/profile" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
