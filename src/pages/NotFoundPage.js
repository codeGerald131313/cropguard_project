import React from 'react';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-message">Página no encontrada</p>
      <p className="notfound-description">Lo sentimos, la página que estás buscando no existe. Por favor, regresa a la página principal.</p>
      <a href="/" className="notfound-home-link">Regresar a Inicio</a>
    </div>
  );
};

export default NotFound;
