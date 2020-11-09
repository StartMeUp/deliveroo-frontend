import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <section id="header">
        <div className="container">
          <Header />
        </div>
      </section>
      <section id="hero">
        <div className="container">
          <Hero />
        </div>
      </section>
      <section id="content">
        <div className="container">
          <div id="menus">
            <Categories />
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
