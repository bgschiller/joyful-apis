module.exports = {
  baseUrl: '/lets-build-oauth/',
  chainWebpack: config => {
    config.module
      .rule('html')
      .test(/\.html$/)
      .use('html-loader')
        .loader('html-loader')
        .end();
  },
}