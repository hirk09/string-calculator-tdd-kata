import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState(""); // Storing input data
  const [value, setValue] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    // Handle value after submiting input text
    event.preventDefault();
    if (!text) return;
    setError("");
    try {
      const total = 0;
      setValue(total);
    } catch (e) {
      setError(e.message);
      setValue(null);
    }
  };

  return (
    <div className="app">
      <div className="conatiner">
        <div className="title">String Calculator TDD Kata</div>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <input
              value={text}
              onChange={(e) => setText(e.target.value.trim())}
              rows="4"
              className="input-field"
              placeholder="Enter number here"
            />
            {value && <div>data: {value}</div>}
            {error && <div className="error">{error}</div>}
          </div>
          <div className="btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
