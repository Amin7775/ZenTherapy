/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "fontPoppins": '"Poppins", sans-serif',
      },
      colors:{
        "primary-Color-blue-1": "#4285F3",
        "primary-Color-blue-2": "#156BCA",
      }
    },
  },
  plugins: [],
};
