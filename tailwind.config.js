import { nextui } from '@nextui-org/react'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#131a34',
        bgSecondary: '#1f2a41',
        textColor1: '#ffffff8a',
        borderColor1: '#454c52',
        borderActive: '#19e5e6',
        textActive: '#19e5e6'
      },
      filter: {
        'grayscale-50': 'grayscale(50%)'
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui(), 'tailwindcss-filters']
}
