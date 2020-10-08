module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import '~@/assets/css/_all.scss';
        `
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/reservations-front-end-vue/'
    : '/'
}
