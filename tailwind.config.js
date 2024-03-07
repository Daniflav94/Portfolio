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
          '0%, 100%': { transform: 'rotate(-30deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        upButton: {
          '0%': { transform: 'translateY(50px)'},
          '100%': { transform: 'translateY(0px)'}
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        upButton: 'upButton 0.2s ease-in-out'
      }
    },
  },
  plugins: [],
}

