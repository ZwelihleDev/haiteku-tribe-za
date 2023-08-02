/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barl: ["var(--font-barl)", ...fontFamily.sans],
      },
      boxShadow: {
        menu: "0px 159px 95px rgba(13,12,34,0.01), 0px 71px 71px rgba(13,12,34,0.02), 0px 18px 39px rgba(13,12,34,0.02), 0px 0px 0px rgba(13,12,34,0.02)",
      },
      screens: {
        xs: "400px",
      },
      maxWidth: {
        "10xl": "1680px",
      },
      colors: {
        graySeven: "#121212",
        graySevenDarker: "#0D0D0D",
        primaryYellow: "#F1C93B",
        secondaryYellow: "#FAE392",
        primaryPurple: "#FF78F0",
        primaryBlue: "#39B5E0",
      },
    },
  },
  plugins: [],
};
