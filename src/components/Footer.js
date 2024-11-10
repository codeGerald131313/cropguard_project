import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 GreenTech. All rights reserved.</p>
        <nav className="nav">
          <a href="/privacy" className="nav-link">Privacy Policy</a>
          <a href="/terms" className="nav-link">Terms of Service</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
