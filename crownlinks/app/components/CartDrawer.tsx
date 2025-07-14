'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from '../components/checkout/CartContext';

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CartDrawer({
  isOpen,
  onClose,
}: CartDrawerProps) {
  const router = useRouter();
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
        className="fixed top-0 right-0 h-full w-full sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] bg-white shadow-2xl z-50 flex flex-col"
        aria-modal="true"
        role="dialog"
      >
        <div className="flex items-center justify-between px-4 sm:px-6 xl:px-8 py-4 xl:py-6 border-b !border-[#E4E4E4]">
          <h2 className="text-xl xl:text-2xl font-semibold">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-2xl xl:text-3xl text-gray-500 hover:text-gray-700"
            aria-label="Close cart"
          >
            &times;
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 xl:px-8 py-4 xl:py-6">
          {cart.length === 0 ? (
            <div className="text-center text-gray-500 mt-10 xl:mt-16 xl:text-lg">Your cart is empty.</div>
          ) : (
            cart.map((item, idx) => (
              <div key={item.id || idx} className="flex items-start gap-4 xl:gap-6 mb-6 xl:mb-8 border-b !border-[#E4E4E4] pb-4 xl:pb-6">
                <div className="w-16 h-16 xl:w-20 xl:h-20 flex-shrink-0 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-sm xl:text-base truncate max-w-[160px] xl:max-w-[200px] block">{item.title}</span>
                    <span className="font-bold text-sm xl:text-base whitespace-nowrap">£{item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-xs xl:text-sm text-gray-500 mt-1 xl:mt-2 line-clamp-2">{item.description}</p>
                  <div className="flex items-center gap-2 mt-2 xl:mt-3">
                    <span className="text-xs xl:text-sm text-gray-400">Category Name</span>
                    <span className="text-xs xl:text-sm text-gray-400">• {item.quantity} Item</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 xl:mt-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="border rounded px-2 py-1 text-lg"
                      disabled={item.quantity <= 1}
                    >-</button>
                    <span className="px-3 text-lg font-medium">{item.quantity.toString().padStart(2, '0')}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="border rounded px-2 py-1 text-lg"
                    >+</button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs xl:text-sm text-red-500 ml-2 hover:underline"
                    >Remove Item</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {/* Footer */}
        <div className="border-t !border-[#E4E4E4] px-4 sm:px-6 xl:px-8 py-4 xl:py-6">
          <div className="flex justify-between items-center mb-4 xl:mb-6">
            <span className="font-medium xl:text-lg">Subtotal price</span>
            <span className="font-bold text-lg xl:text-xl">£{subtotal.toFixed(2)}</span>
          </div>
          <button
            className="w-full border-2 border-blue-500 text-blue-500 font-semibold py-2 xl:py-3 xl:text-lg rounded-full mb-2 xl:mb-3 transition-colors hover:bg-blue-500 hover:text-white"
            onClick={() => router.push('/checkOut')}
          >
            Check out
          </button>
          <button className="w-full bg-blue-500 text-white font-semibold py-2 xl:py-3 xl:text-lg rounded-full transition-colors hover:bg-blue-600"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      </aside>
    </>
  );
} 