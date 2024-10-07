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
        darkerSand: "var(--darkSand)",
        sand: "var(--sand)",
        lightSand: "var(--lightSand)",
        cyan: "var(--cyan)",
        lightCyan: "var(--lightCyan)",
        darkCyan: "var(--darkCyan)"
      },
    },
  },
  plugins: [],
};
export default config;
