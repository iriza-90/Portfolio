import React from 'react';
import Header from './components/Header.js';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Design from './components/Design';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Design />
      <Services />
      <Projects />
      <Stats />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
