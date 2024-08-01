import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#42446E",
      darkContent: "#666666",
      black: "#000000",
      white: "#ffffff",
      lightGreen: "#D7FFE0",
      green: "#018C0F",
      lightContent: "#A7A7A7",
      lightBorder: "#EBEAED",
      purple: "#e70faa",
      lightBlue: "#13b0f5",
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      playfair: ["Playwrite AT", "cursive"],
    },

    extend: {
      scrollBehavior: ["smooth"],
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(90deg, rgba(19,176,245,1) 3%, rgba(231,15,170,1) 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  variants: {
    extend: {
      scrollBehavior: ["responsive"],
    },
  },
  plugins: [],
};
export default config;
