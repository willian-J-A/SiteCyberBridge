import React from 'react';
import '../styles/global.css';
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        {/* Contact Column */}
        <div className="footer__column">
          <h3 className="footer__title">Contato</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="mailto:contato@cyberbridge.com" className="footer__link">
                contato@cyberbridge.com
              </a>
            </li>
            <li className="footer__item">
              <a 
                href="https://wa.me/551636060376" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__link"
                aria-label="WhatsApp da Cyber Bridge"
              >
                <FaWhatsapp className="social-icon" /> (16) 3606-0376
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Column */}
        <div className="footer__column">
          <h3 className="footer__title">Redes Sociais</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <a 
                href="https://www.linkedin.com/company/cyberbridgestaoproativa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__link"
                aria-label="LinkedIn da Cyber Bridge"
              >
                <FaLinkedin className="social-icon" /> /cyberbridgestaoproativa
              </a>
            </li>
            <li className="footer__item">
              <a 
                href="https://www.instagram.com/cyberbridgerp/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__link"
                aria-label="Instagram da Cyber Bridge"
              >
                <FaInstagram className="social-icon" /> @cyberbridgerp
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className="footer__column">
          <h3 className="footer__title">Links Rápidos</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="/termos-de-servico" className="footer__link">
                Termos de Serviço
              </a>
            </li>
            <li className="footer__item">
              <a href="/politica-de-privacidade" className="footer__link">
                Política de Privacidade
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="footer__copyright">
        <p>&copy; {new Date().getFullYear()} Cyber Bridge. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;