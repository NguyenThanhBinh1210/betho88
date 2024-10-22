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
        borderActive: '#19e5e6'
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
        'modern-6': {
          backgroundImage: {
            'custom-gradient': 'linear-gradient(80deg, #053b61 60%, #051e30 100%)'
          },
          colors: {
            screenTab: {
              DEFAULT: '#061d2d',
              hover: '#0a3a5c',
              active: '#0f578a',
              nonactive: '#0a2b43'
            },
            screenBg: {
              thead: '#0a3a5c',
              empty: '#075288',
              DEFAULT: '#082e49'
            },
            screenBorder: {
              thread: '#1d4969',
              second: '#1a3447',
              DEFAULT: '#1b3e57'
            },
            screenButton: {
              active: '#0a3a5c',
              hover: '#072a43',
              DEFAULT: '#082237'
            },
            textActive: '#19e5e6',
            background: '#041725',
            foreground: '#ffffff',
            active: '#19e6e6',
            selectHover: '#0f578a',
            switch: '#597990',
            borderColor: {
              1000: '#008080',
              900: '#ffffff14',
              undermath: '#f43484',
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
            buttonCollapse: {
              hover: '#075288',
              DEFAULT: '#1e3849'
            },
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
              thread: '#ffffff',
              DEFAULT: '#ffffffb3'
            },
            primary: {
              DEFAULT: '#0a3a5c'
            },
            secondary: {
              DEFAULT: '#062337'
            },
            thirty: {
              DEFAULT: '#072a43'
            }
          }
        },
        'modern-1': {
          backgroundImage: {
            'custom-gradient': 'linear-gradient(80deg, #053b61 60%, #051e30 100%)'
          },
          colors: {
            textActive: '#b7e03e',
            background: '#c9cce8',
            foreground: '#ffffff',
            active: '#19e6e6',
            selectHover: '#0f578a',
            switch: '#597990',
            borderColor: {
              1000: '#008080',
              900: '#ffffff14',
              undermath: '#f43484',
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
            buttonCollapse: {
              hover: '#075288',
              DEFAULT: '#1e3849'
            },
            buttonTab: {
              hover: '#075288',
              DEFAULT: '#053b61',
              active: '#1782cf'
            },
            textOpacity: {
              100: '#abbcc7',
              200: 'gray',
              300: '#ffffff8a',
              800: 'black',
              900: '#4d55b3',
              DEFAULT: '#ffffffb3'
            },
            primary: {
              DEFAULT: '#4d55b3'
            },
            secondary: {
              DEFAULT: 'white'
            },
            thirty: {
              DEFAULT: '#072a43'
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
