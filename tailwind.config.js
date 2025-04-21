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
        sans: ['var(--font-plus-jakarta-sans)'],
        serif: ['var(--font-dm-serif-display)'],
      },
      colors: {
        primary: {
          DEFAULT: '#d6ad60',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#4e4e4e',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#9a7b4f',
          foreground: '#ffffff',
        },
        background: {
          DEFAULT: '#ffffff',
          dark: '#0a0a0a',
        },
        foreground: {
          DEFAULT: '#171717',
          dark: '#ededed',
        },
      },
    },
  },
  plugins: [],
} 