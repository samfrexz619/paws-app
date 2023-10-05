/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paw_black: '#1D1D1D',
        paw_purple: '#B4B7FF',
        paw_green: '#97EAB9',
        paw_yellow: '#FFD280',
        paw_pry: '#FF868E',
        paw_hov: '#FBE0DC',
        grey_10: '#F8F8F7',
        grey_black: 'rgba(255, 255, 255, 0.05)',
      },
      fontSize: {
        12: '12px',
        44: '44px',
        20: '20px',
      }
    },
  },
  plugins: [],
}

