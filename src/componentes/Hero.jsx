import React from 'react';
import '../styles/global.css';
import { WHATSAPP_URL } from '../utils/constants';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          Proatividade em TI:
          <br /> Conectando sua empresa ao futuro
        </h1>
        <p className="hero__text" style={{ textAlign: 'justify', marginBottom: '2rem' }}>
          Na CyberBridge, lideramos com soluções proativas para garantir a continuidade,
          segurança e inovação do seu negócio. Transforme desafios em oportunidades com nossa expertise.
        </p>
        <a
          href={WHATSAPP_URL}
          className="hero__button"
          style={{ display: 'inline-block', textAlign: 'center' }}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fale agora com a Cyber Bridge no WhatsApp"
        >
          Fale com um especialista agora
        </a>
      </div>
    </section>
  );
};

export default Hero;