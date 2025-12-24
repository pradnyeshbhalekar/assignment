import { Link } from "react-router-dom";
import { ArrowRight, IndianRupee } from "lucide-react";

export default function ProductCard({ id, title, image, price }) {
  return (
    <Link
      to={`/product/${id}`}
      className="group block border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black"
    >
      <div className="h-48 bg-gray-50 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="h-40 object-contain group-hover:scale-105 transition-transform"
          onError={(e) => (e.target.src = "/placeholder.png")}
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg line-clamp-2 mb-1">
          {title}
        </h3>

        <div className="flex items-center justify-between">
          <p className="flex items-center gap-1 text-green-600 font-medium">
            <IndianRupee size={16} />
            {price}
          </p>

          <ArrowRight
            size={18}
            className="text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all"
          />
        </div>
      </div>
    </Link>
  );
}
