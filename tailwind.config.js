/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Swiss Minimalism Monochromatic Palette
        'black': '#000000',
        'gray': {
          50: '#F9F9F9',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        'white': '#FFFFFF',
      },
      fontFamily: {
        'sans': ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        'xs': ['14px', { lineHeight: '1.4' }],
        'sm': ['16px', { lineHeight: '1.6' }],
        'base': ['16px', { lineHeight: '1.6' }],
        'lg': ['20px', { lineHeight: '1.4' }],
        'xl': ['26px', { lineHeight: '1.2' }],
        '2xl': ['42px', { lineHeight: '1.1' }],
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '26px',
        'lg': '42px',
        'xl': '68px',
        '2xl': '110px',
      },
      maxWidth: {
        'content': '960px',
        'sidebar': '593px',
      },
      gridTemplateColumns: {
        'swiss': 'repeat(12, 1fr)',
        'thirds': '1fr 1fr 1fr',
        'golden': '1.618fr 1fr',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      boxShadow: {
        'swiss': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'swiss-hover': '0 4px 16px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}