/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "color-primary": "var(--color-primary)",
        "color-secondary": "var(--color-secondary)",
        "color-bg-primary": "var(--color-bg-primary)",
        "color-bg-secondary": "var(--color-bg-secondary)",
        "color-bg-third": "var(--color-bg-third)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
