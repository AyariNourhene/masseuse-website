import React, { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, MapPin, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    adresse: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  
  useEffect(() => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (publicKey) {
    emailjs.init(publicKey);
  } else {
    console.error("EMAILJS_PUBLIC_KEY is not defined");
  }
}, []);
  
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
  if (name === "phone") {
  // Supprime tout caractère non numérique
  const digitsOnly = value.replace(/\D/g, "");
  
  // Vérifie que le premier chiffre est valide et limite à 8 chiffres
  let validPhone = digitsOnly;
  if (digitsOnly.length > 0) {
    const firstDigit = digitsOnly[0];
    const validFirstDigits = ['2', '3', '4', '5', '7', '9'];
    
    if (!validFirstDigits.includes(firstDigit)) {
      // Si le premier chiffre n'est pas valide, on ne garde rien
      validPhone = "";
    } else if (digitsOnly.length > 8) {
      // Limite à 8 chiffres maximum
      validPhone = digitsOnly.substring(0, 8);
    }
  }
  
  setFormData({ ...formData, [name]: validPhone });
} else {
  setFormData({ ...formData, [name]: value });
}
if (name === "date") {
    if (isSunday(value)) {
      alert("Les réservations ne sont pas possibles le dimanche");
      return;
    }
    
    const selectedDate = new Date(value);
    const minDate = new Date(getMinDate());
    const maxDate = new Date(getMaxDate());
    
    if (selectedDate < minDate || selectedDate > maxDate) {
      alert(`Veuillez choisir une date entre ${minDate.toLocaleDateString()} et ${maxDate.toLocaleDateString()}`);
      return;
    }
  }

  setFormData({ ...formData, [name]: value });
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
   if (!/^[234579]\d{7}$/.test(formData.phone)) {
    alert("Le numéro de téléphone n'est pas valide");
    return;
  }
   
   if (isSunday(formData.date)) {
    alert("Les réservations ne sont pas possibles le dimanche");
    return;
  }
  
  const selectedDate = new Date(formData.date);
  const minDate = new Date(getMinDate());
  const maxDate = new Date(getMaxDate());
  
  if (selectedDate < minDate || selectedDate > maxDate) {
    alert(`Veuillez choisir une date entre ${minDate.toLocaleDateString()} et ${maxDate.toLocaleDateString()}`);
    return;
  }
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID!,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    service: formData.service,
    date: formData.date,
    adresse: formData.adresse,
    message: formData.message
     
  },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
    );

    // Affiche le message de confirmation et réinitialise le formulaire
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      adresse: '',
      message: ''
    });

    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
    console.log('SUCCESS!');
    alert("Message envoyé !");

  } catch (error) {
   console.error('Erreur EmailJS:', error);
  alert("Erreur lors de l'envoi !");
    
  }
}
 // Fonction pour obtenir la date minimum (2 jours après aujourd'hui)
const getMinDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 2);
  return date.toISOString().split('T')[0];
};

// Fonction pour obtenir la date maximum (1 mois après aujourd'hui)
const getMaxDate = () => {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);
  return date.toISOString().split('T')[0];
};

// Fonction pour vérifier si c'est un dimanche
const isSunday = (dateString : string) => {
  const date = new Date(dateString);
  return date.getDay() === 0; // 0 = dimanche
};    

  const contactInfo = [
    { 
      icon: Phone, 
      title: "Téléphone", 
      details: "+216 58 853 740",
      action: "tel:+21658853740"
    },
    { 
      icon: MapPin, 
      title: "Zone de service", 
      details: "TUNIS et proche banlieue (rayon de 20km)",
      action: "#"
    },
    { 
      icon: Clock, 
      title: "Horaires", 
      details: "Lun-Ven: 9h-20h, Sam: 10h-18h",
      action: "#"
    },
    { 
      icon: Calendar, 
      title: "Réservations", 
      details: "48h à l'avance recommandé",
      action: "#contact-form"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Réservez votre massage
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Prenez rendez-vous pour un massage à domicile adapté à vos besoins et à votre emploi du temps.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-lavande/20 rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-medium mb-6 text-rose-dark">Informations de contact</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 mr-4">
                      <item.icon size={18} className="text-rose" />
                    </div>
                    <div>
                      <h4 className="font-medium text-rose">{item.title}</h4>
                      <a 
                        href={item.action} 
                        className="text-taupe-dark hover:text-rose transition-colors"
                      >
                        {item.details}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10 p-6 bg-lavande/30 rounded-xl shadow-soft">
                <h4 className="text-lg font-bold text-rose-dark mb-4">Besoin d'une information ?</h4>
                <p className="text-taupe-dark mb-4">
                  N'hésitez pas à me contacter pour toute question concernant mes services de massage à domicile.
                </p>
                <a 
                  href="tel:+21658853740" 
                  className="btn btn-outline w-full flex items-center justify-center"
                >
                  <Phone size={18} className="mr-2" />
                  Appeler maintenant
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h3 className="text-3xl font-serif font-bold mb-6 text-rose-dark text-center">Demande de rendez-vous</h3>
              
              {formSubmitted ? (
                <motion.div 
                  className="bg-lavande/30 rounded-xl p-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 bg-rose rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-white" />
                  </div>
                  <h4 className="text-xl font-medium text-miel-dark mb-2">Demande envoyée !</h4>
                  <p className="text-taupe-dark">
                    Merci pour votre demande. Je vous contacterai rapidement pour confirmer votre rendez-vous.
                  </p>
                </motion.div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-taupe-dark mb-2">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-lavande-light focus:outline-none focus:ring-2 focus:ring-rose/50 transition-all"
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-taupe-dark mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-lavande-light focus:outline-none focus:ring-2 focus:ring-rose/50 transition-all"
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-taupe-dark mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-lavande-light focus:outline-none focus:ring-2 focus:ring-rose/50 transition-all"
                        placeholder="Votre numéro"
                        pattern="[234579][0-9]{7}"
                        required
                      />
                    </div>
                   
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-taupe-dark mb-2">
                        Type de massage
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-lavande-light focus:outline-none focus:ring-2 focus:ring-rose/50 transition-all appearance-none bg-no-repeat bg-right"
                        style={{ 
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23826A8C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                          backgroundPosition: 'right 1rem center'
                        }}
                        required
                      >
                        <option value="" disabled>Sélectionnez un service</option>
                        <option value="suedois">Massage Suédois</option>
                        <option value="californien">Massage Californien</option>
                        <option value="pierres">Massage aux Pierres Chaudes</option>
                      </select>
                    </div>
                  </div>
                    
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-taupe-dark mb-2">
                        Date souhaitée
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                         min={getMinDate()}
                        max={getMaxDate()}
                        className="w-full px-4 py-3 rounded-lg border border-lavande-light focus:outline-none focus:ring-2 focus:ring-rose/50 transition-all"
                        required
                      />
                      *les jours féries ne sont pas disponibles
                    </div>
                          <div>
                      <label htmlFor="adresse" className="block text-sm font-medium text-taupe-dark mb-2">
                        Adresse
                      </label>
                      <input
                        type="text"
                        id="adresse"
                        name="adresse"
                        value={formData.adresse}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-lavande-light focus:outline-none focus:ring-2 focus:ring-rose/50 transition-all"
                        placeholder="Votre adresse"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-taupe-dark mb-2">
                      Message (optionnel)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-lavande-light focus:outline-none focus:ring-2 focus:ring-rose/50 transition-all"
                      placeholder="Indiquez ici toute information complémentaire (adresse, besoins particuliers...)"
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary w-full md:w-auto md:px-10"
                    >
                      Envoyer ma demande
                    </button>
                    <p className="mt-4 text-sm text-taupe-dark">
                      Je vous contacterai rapidement pour confirmer la disponibilité.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;