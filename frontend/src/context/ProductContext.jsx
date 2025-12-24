import { createContext } from "react";
import useFetch from "../hooks/useFetch";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const { data, loading, error } = useFetch("/products");

  return (
    <ProductContext.Provider value={{ products: data, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}
