// src/Footer.js
import React from 'react';
import './App.css'; // Ensure styles are shared or import specific CSS if needed

function Footer() {
  return (
    <footer className="App-footer">
      <p>&copy; {new Date().getFullYear()} My React SPA. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

