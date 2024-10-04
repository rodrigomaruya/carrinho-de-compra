import { useContext } from "react";
import AppContext from "../../context/AppContext";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";
import formatar, { productsProps } from "../type/types";
export default function Cart() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("AppContext must be used within an AppProvider");
  }

  const { cartItems, isVisible } = context;
  const priceItems = cartItems.reduce((acc: number, item: productsProps) => {
    return acc + parseFloat(item.price);
  }, 0);

  return (
    <section className={`cart ${isVisible ? "cart-active" : ""}`}>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
      </div>
      <div className="cart-total">{formatar(String(priceItems), "BRL")}</div>
    </section>
  );
}
