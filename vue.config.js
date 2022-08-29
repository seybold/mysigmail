const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/REPO_NAME/" : "/",,
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  }
}
