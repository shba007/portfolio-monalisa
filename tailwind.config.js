/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // fontSize: {
    //   xs: ".75rem",
    //   sm: "0.875rem",
    //   md: "1rem",
    //   lg: "1.25rem",
    //   xl: "1.5",
    //   "2xl": "2rem",
    //   "3xl": "2.5rem",
    //   "4xl": "3rem",
    //   "5xl": "3.5rem",
    // },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      light: {
        400: "#F9F8F2",
        500: "#D9D9D9",
        600: "#ABABAB",
      },
      black: "black",
      dark: {
        400: "#10121E",
      },
      primary: {
        400: "#98DA8B",
        500: "#66CD5B",
        600: "#56BE50",
      },
    },
    extend: {
      colors: {
        mygrey: "",
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
