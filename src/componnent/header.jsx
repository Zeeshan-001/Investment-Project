import React from "react";
import logo from "../assets/investment-calculator-logo.png";
import InputGroup from "../util/inputGroup";

const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="Investment Calculator Logo" />
      <h1>Investitionsrechner</h1>
    </header>
  );
};

export default Header;
