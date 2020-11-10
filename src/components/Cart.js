import React from "react";
import SelectedMeals from "./SelectedMeals";

const Cart = ({ selectedMeals, setSelectedMeals, increaseQuantity }) => {
  const delivery = 2.5;
  const handleSubTotal = () => {
    let newSubTotal = 0;
    selectedMeals.forEach((meal) => {
      newSubTotal += Number(meal.price) * meal.quantity;
    });
    return newSubTotal;
  };

  return (
    <div className="cart-container">
      <button className={selectedMeals.length === 0 ? "empty" : undefined}>
        Valider mon panier
      </button>
      {selectedMeals.length !== 0 && (
        <div className="cart-content">
          <SelectedMeals
            selectedMeals={selectedMeals}
            setSelectedMeals={setSelectedMeals}
            increaseQuantity={increaseQuantity}
          />
          <hr />
          <ul>
            <li>
              <span>Sous-Total</span>{" "}
              <span>{handleSubTotal().toFixed(2)} €</span>
            </li>
            <li>
              <span>Frais de livraison</span>{" "}
              <span>{delivery.toFixed(2)} €</span>
            </li>
          </ul>
          <hr />
          <ul>
            <li>
              <span>Total</span>{" "}
              <span>{(delivery + handleSubTotal()).toFixed(2)} €</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
