'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';

export type CartItem = {
  id: string | number;
  image: string;
  title: string;
  price: number;
  quantity: number;
  description: string;
};

type CartContextType = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string | number) => void;
  updateQuantity: (id: string | number, qty: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) setCart(JSON.parse(stored));
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) {
        // Do not add or increment if already exists
        return prev;
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: string | number) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id: string | number, qty: number) => {
    setCart(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
} 