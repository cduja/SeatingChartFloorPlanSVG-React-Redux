import merge from 'webpack-merge';
import webpack from 'webpack';

import parts from './parts';

module.exports = function production() {
  return merge([
    parts.shared(),
    {
      devtool: 'cheap-module-source-map',
      output: {
        filename: '[name]-[chunkhash].js',
        chunkFilename: '[name]-[chunkhash].chunk.js',
      },
      plugins: [
        new webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false,
        }),

        new webpack.optimize.UglifyJsPlugin({
          beautify: false,
          mangle: {
            screw_ie8: true,
            keep_fnames: false,
          },
          compress: {
            screw_ie8: true,
          },
          comments: false,
        }),
      ],
    },,
  ]);
};
