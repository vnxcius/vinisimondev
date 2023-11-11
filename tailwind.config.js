/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#101010", // Preto
      },
      fontFamily: {
        sourcesans: "'Source Sans 3', sans-serif",
      },
    },
  },
  plugins: [],
}