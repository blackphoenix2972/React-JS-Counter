
import './App.css';
import React, { useState, setstate } from 'react';


function App() {
  
const [counter, setCounter] = useState(0);
  return (
    <div className="box">
    <div className="flex-container">
      <div className="flex-item">
        
      Number {counter}
     
      <br />

      <button onClick={() => setCounter(counter + 1)}> cadsdddw</button>
     
    </div>
    </div>
    </div>
  );
}

export default App;
