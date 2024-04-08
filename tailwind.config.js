import { transform } from 'framer-motion'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Code', 'monospace'],
        code: ['Source Code Pro', 'monospace']
      },
      colors: {
          'midnight': '#282C33',
          'pink': '#ffaeb4',
          'lilac': '#C778DD',
          'lilacDark': '#bc71d1',
          'gray': '#ABB2BF',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(0deg)' },
   '80%': { transform: 'rotate(0deg)' },
   '85%': { transform: 'rotate(10deg)' },
   '95%': { transform: 'rotate(-10deg)' },
  '100%': { transform: 'rotate(0deg)' },
        },
        upButton: {
          '0%': { transform: 'translateY(50px)'},
          '100%': { transform: 'translateY(0px)'}
        }
      },
      animation: {
        wiggle: 'wiggle 0.6s ease',
        upButton: 'upButton 0.25s ease-in-out'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

