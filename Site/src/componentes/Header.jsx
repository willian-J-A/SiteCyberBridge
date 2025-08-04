import React from 'react';
import '../styles/global.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src="/Logo2CyberBridge.png" className='header-logo' alt="cyberbridge logo" />
        </div>
        <nav className="header__nav">
          <a href="https://central.cyberbridge.com.br/" className="header__button">
            abrir ticket
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;