import React, { useContext } from "react";
import FormatPrice from "../Helpers/FormatPrice";
import CartQuantityToggle from "./CartQuantityToggle";
import { FaTrash } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

const CartItem = ({ id, name, image, color, price, quantity }) => {
  const { removeItem, setIncrement, setDecrement } = useContext(CartContext);
  // const setIncr = (id) => {
  //   quantity < stock && setQuantity((prev) => prev + 1);
  // };
  // const setDecr = () => {
  //   // quantity > 1 && setQuantity((prev) => prev - 1);
  // };

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* Quantity  */}

      <CartQuantityToggle
        quantity={quantity}
        setIncrement={() => setIncrement(id)}
        setDecrement={() => setDecrement(id)}
      />

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * quantity} />
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
