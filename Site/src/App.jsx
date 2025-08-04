import React from 'react';
import './styles/global.css';
import Header from './componentes/Header';
import Hero from './componentes/Hero';
import Services from './componentes/Services';
import About from './componentes/About';
import Footer from './componentes/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <Hero />
        <Services />
        <About />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;