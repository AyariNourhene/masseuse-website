import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-ivory/95 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="/" className="flex items-center">
          <h1 className="text-2xl font-serif font-medium text-aubergine">
            Harmonie<span className="text-gold-dark">Massage</span>
          </h1>
        </a>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center text-sm px-4">
            <MapPin size={16} className="mr-2 text-aubergine" />
            <span>Service à domicile</span>
          </div>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['Accueil', 'Services', 'À propos', 'Contact', 'FAQ'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-')}`}
                  className={`transition-all duration-300 hover:text-aubergine relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gold after:transition-all after:duration-300 ${
                    isScrolled ? 'text-taupe-dark' : 'text-taupe-dark'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-aubergine p-2"
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-ivory/95 backdrop-blur-sm overflow-hidden"
          >
            <nav className="container-custom py-6">
              <ul className="flex flex-col space-y-4">
                {['Accueil', 'Services', 'À propos', 'Contact', 'FAQ'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-')}`}
                      className="block py-2 text-taupe-dark hover:text-aubergine transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 space-y-3 border-t border-lavender pt-4">
                <div className="flex items-center text-sm">
                  <MapPin size={16} className="mr-2 text-aubergine" />
                  <span>Service à domicile</span>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;