import Layout from "@/components/layout/Layout";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import ladduGopal from "@/assets/laddu-gopal.jpg";
import poojaItems from "@/assets/pooja-items.jpg";
import radhaKrishna from "@/assets/radha-krishna.jpg";

const allProducts = [
  { id: 1, name: "Royal Velvet Laddu Gopal Dress - Red & Gold", price: 599, image: ladduGopal },
  { id: 2, name: "Brass Radha Krishna Murti - 8 inch", price: 2499, image: radhaKrishna },
  { id: 3, name: "Complete Pooja Kit with Tulsi Mala", price: 449, image: poojaItems },
  { id: 4, name: "Golden Crown for Laddu Gopal - 3 No.", price: 349, image: ladduGopal },
  { id: 5, name: "Pure Chandan Mala - 108 beads", price: 799, image: poojaItems },
  { id: 6, name: "Silver Plated Krishna Idol", price: 1899, image: radhaKrishna },
  { id: 7, name: "Silk Poshak for Thakur Ji - Summer", price: 699, image: ladduGopal },
  { id: 8, name: "Brass Diya Set - Pack of 12", price: 299, image: poojaItems },
];

const Wishlist = () => {
  const { wishlistIds, toggleWishlist, addToCart } = useCart();
  const { toast } = useToast();

  const wishlistProducts = allProducts.filter((p) => wishlistIds.includes(p.id));

  if (wishlistProducts.length === 0) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <Heart className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
          <h1 className="font-display text-3xl font-bold mb-4">Your Wishlist is Empty</h1>
          <p className="text-muted-foreground mb-8">Save your favorite divine products here! 🙏</p>
          <Link to="/shop"><Button className="btn-divine">Browse Shop</Button></Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-muted py-12">
        <div className="container">
          <h1 className="font-display text-4xl font-bold">My <span className="gradient-text">Wishlist</span></h1>
          <p className="text-muted-foreground mt-2">{wishlistProducts.length} items saved</p>
        </div>
      </div>
      <div className="container py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistProducts.map((product) => (
            <div key={product.id} className="card-divine">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="font-display font-semibold line-clamp-2 mb-2">{product.name}</h3>
              <p className="font-display text-xl font-bold text-primary mb-4">₹{product.price}</p>
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    addToCart({ id: product.id, name: product.name, price: product.price, image: product.image });
                    toast({ title: "Added to Cart! 🛒" });
                  }}
                  className="flex-1 btn-divine text-sm"
                  size="sm"
                >
                  <ShoppingCart className="w-4 h-4 mr-1" /> Add to Cart
                </Button>
                <Button
                  onClick={() => { toggleWishlist(product.id); toast({ title: "Removed from Wishlist" }); }}
                  variant="outline"
                  size="sm"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Wishlist;
