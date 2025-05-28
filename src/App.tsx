import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="font-sans bg-ivory text-taupe-dark min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Contact />
          <FAQ />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;