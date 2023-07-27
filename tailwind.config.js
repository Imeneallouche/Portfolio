/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      "light-grey": "#CCC4C2",
      grey: "#53535B",
      "dark-grey": "#393B44",

      "light-brown": "#D78D6C",
      red: "#EF3419",
      brown: "#B44C31",
      "dark-brown": "#4C3227",

      black: "#090A11",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
