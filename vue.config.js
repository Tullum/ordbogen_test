module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    extract: true
  },
  devServer: {
    proxy: {
      '^/api/': {
        target: 'http://localhost',
        changeOrigin: true // so CORS does not bite us.
      }
    }
  }
}
