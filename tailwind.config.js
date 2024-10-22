/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: '#00040f',
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        zomp: '#09977C'
      },
      animation: {
        pushRight: 'pushRight 1s ease-in-out infinite',
        'loop-scroll': 'loop-scroll 40s linear infinite',
      },
      keyframes: {
        pushRight: {
          '0%, 100%' : { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(50%)' },
        },
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}