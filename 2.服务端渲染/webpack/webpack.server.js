const path = require('path')
const root = path.resolve(__dirname, '..')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  target: 'node', // 表明当前环境是Node
  mode: 'development',

  entry: path.join(root, 'entry/entry-server.js'),

  output: {
    libraryTarget: 'commonjs2', // 在服务器端打包，采用common规范
    path: path.join(root, 'dist'),
    filename: 'build.server.js'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [new VueLoaderPlugin()]

}