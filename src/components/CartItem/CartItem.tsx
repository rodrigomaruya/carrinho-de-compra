import { FaTrash } from "react-icons/fa";
import "./CartItem.css";
import formatar from "../type/types";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

interface dataProps {
  data: {
    id: number;
    title: string;
    thumbnail: string;
    price: string;
  };
}
export default function CartItem({ data }: dataProps) {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("AppContext must be used within an AppProvider");
  }
  const { setCartItems, cartItems } = context;
  const handleRemove = (id: number) => {
    const newCart = cartItems.filter((item) => item.id !== id);
    setCartItems(newCart);
  };
  const { title, thumbnail, price, id } = data;
  return (
    <section className={`cart-item`}>
      <img
        src={thumbnail}
        alt="imagem do produto"
        className="cart-item-image"
      />
      <div className="cart-item-info">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatar(price, "BRL")}</h3>

        <button
          type="button"
          className="cart-item-remove"
          onClick={() => handleRemove(id)}
        >
          <FaTrash />
        </button>
      </div>
    </section>
  );
}
