import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Star, Sparkles, Mountain, Hand } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ladduGopal from "@/assets/laddu-gopal.jpg";
import poojaItems from "@/assets/pooja-items.jpg";

const categories = [
  { id: "all", name: "All Items", icon: Sparkles },
  { id: "mala", name: "Jap Mala", icon: Hand },
  { id: "counter", name: "Naam Counters", icon: Sparkles },
  { id: "raj", name: "Vrindavan Raj (Soil)", icon: Mountain },
];

const products = [
  {
    id: 1,
    name: "Original Tulsi Jap Mala - 108 Beads",
    price: 299,
    originalPrice: 499,
    rating: 4.9,
    reviews: 312,
    image: poojaItems,
    category: "mala",
    description: "Hand-crafted from sacred Vrindavan Tulsi wood",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Sandalwood Jap Mala Premium",
    price: 599,
    originalPrice: 899,
    rating: 4.8,
    reviews: 156,
    image: ladduGopal,
    category: "mala",
    description: "Fragrant sandalwood beads with silk tassel",
  },
  {
    id: 3,
    name: "Digital Naam Jap Counter",
    price: 149,
    originalPrice: 249,
    rating: 4.7,
    reviews: 524,
    image: poojaItems,
    category: "counter",
    badge: "Popular",
    description: "Electronic counter for accurate jap counting",
  },
  {
    id: 4,
    name: "Traditional Finger Counter - Brass",
    price: 199,
    originalPrice: 349,
    rating: 4.6,
    reviews: 89,
    image: ladduGopal,
    category: "counter",
    description: "Classical brass finger counter for mala jap",
  },
  {
    id: 5,
    name: "Vrindavan Sacred Raj - Premium Pack",
    price: 249,
    originalPrice: 399,
    rating: 4.9,
    reviews: 267,
    image: poojaItems,
    category: "raj",
    badge: "Divine",
    description: "Authentic soil from Vrindavan Dham - 500g pack",
  },
  {
    id: 6,
    name: "Govardhan Giri Raj - Holy Stone",
    price: 499,
    originalPrice: 799,
    rating: 4.9,
    reviews: 445,
    image: ladduGopal,
    category: "raj",
    badge: "Sacred",
    description: "Original Govardhan Shila with certificate",
  },
  {
    id: 7,
    name: "Yamuna Jal - Sacred Water",
    price: 199,
    originalPrice: 299,
    rating: 4.8,
    reviews: 178,
    image: poojaItems,
    category: "raj",
    description: "Holy water from Yamuna river, Vrindavan",
  },
  {
    id: 8,
    name: "Radha Kund Raj - Blessed Soil",
    price: 349,
    originalPrice: 549,
    rating: 4.9,
    reviews: 134,
    image: ladduGopal,
    category: "raj",
    badge: "Rare",
    description: "Sacred soil from Radha Kund - 250g pack",
  },
];

const VrindavanEssentials = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const { toast } = useToast();

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const toggleWishlist = (id: number) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
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

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-secondary/20 via-primary/10 to-tulsi/20 py-16">
        <div className="container text-center">
          <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
            🙏 Sacred Items from Vrindavan
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Vrindavan <span className="gradient-text">Essentials</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the divine blessings with authentic Jap Malas, Naam Counters, 
            and sacred Vrindavan Raj (soil) delivered to your doorstep.
          </p>
        </div>
      </div>

      <div className="container py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              variant={selectedCategory === cat.id ? "default" : "outline"}
              className={`gap-2 ${selectedCategory === cat.id ? "btn-divine" : "btn-outline-divine"}`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="card-divine group relative bg-card">
              {/* Badge */}
              {product.badge && (
                <span className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              )}

              {/* Wishlist */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
              >
                <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? "fill-accent text-accent" : "text-muted-foreground"}`} />
              </button>

              {/* Image */}
              <div className="relative h-56 mb-4 overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="font-display font-semibold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-1">{product.description}</p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-gold text-gold" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="font-display text-xl font-bold text-primary">₹{product.price}</span>
                  <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                  <span className="text-xs text-tulsi font-medium">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                </div>

                <Button onClick={() => addToCart(product.name)} className="w-full btn-divine mt-3">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="card-divine text-center">
            <Hand className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold mb-2">Jap Mala</h3>
            <p className="text-muted-foreground text-sm">
              Sacred Tulsi and Sandalwood malas hand-crafted by Vrindavan artisans for your daily japa practice.
            </p>
          </div>
          <div className="card-divine text-center">
            <Sparkles className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold mb-2">Naam Counters</h3>
            <p className="text-muted-foreground text-sm">
              Traditional and digital counters to keep track of your mantra recitations with accuracy.
            </p>
          </div>
          <div className="card-divine text-center">
            <Mountain className="w-12 h-12 text-tulsi mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold mb-2">Sacred Raj & Jal</h3>
            <p className="text-muted-foreground text-sm">
              Authentic soil from Vrindavan, Govardhan stones, and holy Yamuna water for your puja.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VrindavanEssentials;
