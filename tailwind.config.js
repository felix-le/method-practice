module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flexGrow: {
        one: '1 1 auto',
      },
    },
    inset: {
      '1/8': '12%',
      0: 0,
      // ...
      64: '16rem',
      '1/5': '20%',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
