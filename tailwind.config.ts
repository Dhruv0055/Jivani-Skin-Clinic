import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "380px",
      },
      colors: {
        background: "#FFFFFF",
        "warm-white": "#FAF8F5",
        "mint-tint": "#F3F8F6",
        primary: {
          DEFAULT: "#5A9E91",
          hover: "#468276",
          light: "#E7F3F0",
          dark: "#336359",
        },
        accent: {
          blush: "#FBECE5",
          "rose-gold": "#C9876F",
          "rose-gold-hover": "#B2735C",
        },
        slate: {
          deep: "#1E293B",
          muted: "#64748B",
          light: "#94A3B8",
        },
        clinic: {
          border: "#E2E8F0",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 14px -2px rgba(30, 41, 59, 0.05)",
        float: "0 10px 30px -4px rgba(30, 41, 59, 0.08)",
        card: "0 1px 4px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(90, 158, 145, 0.06)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
