import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import { AppContext } from "../context and reducers/context/AppProvider";

const Product = (curElem, index) => {
  const { id, name, image, price, category } = curElem;
  
  return (
    <NavLink to={`/singleproduct/${id}`} key={index}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
