/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-home': 'linear-gradient(to bottom, #ffffff, #f8f9fa)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(20px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        zoom: 'zoom 3s ease-in-out infinite',
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        fadeOut: 'fadeOut 0.8s ease-out forwards',
      },

      colors: {
        'bg-body': '#1E40AF', // Tu color personalizado
      },
    },
  },
  plugins: [],
}
