import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const { products, loading, error } = useContext(ProductContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.map(p => (
        <ProductCard
          key={p._id}
          id={p._id}
          title={p.title}
          price={p.price}
          image={p.imageUrl}
        />
      ))}
    </div>
  );
}
