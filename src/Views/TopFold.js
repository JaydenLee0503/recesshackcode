// TopFold.js
import React from 'react';
import './TopFold.css';
import {useAuth0} from '@auth0/auth0-react';
import {ReactComponent as DataIcon} from '../assets/images/data.svg';
import {ReactComponent as FinancialIcon} from '../assets/images/financial.svg';
import {ReactComponent as BudgetIcon} from '../assets/images/budget.svg';
import {ReactComponent as ERPIcon} from '../assets/images/erp.svg';
import {ReactComponent as MonthEndIcon} from '../assets/images/monthend.svg';
import {ReactComponent as CashIcon} from '../assets/images/cash.svg';
import {ReactComponent as AnalysisIcon} from '../assets/images/analysis.svg';

const TopFold = () => {
  const {loginWithRedirect, logout, isAuthenticated, user} = useAuth0();

  const cards = [
    {icon: DataIcon, label: 'Data Consolidation'},
    {icon: FinancialIcon, label: 'Financial Reporting'},
    {icon: BudgetIcon, label: 'Budgeting & Forecasting'},
    {icon: ERPIcon, label: 'ERP-Excel Connectivity'},
    {icon: MonthEndIcon, label: 'Month-End Close'},
    {icon: CashIcon, label: 'Cash Management'},
    {icon: AnalysisIcon, label: 'Data Analysis'},
  ];

  return (
    <div className='topfold'>
      {/* Navbar */}
      <div className='navbar'>
        <h2 className='logo'>datarails</h2>
        <ul className='nav-links'>
          <li>Solutions</li>
          <li>Product</li>
          <li>Pricing</li>
          <li>Resources</li>
          <li>Success Stories</li>
          <li>Academy</li>
          <li>About</li>
        </ul>
        <div className='nav-right'>
          <button className='login-btn' onClick={() => loginWithRedirect()}>
            {isAuthenticated ? `Welcome, ${user.name}` : 'Login'}
          </button>
          {!isAuthenticated && (
            <button className='signup-btn' onClick={() => loginWithRedirect({screen_hint: 'signup'})}>
              Sign Up
            </button>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <div className='hero'>
        <h1 className='hero-title'>Transform the CFO’s Office</h1>
        <p className='hero-subtitle'>
          Make the CFO’s office the home of business insights with the #1 AI-powered Excel-native FP&A platform.
        </p>
        <p className='hero-question'>What do you want to simplify today?</p>

        {/* Cards */}
        <div className='hero-cards'>
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={index} className='hero-card'>
                <Icon className='card-icon' />
                <span>{card.label}</span>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        {!isAuthenticated ? (
          <button className='cta-btn' onClick={() => loginWithRedirect()}>
            Log in & Get Started
          </button>
        ) : (
          <button className='cta-btn' onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}>
            Log Out
          </button>
        )}
      </div>

      {/* Curve */}
      <div className='hero-curve'>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0 C720,120 720,120 1440,0 L1440,120 L0,120 Z" fill="#f3e8ff"></path>
        </svg>
      </div>
    </div>
  );
};

export default TopFold;
