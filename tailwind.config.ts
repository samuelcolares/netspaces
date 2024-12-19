import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        buttonPrimary: "var(--buttonPrimary)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        highlight: "var(--highlight)",
        tertiary: "var(--tertiary)",
        divider: "var(--divider)",
      },
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      bounce: {
        "0%, 100%": {
          transform: "translateY(-5%)",
          animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
        },
        "50%": {
          transform: "none",
          animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
        },
      },
    },
    animation: {
      "bounce-slow": "bounce 8s infinite, fadeIn 1s ease-in-out 1s forwards",
      fadeIn: 'fadeIn 1s ease-in-out 300ms forwards',
    },
  },
  plugins: [],
} satisfies Config;
