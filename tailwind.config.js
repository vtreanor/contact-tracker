/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        brandGreen: '#4bbd7f',
        brandGray: '#E2E8F0',
        brandButton: '',
        stuff: {
          light: '#85d7ff',
          DEFAULT: '#1fb6ff',
          dark: '#009eeb',
        },
        gray: {
          100: '#f7fafc',
          // ...
          900: '#1a202c',
        },
        royalblue: '#234E70',
        paleyellow: '#FBF8BE',
    },
    backgroundImage:{
      'sidebar': "url('/bg.jpg')",
    }
  },
  plugins: [],
}
}
