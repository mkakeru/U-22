module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#FF4C4A',
        secondary: '#53B3FF',
        background: '#FAFAFA',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
