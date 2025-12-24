import { useEffect, useState } from "react";
import axios from "axios";
import { Trash2, ShoppingBag, IndianRupee } from "lucide-react";

const API = import.meta.env.VITE_API_BASE_URL;

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [removingId, setRemovingId] = useState(null);

  const fetchCart = async () => {
    try {
      const res = await axios.get(`${API}/cart`);
      setCart(res.data);
    } catch {
      setCart([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const removeItem = async (cartItemId) => {
    try {
      setRemovingId(cartItemId);
      await axios.delete(`${API}/cart/${cartItemId}`);
      setCart(prev => prev.filter(item => item._id !== cartItemId));
    } finally {
      setRemovingId(null);
    }
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.productId.price * item.quantity,
    0
  );

  if (loading) {
    return <p className="p-6 text-gray-500">Loading cart…</p>;
  }

  if (cart.length === 0) {
    return (
      <div className="p-10 text-center text-gray-500">
        <ShoppingBag size={40} className="mx-auto mb-4" />
        Your cart is empty
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-4">
        {cart.map(item => (
          <div
            key={item._id}
            className="flex items-center gap-6 border rounded-xl p-4 shadow-sm"
          >
            <img
              src={item.productId.imageUrl}
              alt={item.productId.title}
              className="w-24 h-24 object-contain rounded bg-gray-50"
              onError={(e) => (e.target.src = "/placeholder.png")}
            />

            <div className="flex-1">
              <h3 className="font-semibold text-lg">
                {item.productId.title}
              </h3>
              <p className="text-sm text-gray-500">
                Qty: {item.quantity}
              </p>
              <p className="flex items-center gap-1 text-green-600 font-semibold">
                <IndianRupee size={16} />
                {item.productId.price * item.quantity}
              </p>
            </div>

            <button
              onClick={() => removeItem(item._id)}
              disabled={removingId === item._id}
              className="p-2 rounded hover:bg-red-50 text-red-600 disabled:opacity-50"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <div className="border rounded-xl p-4 w-full max-w-sm">
          <div className="flex justify-between font-semibold text-lg">
            <span>Subtotal</span>
            <span className="flex items-center gap-1">
              <IndianRupee size={18} />
              {subtotal}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
