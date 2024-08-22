import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Design from './components/Design';
import ContactPage from './ContactPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <Design />
              <Services />
              <Projects />
              <Stats />
              <Testimonials />
               <Footer />
            </>
          } />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
       
      </div>
    </Router>
  );
};

export default App;
