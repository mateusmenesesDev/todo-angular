/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          'light': 'hsl(0, 0%, 98%)',
          'grayish': 'hsl(236, 33%, 92%)',
          'light-grayish': 'hsl(233, 11%, 84%)',
          'dark-grayish': 'hsl(236, 9%, 61%)',
          'darker-grayish': 'hsl(235, 19%, 35%)'
        },
        dark: {
          'dark': 'hsl(235, 21%, 11%)',
          'darker': 'hsl(235, 21%, 11%)',
          'desaturated': 'hsl(235, 24%, 19%)',
          'light-grayish': 'hsl(234, 39%, 85%)',
          'light-grayish-hover': 'hsl(236, 33%, 92%)',
          'dark-grayish': 'hsl(234, 11%, 52%)',
          'darker-grayish': 'hsl(233, 14%, 35%)'
        }
      }
    },
  },
  plugins: [],
}