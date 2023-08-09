/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{html,js,tss,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif']
      },
      colors: {
        'light-silver': '#A7A7A7', 
        'dark-silver': '#343434'
      }
    },
  },
  plugins: [],
}

