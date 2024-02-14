/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      primary: {
        500: "#FF7000",
        100: "#FFF1E6",
        },
      secondary: {
        100: "#000000",
200: "#0F1117",
300: "#151821",
400: "#212734",
500: "#101012",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        spaceGrotesk: ["var(--font-spaceGrotesk)"],
        },
    
    },
  },
  plugins: [],
}

