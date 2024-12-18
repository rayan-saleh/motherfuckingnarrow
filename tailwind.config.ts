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
        foreground: 'rgb(var(--foreground-rgb))',
        'gradient-start': 'rgb(var(--background-start-rgb))',
        'gradient-end': 'rgb(var(--background-end-rgb))',
      },
    },
  },
  plugins: [],
} satisfies Config;
