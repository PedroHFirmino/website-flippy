
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';


function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
         <h1>Flippy</h1>
          <nav className="nav-bar">
            <ul className={isMenuActive ? 'active' : ''}>
              <li><Link to="/">Flippy</Link></li>
              <li><Link to="/sobre">Produtos</Link></li>
              <li><Link to="/feedbacks">Serviços</Link></li>
              <li><Link to="/contato">Contato</Link></li>
              <li><Link to="/trabalhe-conosco">Trabalhe Conosco</Link></li>
            </ul>
          </nav>
          <div className="hamburger" id="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<h2>Flippy</h2>} />
            <Route path="/sobre" element={<h2>Produtos</h2>} />
            <Route path="/feedbacks" element={<h2>Serviços</h2>} />
            <Route path="/contato" element={<h2>Contato</h2>} />
            <Route path="/trabalhe-conosco" element={<h2>Trabalhe Conosco</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
