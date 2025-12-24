import { Link, NavLink } from "react-router-dom";
import { Compass, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-3 flex items-center justify-between">
      {/* Brand */}
      <Link to="/" className="text-xl font-bold tracking-wide">
        E-Commerce
      </Link>

      {/* Navigation */}
      <div className="flex gap-6 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 ${
              isActive
                ? "text-yellow-400 font-semibold"
                : "hover:text-gray-300"
            }`
          }
        >
          <Compass size={18} />
          <span>Explore</span>
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `flex items-center gap-2 ${
              isActive
                ? "text-yellow-400 font-semibold"
                : "hover:text-gray-300"
            }`
          }
        >
          <ShoppingCart size={18} />
          <span>Cart</span>
        </NavLink>
      </div>
    </nav>
  );
}
