/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,html}',
    './content/blog/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f1fbff',
          100: '#d9f3ff',
          200: '#b3e5ff',
          300: '#85d4ff',
          400: '#4cbcff',
          500: '#1b9ff2',
          600: '#0d7ccc',
          700: '#0d63a3',
          800: '#104f7f',
          900: '#0f3f63'
        }
      },
      fontFamily: {
        display: ['"Poppins"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 20px 40px -20px rgba(27, 159, 242, 0.45)'
      }
    }
  },
  plugins: []
};
