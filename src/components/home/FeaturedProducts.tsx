import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import ProductQuickView from "@/components/product/ProductQuickView";
import ladduGopal from "@/assets/laddu-gopal.jpg";
import poojaItems from "@/assets/pooja-items.jpg";
import radhaKrishna from "@/assets/radha-krishna.jpg";

const products = [
  {
    id: 1,
    name: "Royal Velvet Laddu Gopal Dress",
    price: 599,
    originalPrice: 899,
    rating: 4.8,
    reviews: 124,
    image: ladduGopal,
    category: "Dresses",
    size: "3 No.",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Brass Radha Krishna Murti",
    price: 2499,
    originalPrice: 3499,
    rating: 4.9,
    reviews: 89,
    image: radhaKrishna,
    category: "Murtis",
    badge: "Premium",
  },
  {
    id: 3,
    name: "Complete Pooja Kit - Tulsi Mala Set",
    price: 449,
    originalPrice: 649,
    rating: 4.7,
    reviews: 256,
    image: poojaItems,
    category: "Pooja Items",
    badge: "Popular",
  },
  {
    id: 4,
    name: "Golden Crown for Laddu Gopal",
    price: 349,
    originalPrice: 499,
    rating: 4.6,
    reviews: 78,
    image: ladduGopal,
    category: "Accessories",
  },
];

const FeaturedProducts = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [quickViewProduct, setQuickViewProduct] = useState<typeof products[0] | null>(null);
  const { toast } = useToast();

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
    toast({
      title: wishlist.includes(id) ? "Removed from Wishlist" : "Added to Wishlist",
      description: "Your wishlist has been updated 🙏",
    });
  };

  const addToCart = (name: string) => {
    toast({
      title: "Added to Cart! 🛒",
      description: `${name} has been added to your cart.`,
    });
  };

  const openQuickView = (product: typeof products[0]) => {
    setQuickViewProduct(product);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-12">
          <div>
            <p className="text-primary font-medium tracking-widest text-xs sm:text-sm mb-2">DIVINE PRODUCTS</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Featured <span className="gradient-text">Products</span>
            </h2>
          </div>
          <Link to="/shop">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Products
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="card-divine group relative bg-card rounded-xl overflow-hidden"
            >
              {/* Badge */}
              {product.badge && (
                <span className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              )}

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
              >
                <Heart
                  className={`w-4 h-4 transition-colors ${
                    wishlist.includes(product.id)
                      ? "fill-accent text-accent"
                      : "text-muted-foreground"
                  }`}
                />
              </button>

              {/* Image */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Button 
                    size="sm" 
                    className="bg-card text-foreground hover:bg-primary hover:text-primary-foreground"
                    onClick={() => openQuickView(product)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Quick View
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide">
                  {product.category}
                  {product.size && ` • ${product.size}`}
                </p>
                <h3 className="font-display font-semibold text-sm sm:text-base lg:text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors min-h-[2.5rem] sm:min-h-[3rem]">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-gold text-gold" />
                    <span className="text-xs sm:text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-display text-lg sm:text-xl font-bold text-primary">
                    ₹{product.price}
                  </span>
                  <span className="text-xs sm:text-sm text-muted-foreground line-through">
                    ₹{product.originalPrice}
                  </span>
                  <span className="text-[10px] sm:text-xs text-tulsi font-medium">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                </div>

                {/* Add to Cart */}
                <Button
                  onClick={() => addToCart(product.name)}
                  className="w-full btn-divine mt-3 text-sm"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      <ProductQuickView
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </section>
  );
};

export default FeaturedProducts;
