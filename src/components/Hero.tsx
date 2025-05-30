import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
    // Import des images pour le slideshow
    import img1 from '/src/image/img_background1.jpg';
    import img2 from'/src/image/img_background2.jpeg';
    import img3 from '/src/image/img_background3.webp';
    import img4 from '/src/image/img_background4.jpg';
  


const Hero = () => {
    const images = [img1, img2, img3, img4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Slideshow toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20">
      
      {/* Slideshow en arrière-plan */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-rose/30 to-ivoire/50 z-10"></div>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Background ${index}`}
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-50' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Contenu principal */}
      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-rose">
              Retrouvez bien-être et sérénité avec un massage à domicile
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-taupe-dark mb-8 max-w-xl">
              Des massages personnalisés qui viennent à vous. Relaxation et détente garanties dans le confort de votre domicile.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#contact" className="btn btn-primary flex items-center justify-center">
              Prendre rendez-vous
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a href="#services" className="btn btn-service flex items-center justify-center">
              Découvrir les services
            </a>
          </motion.div>
        </div>
      </div>

      {/* Icône de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a
            href="#services"
            aria-label="Scroll to services"
            className="flex flex-col items-center text-aubergine"
          >
            <span className="text-sm mb-2">Découvrir</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;