/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mygrey: "#D9D9D9",
        "bg-grey": "#F9F8F2",
        "btn-green": "#66CD5B",
        "btn-green-light": "#98DA8B",
      },

      fontFamily: {
        sansation: "sansation",
      },
    },
  },
  plugins: [],
};
