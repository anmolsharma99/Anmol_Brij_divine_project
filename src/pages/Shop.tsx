import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Filter, Grid, List, ChevronDown, Star, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import ladduGopal from "@/assets/laddu-gopal.jpg";
import poojaItems from "@/assets/pooja-items.jpg";
import radhaKrishna from "@/assets/radha-krishna.jpg";

const categories = [
  { id: "dresses", name: "Laddu Gopal Dresses", count: 124 },
  { id: "murtis", name: "Divine Murtis", count: 89 },
  { id: "pooja", name: "Pooja Samagri", count: 256 },
  { id: "mala", name: "Tulsi & Jap Mala", count: 45 },
  { id: "shringar", name: "Shringar Items", count: 78 },
  { id: "incense", name: "Incense & Diya", count: 112 },
];

const products = [
  { id: 1, name: "Royal Velvet Laddu Gopal Dress - Red & Gold", price: 599, originalPrice: 899, rating: 4.8, reviews: 124, image: ladduGopal, category: "Dresses", badge: "Bestseller" },
  { id: 2, name: "Brass Radha Krishna Murti - 8 inch", price: 2499, originalPrice: 3499, rating: 4.9, reviews: 89, image: radhaKrishna, category: "Murtis", badge: "Premium" },
  { id: 3, name: "Complete Pooja Kit with Tulsi Mala", price: 449, originalPrice: 649, rating: 4.7, reviews: 256, image: poojaItems, category: "Pooja Items", badge: "Popular" },
  { id: 4, name: "Golden Crown for Laddu Gopal - 3 No.", price: 349, originalPrice: 499, rating: 4.6, reviews: 78, image: ladduGopal, category: "Accessories" },
  { id: 5, name: "Pure Chandan Mala - 108 beads", price: 799, originalPrice: 999, rating: 4.8, reviews: 145, image: poojaItems, category: "Mala" },
  { id: 6, name: "Silver Plated Krishna Idol", price: 1899, originalPrice: 2499, rating: 4.9, reviews: 67, image: radhaKrishna, category: "Murtis" },
  { id: 7, name: "Silk Poshak for Thakur Ji - Summer", price: 699, originalPrice: 899, rating: 4.7, reviews: 92, image: ladduGopal, category: "Dresses" },
  { id: 8, name: "Brass Diya Set - Pack of 12", price: 299, originalPrice: 399, rating: 4.5, reviews: 203, image: poojaItems, category: "Pooja Items" },
];

const Shop = () => {
  const { wishlistIds, toggleWishlist, addToCart } = useCart();
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const { toast } = useToast();

  const handleToggleWishlist = (id: number) => {
    toggleWishlist(id);
    toast({
      title: wishlistIds.includes(id) ? "Removed from Wishlist" : "Added to Wishlist ❤️",
      description: "Your wishlist has been updated 🙏",
    });
  };

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, size: "Standard" });
    toast({
      title: "Added to Cart! 🛒",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Layout>
      <div className="bg-muted py-12">
        <div className="container">
          <h1 className="font-display text-4xl font-bold mb-2">
            Divine <span className="gradient-text">Shop</span>
          </h1>
          <p className="text-muted-foreground">Authentic spiritual products from Vrindavan</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-72 flex-shrink-0">
            <div className="card-divine sticky top-24 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold">Filters</h3>
                <Filter className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-4">Categories</h4>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center gap-3 cursor-pointer">
                      <Checkbox id={category.id} />
                      <span className="text-sm flex-1">{category.name}</span>
                      <span className="text-xs text-muted-foreground">({category.count})</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-4">Price Range</h4>
                <Slider defaultValue={[0, 5000]} max={10000} step={100} value={priceRange} onValueChange={setPriceRange} className="mb-4" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>
              <Button className="w-full btn-divine">Apply Filters</Button>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <p className="text-muted-foreground">
                Showing <span className="font-medium text-foreground">{products.length}</span> products
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button onClick={() => setViewType("grid")} className={`p-2 rounded ${viewType === "grid" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                    <Grid className="w-4 h-4" />
                  </button>
                  <button onClick={() => setViewType("list")} className={`p-2 rounded ${viewType === "list" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                    <List className="w-4 h-4" />
                  </button>
                </div>
                <Button variant="outline" size="sm">
                  Sort by: Featured <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>

            <div className={`grid gap-6 ${viewType === "grid" ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}>
              {products.map((product) => (
                <div key={product.id} className={`card-divine group relative ${viewType === "list" ? "flex gap-6" : ""}`}>
                  {product.badge && (
                    <span className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                  <button
                    onClick={() => handleToggleWishlist(product.id)}
                    className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
                  >
                    <Heart className={`w-4 h-4 transition-colors ${wishlistIds.includes(product.id) ? "fill-accent text-accent" : "text-muted-foreground"}`} />
                  </button>

                  <div className={`relative overflow-hidden rounded-lg ${viewType === "list" ? "w-48 h-48 flex-shrink-0" : "h-64 mb-4"}`}>
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  <div className={`space-y-2 ${viewType === "list" ? "flex-1" : ""}`}>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{product.category}</p>
                    <h3 className="font-display font-semibold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 fill-gold text-gold" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-display text-xl font-bold text-primary">₹{product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                      <span className="text-xs text-tulsi font-medium">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                      </span>
                    </div>
                    <Button onClick={() => handleAddToCart(product)} className="w-full btn-divine mt-4">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
