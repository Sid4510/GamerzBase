/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        new: "#111111",
        shade: "#3c3c3c",
        line: "#ff4655",
        backscreen: "#050505",
        card: "#0e0e0e",
        newgray: "#262626",
        bggray: "#161616",
        red1: "#ea2b03",
        colo: '#cfcccc'
      },
      scale: {
        102: "1.02", // 102% scale
      },
      animation: {
        "horizontal-infinite-scroll": "horizontal-infinite-scroll 200s linear infinite", // Change to 40s
      },
      keyframes: {
        "horizontal-infinite-scroll": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
