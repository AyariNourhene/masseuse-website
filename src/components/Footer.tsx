import React from 'react';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-aubergine text-ivory pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-serif font-medium mb-6 text-gold">
              Harmonie<span className="text-ivory">Massage</span>
            </h3>
            <p className="mb-6 text-ivory/80">
              Services professionnels de massage à domicile, pour votre bien-être et votre confort.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-aubergine-light flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-aubergine-light flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6 text-gold">Services</h4>
            <ul className="space-y-3">
              {['Massage Suédois', 'Massage Californien', 'Massage aux Pierres Chaudes', 'Forfaits', 'Cartes Cadeaux'].map((item) => (
                <li key={item}>
                  <a 
                    href="#services" 
                    className="text-ivory/80 hover:text-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6 text-gold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 text-gold" />
                <a href="tel:+33712345678" className="text-ivory/80 hover:text-gold transition-colors">
                  +33 7 12 34 56 78
                </a>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 text-gold" />
                <a href="mailto:contact@harmoniemassage.fr" className="text-ivory/80 hover:text-gold transition-colors">
                  contact@harmoniemassage.fr
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-aubergine-light pt-8 mt-8 text-center text-ivory/60 text-sm">
          <p>&copy; {currentYear} HarmonieMassage. Tous droits réservés.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <a href="#" className="hover:text-gold transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-gold transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-gold transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;