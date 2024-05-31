import type { Config } from "tailwindcss";

const config: Config = {
  prefix: 'ctw-',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'u-gray': 'rgb(138, 145, 158)',
        'u-black': '#0a0b0d'
      },
      animation: {
        'spin-fast': 'spin 0.5s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
