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
  const [subTotal, setSubTotal] = useState(0);

  const handleSubTotal = () => {
    let newSubTotal = 0;
    selectedMeals.forEach((meal) => {
      newSubTotal += Number(meal.price);
    });
    setSubTotal(newSubTotal);
  };

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
              handleSubTotal={handleSubTotal}
              setSubTotal={setSubTotal}
            />
          </div>
          <div id="sidebar">
            <Cart
              selectedMeals={selectedMeals}
              setSelectedMeals={setSelectedMeals}
              subTotal={subTotal}
              handleSubTotal={handleSubTotal}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
