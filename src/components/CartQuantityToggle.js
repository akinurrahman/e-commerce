import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
const CartQuantityToggle = ({ quantity, setIncrement, setDecrement }) => {
  return (
    <div className="cart-button">
      <div className="quantity-toggle">
        <button onClick={setDecrement}>
          <FaMinus />
        </button>
        <p className="quantity-style">{quantity}</p>
        <button onClick={setIncrement}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartQuantityToggle;
