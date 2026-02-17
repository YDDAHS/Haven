
export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1A3C2A',
          light: '#2A5C3F',
          dark: '#0F2418',
        },
        golden: {
          DEFAULT: '#D4A843',
          light: '#E4C06A',
          dark: '#B8902E',
        },
        sky: {
          DEFAULT: '#E8F0E8',
          deep: '#D0E2D0',
        },
        warm: {
          DEFAULT: '#FAF8F5',
          dark: '#F0EDE8',
        },
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
}
