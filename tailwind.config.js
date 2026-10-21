/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#070711',
          900: '#0c0c1a',
          800: '#131325',
          700: '#1c1c33',
        },
        gold: {
          600: '#8a6a23',
          500: '#c39a3c',
          400: '#e9b94c',
          300: '#f4d27a',
          200: '#fae6ad',
        },
        cream: {
          100: '#faf3e0',
          200: '#e8e0c8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
