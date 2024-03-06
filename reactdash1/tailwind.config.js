/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-color-1': '#1F24B5',
        'theme-color-2': '#FCEFEF'
      }
    },
  },
  plugins: [],
}

