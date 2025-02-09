/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'main-color': '#ff2c1f',
        'text-color': '#020307',
        'bg-color': '#fff',
      },
      screens: {
        xs: '301px',
        sm: '371px',  // Small
        md: '473px',  // Medium
        lg: '775px', // Large
        xl: '992px', // Extra Large
        '2xl': '1081px', // 2X Large
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
