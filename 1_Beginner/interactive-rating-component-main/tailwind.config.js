const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      mb: "430px",
    },
    extend: {
      colors: {
        Orange: "hsl(25, 97%, 53%)",
        White: "hsl(0, 0%, 100%)",
        LightGrey: "hsl(217, 12%, 63%)",
        MediumGrey: "hsl(216, 12%, 54%)",
        DarkBlue: "hsl(213, 19%, 18%)",
        VeryDarkBlue: "hsl(216, 12%, 8%)",
      },
      fontFamily: {
        overpass: ["Overpass", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
