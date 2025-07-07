import PrimeUI from "tailwindcss-primeui";
import colors from "./assets/css/colors";

export default {
  theme: {
    ...colors
  },
  content: [
    "./_components/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./pages-debug/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  plugins: [PrimeUI],
};
