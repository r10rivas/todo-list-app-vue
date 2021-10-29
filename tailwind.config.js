module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg,#5df,#c058f3)",
      },
      colors: {
        
        'back-primary': 'var(--color-back-primary)',
        'back-secondary': 'var(--color-back-secondary)',
        'back-tertiary': 'var(--color-back-tertiary)',
        
        'fore-primary':  'var(--color-fore-primary)',
        'fore-secondary': 'var(--color-fore-secondary)',
        'fore-tertiary': 'var(--color-fore-tertiary)',
      },
      fontFamily: {
        "josefin-sans": ["josefin-sans", "sans-serif"],
      },
      height: {
        '6.25': '1.5625rem',
      },
      width: {
        '6.25': '1.5625rem',
      },
    },
  },
  variants: {
    extend: {
      visibility: ['checked',],
      borderRadius: ['first',],
    },
  },
  plugins: [],
}
