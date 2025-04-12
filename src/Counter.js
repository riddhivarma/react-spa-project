import React from 'react';
import { motion } from 'framer-motion';
import './App.css'; // Make sure your styles are included here

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  render() {
    return (
      <motion.div
        className="page-container"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Counter</h1>
        <h2>Value is {this.state.counter}</h2>

        <div className="counter-buttons">
          <input
            type="button"
            onClick={() => this.setState({ counter: this.state.counter + 1 })}
            value="+"
          />
          <input
            type="button"
            onClick={() => this.setState({ counter: this.state.counter - 1 })}
            value="-"
          />
          <input
            type="button"
            onClick={() => this.setState({ counter: 0 })}
            value="Reset"
          />
        </div>
      </motion.div>
    );
  }
}

export default Counter;



