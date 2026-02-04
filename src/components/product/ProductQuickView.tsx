import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star, Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  size?: string;
  badge?: string;
  description?: string;
}

interface ProductQuickViewProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductQuickView = ({ product, isOpen, onClose }: ProductQuickViewProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { toast } = useToast();

  if (!product) return null;

  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  const addToCart = () => {
    toast({
      title: "Added to Cart! 🛒",
      description: `${quantity}x ${product.name} has been added to your cart.`,
    });
    onClose();
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from Wishlist" : "Added to Wishlist ❤️",
      description: `${product.name} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    });
  };

  const buyNow = () => {
    toast({
      title: "Proceeding to Checkout 🛍️",
      description: `Preparing ${product.name} for checkout...`,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Image Section */}
          <div className="relative bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 md:h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                {product.badge}
              </span>
            )}
            <span className="absolute top-4 right-4 bg-tulsi text-white text-sm font-bold px-3 py-1 rounded-full">
              {discount}% OFF
            </span>
          </div>

          {/* Content Section */}
          <div className="p-6 space-y-4">
            <DialogHeader className="text-left p-0">
              <p className="text-sm text-muted-foreground uppercase tracking-wide">
                {product.category} {product.size && `• ${product.size}`}
              </p>
              <DialogTitle className="font-display text-2xl font-bold leading-tight">
                {product.name}
              </DialogTitle>
            </DialogHeader>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-gold text-gold"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-display text-3xl font-bold text-primary">₹{product.price}</span>
              <span className="text-lg text-muted-foreground line-through">₹{product.originalPrice}</span>
              <span className="text-sm text-tulsi font-semibold">Save ₹{product.originalPrice - product.price}</span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground">
              {product.description || `Premium quality ${product.category.toLowerCase()} crafted with love and devotion. 
              Perfect for your daily puja and spiritual practices.`}
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Quantity:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <Button onClick={addToCart} className="flex-1 btn-divine">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
              <Button onClick={buyNow} variant="outline" className="flex-1 btn-outline-divine">
                Buy Now
              </Button>
              <Button
                onClick={toggleWishlist}
                variant="ghost"
                size="icon"
                className="shrink-0"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isWishlisted ? "fill-accent text-accent" : "text-muted-foreground"
                  }`}
                />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border">
              <div className="text-center">
                <Truck className="w-5 h-5 mx-auto text-primary mb-1" />
                <p className="text-xs text-muted-foreground">Free Shipping<br/>Above ₹999</p>
              </div>
              <div className="text-center">
                <Shield className="w-5 h-5 mx-auto text-tulsi mb-1" />
                <p className="text-xs text-muted-foreground">100% Authentic<br/>Products</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-5 h-5 mx-auto text-secondary mb-1" />
                <p className="text-xs text-muted-foreground">7 Days<br/>Return</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductQuickView;
