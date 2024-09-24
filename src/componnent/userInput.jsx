import React, { useState } from "react";
import InputGroup from "../util/inputGroup";

const UserInput = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const getUserInput = (inputIdentifier, newValue) => {
    setUserInput((preValue) => {
      return { ...preValue, [inputIdentifier]: newValue };
    });
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <InputGroup
          label="Erstinvestition"
          onValueChange={getUserInput}
          userInput={userInput.initialInvestment}
          identifier="initialInvestment"
        />
        <InputGroup
          label="Jährliche Prüfung"
          onValueChange={getUserInput}
          userInput={userInput.annualInvestment}
          identifier="annualInvestment"
        />
      </div>

      <div className="input-group">
        <InputGroup
          label="Erwartete Rückkehr"
          onValueChange={getUserInput}
          userInput={userInput.expectedReturn}
          identifier="expectedReturn"
        />
        <InputGroup
          label="Zeitdauer"
          onValueChange={getUserInput}
          userInput={userInput.duration}
          identifier="duration"
        />
      </div>
    </section>
  );
};

export default UserInput;
