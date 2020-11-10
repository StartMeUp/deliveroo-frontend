import React, { useState } from "react";
import SelectedMeals from "./SelectedMeals";

const Cart = ({
  selectedMeals,
  setSelectedMeals,
  subTotal,
  handleSubTotal,
}) => {
  const delivery = 2.5;

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
            handleTotal={handleSubTotal}
          />
          <hr />
          <ul>
            <li>
              <span>Sous-Total</span> <span>{subTotal} €</span>
            </li>
            <li>
              <span>Frais de livraison</span> <span>{delivery} €</span>
            </li>
          </ul>
          <hr />
          <ul>
            <li>
              <span>Total</span> <span>{subTotal + delivery}</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
