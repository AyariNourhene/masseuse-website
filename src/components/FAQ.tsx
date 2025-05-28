import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "Comment se déroule une séance de massage à domicile ?",
    answer: "Je me déplace chez vous avec tout le matériel nécessaire (table de massage, huiles, musique relaxante, etc.). Après une courte discussion pour comprendre vos besoins, j'installe mon équipement dans un espace calme de votre choix. La séance se déroule ensuite selon la technique choisie, avec un respect total de votre intimité et de votre confort."
  },
  {
    question: "Quelle est la durée d'une séance de massage ?",
    answer: "La durée standard d'une séance est de 60 minutes, mais je propose également des séances de 90 minutes pour une relaxation plus profonde. Le temps d'installation et de rangement n'est pas comptabilisé dans la durée du massage."
  },
  {
    question: "Quels sont les moyens de paiement acceptés ?",
    answer: "J'accepte les paiements en espèces, par carte bancaire via un terminal mobile, et par virement bancaire. Le règlement s'effectue à la fin de la séance."
  },
  {
    question: "Est-ce que je dois préparer quelque chose avant votre arrivée ?",
    answer: "Idéalement, prévoyez un espace d'environ 2m x 3m pour l'installation de la table de massage. Une prise électrique à proximité est appréciée pour la musique d'ambiance. Pour votre confort, préparez une tenue légère et des serviettes propres. Assurez-vous que l'espace soit chauffé à une température agréable."
  },
  {
    question: "Y a-t-il des contre-indications aux massages ?",
    answer: "Oui, certaines conditions médicales peuvent constituer des contre-indications : fièvre, inflammation aiguë, problèmes cardiaques sévères, thrombose, infection cutanée, premier trimestre de grossesse, etc. En cas de doute sur votre état de santé, consultez votre médecin avant de prendre rendez-vous."
  },
  {
    question: "Proposez-vous des forfaits ou des cartes cadeaux ?",
    answer: "Oui, je propose des forfaits de 5 ou 10 séances à tarif avantageux, ainsi que des cartes cadeaux personnalisables. C'est une excellente idée pour faire plaisir à vos proches ou pour prendre soin de vous régulièrement."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-ivory-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Questions fréquentes
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tout ce que vous devez savoir sur mes services de massage à domicile.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <motion.div 
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className={`w-full text-left p-6 rounded-xl flex justify-between items-center transition-all ${
                  activeIndex === index 
                    ? 'bg-white shadow-soft' 
                    : 'bg-white/60 hover:bg-white/80'
                }`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <h3 className="text-lg font-medium text-aubergine pr-8">{item.question}</h3>
                {activeIndex === index ? (
                  <ChevronUp size={20} className="text-aubergine shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-aubergine shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 bg-white/50 rounded-b-xl">
                  <p className="text-taupe-dark">{item.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-taupe-dark mb-6">
            Vous avez d'autres questions ? N'hésitez pas à me contacter directement.
          </p>
          <a href="#contact" className="btn btn-secondary">
            Me contacter
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;