import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Cart from "./components/Cart";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
            <Categories categories={data.categories} />
          </div>
          <div id="sidebar">
            <Cart />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
