import { createContext, useContext, useState, ReactNode, useCallback } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
}

export interface ScratchCoupon {
  code: string;
  discount: number;
  type: "percent" | "flat";
  label: string;
}

interface CartContextType {
  cartItems: CartItem[];
  wishlistIds: number[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, delta: number) => void;
  clearCart: () => void;
  toggleWishlist: (id: number) => void;
  cartCount: number;
  wishlistCount: number;
  orderHistory: OrderRecord[];
  addOrder: (order: OrderRecord) => void;
  scratchCoupons: ScratchCoupon[];
  addScratchCoupon: (coupon: ScratchCoupon) => void;
}

export interface OrderRecord {
  orderId: string;
  date: string;
  total: number;
  items: CartItem[];
  status: string;
  paymentMethod: string;
  address: any;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  wishlistIds: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  toggleWishlist: () => {},
  cartCount: 0,
  wishlistCount: 0,
  orderHistory: [],
  addOrder: () => {},
  scratchCoupons: [],
  addScratchCoupon: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistIds, setWishlistIds] = useState<number[]>([]);
  const [orderHistory, setOrderHistory] = useState<OrderRecord[]>([]);
  const [scratchCoupons, setScratchCoupons] = useState<ScratchCoupon[]>([]);

  const addToCart = useCallback((item: Omit<CartItem, "quantity">) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((i) => i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i)
    );
  }, []);

  const clearCart = useCallback(() => setCartItems([]), []);

  const toggleWishlist = useCallback((id: number) => {
    setWishlistIds((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);
  }, []);

  const addOrder = useCallback((order: OrderRecord) => {
    setOrderHistory((prev) => [order, ...prev]);
  }, []);

  const addScratchCoupon = useCallback((coupon: ScratchCoupon) => {
    setScratchCoupons((prev) => [...prev, coupon]);
  }, []);

  const cartCount = cartItems.reduce((s, i) => s + i.quantity, 0);
  const wishlistCount = wishlistIds.length;

  return (
    <CartContext.Provider value={{
      cartItems, wishlistIds, addToCart, removeFromCart, updateQuantity,
      clearCart, toggleWishlist, cartCount, wishlistCount,
      orderHistory, addOrder, scratchCoupons, addScratchCoupon,
    }}>
      {children}
    </CartContext.Provider>
  );
};
