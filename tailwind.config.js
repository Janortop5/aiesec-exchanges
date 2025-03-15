module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/javascript/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        aiesec: {
          blue: '#037ef3',
          green: '#30c39e',
          yellow: '#ffc845',
          red: '#f85a40',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}