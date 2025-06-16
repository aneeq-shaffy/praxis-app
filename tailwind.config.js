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
        // Metallic Color Palette
        'gold': '#FFD700',
        'gold-light': '#FFED4E',
        'gold-dark': '#B8860B',
        'silver': '#C0C0C0',
        'silver-light': '#E5E5E5',
        'silver-dark': '#808080',
        'platinum': '#E5E4E2',
        'charcoal': '#36454F',
        'obsidian': '#0F0F0F',
        'gunmetal': '#2C3539',
        'bronze': '#CD7F32',
        'copper': '#B87333',
        'steel': '#71797E',
        'chrome': '#BCC6CC',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'metallic-gradient': 'linear-gradient(135deg, #FFD700 0%, #C0C0C0 50%, #0F0F0F 100%)',
        'gold-gradient': 'linear-gradient(135deg, #FFD700 0%, #FFED4E 50%, #B8860B 100%)',
        'silver-gradient': 'linear-gradient(135deg, #E5E5E5 0%, #C0C0C0 50%, #808080 100%)',
        'dark-gradient': 'linear-gradient(135deg, #36454F 0%, #2C3539 50%, #0F0F0F 100%)',
        'metallic-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23FFD700\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        'steel-pattern': "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23C0C0C0\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M20 20L0 0h40v40L20 20z\"/%3E%3C/g%3E%3C/svg%3E')",
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #FFD700, 0 0 10px #FFD700, 0 0 15px #FFD700' },
          '100%': { boxShadow: '0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-gold': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        }
      },
      boxShadow: {
        'gold': '0 4px 14px 0 rgba(255, 215, 0, 0.39)',
        'silver': '0 4px 14px 0 rgba(192, 192, 192, 0.39)',
        'metallic': '0 8px 32px 0 rgba(255, 215, 0, 0.37)',
        'inset-metallic': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}