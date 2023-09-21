import React from "react";
import { NavLink } from "react-router-dom";
import "./hero.scss";
const HeroSection = ({title}) => {
  return (
    <section className="container">
      <div className="grid grid-two-column">
        <div className="hero-section-data">
          <p className="intro-data">Welcome to</p>
          <h1>{title}</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            ullam enim dolore ad modi necessitatibus qui ut minima, quisquam
            veniam quia omnis nostrum
          </p>
          <NavLink>
            <button>Shop Now</button>
          </NavLink>
        </div>
        {/* hero image */}
        <div className="hero-section-image">
          <figure>
            <img src="./images/hero.jpg" alt="hero-img" className="img-style" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
