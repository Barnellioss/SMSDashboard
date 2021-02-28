module.exports = {
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    borderRadius: {
      extra: '32px'
    },

    fontFamily: {
      normal: ['ProximaNova-Regular', 'sans-serif'],
      semibold: ['ProximaNova-Semibold', 'sans-serif'],
      bold: ['ProximaNova-Bold', 'sans-serif']
    },

    extend: {
      backgroundImage: theme => ({
        'headerBg': "url('/images/header-bg.svg')",
        'mountain': "url('/images/mountain-bg.png')",
        'firstBg': "url('/images/firstgrid-bg.svg')",
        'fourthBg': "url('/images/fourthgrid-bg.svg')"
      }),

      colors: {
        header: '#A5A9C0',
        customBlue: '#305DFB',
        customGrey: '#7B7E92',
        customBlack: '#181F48',
        customGreen: '#1FCA3E',
        borderColor: '#E3E8E9',
        customWhite: '#F8F8F8',
        customCircleGreen: '#E2FAE6',
        customCirlceGrey: '#EFF3FF',
        phColor: '#DBDADA'
      }
    },

    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center: true
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
}
