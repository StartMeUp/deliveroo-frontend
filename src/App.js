import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Cart from "./components/Cart";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
library.add(faPlusCircle, faMinusCircle);

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMeals, setSelectedMeals] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://deliveroo-backend-smu.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const increaseQuantity = (id) => {
    const newSelectedMeals = [...selectedMeals];
    newSelectedMeals.forEach((meal) => {
      if (meal.id === id) meal.quantity++;
    });
    setSelectedMeals(newSelectedMeals);
  };

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <div>
      <Header />
      <Hero restaurant={data.restaurant} />
      <section id="content">
        <div className="container">
          <div id="menus">
            <Categories
              categories={data.categories}
              setSelectedMeals={setSelectedMeals}
              selectedMeals={selectedMeals}
              increaseQuantity={increaseQuantity}
            />
          </div>
          <div id="sidebar">
            <Cart
              selectedMeals={selectedMeals}
              setSelectedMeals={setSelectedMeals}
              increaseQuantity={increaseQuantity}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
