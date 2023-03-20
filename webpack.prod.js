const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const glob = require('glob');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const {PurgeCSSPlugin} = require('purgecss-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
};

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.sharpMinify,
        },
      }),
    ],
  },
  plugins: [
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, {nodir: true}),
    }),
  ],
});
