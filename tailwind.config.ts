import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {Config} */
export default {
  darkMode: ['class', 'class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0a0a0a',
        'cyber-blue': '#00fff9',
        'cyber-pink': '#ff00ff',
        'cyber-yellow': '#ffff00',
        'cyber-green': '#39ff14',
      },
      fontFamily: {
        cyber: ['Orbitron', 'sans-serif'],
      },
      keyframes: {
        scroll: {
          to: { transform: 'translate(calc(-50% - 0.5rem))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      animation: {
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
        float: 'float 3s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [
    function addVariablesForColors({ addBase, theme }: any) {
      const flattenColorPalette = (colors: any) =>
        Object.entries(colors).reduce(
          (acc, [key, value]) =>
            typeof value === 'object'
              ? { ...acc, ...value }
              : { ...acc, [key]: value },
          {}
        )

      let allColors = flattenColorPalette(theme('colors'))
      let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      )

      addBase({
        ':root': newVars,
      })
    },
  ],
}
