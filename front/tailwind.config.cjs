/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'chirp-bold': 'chirp-bold',
        'chirp-heavy': 'chirp-heavy',
      },
      fontSize: {
        normal: '21px',
      },
      colors: {
        primary: '#1d9bf0',
      },
      textColor: {
        pri: '#e7e9ea',
        secondary: '#5f6468',
        third: '#65696e',
      },
      backgroundColor: {
        twittHover: 'rgba(255, 255, 255, 0.03)',
        profileHover: 'rgba(231, 233, 234, 0.1)',
        likeHover: 'rgba(249, 24, 128, 0.1)',
      },
      flex: {
        growWidth: '1 0 0%',
      },
    },
  },
  plugins: [],
}
