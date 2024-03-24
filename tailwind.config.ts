import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'purple-bg': "url('/src/assets/purple_bg.svg')",
      },
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
      colors: {
        'cyan': '#2BD0D0',
        'light-grey': '#EFF1F7',
        grey: '#9E9AA8',
        'dark-grey': '#34313D',
        'purple-grey': '#3A3054',
        black: '#34313D',
      },
      fontSize: {
        sm: '0.9375rem', //15px
        base: '1rem', //16px
        lg: '1.125rem', //18px
        xl: '1.25rem', //20px
        '2xl': '1.375rem',
        '5xl': '2.5rem',
        '6xl': '5rem', //80px
      },
    },
  },
  plugins: [],
}

export default config;
