/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#09090B",
        surface: "#131316",
        elevated: "#1A1A1F",
        border: "#27272A",
        muted: "#A1A1AA",
        dim: "#71717A",
        accent: "#22D3EE",
        "accent-dim": "#0891B2",
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      maxWidth: {
        site: "72rem",
      },
      backgroundImage: {
        grid: `linear-gradient(rgba(39,39,42,0.5) 1px, transparent 1px),
               linear-gradient(90deg, rgba(39,39,42,0.5) 1px, transparent 1px)`,
      },
      backgroundSize: {
        grid: "48px 48px",
      },
    },
  },
  plugins: [],
};
