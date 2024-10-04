import { useState } from "react";
import AppContext from "./AppContext";
import { productsProps } from "../components/type/types";

interface childrenProps {
  children: React.ReactNode;
}

export default function Provider({ children }: childrenProps) {
  const [products, setProducts] = useState<productsProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<productsProps[]>([]);

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isVisible,
    setIsVisible,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
