/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#15aaff", // Azul
        primary: "#373636", // Cinza
        secondary: "#f8f7f3", // Branco
      },
      fontFamily: {
        opensans: "'Open Sans', sans-serif",
        archivoblack: "'Archivo Black', sans-serif",
        sourcesans: "'Source Sans 3', sans-serif",
      },
    },
  },
  plugins: [],
}