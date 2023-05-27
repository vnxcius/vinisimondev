/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx}",
  "./public/*.html",
];
export const theme = {
  extend: {
    width: {
      'section': '66.666667%',
      'progress-bar': '90px',
    },
    fontFamily: {
     'sourcesanspro': "'Source Sans Pro', sans-serif",
     'oswald': "'Oswald', sans-serif",
     'poppins': "'Poppins', sans-serif",
     'raleway': "'Raleway', sans-serif",
    },
    colors: {
      'primary': '#23DD96',
      'secondary': '#00CE7F',
      'tertiary': '#15AD73',
      'neutral-850': '#202020',
      'react': '#61DBFB',
      'php': '#777BB3',
      'laravel': '#FF291A',
    },
    keyframes: {
      showCard: {
        '0%': {opacity: '0%', transform: 'translateY(-10px)'},
        '100%': {opacity: '100%', transform: 'translateY(0px)'},
      },
      reactBar: {
        '0%': {width: '0%'},
        '100%': {width: '44%'},
      },
      jsBar: {
        '0%': {width: '0%'},
        '19%': {width: '0%'},
        '100%': {width: '57%'},
      },
      tailwindBar: {
        '0%': {width: '0%'},
        '24%': {width: '0%'},
        '100%': {width: '93%'},
      },
      cssBar: {
        '0%': {width: '0%'},
        '32%': {width: '0%'},
        '100%': {width: '92%'},
      },
    },
    animation: {
      showCard: 'showCard .6s ease forwards',
      reactBar: 'reactBar .8s ease forwards',
      jsBar: 'jsBar 1s ease forwards',
      tailwindBar: 'tailwindBar 1.2s ease forwards',
      cssBar: 'cssBar 1.2s ease forwards',
    }
  },
};
export const plugins = [];

