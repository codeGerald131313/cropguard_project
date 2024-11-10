import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">GreenTech</h1>
        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/predictions"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Predicciones
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Catálogo
          </NavLink>
          <NavLink
            to="/resources"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Recursos
          </NavLink>
          <NavLink
            to="/cultivation"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Cultivos
          </NavLink>
          <NavLink
            to="/support"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Soporte
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
