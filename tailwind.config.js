/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts, vue}"],
  theme: {
    extend: {
      colors: {
        primary_text: "#2a2a2a",
        custom_orange: "#ff9e03",
        custom_green: "#c2deb9",
        custom_gray: "#f7f7f7",
      },
    },
  },
  plugins: [],
};