import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: { 
    fontFamily: {
      clone: ['lora', 'sans-serif'],
      ibm: ['roboto', 'sans-serif'],

    },
    extend: {
      colors: {
        'purp': "#008eac",
        'purp-light': "#C19AC8",
        'purp-dark': "#004756",
        'purp-deep': "#002f39",
        'green' : "#ffba08",
        'green-light': "#ffff0c",
        'green-dark': "#bf8b06",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.5)',
            '0 45px 65px rgba(0, 0, 0, 0.25)'
        ],
        'image': ['0 5px 5px rgba(0,0,0, 0.5)',
                  '0 10px 10px rgba(0,0,0, 0.25)']
      }
    },
  },
  plugins: [    
    require('@tailwindcss/typography'),
  ],
}
export default config
