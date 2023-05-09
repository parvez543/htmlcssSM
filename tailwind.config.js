
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1280px',
      'xl': '1440px',
      '2xl': '1512px',
      'air': '1728px',
      'pro': '1920px',
      '2k': '2560px',
      '4k': '3840px'
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}

