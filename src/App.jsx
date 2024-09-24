import { useState } from "react";
import Header from "./componnent/header";
import Reasults from "./componnent/reasults";
import UserInput from "./componnent/userInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 100,
    expectedReturn: 2,
    duration: 5,
  });

  const inputIsValid = userInput.duration > 0;

  const getUserInput = (inputIdentifier, newValue) => {
    setUserInput((preValue) => {
      return { ...preValue, [inputIdentifier]: +newValue };
    });
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onValueChange={getUserInput} />
      {inputIsValid && <Reasults userInput={userInput} />}
    </>
  );
}

export default App;
