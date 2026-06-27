import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Counter from './Counter';
import Contact from './Contact';
import NotFound from './NotFound';
import Calculator from './Calculator'; 
import Visitor from './Visitor';

function App() {
  return (
    // Add the basename matching your repository folder name
      <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header className="App-header">
          <h1>My React Single Page Application</h1>
          <nav className="App-nav">
            <NavLink to="/" className="App-link">Home</NavLink>
            <NavLink to="/about" className="App-link">About</NavLink>
            <NavLink to="/counter" className="App-link">Counter</NavLink>
            <NavLink to="/calculator" className="App-link">Calculator</NavLink>
            <NavLink to="/contact" className="App-link">Contact</NavLink>
            <NavLink to="/visitor" className="App-link">Visitor</NavLink>
          </nav>
        </header>

        <main className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/visitor" element={<Visitor />} />
            {/* Kept at the bottom to catch unknown paths properly */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <footer className="App-footer">
          <p>&copy; {new Date().getFullYear()} My React SPA. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;