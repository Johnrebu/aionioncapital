import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "var(--black)",
        black1: "var(--black1)",
        black2: "var(--black2)",
        white: "#ffff",
      },
      fontFamily: {
        secondary: ["var(--font-league-gothic)"],
        dm: ["DM Sans", "sans-serif"], // ✅ added here
      },
    },
  },
  plugins: [],
} satisfies Config;
