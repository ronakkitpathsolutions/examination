/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    variants: {
      aspectRatio: ['responsive']
    },
    aspectRatio: { // defaults to {}
      'none': 0,
      'square': [1, 1], // or 1 / 1, or simply 1
      '16/9': [16, 9],  // or 16 / 9
      '4/3': [4, 3],    // or 4 / 3
      '21/9': [21, 9],  // or 21 / 9
    },
    extend: {
      screens: {
        "xs": "375px",
        "2xs": "280px"
      },
      inset: {
        '4px': '-4px',
        '8px': '-8px',
      }
    }
  },
  plugins: [],
}