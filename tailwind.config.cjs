/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'main': '#111218',
        'content': '#212430',
        'text-main': 'rgba(139,225,238,0.8)',
        'text-inactive': 'rgba(117,219,234,0.6)',
        'text-active': '#75DBEA'
      },
      gridTemplateColumns: {
        'main-content': '140px 1fr 140px'
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
