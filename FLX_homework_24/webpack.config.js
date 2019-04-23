const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
    },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader','less-loader'],
      }
    ]
  },
  devServer: {
    contentBase: './'
},
plugins: [
  new CopyPlugin([
      { from: 'src/index.html', to: 'index.html' },
      { from: 'src/img', to: 'img' },
  ]),
],
};
