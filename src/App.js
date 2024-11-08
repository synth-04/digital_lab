// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
//import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
//import Programming from './pages/Tutorials/Programming';
// import Database from './pages/Tutorials/Database';
// Importa altre pagine di tutorial...

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Aggiungi altre rotte per ogni pagina di tutorial */}
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
// <Navbar />
//           // <Route path="/tutorials/programming" element={<Programming />} />
          // <Route path="/tutorials/database" element={<Database />} />
          // <Footer />
