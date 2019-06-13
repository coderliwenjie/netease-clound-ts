const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  configureWebpack: config => {
    const plugins = []
    plugins.push(new StyleLintPlugin({
      files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}']
    }))
    config.plugins = [
      ...config.plugins,
      ...plugins
    ]
  }
}