import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        logirentBold: 'Logirent_bold',
        logirentRegular: 'Logirent_regular',
        archivo: ['Archivo'],
      },
      colors: {
        primary_1: '#FFFFFF',
        primary_2: '#fdfdfd',
        primary_3: '#f5f5f5',
        primary_4: '#f0f0f0',
        primary_5: '#dadada',
        primary_6: '#c1c1c1',
        primary_7: '#8f8f8f',
        primary_8: '#5d5d5d',
        primary_9: '#494949',
        primary_10: '#2b2b2b',
        primary_11: '#232323',
        primary_12: '#191919',
        primary_13: '#050505',
      },
    },
  },
  plugins: [],
}
export default config
