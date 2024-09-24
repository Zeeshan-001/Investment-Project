import React from "react";

const InputGroup = ({ label }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="number" />
    </div>
  );
};

export default InputGroup;
