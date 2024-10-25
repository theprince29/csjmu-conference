/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#cf2e2e", // Red
        secondary: "#FFD700",// Gold
        third:"#1B305C", // new blue
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"], // Adjust based on CSJMU font
      },
    },
  },
  plugins: [],
};
