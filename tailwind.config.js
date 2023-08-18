/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      desktop: "1380px",
      phonesm: "380px",
      phonemd: "450px",
      phonelg: "580px",
      ...defaultTheme.screens,
    },
    extend: {
      maxWidth: {
        "1/2": "45%",
      },
      width: {
        128: "30rem",
        104: "26rem",
        90: "22rem",
        76: "19",
      },
    },
  },
  plugins: [],
};
