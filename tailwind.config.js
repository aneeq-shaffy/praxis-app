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
        // Modern Metallic Palette
        'black': '#000000',
        'white': '#FFFFFF',
        'silver': '#C0C0C0',
        'chrome': '#808080',
        'titanium': '#E8E8E8',
        'graphite': '#1C1C1C',
        'platinum': '#F8F8F8',
        
        // Extended Gray Scale
        'gray': {
          50: '#F9F9F9',
          100: '#F5F5F5',
          200: '#E8E8E8',
          300: '#D4D4D4',
          400: '#C0C0C0',
          500: '#808080',
          600: '#666666',
          700: '#4A4A4A',
          800: '#1C1C1C',
          900: '#000000',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'SF Pro Display', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'mono': ['JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'monospace'],
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '1.4' }],
        'sm': ['14px', { lineHeight: '1.5' }],
        'base': ['16px', { lineHeight: '1.6' }],
        'lg': ['20px', { lineHeight: '1.4' }],
        'xl': ['26px', { lineHeight: '1.2' }],
        '2xl': ['42px', { lineHeight: '1.1' }],
        '3xl': ['68px', { lineHeight: '1.0' }],
      },
      spacing: {
        'xs': '8px',
        'sm': '12px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'medium': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'strong': '0 16px 48px rgba(0, 0, 0, 0.16)',
        'glow': '0 0 20px rgba(192, 192, 192, 0.5)',
        'glow-strong': '0 0 40px rgba(192, 192, 192, 0.8)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '20px',
        '2xl': '40px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'rotate-slow': 'rotate 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'gradient-metallic': 'linear-gradient(135deg, #000000 0%, #1C1C1C 100%)',
        'gradient-chrome': 'linear-gradient(145deg, #E8E8E8 0%, #C0C0C0 50%, #F8F8F8 100%)',
        'gradient-silver': 'linear-gradient(135deg, #C0C0C0 0%, #808080 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}