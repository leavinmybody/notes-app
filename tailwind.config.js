/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    minHeight: {
      170: "170px",
    },
    colors: {
      darkSecondary: "#ffc0ad",
      darkMain: "#55423d",
      darkText: "#fff3ec",
    },
    extend: {
      gridTemplateColumns: {
        "repeat-4": "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
