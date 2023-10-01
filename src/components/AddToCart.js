import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CartQuantityToggle from "./CartQuantityToggle";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { CartContext } from "../context and reducers/context/CartContext";
const AddToCart = ({ product }) => {
  const { colors, stock, id } = product;
  const { AddToCart } = useContext(CartContext);
  const [color, setColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);

  const setIncrement = () => {
    quantity < stock && setQuantity((prev) => prev + 1);
  };
  const setDecrement = () => {
    quantity > 1 && setQuantity((prev) => prev - 1);
  };
  return (
    <Wrapper>
      <div className="colors">
        <p>
          colors:
          {colors.map((currColor, index) => {
            return (
              <button
                key={index}
                onClick={() => setColor(colors[index])}
                style={{ background: currColor }}
                className={color === currColor ? "btnStyle active" : "btnStyle"}
              >
                {color === currColor ? (
                  <FaCheck className="checkStyle" />
                ) : null}
              </button>
            );
          })}
        </p>
      </div>

      <CartQuantityToggle
        quantity={quantity}
        setIncrement={setIncrement}
        setDecrement={setDecrement}
      />
      <NavLink
        to="/cart"
        onClick={() => AddToCart(id, color, quantity, product)}
      >
        <Button className="btn">Add To Cart</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    color: #fff;
  }
`;
export default AddToCart;
