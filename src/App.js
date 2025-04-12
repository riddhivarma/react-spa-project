import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Counter from './Counter';
import Contact from './Contact';
import NotFound from './NotFound';
import Calculator from './Calculator'; // At the top
import Visitor from './Visitor';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My React Single Page Application</h1>
          <nav className="App-nav">
            <Link to="/" className="App-link">Home</Link>
            <Link to="/about" className="App-link">About</Link>
            <Link to="/counter" className="App-link">Counter</Link>
            <Link to="/calculator" className="App-link">Calculator</Link>
            <Link to="/contact" className="App-link">Contact</Link>
            <Link to="/visitor" className="App-link">Visitor</Link>


          </nav>
        </header>

        <main className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/visitor" element={<Visitor />} />
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










