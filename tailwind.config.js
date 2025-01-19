/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        primary: '#FF9900',
        dark: '#232F3E',
        'dark-light': '#37475A',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 153, 0, 0.1)',
      },
    },
  },
  plugins: [],
};