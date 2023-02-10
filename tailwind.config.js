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
      white: '#ACA59A',
      transparent: 'transparent',
      background: '#EEEDEF',
      blue: '#5E9295',
    },
    fontFamily: {
      sans: ['Playfair Display', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
