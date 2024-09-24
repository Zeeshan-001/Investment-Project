import React from "react";
import logo from "../assets/investment-calculator-logo.png";
import InputGroup from "../util/inputGroup";

const Header = () => {
  return (
    <>
      <header id="header">
        <img src={logo} alt="Investment Calculator Logo" />
        <h1>Investitionsrechner</h1>
      </header>
      <div id="user-input">
        <div className="input-group">
          <InputGroup label="Erstinvestition" />
          <InputGroup label="Jährliche Prüfung" />
        </div>

        <div className="input-group">
          <InputGroup label="Erwartete Rückkehr" />
          <InputGroup label="Zeitdauer" />
        </div>
      </div>
    </>
  );
};

export default Header;
