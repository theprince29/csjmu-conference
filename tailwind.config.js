/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#cf2e2e", // Base red
          600: "#a52323", // Darker red for hover
        },// Red
        darkprimary: "#b80707",
        secondary: "#FFD700",// Gold
        third: {
          DEFAULT: "#1B305C", // Base blue
          600: "#162347", // Darker shade of blue for hover
        },// new blue
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"], // Adjust based on CSJMU font
      },
    },
  },
  plugins: [],
};
