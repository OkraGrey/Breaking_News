/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "1/2": "45%",
      },
      width: {
        128: "30rem",
        104: "26rem",
        90: "22rem",
      },
    },
  },
  plugins: [],
};
