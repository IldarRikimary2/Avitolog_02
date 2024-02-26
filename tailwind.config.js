module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '440px',
      },

      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        sans: ['PT Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },

      fontSize: {
        'xs': '0.75rem', // 12px
        'sm': '0.875rem', // 14px
        'base': '1rem', // 16px
        'lg': '1.125rem', // 18px
        'xl': '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
      },

    },

  },

  plugins: [],
};
