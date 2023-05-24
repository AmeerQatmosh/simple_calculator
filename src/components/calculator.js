import './calculator.css'
import React, { useState } from 'react';

export default function Calculator() {
    const [primary, setPrimary] = useState(0);
    const [secondary, setSecondary] = useState(0);
    const [myText, setMyText] = useState(0);
  
    const sum = () => {
      let N1 = parseFloat(primary);
      let N2 = parseFloat(secondary);
      let Results = N1 + N2;
      setMyText(Results);
    };
  
    const subtract = () => {
      let N1 = parseFloat(primary);
      let N2 = parseFloat(secondary);
      let Results = N1 - N2;
      setMyText(Results);
    };
  
    const multiply = () => {
      let N1 = parseFloat(primary);
      let N2 = parseFloat(secondary);
      let Results = N1 * N2;
      setMyText(Results);
    };
  
    const divide = () => {
      let N1 = parseFloat(primary);
      let N2 = parseFloat(secondary);
      if (N2 === 0) {
        let error = "Error: Can't Divide by zero!";
        setMyText(error);
      } else {
        let Results = parseFloat(N1 / N2);
        setMyText(Results);
      }
    };
  
    return (
      <div>
        <span>
          <form>
            <h1>Simple Calculator App</h1>
            <input placeholder='First Value' onChange={e => setPrimary(e.target.value)} />
            <input placeholder='Second Value' onChange={e => setSecondary(e.target.value)} />
          </form>
        </span>
  
        <p>Just Enter The values and click on the wanted Operation button and the result will immediately be shown. </p>
  
        <div>
          <label>Result: {myText}</label>
        </div>
  
        <div>
          <button onClick={sum}>+</button>
          <button onClick={subtract}>-</button>
          <button onClick={multiply}>×</button>
          <button onClick={divide}>÷</button>
        </div>
      </div>
    );
  }