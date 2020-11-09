import React from "react";
import Logo from "../images/deliveroo-logo.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={Logo} alt="" />
      </div>
    </header>
  );
};

export default Header;
