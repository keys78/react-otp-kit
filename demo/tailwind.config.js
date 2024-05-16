/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          1: "var(--accent1)",
          2: "var(--accent2)",
          3: "var(--accent3)",
          4: "var(--accent4)",
        },
        baseOne: "var(--baseOne)",
        baseTwo: "var(--baseTwo)",
        baseThree: "var(--baseThree)",
        baseFour: "var(--baseFour)",
      },
    },
  },
  plugins: [],
};

