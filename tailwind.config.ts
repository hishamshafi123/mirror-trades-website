
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
        'primary-gold': '#FFD700',
        'secondary-gold': '#FFC107',
        'accent-gold': '#B8860B',
        'background-dark': '#0A0A0A',
        'surface-dark': '#1A1A1A',
        'text-primary': '#FFFFFF',
        'text-secondary': '#E0E0E0',
        'success-green': '#00FF88',
        'warning-red': '#FF4444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      borderRadius: {
        'lg': '12px',
        'md': '8px',
      },
    },
  },
  plugins: [],
};
export default config;
