import React from 'react';
import '../styles/global.css';
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';
import {
  WHATSAPP_URL,
  LINKEDIN_URL,
  INSTAGRAM_URL,
  EMAIL,
  PHONE,
} from '../utils/constants';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        {/* Contato */}
        <div className="footer__column">
          <h3 className="footer__title">Contato</h3>
          <ul className="footer__list">
          <li className="footer__item">
              <a href={`mailto:${EMAIL}`} className="footer__link" aria-label={`Enviar email para ${EMAIL}`}>
                {EMAIL}
              </a>
            </li>
            <li className="footer__item">
              <a href={`tel:${PHONE.replace(/\\D/g, '')}`} className="footer__link" aria-label={`Ligar para ${PHONE}`}>
                {PHONE}
              </a>
            </li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div className="footer__column">
          <h3 className="footer__title">Redes Sociais</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="footer__link" aria-label="WhatsApp">
                <FaWhatsapp className="social-icon" /> WhatsApp
              </a>
            </li>
            <li className="footer__item">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="footer__link" aria-label="LinkedIn">
                <FaLinkedin className="social-icon" /> LinkedIn
              </a>
            </li>
            <li className="footer__item">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="footer__link" aria-label="Instagram">
                <FaInstagram className="social-icon" /> Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Links Rápidos */}
        <div className="footer__column">
          <h3 className="footer__title">Links Rápidos</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="/termos-de-servico" className="footer__link">Termos de Serviço</a>
            </li>
            <li className="footer__item">
              <a href="/politica-de-privacidade" className="footer__link">Política de Privacidade</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__cta" style={{ textAlign: 'center', marginTop: '2rem' }}>
          <p style={{ marginBottom: '1rem' }}>Pronto para transformar sua TI? Entre em contato agora e descubra como podemos ajudar!</p>
          <a href={WHATSAPP_URL} className="footer__button" style={{ display: 'inline-block', textAlign: 'center' }} target="_blank" rel="noopener noreferrer">
            Fale com um especialista
          </a>
        </div>

      <div className="footer__copy">
        © {new Date().getFullYear()} Cyber Bridge. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
