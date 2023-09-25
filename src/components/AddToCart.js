import React, { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CartQuantityToggle from "./CartQuantityToggle";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
const AddToCart = ({ product }) => {
  const { colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);

  const setIncr = () => {
    quantity < stock && setQuantity((prev) => prev + 1);
  };
  const setDecr = () => {
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
                {color === currColor ? <FaCheck /> : null}
              </button>
            );
          })}
        </p>
      </div>

      <CartQuantityToggle
        quantity={quantity}
        setIncr={setIncr}
        setDecr={setDecr}
      />
      <NavLink to="/cart">
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
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .quantity-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .quantity-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddToCart;
