const { url } = require('inspector');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': ['0 35px 35px rgba(0, 0, 0, 0.25)', '0 45px 65px rgba(0, 0, 0, 0.15)'],
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      borderStyle: ['hover', 'responsive'],
      borderWidth: ['hover', 'responsive'],
    },
  },
  plugins: [],
};
