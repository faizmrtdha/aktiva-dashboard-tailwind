const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        polar: {
          50: "#DEFCE9",
          100: "#C2FAD5",
          200: "#80F5A9",
          300: "#42F07F",
          400: "#12DE59",
          500: "#0D9F3F",
          600: "#0A7F33",
          700: "#085E26",
          800: "#053D19",
          900: "#03210D",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-login": {
          "background-image": "url('./assets/poster.jpg')",
          "background-size": "cover",
          "background-position": "center",
          "background-repeat": "no-repeat",
        },
      };

      addUtilities(utilities);
    }),
  ],
};
