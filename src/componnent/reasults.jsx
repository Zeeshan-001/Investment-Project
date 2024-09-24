import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.js";

const Reasults = ({ userInput }) => {
  const results = calculateInvestmentResults(userInput);

  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Jahr</th>
          <th>Investitionswert</th>
          <th>Zinsen (Jahr)</th>
          <th>Gesamtzins</th>
          <th>investiertes Kapital</th>
        </tr>
      </thead>

      <tbody>
        {results.map((result) => {
          const totalInterest =
            result.valueEndOfYear -
            result.annualInvestment * result.year -
            initialInvestment;

          const totalAmountInvested = result.valueEndOfYear - totalInterest;

          return (
            <tr key={result.year}>
              <td className="center">{result.year}</td>
              <td className="center">
                {formatter.format(result.valueEndOfYear)}
              </td>
              <td className="center">{formatter.format(result.interest)}</td>
              <td className="center">{formatter.format(totalInterest)}</td>
              <td className="center">
                {formatter.format(totalAmountInvested)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Reasults;
