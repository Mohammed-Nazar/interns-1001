/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        Green: "#13CB5C",
        NavyN900: "#000119",
        NavyN800: "#0D0E25",
        NavyN750: "#15162D",
        NavyN600: "#2E2F42",
        NavyN500: "#3B3B4E",
        NavyN300: "#575767",
        NavyN80: "#94949E",
        NavyN70: "#A3A4AC",
        NavyN50: "#BFC0C6",
      },
      spacing: {
        '26px': '26.06px',
        '538px': '538.06px',
        '346px':'346.06px',
        '154px': '154.06px'
      },
      backgroundImage: {
        'image': "url('/assets/background_image.png')"
      },
      fontFamily: {
        'inter': ['Inter', 'sans']
      }
    },
  },
  plugins: [],
};
