import React from 'react';
import '../styles/global.css';
import aboutIcon from '../assets/about-icon.svg';
import aboutIllustration from '../assets/about-illustration.png';
import missionIcon from '../assets/mission-icon.svg';
import missionIllustration from '../assets/mission-illustration.png';
import { useEffect } from 'react';

const About = () => {
  
  useEffect(() => {
    const aboutContent = document.querySelector('.about-content');
    const missionContent = document.querySelector('.mission-content');
  
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
  
      if (aboutContent.getBoundingClientRect().top < windowHeight - 100) {
        aboutContent.classList.add('active');
      }
      if (missionContent.getBoundingClientRect().top < windowHeight - 100) {
        missionContent.classList.add('active');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ativa se já estiver visível
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
    <section className="about-section">
      <div className="container">

        {/* SOBRE A EMPRESA */}
        <div className="about-header">
          <img src={aboutIcon} alt="Ícone Sobre Nós" className="about-icon" />
          <h2 className="about-title">Sobre a Cyber Bridge</h2>
        </div>

        <div className="about-content">
          <div className="about-text-block">
            <p className="about-text">
              A <strong>Cyber Bridge</strong> é uma empresa especializada em <strong>gestão estratégica e proativa de TI</strong>, atuando como uma ponte entre empresas e a excelência em tecnologia. Nosso compromisso é com a <strong>eficiência operacional, a segurança da informação</strong> e a <strong>continuidade do seu negócio</strong>.
            </p>
            <p className="about-text">
              Nascemos para atender a necessidade de <strong>soluções de TI seguras, escaláveis e personalizadas</strong> para empresas em crescimento.
            </p>
            <p className="about-text">
              Nosso foco é criar <strong>parcerias contínuas</strong>, com atendimento de ponta a ponta — diagnóstico, implementação e suporte, tudo com <strong>redução de custos</strong> e <strong>alta performance</strong>.
            </p>
          </div>

          <div className="about-illustration">
            <img src={aboutIllustration} alt="Ilustração Sobre a Empresa" />
          </div>
        </div>

        {/* MISSÃO DA EMPRESA */}
        <div className="mission-header">
          <img src={missionIcon} alt="Ícone Missão" className="mission-icon" />
          <h2 className="mission-title">Nossa Missão</h2>
        </div>

        <div className="mission-content">
          <div className="mission-text-block">
            <p className="mission-text">
              Garantir que a <strong>infraestrutura de TI</strong> dos nossos parceiros opere com a máxima eficiência, <strong>antecipando falhas</strong>, <strong>reduzindo paradas acidentais</strong> e potencializando a produtividade com soluções sob medida.
            </p>
            <p className="mission-text">
              Somos <strong>aliados estratégicos</strong> na transformação digital das empresas, entregando <strong>inteligência, conectividade e segurança</strong> com uma abordagem consultiva e humanizada.
            </p>
          </div>

          <div className="mission-illustration">
            <img src={missionIllustration} alt="Ilustração da Missão" />
          </div>
        </div>

      </div>
    </section>

    </>
  );
};

export default About;




