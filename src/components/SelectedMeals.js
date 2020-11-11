import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectedMeals = ({
  selectedMeals,
  setSelectedMeals,
  increaseQuantity,
}) => {
  const decreaseQuantity = (index) => {
    const newSelectedMeals = [...selectedMeals];
    if (newSelectedMeals[index].quantity === 1) {
      newSelectedMeals.splice(index, 1);
      setSelectedMeals(newSelectedMeals);
    } else {
      newSelectedMeals[index].quantity--;
      setSelectedMeals(newSelectedMeals);
    }
    // newSelectedMeals.forEach((meal, index) => {
    //   if (meal.id === id) {
    //     if (meal.quantity === 1) {
    //       newSelectedMeals.splice(index, 1);
    //       setSelectedMeals(newSelectedMeals);
    //     } else {
    //       meal.quantity--;
    //       setSelectedMeals(newSelectedMeals);
    //     }
    //   }
    // });
  };

  return (
    selectedMeals.length !== 0 && (
      <ul id="selected-meals">
        {selectedMeals.map((meal, index) => {
          return (
            <li key={meal.id}>
              <div>
                <FontAwesomeIcon
                  icon="minus-circle"
                  onClick={() => {
                    decreaseQuantity(index);
                  }}
                />
                {meal.quantity}{" "}
                <FontAwesomeIcon
                  icon="plus-circle"
                  onClick={() => {
                    increaseQuantity(index);
                  }}
                />{" "}
                {meal.title.substring(0, 24) +
                  (meal.title.length >= 25 ? " ..." : "")}
              </div>
              <span className="price">
                {(meal.price * meal.quantity).toFixed(2)} €
              </span>
            </li>
          );
        })}
      </ul>
    )
  );
};

export default SelectedMeals;
