/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,js,ts,jsx,tsx,vue,svelte}",
  ],
  daisyui: {
    themes: [
      "xessence",
      "light",
      "dark",
    ],
  },
  plugins: [require("daisyui")],
}