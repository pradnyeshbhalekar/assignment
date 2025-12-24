import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import useFetch from "../hooks/useFetch";
import { ShoppingCart, ArrowLeft, IndianRupee } from "lucide-react";

const API =  import.meta.env.VITE_API_BASE_URL;

export default function ProductDetails() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`/products/${id}`);
  const [adding, setAdding] = useState(false);

  const addToCart = async () => {
    try {
      setAdding(true);
      await axios.post(`${API}/cart`, { productId: id, quantity: 1 });
    } finally {
      setAdding(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 animate-pulse">
        <div className="h-80 bg-gray-200 rounded" />
        <div>
          <div className="h-6 bg-gray-200 w-2/3 mb-4" />
          <div className="h-4 bg-gray-200 w-full mb-2" />
          <div className="h-4 bg-gray-200 w-5/6 mb-6" />
          <div className="h-10 bg-gray-200 w-40 rounded" />
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="p-10 text-center">
        <p className="text-red-500 mb-4">Product not found</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-black font-medium"
        >
          <ArrowLeft size={18} />
          Back to Explore
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-gray-600 mb-6 hover:text-black"
      >
        <ArrowLeft size={16} />
        Back
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-gray-50 rounded-xl flex items-center justify-center p-6">
          <img
            src={data.imageUrl}
            alt={data.title}
            className="h-96 object-contain transition-transform hover:scale-105"
            onError={(e) => (e.target.src = "/placeholder.png")}
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{data.title}</h1>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {data.description}
          </p>

          <div className="flex items-center gap-2 text-2xl font-semibold text-green-600 mb-8">
            <IndianRupee size={22} />
            {data.price}
          </div>

          <button
            onClick={addToCart}
            disabled={adding}
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
          >
            <ShoppingCart size={20} />
            {adding ? "Adding…" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
