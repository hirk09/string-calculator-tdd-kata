import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState(''); // Storing input data

  const handleSubmit = () => {} // Handle value after submiting input text
  
  return (
    <div className="app">
      <div className='conatiner'>
      <div className='title'>String Calculator TDD Kata</div>
      <form onSubmit={handleSubmit}>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows="4"
                    className='input-field'
                    placeholder="Enter number here"
                />
                <br />
                <button type="submit">Submit</button>
            </form>
      </div>
    </div>
  );
}

export default App;
