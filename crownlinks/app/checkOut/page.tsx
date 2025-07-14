'use client'
import PurchaseSummary from '../components/checkout/PurchaseSummary';
import CustomerInfoForm from '../components/checkout/CustomerInfoForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../components/checkout/CartContext';

export default function CheckoutPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const estimatedTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const handleCustomerSubmit = (data: any) => { /* ... */ };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar/>
      <main className="flex justify-center items-start min-h-screen bg-gray-50 py-12 w-screen">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full max-w-[1600px] px-4 sm:px-8 items-stretch">
          <div className="flex-1 max-w-2xl w-full mb-8 lg:mb-0">
            <PurchaseSummary />
          </div>
          <div className="flex-1 max-w-2xl w-full">
            <CustomerInfoForm onSubmit={handleCustomerSubmit} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
