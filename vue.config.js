const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080,
    proxy: {
      '/juheNews': {
        target: 'http://v.juhe.cn/toutiao/index',    //需要跨域的url
        ws: true,
        changeOrigin: true,                          //设置允许跨域
        pathRewrite:{
          '^/juheNews': ''                           //重写路径
        }
      }
    }
  }
})
