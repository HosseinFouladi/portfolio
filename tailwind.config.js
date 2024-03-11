/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors:{
        'dark':'#171717',
        'orange':'#FD853A',
        'dark-gray':'#FD853A',
        'dark-blue':'#FD853A',
      }
    },
  },
  plugins: [],
}
