module.exports = {
  devServer: {
    proxy: {
        "": {
          target: 'http://timemeetyou.com:8889/api/private/v1/',
          changeOrigin: true
        }
      }
  }
}