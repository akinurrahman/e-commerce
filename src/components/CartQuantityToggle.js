import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
const CartQuantityToggle = ({ quantity, setIncr, setDecr }) => {
  return (
    <div className="cart-button">
      <div className="quantity-toggle">
        <button onClick={setDecr}>
          <FaMinus />
        </button>
        <p className="quantity-style">{quantity}</p>
        <button onClick={setIncr}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartQuantityToggle;
