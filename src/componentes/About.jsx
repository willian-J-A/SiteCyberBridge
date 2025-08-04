import React, { useEffect } from 'react';
import '../styles/global.css';
import aboutIcon from '../assets/about-icon.svg';
import aboutIllustration from '../assets/about-illustration.png';
import missionIcon from '../assets/mission-icon.svg';
import missionIllustration from '../assets/mission-illustration.png';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1 }
    );

    const aboutEl = document.querySelector('.about-content');
    const missionEl = document.querySelector('.mission-content');

    [aboutEl, missionEl].forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sobre a empresa */}
      <section className="about-section">
        <div className="container">
          <div className="about-header">
            <img src={aboutIcon} alt="Ícone Sobre" className="about-icon" />
            <h2 className="about-title">Sobre a Cyber Bridge</h2>
          </div>
          <div className="about-content">
            <div className="about-text-block">
              <p className="about-text" style={{ textAlign: 'justify', marginBottom: '1.5rem' }}>
                A <strong>Cyber Bridge</strong> é líder em <strong>gestão proativa de TI</strong>,
                antecipando problemas e implementando soluções antes que eles impactem seu negócio.
                Nosso foco é garantir eficiência, segurança e inovação contínuas.
              </p>
              <p className="about-text">
                Nascemos para atender a necessidade de soluções de TI seguras, escaláveis e personalizadas para empresas em crescimento.
              </p>
              <p className="about-text">
                Nosso foco é criar parcerias contínuas, com atendimento de ponta a ponta — diagnóstico,
                implementação e suporte, tudo com redução de custos e alta performance.
              </p>
            </div>
            <div className="about-image-block">
              <img src={aboutIllustration} alt="Ilustração sobre a empresa" />
            </div>
          </div>
        </div>
      </section>

      {/* Missão da empresa */}
      <section className="about-section">
        <div className="container">
          <div className="about-header">
            <img src={missionIcon} alt="Ícone Missão" className="about-icon" />
            <h2 className="about-title">Nossa Missão</h2>
          </div>
          <div className="mission-content">
            <div className="about-text-block">
              <p className="about-text">
                Garantir que a <strong>infraestrutura de TI</strong> dos nossos parceiros opere com a máxima eficiência,
                antecipando falhas, reduzindo paradas acidentais e potencializando a produtividade com soluções sob medida.
              </p>
              <p className="about-text">
                Somos aliados estratégicos na transformação digital das empresas, entregando inteligência,
                conectividade e segurança com uma abordagem consultiva e humanizada.
              </p>
            </div>
            <div className="about-image-block">
              <img src={missionIllustration} alt="Ilustração missão" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
