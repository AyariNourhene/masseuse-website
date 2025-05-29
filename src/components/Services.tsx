import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Heart, Activity } from 'lucide-react';

const serviceData = [
  {
    title: "Massage Suédois",
    description: "Un massage énergique qui dénoue les tensions musculaires et améliore la circulation sanguine. Idéal après une activité sportive ou pour soulager les douleurs chroniques.",
    duration: "60 / 90 min",  
    icon: Activity,
    benefits: ["Réduit les tensions musculaires", "Améliore la circulation", "Soulage les douleurs", "Améliore la posture"]
  },
  {
    title: "Massage Californien",
    description: "Un massage doux et enveloppant qui procure une profonde relaxation. Parfait pour évacuer le stress et retrouver un bien-être général.",
    duration: "60 / 90 min",
    icon: Heart,
    benefits: ["Relaxation profonde", "Réduction du stress", "Amélioration du sommeil", "Bien-être général"]
  },
  {
    title: "Massage aux Pierres Chaudes",
    description: "L'alliance du massage manuel et de la chaleur des pierres volcaniques pour une expérience unique. La chaleur pénètre en profondeur pour détendre corps et esprit.",
    duration: "75 min",
    icon: Clock,
    benefits: ["Détente musculaire", "Relaxation profonde", "Effet thérapeutique", "Équilibre énergétique"]
  }
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="section-padding bg-lavender/10">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Mes Services
          </motion.h2>
          <motion.p 
            className="section-subtitle max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Découvrez mes différentes techniques de massage, toutes réalisées dans le confort de votre domicile pour une expérience de relaxation optimale.
          </motion.p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {serviceData.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-soft overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-soft-lg"
            >
              <div className="p-8">
                <div className="w-14 h-14 bg-rose/30 rounded-full flex items-center justify-center mb-6">
                  <service.icon size={24} className="text-taupe-dark" />
                </div>
                <h3 className="text-2xl font-serif font-medium mb-4">{service.title}</h3>
                <p className="text-taupe-dark mb-6">{service.description}</p>
                
                <div className="border-t border-rose-light pt-4 mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <Clock size={18} className="text-gold-dark mr-2" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                    
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-sm font-bold text-sauge-dark mb-3">Bienfaits:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <svg className="w-4 h-4 text-miel-dark mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-ivoire-dark p-4 text-center">
                <a 
                  href="#contact" 
                  className="inline-block text-rose-dark font-medium hover:text-miel-dark transition-colors"
                >
                  Réserver ce massage
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#contact" className="btn btn-primary">
            Réserver votre massage
          </a>
          <p className="mt-4 text-sm text-taupe-dark italic">
            * Tous les massages comprennent une consultation préliminaire pour personnaliser le soin selon vos besoins.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;