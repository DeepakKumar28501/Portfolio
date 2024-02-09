/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        secondary: "#F97316",
        tertiary: "#54D6BB",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      //@media (max-width:1535px){.....}
      xl: { max: "1279px" },
      //@media (max-width:1535px){.....}
      lg: { max: "1023px" },
      //@media (max-width:1535px){.....}
      md: { max: "767px" },
      //@media (max-width:1535px){.....}
      // sm: { max: "639px" },
       sm: { max: "1000px" },// we change here breakpoint size
      //@media (max-width:1535px){.....}
    },
  },
  plugins: [],
};
