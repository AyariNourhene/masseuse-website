/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
  rose: {
    light: '#E9B9BF',
    DEFAULT: '#D95F76',  // 🌸 Rose pétillant (principal)
    dark: '#AF7E96',
  },
  sauge: {
    light: '#E0F0E0',
    DEFAULT: '#9DC183',  // 🌿 Vert sauge vibrante (accent naturel)
    dark: '#6B8C5D',
  },
  miel: {
    light: '#FFEDC1',
    DEFAULT: '#FFD166',  // 🌞 Doré vif / Miel éclatant
    dark: '#E6B649',
  },
  ivoire: {
    light: '#f9f9f6',
    DEFAULT: '#FFF8ED',  // 🕊️ Ivoire lumineux (fond)
    dark: '#F5EBD8',
  },
  taupe: {
    light: '#8C7B75',
    DEFAULT: '#6D5D56',  // ✏️ Gris brun chaleureux (texte)
    dark: '#4A3D38',
  },
  lavande: {
    light: '#EEE5FF',
    DEFAULT: '#C9B1FF',  // 💜 Nouvelle touche vibrante
    dark: '#A78BDF'
  }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 30px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};