/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        bg: "#07070D",
        surface: "#0F0F1C",
        border: "#1C1C30",
        accent: "#00E5A0",
        "accent-dim": "#00A872",
        orange: "#FF5733",
        text: "#EEEEF5",
        muted: "#6B6B90",
        "muted-light": "#9898B8",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
