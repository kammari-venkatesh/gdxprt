/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B5ED7',
        'primary-dark': '#0949aa',
        'primary-light': '#3b82f6',
        sky: '#6ea8fe',
        'sky-light': '#cfe2ff',
        'sky-pale': '#f0f7ff',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgb(0 0 0 / 0.07), 0 10px 20px -2px rgb(0 0 0 / 0.04)',
        'card': '0 4px 20px -2px rgb(11 94 215 / 0.08), 0 2px 8px -2px rgb(0 0 0 / 0.04)',
        'card-hover': '0 12px 40px -8px rgb(11 94 215 / 0.15), 0 4px 12px -4px rgb(0 0 0 / 0.06)',
        'btn': '0 4px 14px -2px rgb(11 94 215 / 0.35)',
        'btn-hover': '0 6px 20px -2px rgb(11 94 215 / 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
