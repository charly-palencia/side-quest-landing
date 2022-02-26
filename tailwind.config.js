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
    extend: {
      height: {
        '126': '31.5rem',
        '184': '46rem',
      },
      width: {
        '126': '31.5rem',
        '184': '46rem',
      }
    },
  },
  plugins: [],
}
