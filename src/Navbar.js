// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/counter" style={{ marginRight: '10px' }}>Counter</Link>
      <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
    </nav>
  );
}

export default Navbar;
