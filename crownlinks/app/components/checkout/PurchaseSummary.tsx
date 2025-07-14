import { useCart } from './CartContext';

const PurchaseSummary: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const estimatedTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="bg-white rounded-2xl shadow p-4 sm:p-6 xl:p-10 w-full max-w-xl h-full flex flex-col justify-between">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 xl:text-3xl">Purchase Summary</h2>
      {cart.map(item => (
        <div key={item.id} className="flex flex-col md:flex-row items-center gap-4 mb-6 border-b !border-[#E4E4E4] pb-4">
          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover"
          />
          {/* Details */}
          <div className="flex-1 flex flex-col justify-between h-full w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start w-full">
              <div className="font-semibold text-base sm:text-lg leading-snug mb-2 sm:mb-0">{item.title}</div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-xs sm:text-sm font-medium hover:underline sm:ml-4 mt-2 sm:mt-0"
              >
                Remove Item
              </button>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-2 sm:mt-4 w-full">
              {/* Quantity Controls */}
              <div className="flex items-center border rounded-lg overflow-hidden w-max">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 sm:px-3 py-1 text-base sm:text-lg font-bold"
                  disabled={item.quantity <= 1}
                >-</button>
                <span className="px-3 sm:px-4 text-base sm:text-lg font-medium">{item.quantity.toString().padStart(2, '0')}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 sm:px-3 py-1 text-base sm:text-lg font-bold"
                >+</button>
              </div>
              {/* Price */}
              <div className="ml-0 sm:ml-auto font-bold text-base sm:text-lg">£{(item.price * item.quantity).toFixed(2)}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-6 sm:mt-8">
        <hr className="my-4 sm:my-6 border-t !border-[#E4E4E4]" />
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <span className="font-semibold text-lg sm:text-xl">Estimated Total</span>
          <span className="font-bold text-xl sm:text-2xl">£ {estimatedTotal.toFixed(2)}</span>
        </div>
      </div>
    </section>
  );
};

export default PurchaseSummary; 