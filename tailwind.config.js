/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lavender: {
          light: '#E6E0F0',
          DEFAULT: '#D8CFE8',
          dark: '#C0B4D8',
        },
        gold: {
          light: '#F0D8BF',
          DEFAULT: '#E7C4A2',
          dark: '#D4AA7D',
        },
        ivory: {
          light: '#FFFDF9',
          DEFAULT: '#FDF9F3',
          dark: '#F5EDE3',
        },
        taupe: {
          light: '#C7C0BA',
          DEFAULT: '#B4AAA1',
          dark: '#9A8F86',
        },
        aubergine: {
          light: '#9A84A3',
          DEFAULT: '#826A8C',
          dark: '#6A5574',
        },
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