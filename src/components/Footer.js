import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-success text-white py-3">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-0">&copy; 2024 GreenTech. All rights reserved.</p>
        
        <nav className="nav">
          <a href="/privacy" className="nav-link text-white">Privacy Policy</a>
          <a href="/terms" className="nav-link text-white">Terms of Service</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
