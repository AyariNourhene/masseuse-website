import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, ThumbsUp } from 'lucide-react';

const About = () => {
  const experienceItems = [
    {
      icon: BookOpen,
      title: "Formation certifiée",
      description: "Diplômée du centre de formation étatique cité ezzouhour, Tunis, Tunisie. Une formation complète en techniques de massage et soins esthétiques."
    },
    {
      icon: Award,
      title: "2 ans d'expérience",
      description: "Une expérience à soulager les tensions et à promouvoir le bien-être par le massage."
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
              
              <div className="absolute bottom-8 right-8 bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-soft">
                <p className="text-rose font-medium">AYARI NERMINE</p>
                <p className="text-sm text-taupe-dark">Esthéticienne et masseuse certifiée</p>
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
              Je suis Ayari Nermine, praticienne en massages bien-être et soins esthétiques. Passionnée par l’art de prendre soin de la peau et de sublimer la beauté naturelle, je mets tout mon savoir-faire au service de votre bien-être, directement chez vous.
              Grâce à mon expérience en centres spécialisés, j’ai développé une large palette de techniques : massage relaxant, drainage lymphatique, maderothérapie, soins du visage, et bien plus. Mais au-delà des gestes, je crois profondément en l’écoute, la bienveillance et l’attention aux besoins de chacun.
              <br></br><b>Mon objectif ?</b>
              <br></br> Vous offrir un moment de sérénité, personnalisé et sans contrainte, dans le confort de votre domicile. Un espace rien qu’à vous, pour vous détendre, vous ressourcer et vous reconnecter à votre corps.
            </p>
            <p className="text-taupe-dark mb-6">
              Chaque massage est une invitation à la détente, un voyage sensoriel qui vous permet de relâcher les tensions et de retrouver votre équilibre intérieur. Je suis là pour vous accompagner dans cette démarche, en vous proposant des soins adaptés à vos besoins et à votre rythme.
              </p>
            </motion.div>
            </div>
            
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {experienceItems.map((item, index) => (
        <motion.div 
          key={index} 
          className="flex items-start bg-white rounded-xl shadow-2xl p-4"
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
            <p className="text-taupe-dark text-sm">{item.description}</p>
          </div>
        </motion.div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <a href="#contact" className="btn btn-primary">Prenez un rendez-vous</a>
            </div>
          
        </div>
      
    </section>
  );
};

export default About;