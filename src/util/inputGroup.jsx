import React from "react";

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
