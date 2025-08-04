import React from 'react';
import '../styles/global.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Conectando sua empresa
        <br /> com segurança e inovação</h1>
        <p className="hero__text">
        Na CyberBridge, oferecemos soluções tecnológicas para garantir a continuidade e segurança do seu negócio.
        </p>
        <a href="https://wa.me/551636060376" className="hero__button">
        Contate-nos
        </a>
      </div>
    </section>
  );
};

export default Hero;