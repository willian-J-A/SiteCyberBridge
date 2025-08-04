import React from 'react';
import { FaShieldAlt, FaLock, FaNetworkWired, FaDatabase, FaBug, FaBrain } from 'react-icons/fa';
import '../styles/global.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaShieldAlt className="service-icon" />,
      title: "Gestão Proativa de TI",
      description: "Monitoramento contínuo e ações preventivas para garantir estabilidade, reduzir falhas e aumentar a produtividade da sua infraestrutura de TI."
    },
    {
      id: 2,
      icon: <FaLock className="service-icon" />,
      title: "Cibersegurança Avançada",
      description: "Proteja sua empresa com soluções completas de segurança da informação, incluindo firewall, detecção de ameaças e resposta a incidentes."
    },
    {
      id: 3,
      icon: <FaNetworkWired className="service-icon" />,
      title: "Redes e Conectividade",
      description: "Projetamos e implementamos redes seguras, rápidas e escaláveis para conectar sua operação com eficiência em qualquer ambiente."
    },
    {
      id: 4,
      icon: <FaDatabase className="service-icon" />,
      title: "Backup e Recuperação de Desastres",
      description: "Evite perdas de dados com estratégias de backup automatizadas e recuperação rápida em caso de falhas ou ataques."
    },
    {
      id: 5,
      icon: <FaBug className="service-icon" />,
      title: "Gestão de Vulnerabilidades",
      description: "Identifique e corrija falhas antes que elas sejam exploradas. Testes de intrusão e análises profundas de segurança digital."
    },
    {
      id: 6,
      icon: <FaBrain className="service-icon" />,
      title: "Consultoria Estratégica em TI",
      description: "Alinhe sua infraestrutura tecnológica aos objetivos do negócio com orientações personalizadas, seguras e escaláveis."
    }
  ];

  return (
    <section className="services">
      <div className="services__container">
        <h2 className="services__title">Nossos Serviços</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;