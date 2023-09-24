import React, { useState } from "react";
import styled from "styled-components";
const AddToCart = ({ product }) => {
  const {  colors } = product;
  const [color, setColor] = useState(colors[0]);
  return (
    <Wrapper>
      <div className="colors">
        <p>
          colors:
          {colors.map((currColor, index) => {
            return (
              <button
                key={index}
                onClick={()=> setColor(colors[index])}
                style={{ background: currColor }}
                className={color === currColor ? "btnStyle active" : "btnStyle"}
              ></button>
            );
          })}
        </p>
      </div>
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
  .amount-toggle {
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

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddToCart;
