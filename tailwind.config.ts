import type { Config } from "tailwindcss";


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "7rem",
        "2xl": "8rem",

      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#f0f3fe",
          100: "#dee3fb",
          200: "#c4cff9",
          300: "#9baff5",
          400: "#6b86ef",
          500: "#495ee8",
          600: "#3440dc",
          700: "#2b2eca",
          800: "#2a29a4",
          900: "#262782",
          950: "#242365",
        },
        secondary: {
          50: "#f1f6fd",
          100: "#e0ebf9",
          200: "#c8ddf5",
          300: "#a3c7ed",
          400: "#6ba2e1",
          500: "#568bdb",
          600: "#4271ce",
          700: "#385dbd",
          800: "#334d9a",
          900: "#2e437a",
          950: "#202b4b",
        },
      },
      fontFamily: {
        figtree: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
