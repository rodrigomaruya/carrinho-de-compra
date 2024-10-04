import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { FaShoppingCart } from "react-icons/fa";
import "./CartButton.css";
export default function CartButton() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("AppContext must be used within an AppProvider");
  }

  const { cartItems, setIsVisible, isVisible } = context;
  return (
    <button
      type="button"
      className="cart-button"
      onClick={() => setIsVisible(!isVisible)}
    >
      <FaShoppingCart />
      {cartItems.length > 0 && (
        <span className="cart-status">{cartItems.length}</span>
      )}
    </button>
  );
}
