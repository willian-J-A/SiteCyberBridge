import React from 'react';
import './styles/global.css';
import Header from './componentes/Header';
import Hero from './componentes/Hero';
import Services from './componentes/Services';
import About from './componentes/About';
import Footer from './componentes/Footer';
import Carrocellogo from './componentes/Carrocellogo';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Carrocellogo />
      <About />
      <Footer />
    </>
  );
};

export default App;
