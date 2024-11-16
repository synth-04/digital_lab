// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import MainCorsi from './pages/corsi/MainCorsi';
import Cpp from './pages/corsi/Cpp';
import Html from './pages/corsi/Html';
import Sql from './pages/corsi/Sql';
import Architecture from './pages/corsi/Architecture';
// Importa altre pagine...
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/contattami" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/corsi" element={<PageTransition><MainCorsi /></PageTransition>} />
        <Route path="/corsi/programmazionecpp" element={<PageTransition><Cpp /></PageTransition>} />
        <Route path="/corsi/web-development" element={<PageTransition><Html /></PageTransition>} />
        <Route path="/corsi/architettura-del-computer" element={<PageTransition><Architecture /></PageTransition>} />
        <Route path="/corsi/sql" element={<PageTransition><Sql /></PageTransition>} />
        {/* Aggiungi altre rotte per ogni pagina */}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div>
        <CustomCursor />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
