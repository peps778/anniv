/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',  // Path to your HTML files
    './src/**/*.{html,js}',  // If you're using JS files in a src folder
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1e3a8a',  // Example custom color
        'custom-red': '#e11d48',
      },
      spacing: {
        '128': '32rem',  // Example of custom spacing value
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),  // Example of adding a plugin
  ],
}
