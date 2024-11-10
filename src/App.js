// src/App.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes';  // Importa las rutas

function App() {
  return (
    <Router>
      <Header />
      <main>
        <AppRoutes />  {/* Usa el componente Routes */}
      </main>
      <Footer />
    </Router>
  );
}

export default App;
