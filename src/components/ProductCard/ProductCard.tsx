import "./ProductCard.css";
import { useContext } from "react";
import { IoCartSharp } from "react-icons/io5";
import formatar from "../type/types";
import AppContext from "../../context/AppContext";

interface dataProps {
  data: {
    id: number;
    title: string;
    thumbnail: string;
    price: string;
  };
}

export default function ProductCard({ data }: dataProps) {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("AppContext must be used within an AppProvider");
  }

  const { cartItems, setCartItems } = context;

  const { title, thumbnail, price } = data;

  const handleAddCart = () => {
    setCartItems([...cartItems, data]);
  };

  return (
    <div className="product-card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        className="product-image"
        alt="product"
      />

      <div className="product-info">
        <h2 className="product-price">{formatar(price, "BRL")}</h2>
        <h2 className="product-title">{title}</h2>
      </div>

      <button type="button" className="product-button" onClick={handleAddCart}>
        <IoCartSharp />
      </button>
    </div>
  );
}
