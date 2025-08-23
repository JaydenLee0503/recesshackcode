import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* ✅ Logo stays top-left */}
        <div className="footer-logo-wrapper">
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h4>Factgpt</h4>
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
        <p>© {new Date().getFullYear()} Factgpt. All rights reserved.</p>
        <p>Made with ❤️ by the Factgpt-v0 team.</p>
        {/* ✅ GitHub + Email */}
        <p>
          GitHub: <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">JaydenLee0503</a> | 
          Email: <a href="mailto:isangmin0503@gmail.com">isangmin0503@gmail.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
