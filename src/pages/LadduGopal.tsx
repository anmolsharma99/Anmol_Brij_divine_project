import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Heart, ShoppingCart, Star, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import ladduGopal from "@/assets/laddu-gopal.jpg";
import poojaItems from "@/assets/pooja-items.jpg";
import radhaKrishna from "@/assets/radha-krishna.jpg";

const LadduGopal = () => {
  const [selectedSize, setSelectedSize] = useState("3");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const { toast } = useToast();

  const sizes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "10", "12"];

  const products = [
    { id: 1, name: "Royal Velvet Poshak - Red Gold", price: 599, originalPrice: 899, image: ladduGopal, size: "3 No.", rating: 4.8, reviews: 124, bestseller: true },
    { id: 2, name: "Winter Woolen Set - Pink", price: 449, originalPrice: 699, image: ladduGopal, size: "3 No.", rating: 4.7, reviews: 89 },
    { id: 3, name: "Silk Jhula Palna Set", price: 1299, originalPrice: 1799, image: ladduGopal, size: "3 No.", rating: 4.9, reviews: 67, premium: true },
    { id: 4, name: "Golden Crown & Mukut", price: 349, originalPrice: 499, image: ladduGopal, size: "Universal", rating: 4.6, reviews: 156 },
    { id: 5, name: "Silver Ornament Set", price: 899, originalPrice: 1299, image: ladduGopal, size: "3 No.", rating: 4.8, reviews: 78 },
    { id: 6, name: "Festival Special Combo", price: 799, originalPrice: 1199, image: ladduGopal, size: "3 No.", rating: 4.7, reviews: 234 },
    { id: 7, name: "Peacock Feather Shringar", price: 199, originalPrice: 299, image: ladduGopal, size: "Universal", rating: 4.5, reviews: 312 },
    { id: 8, name: "Cotton Summer Poshak", price: 299, originalPrice: 449, image: ladduGopal, size: "3 No.", rating: 4.6, reviews: 189 },
  ];

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addToCart = (name: string) => {
    toast({
      title: "Added to Cart! 🛒",
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <Layout>
      {/* Header */}
      <div className="bg-gradient-divine py-16 text-background">
        <div className="container text-center">
          <p className="font-medium tracking-widest text-sm mb-4 opacity-80">DIVINE COLLECTION</p>
          <h1 className="font-display text-5xl font-bold mb-4">Laddu Gopal Ji</h1>
          <p className="text-background/80 max-w-xl mx-auto">
            Beautiful dresses, ornaments, and accessories for your beloved Thakur Ji
          </p>
        </div>
      </div>

      {/* Size Filter */}
      <div className="bg-muted py-6 sticky top-[88px] z-40">
        <div className="container">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <span className="font-semibold flex-shrink-0">Select Size:</span>
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-full font-medium transition-colors flex-shrink-0 ${
                  selectedSize === size
                    ? "bg-primary text-primary-foreground"
                    : "bg-card hover:bg-primary/10"
                }`}
              >
                {size} No.
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-medium text-foreground">{products.length}</span> products for size{" "}
              <span className="font-medium text-foreground">{selectedSize} No.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="card-divine group relative">
                {product.bestseller && (
                  <span className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Bestseller
                  </span>
                )}
                {product.premium && (
                  <span className="absolute top-4 left-4 z-10 bg-gold text-gold-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Premium
                  </span>
                )}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      wishlist.includes(product.id) ? "fill-accent text-accent" : "text-muted-foreground"
                    }`}
                  />
                </button>

                <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{product.size}</p>
                  <h3 className="font-display font-semibold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-gold text-gold" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-xl font-bold text-primary">₹{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                    <span className="text-xs text-tulsi font-medium">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                  <Button onClick={() => addToCart(product.name)} className="w-full btn-divine mt-4">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LadduGopal;
