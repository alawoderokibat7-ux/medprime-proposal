/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A',
          50: '#1E293B',
          100: '#1E293B',
          200: '#334155',
          300: '#475569',
          400: '#64748B',
          500: '#0F172A',
          600: '#0F172A',
          700: '#020617',
          800: '#020617',
          900: '#010305',
        },
        accent: {
          DEFAULT: '#2DD4BF',
          50: '#0F766E',
          100: '#0F766E',
          200: '#2DD4BF',
          300: '#2DD4BF',
          400: '#2DD4BF',
          500: '#2DD4BF',
          600: '#14B8A6',
          700: '#0D9488',
          800: '#0F766E',
          900: '#115E59',
        },
        slatebg: '#0F172A',
        ink: '#94A3B8',
        cardbg: '#1E293B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
