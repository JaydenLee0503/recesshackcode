// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        {/* ✅ Logo placeholder */}
        <div className="footer-logo-wrapper">
          {/* Add your logo if needed */}
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h4>Finora</h4>
            <ul>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#enterprise">Enterprise</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#team">Team</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Finora. All rights reserved.</p>
        <p>Made with ❤️ by the Finora team.</p>
        <p>
          GitHub: <a href="https://github.com/JaydenLee0503" target="_blank" rel="noopener noreferrer">JaydenLee0503</a> | 
          Email: <a href="mailto:isangmin0503@gmail.com">isangmin0503@gmail.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
