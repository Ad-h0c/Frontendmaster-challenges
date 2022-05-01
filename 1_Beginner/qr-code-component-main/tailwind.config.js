const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      mb: "375px",
    },
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        Lightgray: "hsl(212, 45%, 89%)",
        Grayishblue: "hsl(220, 15%, 55%)",
        Darkblue: "hsl(218, 44%, 22%)",
      },
    },
    fontFamily: {
      outfit: ["Outfit", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
