// src/Calculator.js

import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [error, setError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    try {
      const total = 0;
      setResult(total);
    } catch (e) {
      setError(e.message);
      setResult(null);
    }
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
