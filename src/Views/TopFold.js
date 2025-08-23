import React from 'react';
import './TopFold.css';

const TopFold =() =>(
  <div className='topfold'>
    {/* Navbar */}
    <nav className='navbar'>
      <div className='nav-left'>
        <div className='logo'>YourLogo</div>
        <ul className='nav-links'>
          <li>Team</li>
          <li>Newsletter</li>
          <li>Footer</li>
        </ul>
      </div>
      <div className='nav-right'>
        <button className='login-btn'>Log in</button>
        <button className='signup-btn'>Sign Up Free →</button>
      </div>
    </nav>

    {/* Hero Section */}
    <section className='hero'>
      <h4 className='hero-subtitle'>Leadpages Template Marketplace</h4>
      <h1 className='hero-title'>
        <span className='highlight'>200+ Conversion Optimization</span><br/>
        Templates for Marketers
      </h1>
      <p className='hero-desc'>
        Every template is professionally-designed with over a decade of conversion marketing expertise baked in, 
        so you can be confident you'll capture leads and sales. Use our intuitive drag-and-drop builder to quickly 
        make a beautiful mobile-responsive landing page in 30 minutes or less.
      </p>
      <button className='cta-btn'>Log in &amp; Get Started</button>
    </section>
  </div>
);

export default TopFold;
