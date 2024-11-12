import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header className="bg-success py-3">
      <div className="container d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
      <img src="https://www.svgrepo.com/show/444576/tech-electronics.svg" alt="Logo" style={{ height: '40px' }} />
      <h1 className="ms-2 text-white" style={{ fontSize: '1.5rem' }}>AgriTech</h1>
    </div>        
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-white">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/predictions" className="nav-link text-white">
                Predicciones
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/catalog" className="nav-link text-white">
                Catálogo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/resources" className="nav-link text-white">
                Recursos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cultivation" className="nav-link text-white">
                Cultivos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/support" className="nav-link text-white">
                Soporte
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
