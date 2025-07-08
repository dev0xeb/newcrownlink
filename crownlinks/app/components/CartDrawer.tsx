'use client';

import { useEffect } from 'react';
import Image from 'next/image';

type CartItem = {
  id: number | string;
  image: string;
  title: string;
  price: number;
  description: string;
  quantity: number;
};

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  subtotal: number;
  onRemoveItem: (id: number | string) => void;
  onClearCart: () => void;
};

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  subtotal,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40  bg-opacity-5 backdrop-blur-[4px]"
        onClick={onClose}
        aria-label="Close cart"
      />
      <aside
        className="fixed top-0 right-0 h-[100vh] w-[600px] bg-white shadow-2xl z-50 flex flex-col"
        aria-modal="true"
        role="dialog"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-gray-700"
            aria-label="Close cart"
          >
            &times;
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">Your cart is empty.</div>
          ) : (
            cartItems.map((item, idx) => (
              <div key={item.id || idx} className="flex items-start gap-4 mb-6 border-b pb-4">
                <div className="w-16 h-16 flex-shrink-0 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-sm truncate max-w-[160px] block">{item.title}</span>
                    <span className="font-bold text-sm whitespace-nowrap">£{item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{item.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-gray-400">Category Name</span>
                    <span className="text-xs text-gray-400">• {item.quantity} Item</span>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-xs text-red-500 mt-1 hover:underline"
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        {/* Footer */}
        <div className="border-t px-6 py-4">
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium">Subtotal price</span>
            <span className="font-bold text-lg">£{subtotal.toFixed(2)}</span>
          </div>
          <button className="w-full border-2 border-blue-500 text-blue-500 font-semibold py-2 rounded-full mb-2 transition-colors hover:bg-blue-500 hover:text-white">
            Check out
          </button>
          <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-full transition-colors hover:bg-blue-600"
            onClick={onClearCart}
          >
            Clear Cart
          </button>
        </div>
      </aside>
    </>
  );
} 