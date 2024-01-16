/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens : {
      tablet : "1034px",
      small_tablet : "900px",
      sm : "600px",
      small : "550px",
      md : "900px"
    },
    extend: {},
  },
  plugins: [],
}

