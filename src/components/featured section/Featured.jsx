import React from "react";
import "./featured.scss";
import { useProductContext } from "../../context/AppState";
import Product from "../product component/Product";
const Featured = () => {
  const { featuredProducts, isLoading } = useProductContext();
  if (isLoading) {
    return <div> Loading.... </div>;
  }
  return (
    <section className="featured-section">
      <div className="container">
        <div className="intro-data">Check Now!</div>
        <div className="common-heading">Our Feature Services</div>
        <div className="grid grid-three-column">
          {featuredProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Featured;
