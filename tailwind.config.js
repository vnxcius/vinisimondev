/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'source-sans': ["'Source Sans 3', 'sans-serif'"],
      },
      colors: {
        'neutral-925': '#101010',
        'accent': '#985eff'
      },
      animation: {
        'loop-scroll': 'loop-scroll 25s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          to: { transform: 'translate(-101.4%)' },
        }
      },
    },
  },
  plugins: [],
}