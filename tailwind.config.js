/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts, vue}"],
  theme: {
    extend: {
      colors: {
        custom_black: "#2a2a2a",
        custom_orange: "#ff9e03",
        custom_green: "#c2deb9",
        custom_darker_green: "#869681",
        custom_gray: "#f7f7f7",
      },
    },
  },
  plugins: [],
};