import { transform } from "framer-motion";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Code", "monospace"],
        code: ["Source Code Pro", "monospace"],
      },
      colors: {
        midnight: "#282C33",
        pink: "#ffaeb4",
        lilac: "#C778DD",
        lilacDark: "#bc71d1",
        gray: "#ABB2BF",
        "gray-800": "#3d3a4e",
        "purple-500": "#965de9",
        "blue-500": "#6358ee",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(0deg)" },
          "80%": { transform: "rotate(0deg)" },
          "85%": { transform: "rotate(10deg)" },
          "95%": { transform: "rotate(-10deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        upButton: {
          "0%": { transform: "translateY(50px)" },
          "100%": { transform: "translateY(0px)" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },

      },
      animation: {
        wiggle: "wiggle 0.6s ease",
        upButton: "upButton 0.25s ease-in-out",
        blink: "blink 0.7s step-end infinite",

      },
      transitionDuration: {
        475: "475ms",
      },
      scale: {
        0: "0",
        100: "1",
      },
      transformOrigin: {
        "0-50": "0% 50%",
      },

      backgroundImage: {
        "gradient-to-r":
          "linear-gradient(82.3deg, rgba(150, 93, 233, 1) 10.8%, rgba(199, 88, 238, 1) 94.3%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
