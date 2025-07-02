import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Scale3D, Feather,Zap,Check,Clock,ArrowLeft,ArrowRight } from 'lucide-react';

const serviceData = [
  {
    title: "Massage relaxant",
    description: "Un massage doux et apaisant qui libère les tensions accumulées et favorise une profonde détente. Idéal pour évacuer le stress, améliorer le sommeil et retrouver l’harmonie du corps et de l’esprit.",
    duration: "60 / 90 min",  
    icon: Feather,
    benefits: ["Réduit le stress et de l’anxiété", "Améliore la circulation sanguine", "Soulage les douleurs", "Améliore de la qualité du sommeil"]
  },
  {
    title: "Massage amincissant",
    description: "Un massage tonique et ciblé qui agit en profondeur sur les tissus pour stimuler la circulation, casser les amas graisseux et raffermir la peau.",
    duration: "60 / 90 min",
    icon: Scale3D,
    benefits: ["Réduit la rétention d’eau", "Diminue de l’aspect de la cellulite", "Raffermissement et tonification de la peau", "Aide à la perte de centimètres en complément d’un mode de vie sain"]
  },
  {
    title: " Soins du visage personnalisés",
    description: "Un soin adapté à votre type de peau et à ses besoins spécifiques, alliant nettoyage en profondeur, hydratation et éclat. Chaque soin est conçu pour révéler la beauté naturelle de votre visage.",
    duration: "75 min",
    icon: Sparkles,
    benefits: ["Nettoyage en profondeur des pores", "Prévention du vieillissement cutané", "Éclat du teint et effet bonne mine", "Hydratation et nutrition de la peau"]
  },
    {
    title: " I Motion : Stimulation musculaire intelligente",
    description: "Une technologie innovante qui utilise des impulsions électromagnétiques pour activer intensément les muscles, tonifier le corps et favoriser la combustion des graisses, sans effort physique.",
    duration: "75 min",
    icon: Zap,
    benefits: ["Renforcement musculaire ciblé", "Réduction de la masse grasse", "Drainage et réduction de la rétention d’eau", "Accélération du métabolisme"]
  }
];
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Services = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (direction: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector("article") as HTMLElement | null;
    const cardWidth = card ? card.offsetWidth : 320; // fallback
    // Décalage (card + gap 24px)
    container.scrollBy({
      left: direction * (cardWidth + 24),
      behavior: "smooth"
    });
  };

  return (
    <section
      id="services"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-rose/5 via-ivoire/40 to-lavender/20"
    >
      {/* Dégradés flous d’arrière‑plan */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-rose/20 blur-3xl" />
        <div className="absolute bottom-0 -right-20 h-96 w-96 rounded-full bg-sauge/20 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* En‑tête */}
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Mes Massages
        </motion.h2>
        <motion.p
          className="section-subtitle mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Tous les soins sont réalisés à domicile pour une expérience de détente absolue.
        </motion.p>

        {/* Flèches navigation */}
        <button
          onClick={() => scrollByCard(-1)}
          aria-label="Précédent"
          className="group absolute left-1 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/70 p-3 shadow-md backdrop-blur-md transition hover:bg-white"
        >
          <ArrowLeft className="h-5 w-5 stroke-rose transition group-hover:-translate-x-0.5" />
        </button>
        <button
          onClick={() => scrollByCard(1)}
          aria-label="Suivant"
          className="group absolute right-1 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/70 p-3 shadow-md backdrop-blur-md transition hover:bg-white"
        >
          <ArrowRight className="h-5 w-5 stroke-rose transition group-hover:translate-x-0.5" />
        </button>

        {/* Carousel */}
        <motion.div
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hide-scrollbar mx-10 mt-16 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory"
        >
          {serviceData.map((service, idx) => (
            <motion.article
              key={idx}
              variants={itemVariants}
              className="group relative w-80 shrink-0 snap-center rounded-3xl bg-white/60 p-8 shadow-xl ring-1 ring-black/5 backdrop-blur-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Icône */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-rose to-amber-400 text-white shadow-md">
                <service.icon size={24} />
              </div>

              {/* Titre */}
              <h3 className="mb-3 text-xl font-bold tracking-tight text-taupe-dark">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mb-6 text-sm leading-relaxed text-taupe-dark/90">
                {service.description}
              </p>

              {/* Bienfaits */}
              <ul className="mb-6 space-y-2">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <Check className="mr-2 mt-0.5 h-4 w-4 stroke-rose" />
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-taupe-light pt-4 text-sm font-medium">
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 stroke-amber-500" />
                  {service.duration}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-rose-dark transition-colors duration-200 group-hover:text-amber-600"
                >
                  Réserver
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.75 21 12l-3.75 3.25M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA global */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <a href="#contact" className="btn btn-primary shadow-lg">
            Réserver votre massage
          </a>
          <p className="mx-auto mt-4 max-w-xl text-sm italic text-taupe-dark">
            * Une consultation préliminaire est incluse afin de personnaliser chaque séance selon vos besoins.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;