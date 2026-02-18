/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EBF2FF',
          100: '#D6E5FF',
          200: '#AECBFF',
          300: '#99C2FF',
          400: '#6BA3FF',
          500: '#3D84FF',
          600: '#0066FF',
          700: '#0052CC',
          800: '#003D99',
          900: '#002966',
          950: '#001433',
        },
        accent: {
          50: '#F0F6FF',
          100: '#E0ECFF',
          200: '#C2D9FF',
          300: '#99C2FF',
          400: '#70ABFF',
          500: '#4794FF',
          600: '#1F7DFF',
          700: '#0066FF',
          800: '#0052CC',
          900: '#003D99',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          secondary: '#F8FAFE',
          tertiary: '#EBF2FF',
        },
        ink: {
          DEFAULT: '#0A0A1A',
          secondary: '#3B3B5C',
          tertiary: '#6B6B8A',
          muted: '#9B9BB8',
        },
        forest: {
          50:  '#F0FDF4',
          100: '#DCFCE7',
          200: '#B7E4C7',
          300: '#74C69D',
          400: '#52B788',
          500: '#40916C',
          600: '#2D6A4F',
          700: '#1B4332',
          800: '#143327',
          900: '#0D2218',
          950: '#081510',
        },
        cream: {
          DEFAULT: '#F6F4EF',
          50: '#FDFCFA',
          100: '#F6F4EF',
          200: '#EDE8DC',
        },
      },
      fontFamily: {
        'korean': ['Pretendard', 'Noto Sans KR', 'sans-serif'],
        'display': ['Pretendard', 'Noto Sans KR', 'sans-serif'],
      },
      fontSize: {
        // All sizes scaled ×1.3 from Tailwind defaults
        'xs':   ['0.975rem',  { lineHeight: '1.5rem' }],
        'sm':   ['1.138rem',  { lineHeight: '1.75rem' }],
        'base': ['1.3rem',    { lineHeight: '2rem' }],
        'lg':   ['1.463rem',  { lineHeight: '2rem' }],
        'xl':   ['1.625rem',  { lineHeight: '2.25rem' }],
        '2xl':  ['1.95rem',   { lineHeight: '2.5rem' }],
        '3xl':  ['2.438rem',  { lineHeight: '2.75rem' }],
        '4xl':  ['2.925rem',  { lineHeight: '3rem' }],
        '5xl':  ['3.9rem',    { lineHeight: '1' }],
        '6xl':  ['4.875rem',  { lineHeight: '1' }],
        '7xl':  ['5.85rem',   { lineHeight: '1' }],
        '8xl':  ['7.8rem',    { lineHeight: '1.05' }],
        '9xl':  ['10.4rem',   { lineHeight: '1.0' }],
        '10xl': ['13rem',     { lineHeight: '0.95' }],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'mesh-gradient': 'radial-gradient(at 27% 37%, #99C2FF 0px, transparent 50%), radial-gradient(at 97% 21%, #EBF2FF 0px, transparent 50%), radial-gradient(at 52% 99%, #D6E5FF 0px, transparent 50%), radial-gradient(at 10% 29%, #E0ECFF 0px, transparent 50%), radial-gradient(at 97% 96%, #99C2FF 0px, transparent 50%), radial-gradient(at 33% 50%, #F0F6FF 0px, transparent 50%)',
        'blue-gradient': 'linear-gradient(135deg, #0066FF 0%, #3D84FF 50%, #99C2FF 100%)',
        'hero-gradient': 'linear-gradient(160deg, #F0F6FF 0%, #EBF2FF 50%, #D6E5FF 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(0, 102, 255, 0.15)',
        'glow-lg': '0 0 80px rgba(0, 102, 255, 0.2)',
        'card': '0 4px 24px rgba(0, 102, 255, 0.08), 0 1px 4px rgba(0, 102, 255, 0.04)',
        'card-hover': '0 20px 60px rgba(0, 102, 255, 0.15), 0 4px 16px rgba(0, 102, 255, 0.08)',
      },
    },
  },
  plugins: [],
}
