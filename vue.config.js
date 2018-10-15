module.exports = {
  baseUrl: '/joyful-apis/',
  chainWebpack: config => {
    config.module
      .rule('html')
      .test(/\.html$/)
      .use('html-loader')
        .loader('html-loader')
        .end();
  },
}