/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      light: {
        400: "#F9F8F2",
        500: "",
        600: "#ABABAB",
      },
      black: "black",
      dark: {
        400: "",
      },
      primary: {
        400: "#98DA8B",
        500: "#66CD5B",
        600: "",
      },
    },
    extend: {
      colors: {
        mygrey: "#D9D9D9",
      },

      fontFamily: {
        sansation: "sansation",
      },
      backgroundImage: {
        "grid-pattern": "url('./src/img/grid-wo-border.svg')",
        // hamburger: 'URL("./src/img/hamburger.svg")',
      },
    },
  },
  plugins: [],
};
