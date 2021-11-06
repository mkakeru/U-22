module.exports = {
  purge: {
    content: [
      './components/**/*.{vue}',
      './containers/**/*.{vue}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js}',
      './store/**/*.{js}',
      './middleware/**/*.{js}',
      './nuxt.config.{js}'
    ],
    options: {
      safelist: [
        /^bg-/,
        /^hover:bg-/,
        /^text-/,
        /^hover:text-/,
        /^rounded/,
        /^w-[0-9]?\/?/,
        /^fill-secondary/,
        /^fill-disable/,
        /^fill-primary/
      ]
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: '#FF4C4A',
        secondary: '#53B3FF',
        background: '#FAFAFA',
        disable: '#A1A1A1',
        'button-primary': '#FFC1C1',
        'button-secondary': '#C9E2FF'
      },
      textColor: {
        primary: '#3B3B3B',
        secondary: '#3E3E3E',
        caption: '#4D4D4D',
        active: '#FF4C4A',
        'active-accent': '#53B3FF'
      },
      textOpacity: {
        65: '0.65',
        85: '0.85'
      },
      minWidth: {
        dialog: '280px',
        button: '102px'
      }
    },
    fill: theme => ({
      primary: theme('colors.primary'),
      secondary: theme('colors.secondary'),
      disable: theme('colors.disable')
    })
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
}
