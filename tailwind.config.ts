/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'sans-serif'],
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px #0ff, 0 0 40px #fff',
            opacity: '1',
          },
          '50%': {
            boxShadow: '0 0 40px #0ff, 0 0 80px #fff',
            opacity: '0.8',
          },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 1.5s infinite',
        blink: 'blink 1.2s infinite',
      },
    },
  },
  plugins: [],
}