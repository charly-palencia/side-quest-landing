const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./src/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
      'eerie': '#1D1D1D',
      'eerie-50': 'rgba(29, 29, 29, 0.5)',
    },
    extend: {},
  },
  plugins: [],
}
