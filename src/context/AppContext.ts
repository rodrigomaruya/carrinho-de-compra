import React, { createContext } from "react";
import { productsProps } from "../components/type/types";

interface AppContextType {
  products: productsProps[];
  setProducts: React.Dispatch<React.SetStateAction<productsProps[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: productsProps[];
  setCartItems: React.Dispatch<React.SetStateAction<productsProps[]>>;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export default AppContext;
