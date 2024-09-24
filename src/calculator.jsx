// src/Calculator.js

import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setValue] = useState(0);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    let total = 0;
    e.preventDefault();
    setError("");
    if (!input) {
      total = 0;
      return;
    }
    try {
      let delimiter = ",";
      let numbers = input;
      if (numbers.startsWith("//")) {
        [delimiter, numbers] = numbers.slice(2).split("\n");
      }

      numbers = numbers.replace(/\n/g, delimiter);
      const numberList = numbers.split(delimiter);

      const negatives = [];

      for (let number of numberList) {
        const num = parseInt(number, 10);
        if (isNaN(num)) continue; // Ignore non-numeric values
        if (num < 0) {
          negatives.push(num);
        }
        if (num <= 1000) {
          total += num;
        }
      }

      if (negatives.length > 0) {
        throw new Error(
          `Negative numbers not allowed: ${negatives.join(", ")}`
        );
      }
    } catch (e) {
      setError(e.message);
      total = 0;
    }
    setValue(total);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value.trim())}
          rows="4"
          className="input-field"
          placeholder="Enter number here"
        />
        {result !== null && <div>Result: {result}</div>}
        {error && <div className="error">{error}</div>}
      </div>
      <div className="btn">
        <button type="submit">Calculate</button>
      </div>
    </form>
  );
};

export default Calculator;
