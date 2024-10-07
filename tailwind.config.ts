import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "var(--white)",
        black: "var(--black)",
        darkSand: "var(--darkSand)",
        sand: "var(--sand)",
        lightSand: "var(--lightsand)",
        cyan: "var(--cyan)"
      },
    },
  },
  plugins: [],
};
export default config;
