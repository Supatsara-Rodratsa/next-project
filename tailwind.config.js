/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#EEE9E5',
      brown: '#977A69',
      darkBrown: '#231815',
      white: '#FFFFFF',
      transparent: 'transparent',
      background: '#EEEDEF',
      blue: '#A6B5AE',
      black: '#252223',
      green: '#73826D',
    },
    fontFamily: {
      playFair: ['Playfair Display', 'serif'],
      sans: ['Inter', 'sans-serif'],
    },
    screens: {
      mobile: { max: '425px' },
      tablet: { max: '768px', min: '426px' },
      laptop: { max: '1024px', min: '769px' },
      desktop: '1440px',
    },
    fontSize: {
      sm: '0.8rem', //14
      base: '1rem', //16
      xl: '1.25rem', //20
      '2xl': '1.563rem', //24
      '3xl': '1.953rem', //30
      '4xl': '2.441rem', //36
      '5xl': '3.052rem', //48
    },
    gridTemplateRows: {
      3: 'repeat(3, minmax(0, 500px))',
    },
    gridTemplateColumns: {
      3: 'repeat(3, minmax(0, 100vw))',
    },
    extend: {},
  },
  plugins: [],
}
