import React from 'react';
import './TopFold.css';
import {useAuth0} from '@auth0/auth0-react';

const TopFold =() =>{
  const {loginWithRedirect, logout, isAuthenticated, user} = useAuth0();

  return (
    <div className='topfold'>
      {/* Navbar */}
      <div className='navbar'>
        <div className='nav-left'>
          <h2 className='logo'>YourLogo</h2>
          <ul className='nav-links'>
            <li><a href='#team'>Team</a></li>
            <li><a href='#newsletter'>Newsletter</a></li>
            <li><a href='#footer'>Footer</a></li>
          </ul>
        </div>

        <div className='nav-right'>
          {!isAuthenticated ? (
            <>
              <button className='login-btn' onClick={() => loginWithRedirect()}>
                Log in
              </button>
              <button className='signup-btn' onClick={() => loginWithRedirect({screen_hint: 'signup'})}>
                Sign Up Free →
              </button>
            </>
          ) : (
            <>
              <span className='welcome-text'>Welcome, {user.name}</span>
              <button className='logout-btn' onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}>
                Log Out
              </button>
            </>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <div className='hero'>
        <p className='hero-subtitle'>Leadpages Template Marketplace</p>
        <h1 className='hero-title'>
          <span className='highlight'>200+ Conversion Optimization</span><br />
          Templates for Marketers
        </h1>
        <p className='hero-desc'>
          Every template is professionally-designed with over a decade of conversion marketing expertise
          baked in, so you can be confident you’ll capture leads and sales. Use our intuitive drag-and-drop
          builder to quickly make a beautiful mobile-responsive landing page in 30 minutes or less.
        </p>
        
        {!isAuthenticated ? (
          <button className='cta-btn' onClick={() => loginWithRedirect()}>
            Log in & Get Started
          </button>
        ) : (
          <button className='cta-btn' onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}>
            Log Out & Exit
          </button>
        )}
      </div>
    </div>
  );
};

export default TopFold;
