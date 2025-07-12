import { useCart } from './CartContext';

const PurchaseSummary: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const estimatedTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="bg-white rounded-2xl shadow p-6 xl:p-10 w-full max-w-xl h-full flex flex-col justify-between">
      <h2 className="text-2xl font-semibold mb-6 xl:text-3xl">Purchase Summary</h2>
      {cart.map(item => (
        <div key={item.id} className="flex items-center gap-4 mb-6 border-b pb-4">
          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-24 h-24 rounded-lg object-cover"
          />
          {/* Details */}
          <div className="flex-1 flex flex-col justify-between h-full">
            <div className="flex justify-between items-start">
              <div className="font-semibold text-lg leading-snug">{item.title}</div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm font-medium hover:underline ml-4"
              >
                Remove Item
              </button>
            </div>
            <div className="flex items-center gap-4 mt-4">
              {/* Quantity Controls */}
              <div className="flex items-center border rounded-lg overflow-hidden">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-3 py-1 text-lg font-bold"
                  disabled={item.quantity <= 1}
                >-</button>
                <span className="px-4 text-lg font-medium">{item.quantity.toString().padStart(2, '0')}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-3 py-1 text-lg font-bold"
                >+</button>
              </div>
              {/* Price */}
              <div className="ml-auto font-bold text-lg">£{(item.price * item.quantity).toFixed(2)}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-8">
        <hr className="my-6" />
        <div className="flex justify-between items-center">
          <span className="font-semibold text-xl">Estimated Total</span>
          <span className="font-bold text-2xl">£ {estimatedTotal.toFixed(2)}</span>
        </div>
      </div>
    </section>
  );
};

export default PurchaseSummary; 