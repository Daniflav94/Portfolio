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
          'gray': '#ABB2BF',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-30deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

