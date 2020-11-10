import React from "react";

const Meals = ({
  meals,
  setSelectedMeals,
  selectedMeals,
  handleSubTotal,
  setSubTotal,
}) => {
  const addSelectedMeal = (id, title, price) => {
    const newSelectedMeals = [...selectedMeals];
    newSelectedMeals.push({
      id,
      title,
      price,
      quantity: 1,
    });
    setSelectedMeals(newSelectedMeals);
    handleSubTotal();
  };

  return meals.map((meal) => {
    return (
      <div
        className="meal-card"
        key={meal.id}
        onClick={() => {
          addSelectedMeal(meal.id, meal.title, meal.price);
        }}
      >
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
