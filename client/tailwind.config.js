/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ scan all React files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E293B',
        secondary: '#F59E0B',
      },
    },
  },
  plugins: [],
};
