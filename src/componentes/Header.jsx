import React from 'react';
import '../styles/global.css';
import { TICKET_URL } from '../utils/constants';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <img
            src="/Logo2CyberBridge.png"
            className="header-logo"
            alt="Logotipo Cyber Bridge"
          />
        </div>
        <nav className="header__nav" style={{ textAlign: 'center' }}>
          <a
            href={TICKET_URL}
            className="header__button"
            style={{ display: 'inline-block', textAlign: 'center' }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicite suporte proativo agora"
          >
            Suporte Proativo
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
