import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectedMeals = ({ selectedMeals, setSelectedMeals, handleSubTotal }) => {
  return (
    selectedMeals.length !== 0 && (
      <ul id="selected-meals">
        {selectedMeals.map((meal) => {
          return (
            <li>
              <div>
                <FontAwesomeIcon icon="minus-circle" /> {meal.quantity}{" "}
                <FontAwesomeIcon icon="plus-circle" />{" "}
                {meal.title.substring(0, 30) +
                  (meal.title.length >= 31 ? " ..." : "")}
              </div>
              <span className="price">{meal.price}</span>
            </li>
          );
        })}
      </ul>
    )
  );
};

export default SelectedMeals;
