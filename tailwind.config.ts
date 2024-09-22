import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: "#243CE6",
        // indications colors
        well: "#32AE60",
        wellfade: "#DFF9E8",
        // cards colors
        light: "#FFFFFF",
        darker: "#161E29",
        // background colors
        lightBg: "#F1F1F1",
        darkBg: "#262B39",
        // normal color actions colors
        fadeLight: "#D2D6FA",
        fadeDark: "#202B3B",
      },
    },
  },
  plugins: [],
};
export default config;
