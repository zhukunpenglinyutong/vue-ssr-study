const path = require('path')
const root = path.resolve(__dirname, '..')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',

  entry: path.join(root, 'entry/entry-client.js'),

  output: {
    path: path.join(root, 'dist'),
    filename: 'build.client.js'
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