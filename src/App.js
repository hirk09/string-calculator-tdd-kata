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
        <div className='form-field'>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows="4"
                    className='input-field'
                    placeholder="Enter number here"
                    />
                    </div>
                <div className='btn'>
                <button type="submit">Submit</button>
                </div>
            </form>
      </div>
    </div>
  );
}

export default App;
