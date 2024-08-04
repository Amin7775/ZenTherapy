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
        "theme-text-color-1": "#152A16",
        "theme-text-color-2": "#5C635A",
        "custom-black": "#2f2f2f",
        "sidebar-hover": "#D4E9FF",
        "sidebar-hover-border": "#102C4A",
        "theme-bg":"#EFF2F5"
      }
    },
  },
  plugins: [],
};
