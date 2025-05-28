import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonialsData = [
  {
    name: "Marie Dubois",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    occupation: "Enseignante",
    quote: "Sophie a un don pour identifier et soulager les tensions. Ses massages à domicile sont une vraie bénédiction après une longue journée devant une classe d'enfants énergiques. Je me sens complètement revitalisée.",
    rating: 5
  },
  {
    name: "Thomas Petit",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    occupation: "Développeur informatique",
    quote: "En tant que développeur, je passe des heures devant mon ordinateur. Les massages de Sophie ont été essentiels pour soulager mes douleurs cervicales et dorsales. Le fait qu'elle vienne à domicile est un vrai plus !",
    rating: 5
  },
  {
    name: "Claire Martin",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    occupation: "Chef d'entreprise",
    quote: "Avec mon emploi du temps chargé, le service à domicile de Sophie est une vraie solution. Ses massages sont parfaitement adaptés à mes besoins et m'aident à gérer mon stress. Une prestation de grande qualité.",
    rating: 5
  },
  {
    name: "Philippe Laurent",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    occupation: "Architecte",
    quote: "J'apprécie particulièrement la capacité de Sophie à adapter ses techniques à mes douleurs spécifiques. Son professionnalisme et sa bienveillance font toute la différence. Je recommande vivement.",
    rating: 4
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="témoignages" className="section-padding bg-lavender/10">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ce que disent mes clients
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Découvrez les expériences de personnes qui ont bénéficié de mes services de massage à domicile.
          </motion.p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div 
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 30 }}
            >
              {testimonialsData.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full shrink-0 px-4 md:px-6"
                >
                  <div className="bg-white rounded-2xl shadow-soft p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto md:mx-0 object-cover"
                        />
                        <div className="text-center md:text-left mt-4">
                          <h3 className="text-xl font-medium text-aubergine">{testimonial.name}</h3>
                          <p className="text-taupe-dark">{testimonial.occupation}</p>
                          <div className="flex justify-center md:justify-start mt-2">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={16} 
                                className={i < testimonial.rating ? "text-gold-dark fill-gold-dark" : "text-taupe-light"} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="md:w-2/3 md:border-l md:border-lavender-light md:pl-8">
                        <svg className="w-10 h-10 text-lavender-dark mb-4 opacity-50" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-taupe-dark text-lg italic mb-6">
                          "{testimonial.quote}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-aubergine hover:bg-lavender-light transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aubergine"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-aubergine hover:bg-lavender-light transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aubergine"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-all ${
                currentIndex === index ? 'bg-aubergine w-6' : 'bg-lavender'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;