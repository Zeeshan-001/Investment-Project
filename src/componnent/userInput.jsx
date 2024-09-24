import React from "react";
import InputGroup from "../util/inputGroup";

const UserInput = ({ userInput, onValueChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <InputGroup
          label="Erstinvestition"
          onValueChange={onValueChange}
          userInput={userInput.initialInvestment}
          identifier="initialInvestment"
        />
        <InputGroup
          label="jährliche Investition"
          onValueChange={onValueChange}
          userInput={userInput.annualInvestment}
          identifier="annualInvestment"
        />
      </div>

      <div className="input-group">
        <InputGroup
          label="Erwartete Rückkehr %"
          onValueChange={onValueChange}
          userInput={userInput.expectedReturn}
          identifier="expectedReturn"
        />
        <InputGroup
          label="Zeitdauer"
          onValueChange={onValueChange}
          userInput={userInput.duration}
          identifier="duration"
        />
      </div>
    </section>
  );
};

export default UserInput;
