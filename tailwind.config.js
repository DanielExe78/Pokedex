/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "zoom-in": "zoom-in .7s ease-in",
      },
      keyframes: {
        "zoom-in": {
          "0%": { transform: "scale(0, 0)" },
          "100%": { transform: "scale(1, 1)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "fire-type":
          "radial-gradient(50% 50% at 50% 50%, #C72101 0%, #EF3F0D 100%)",
        "normal-type":
          "radial-gradient(50% 50% at 50% 50%, #9E9D95 0%, #C9C1B9 100%)",
        "bug-type":
          "radial-gradient(50% 50% at 50% 50%, #8B960B 0%, #B2C03B 100%)",
        "electric-type":
          "radial-gradient(50% 50% at 50% 50%, #E69202 0%, #FCB814 100%)",
        "grass-type":
          "radial-gradient(50% 50% at 50% 50%, #49752D 0%, #76C338 100%)",
        "rock-type":
          "radial-gradient(50% 50% at 50% 50%, #9E863D 0%, #BAA964 100%)",
        "dark-type":
          "radial-gradient(50% 50% at 50% 50%, #3B2D24 0%, #503B2E 100%)",
        "fairy-type":
          "radial-gradient(50% 50% at 50% 50%, #E28BE4 0%, #F4BDF3 100%)",
        "flying-type":
          "radial-gradient(50% 50% at 50% 50%, #5973D0 0%, #96A8F0 100%)",
        "ground-type":
          "radial-gradient(50% 50% at 50% 50%, #AC8F42 0%, #D6BD79 100%)",
        "poison-type":
          "radial-gradient(50% 50% at 50% 50%, #642968 0%, #904792 100%)",
        "steel-type":
          "radial-gradient(50% 50% at 50% 50%, #83848E 0%, #B4B5BD 100%)",
        "dragon-type":
          "radial-gradient(50% 50% at 50% 50%, #4D3E97 0%, #7A66E0 100%)",
        "fighting-type":
          "radial-gradient(50% 50% at 50% 50%, #5C2213 0%, #81321E 100%)",
        "ghost-type":
          "radial-gradient(50% 50% at 50% 50%, #444795 0%, #6667B2 100%)",
        "ice-type":
          "radial-gradient(50% 50% at 50% 50%, #6CD1F5 0%, #C8F0FB 100%)",
        "psychic-type":
          "radial-gradient(50% 50% at 50% 50%, #DA2F67 0%, #E8578B 100%)",
        "water-type":
          "radial-gradient(50% 50% at 50% 50%, #0E65C3 0%, #399AF7 100%)",
      },
    },
  },
  plugins: [],
};
