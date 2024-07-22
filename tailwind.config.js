/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: 'hsl(246, 80%, 60%)',
        orange: 'hsl(15, 100%, 70%)',
        soft_blue: 'hsl(195, 74%, 62%)',
        light_red: 'hsl(348, 100%, 68%)',
        lime_green: 'hsl(145, 58%, 55%)',
        violet: 'hsl(264, 64%, 52%)',
        soft_orange: 'hsl(43, 84%, 65%)',
        very_dark_blue: 'hsl(226, 43%, 10%)',
        dark_blue: 'hsl(235, 46%, 20%)',
        desaturated_blue: 'hsl(235, 45%, 61%)',
        pale_blue: 'hsl(236, 100%, 87%)',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
