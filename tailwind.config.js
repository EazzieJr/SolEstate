module.exports = {
  // mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/sass/*.css'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'tiny': '.6rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      'lg3xl': '2rem',
      '4xl': '2.25rem',
      'lg4xl': '2.5rem',
      '5xl': '3rem',
      'lg5xl': '3.5rem',
      '6xl': '4rem',
      'lg6xl': '4.5rem',
      '7xl': '5rem',
      'lg7xl': '5.5rem',
      '8xl': '6rem',
      '9xl': '7rem',
    },

    extend: {
      fontFamily: {
        sarala: ['Sarala'],
        caudex: ['Caudex'],
        roboto: ['Roboto']
      },
      spacing: {
        "100": "30rem",
        "104": "32rem"
      },
      backgroundImage: {
        'body-pattern': "url('/assets/images/sole bg.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
