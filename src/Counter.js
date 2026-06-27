import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css'; 

function Counter() {
  // Converted to React Hooks to match resume layout perfectly
  const [counter, setCounter] = useState(0);

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Counter</h1>
      <h2>Value is {counter}</h2>

      <div className="counter-buttons">
        <input
          type="button"
          onClick={() => setCounter(prev => prev + 1)}
          value="+"
        />
        <input
          type="button"
          onClick={() => setCounter(prev => prev - 1)}
          value="-"
        />
        <input
          type="button"
          onClick={() => setCounter(0)}
          value="Reset"
        />
      </div>
    </motion.div>
  );
}

export default Counter;