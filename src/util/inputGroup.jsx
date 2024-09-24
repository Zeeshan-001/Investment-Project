import React from "react";
import UserInput from "./../componnent/userInput";

const InputGroup = ({ label, onValueChange, userInput, identifier }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="number"
        value={userInput}
        onChange={(e) => onValueChange(identifier, e.target.value)}
        required
      />
    </div>
  );
};

export default InputGroup;
