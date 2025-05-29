import React from 'react';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-rose-light/50 text-ivoire pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
               <img 
            src="src/image/logo_nermine.png" 
            alt="Nermine Logo" 
            className={`h-16 transition-transform duration-300 `}
          />
            <p className="mb-6 text-taupe-light/80">
              Services professionnels de massage à domicile, pour votre bien-être et votre confort.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-rose-light flex items-center justify-center hover:bg-miel transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-rose-light flex items-center justify-center hover:bg-miel transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-miel-dark">Services</h4>
            <ul className="space-y-3">
              {['Massage Suédois', 'Massage Californien', 'Massage aux Pierres Chaudes', 'Forfaits', 'Cartes Cadeaux'].map((item) => (
                <li key={item}>
                  <a 
                    href="#services" 
                    className="text-taupe/80 hover:text-taupe-dark transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-miel-dark">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 text-miel-dark" />
                <a href="tel:+33712345678" className="text-taupe/80 hover:text-taupe-dark transition-colors">
                  +216 58 853 740
                </a>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 text-miel-dark" />
                <a href="mailto:massage.nermine@gmail.com" className="text-taupe/80 hover:text-taupe-dark transition-colors">
                  massage.nermine@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-rose-light pt-8 mt-8 text-center text-ivoire/60 text-sm">
          <p>&copy; {currentYear} NERMINE. Tous droits réservés.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <a href="#" className="hover:text-miel-dark transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-miel-dark transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-miel-dark transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;