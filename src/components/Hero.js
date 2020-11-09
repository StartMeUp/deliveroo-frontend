import React from "react";

const Hero = ({ restaurant }) => {
  return (
    <section id="hero">
      <div className="container">
        <div className="restaurant-info">
          <h1>{restaurant.name}</h1>
          <p>{restaurant.description}</p>
        </div>
        <img src={restaurant.picture} alt="" className="restaurant-image" />
      </div>
    </section>
  );
};

export default Hero;
