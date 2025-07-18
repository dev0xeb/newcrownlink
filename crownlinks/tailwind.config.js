/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'navbarBreakpoint': '976px',
        sm: '576px',
        md: '768px',
        lg: '1024px',
        xl: '1276px'
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
} 