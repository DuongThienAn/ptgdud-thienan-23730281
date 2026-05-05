/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D20D52",
        secondary: "#FF4D8D",
        gray: {
          light: "#F9F9F9",
          medium: "#E5E5E5",
          dark: "#333333",
        }
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}
