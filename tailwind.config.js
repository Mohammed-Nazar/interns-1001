/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "subscription-gradient": "url('/BG.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor:{
        "primary": "#13CB5C",
        "navy-600": "#2E2F42",
        "navy-900": "#000119",
      },
      colors: {
        "navy-400": "#4A4B5C",
        "primary": "#13CB5C",
        "navy-70": "#bfc0c6",
        "navy-900": "#000119",
        "navy-800": "#0D0E25",
        "navy-50": "#BFC0C6",
        "navy-100": "#757683"
      },
      borderColor:{
        "navy-700": "#1C1D32"
      },
      borderColor: {
        "navy-300": "#575767"
      }
    },
  },
  plugins: [],
};
