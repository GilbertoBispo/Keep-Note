import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{ 
            bgColorPrimary: "var(--bg-color-primary)",
            bgColorContainer: "var(--bg-color-container)",
            textColor: "var(--text-color)"
        },
        fontFamily: {
            fontFamily: ["var(--font-family)", "sans-serif"]
        },
        boxShadow: {
            boxShadow: "var(--box-shadow)"
        }
    },
  },
  plugins: [],
};

export default config;
