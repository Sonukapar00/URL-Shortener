export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Extended color palette for modern UI
        'primary': '#0ea5e9',
        'primary-dark': '#0284c7',
        'secondary': '#a855f7',
        'secondary-dark': '#9333ea',
        'accent': '#ec4899',
        'surface': '#0f172a',
        'surface-light': '#1e293b',
        'surface-lighter': '#334155',
      },
      backgroundColor: {
        'glass': 'rgba(15, 23, 42, 0.7)',
        'glass-light': 'rgba(30, 41, 59, 0.5)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow': '0 20px 60px rgba(14, 165, 233, 0.18)',
        'glow-md': '0 10px 40px rgba(14, 165, 233, 0.12)',
        'glow-sm': '0 5px 20px rgba(14, 165, 233, 0.08)',
        'glow-purple': '0 20px 60px rgba(168, 85, 247, 0.15)',
        'glow-pink': '0 20px 60px rgba(236, 72, 153, 0.15)',
        'inset-glow': 'inset 0 1px 2px rgba(255, 255, 255, 0.1)',
        'card': '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
        'card-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(14,165,233,0.18), transparent 28%), radial-gradient(circle at bottom right, rgba(168,85,247,0.18), transparent 30%)',
        'gradient-button': 'linear-gradient(135deg, #0ea5e9 0%, #a855f7 100%)',
        'gradient-button-hover': 'linear-gradient(135deg, #06b6d4 0%, #c084fc 100%)',
        'gradient-border': 'linear-gradient(135deg, rgba(14,165,233,0.5) 0%, rgba(168,85,247,0.5) 100%)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'slideUp': 'slideUp 0.5s ease-out',
        'slideDown': 'slideDown 0.4s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'shimmer': 'shimmer 2s infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(14, 165, 233, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      },
      borderRadius: {
        'card': '1.5rem',
        'button': '0.875rem',
      },
    },
  },
  plugins: [
    // Custom plugin for smooth transitions
    ({ addUtilities }) => {
      addUtilities({
        '.transition-smooth': {
          '@apply transition-all duration-300 ease-out': {},
        },
        '.transition-fast': {
          '@apply transition-all duration-200 ease-in': {},
        },
      });
    },
  ],
};
