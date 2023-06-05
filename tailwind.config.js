/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "zoom-in": "zoom-in .7s ease-in",
        "slide-in": "slide-in 1s ease-in-out",
        "slide-out": "slide-out 1s ease-in-out",
      },
      keyframes: {
        "zoom-in": {
          "0%": { transform: "scale(0, 0)" },
          "100%": { transform: "scale(1, 1)" },
        },
        "slide-in": {
          from: {
            marginLeft: "100%",
          },
          to: {
            marginLeft: "0%",
          },
        },
        "slide-out": {
          from: {
            marginLeft: "-300%",
          },
          to: {
            marginLeft: "0%",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
