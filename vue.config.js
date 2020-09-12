module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import '~@/assets/css/_all.scss';
        `
      }
    }
  }
}
