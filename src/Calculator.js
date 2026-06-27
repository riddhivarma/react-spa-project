// Calculator.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleOperation = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setError('Please enter valid numbers');
      setResult(null);
      return;
    }

    setError('');
    switch (operator) {
      case '+': setResult(a + b); break;
      case '-': setResult(a - b); break;
      case '*': setResult(a * b); break;
      case '/':
        if (b === 0) {
          setError('Cannot divide by zero');
          setResult(null);
        } else {
          setResult(a / b);
        }
        break;
      default: break;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
      className="calculator-container"
    >
      <h2>Simple Calculator</h2>
      <div className="input-row">
        <input
          type="number"
          placeholder="First number"
          className="calculator-input"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Second number"
          className="calculator-input"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div className="button-row">
        <button className="calculator-btn" onClick={() => handleOperation('+')}>+</button>
        <button className="calculator-btn" onClick={() => handleOperation('-')}>−</button>
        <button className="calculator-btn" onClick={() => handleOperation('*')}>×</button>
        <button className="calculator-btn" onClick={() => handleOperation('/')}>÷</button>
      </div>
      {error && <p className="error-text">{error}</p>}
      {result !== null && <p className="result-text">Result: {result}</p>}
    </motion.div>
  );
}

export default Calculator;

