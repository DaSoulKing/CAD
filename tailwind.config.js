/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
    content: [],
    theme: {
      extend: {
        animation: [
            'small-bounce': 'bounce 1s ease-in-out 1'
        ],
      },
    },
    plugins: [],
  }