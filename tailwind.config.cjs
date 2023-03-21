/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './src/**/*.{vue,js,ts,jsx,tsx,css}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-typography/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
