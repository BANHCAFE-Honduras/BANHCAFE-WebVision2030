/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    spacing: {
      0: "0",
      1: "0.4rem",
      2: "0.8rem",
      3: "1.2rem",
      4: "1.6rem",
      5: "2rem",
      6: "2.4rem",
      7: "2.8rem",
      8: "3.2rem",
      9: "3.6rem",
      10: "4rem",
      11: "4.4rem",
      12: "4.8rem",
      13: "5.2rem",
      14: "5.6rem",
      15: "6rem",
      16: "6.4rem",
      header: "var(--header-height)",
    },
    fontSize: {
      xs: "1rem",
      sm: "1.2rem",
      md: "1.4rem",
      lg: "1.6rem",
      xl: "2rem",
      xxl: ["2.4rem", "1.2"],
      h4: ["2.8rem", "1.2"],
      h3: ["3.6rem", "1.2"],
      h2: ["4.2rem", "1.3"],
      "5xl": ["5.2rem", "1.2"],
      h1: ["6.2rem", "1.12"],
      "9xl": ["8rem", "1.12"],
    },
    fontWeight: {
      thin: "350",
      normal: "450",
      semibold: "550",
      bold: "620",
      black: "690",
    },
    extend: {
      colors: {
        /* Principales */
        primary: "#A41F35",
        "primary-hover": "rgba(186, 12, 47, 1)",
        secondary: "#F8F8F8",
        tertiary: "rgba(52, 54, 66, 1)",
        background: "#fbfbfb",
        grayBackground: "#f5f5f5",

        /* contenedores */
        body: "#ECEDF1",
        modal: "#F3F5FA",
        "light-gray": "#EEEEEE",
        light: "rgba(0,0,0,0.5)",
        "extra-light": "rgba(0,0,0,0.03)",
        submenu: "rgba(243, 245, 250, 0.9)",

        /* Textos */
        "text-subtitle": "rgba(52, 54, 66, 1)",
      },

      backgroundImage: {
        "custom-gradient": "linear-gradient(to bottom, #9f1e34, #C3002F, #ffffff)",
      },

      boxShadow: {
        container: "0px 12px 30px -50px rgba(53, 62, 74, 0.1), 0px 4px 4px 0px rgba(53, 62, 74, 0.1)",
      },

      animation: {
        progress: "progress-bar 20s linear",
      },

      keyframes: {
        "progress-bar": {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
