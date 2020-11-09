import React from "react";

const Meals = ({ meals }) => {
  return meals.map((meal) => {
    return (
      <div className="meal-card" key={meal.id}>
        <div className="meal-info">
          <h3>{meal.title}</h3>
          <p className={meal.description ? undefined : "hidden"}>
            {meal.description}
          </p>
          <span className="price">{meal.price} €</span>
        </div>
        <img
          className={meal.picture ? undefined : "hidden"}
          src={meal.picture}
          alt={meal.description}
        />
      </div>
    );
  });
};

export default Meals;
