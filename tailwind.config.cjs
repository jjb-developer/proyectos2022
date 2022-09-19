module.exports = {
  content: ['./src/**/*.{svelte,html}'],
  theme: {
    extend: {
      colors: {
          detailDark: '#1845A0',
          detailLight: '#8CAEF2'
        }
    },
    screens: {
        ss: '320px',
        ss_: '400px',
        xs: '480px',
        xs_: '560px',
        sm: '640px',
        sm_: '720px',
        md: '768px',
        md_: '896px',
        lg: '1024px',
        xl: '1280px'
    }
  },
  plugins: [
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/line-clamp'),
      require('@tailwindcss/forms')
  ],
}