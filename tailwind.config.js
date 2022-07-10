/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      spacing: {
        '3/5w': '60vw'
      },
      keyframes: {
        'slide-in-right': {
          '0%' : { '--tw-translate-x': '60vw', transform: 'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));' },
          '100%' : { '--tw-translate-x': '0', transform: 'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));' }
        },
        'slide-in-left': {
          '0%' : { '--tw-translate-x': '-60vw', transform: 'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));' },
          '100%' : { '--tw-translate-x': '0', transform: 'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));' }
        }
      },
      animation: {
        'slide-in-right': 'slide-in-right 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-in-left': 'slide-in-left 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards'
      }

    }
  },
  plugins: [],
}