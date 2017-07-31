import merge from 'webpack-merge';

import parts from './parts';

module.exports = function development() {
  return merge([
    {
      entry: {
        app: [
          'react-hot-loader/patch',
        ],
      },
    },
    parts.shared(),
    {
      devtool: 'eval-source-map',
    },
    parts.devServer({
      host: process.env.HOST,
      port: parseInt(process.env.PORT, 10),
    }),
  ]);
};
