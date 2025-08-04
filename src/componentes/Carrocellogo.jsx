// src/componentes/Carrocellogo.jsx
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/global.css';

// Importa dinamicamente as imagens da pasta logos e ordena por nome
const logos = Object.entries(
  import.meta.glob('../assets/logos/*.{png,jpg,jpeg,svg}', { eager: true })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, mod]) => ({
    src: mod.default,
    url: '#', // Substitua por links reais, se necessário
  }));

export default function Carrocellogo() {
  const canLoop = logos.length > 2; // Permite loop apenas se houver mais de 2 logos

  return (
    <>
      <head>
        <title>Consultoria de TI em Ribeirão Preto - Nossos Clientes Parceiros</title>
        <meta name="description" content="Conheça nossos clientes parceiros e os serviços de consultoria de TI que oferecemos em Ribeirão Preto. Soluções personalizadas para o seu negócio." />
        <meta name="keywords" content="consultoria de TI, Ribeirão Preto, serviços de TI, soluções empresariais, tecnologia da informação" />
        <meta name="author" content="Sua Empresa" />
      </head>
      <div
        className="logo-section"
        style={{
          background: '#5F7350', // Cor da faixa azul
          height: '100%', // Ocupa 100% da altura do pai
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative', // Necessário para posicionar as setas
        }}
      >
        <h2 style={{
          fontSize: '2rem',
          color: '#FFFFFF', // Change color to white
          marginBottom: '1rem',
          textAlign: 'center',
        }}>
          Nossos Clientes Parceiros
        </h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          centeredSlides
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          loop={true} // Enable infinite loop
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          style={{ width: '100%', maxWidth: 600 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            900: { slidesPerView: 3 },
          }}
        >
          {/* Preload images invisibly for seamless looping */}
          {logos.map((logo, idx) => (
            <div key={`preload-${idx}`} style={{ display: 'none' }}>
              <img src={logo.src} alt={`Preload Logo ${idx + 1}`} />
            </div>
          ))}
          {logos.map((logo, idx) => (
            <SwiperSlide key={idx}>
              <a href={logo.url} target="_blank" rel="noopener noreferrer">
                <img src={logo.src} alt={`Logo ${idx + 1}`} className="logo-item main-logo" />
              </a>
            </SwiperSlide>
          ))}
          {/* Adicione as setas como filhos do Swiper */}
          <div className="custom-prev" style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fff',
            borderRadius: '50%',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="custom-next" style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fff',
            borderRadius: '50%',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Swiper>
      </div>
    </>
  );
}