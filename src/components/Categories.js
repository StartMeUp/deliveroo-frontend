import React from "react";
import Meals from "./Meals";

const Categories = ({
  categories,
  setSelectedMeals,
  selectedMeals,
  increaseQuantity,
}) => {
  return categories.map((category, index) => {
    return (
      category.meals.length > 0 && (
        <div className="category" key={index}>
          <h2>{category.name}</h2>
          <div className="meals-container">
            <Meals
              meals={category.meals}
              setSelectedMeals={setSelectedMeals}
              selectedMeals={selectedMeals}
              increaseQuantity={increaseQuantity}
            />
          </div>
        </div>
      )
    );
  });
};

export default Categories;
