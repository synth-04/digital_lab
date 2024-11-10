// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MainCorsi from './pages/corsi/MainCorsi';
import Cpp from './pages/corsi/Cpp';
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
          <Route path="/corsi/programmazione" element={<Cpp />} />

          {/* Aggiungi altre rotte per ogni pagina di tutorial */}
        </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
// 

          // <Route path="/tutorials/database" element={<Database />} />

