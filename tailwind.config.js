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
      backgroundImage: {
        'custom-gradient': 'linear-gradient(80deg, #053b61 60%, #051e30 100%)'
      },
      filter: {
        'grayscale-50': 'grayscale(50%)'
      }
    }
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        'classic-6': {
          backgroundImage: {
            'custom-gradient': 'linear-gradient(80deg, #053b61 60%, #051e30 100%)'
          },
          colors: {
            background: '#041725',
            foreground: '#ffffff',
            active: '#19e6e6',
            selectHover: '#0f578a',
            switch: '#597990',
            borderColor: {
              1000: '#008080',
              900: '#ffffff14',
              DEFAULT: '#ffffff29'
            },
            bgInput: {
              900: '#00000052',
              DEFAULT: '#00000029'
            },
            bgOpacity: {
              100: '#ffffff14'
            },
            textLive: '#e90c68',
            textDanger: '#f43484',
            buttonTab: {
              hover: '#075288',
              DEFAULT: '#053b61',
              active: '#1782cf'
            },
            textOpacity: {
              100: '#abbcc7',
              200: '#ffffffa8',
              300: '#ffffff8a',
              800: '#ffffffde',
              900: '#ffffffb2',
              DEFAULT: '#ffffffb3'
            },
            primary: {
              DEFAULT: '#0a3a5c'
            },
            secondary: {
              DEFAULT: '#062337'
            }
          }
        },
        'classic-1': {
          colors: {
            background: '#4d55b3',
            foreground: '#ffffff',
            primary: {
              50: '#3B096C',
              100: '#520F83',
              200: '#7318A2',
              300: '#9823C2',
              400: '#c031e2',
              500: '#DD62ED',
              600: '#F182F6',
              700: '#FCADF9',
              800: '#FDD5F9',
              900: '#FEECFE',
              DEFAULT: '#DD62ED',
              foreground: '#ffffff'
            }
            // focus: '#F182F6'
          }
        }
      }
    })
  ]
}
