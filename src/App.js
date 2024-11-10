// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
//import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import MainCorsi from './pages/corsi/MainCorsi';
// import Database from './pages/Corsi/Database';
// Importa altre pagine di tutorial...

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/corsi" element={<MainCorsi />} />

          {/* Aggiungi altre rotte per ogni pagina di tutorial */}
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
// 
//           // <Route path="/tutorials/programming" element={<Programming />} />
          // <Route path="/tutorials/database" element={<Database />} />
          // <Footer />
