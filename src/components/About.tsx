import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, ThumbsUp } from 'lucide-react';

const About = () => {
  const experienceItems = [
    {
      icon: BookOpen,
      title: "Formation certifiée",
      description: "Diplômée d'une école reconnue de massothérapie avec spécialisation en techniques occidentales et orientales."
    },
    {
      icon: Award,
      title: "10 ans d'expérience",
      description: "Une décennie d'expérience à soulager les tensions et à promouvoir le bien-être par le massage."
    },
    {
      icon: ThumbsUp,
      title: "Approche personnalisée",
      description: "Chaque massage est adapté à vos besoins spécifiques, votre condition physique et vos préférences."
    }
  ];

  return (
    <section id="a-propos" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-lavande rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-miel-light rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-soft-lg">
                <img 
                  src="https://images.pexels.com/photos/5240677/pexels-photo-5240677.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Massage therapist" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              
              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-soft">
                <p className="text-rose font-medium">Sophie Laurent</p>
                <p className="text-sm text-taupe-dark">Massothérapeute certifiée</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title mb-6">À propos de moi</h2>
            <p className="text-taupe-dark mb-6">
              Je m'appelle Sophie, massothérapeute passionnée avec plus de 10 ans d'expérience. Ma mission est d'apporter détente et bien-être directement à votre domicile, vous permettant de profiter des bienfaits du massage dans un environnement familier et confortable.
            </p>
            <p className="text-taupe-dark mb-8">
              Formée aux différentes techniques de massage, je m'adapte à vos besoins spécifiques pour offrir une expérience sur mesure. Que vous cherchiez à soulager des tensions musculaires, à réduire votre stress ou simplement à vous accorder un moment de détente, mon approche personnalisée saura répondre à vos attentes.
            </p>
            
            <div className="space-y-6 mt-8">
              {experienceItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="w-12 h-12 bg-miel-light/30 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <item.icon size={20} className="text-taupe-light" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-rose mb-1">{item.title}</h3>
                    <p className="text-taupe-dark">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10">
              <a href="#contact" className="btn btn-primary">Prendre rendez-vous</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;