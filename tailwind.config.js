/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light-main": "#FFFFFF",
        "light-complement": "",
        "light-accent": "",
        "light-border": "",
        "dark-main": "#333333",
        "dark-complement": "#4D4D4D",
        "dark-accent": "",
        "dark-border": "#A4A4A4",
        "cancel-main": "#940000",
        "cancel-complement": "#FF9F9F"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
