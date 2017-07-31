import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';

import indexHtml from './indexHtml';

function config() {
  const rootPath = process.cwd();
  const DIRS = {
    src: 'src',
    build: 'dist',
  };
  const PATHS = {
    src: path.join(rootPath, DIRS.src),
    build: path.join(rootPath, DIRS.build),
  };

  return merge([
    {
      context: PATHS.src,
      entry: {
        app: ['./index.js'],
        vendor: [
          'babel-polyfill',
          'isomorphic-fetch',
          'react',
          'react-dom',
        ],
      },
      output: {
        path: PATHS.build,
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        publicPath: '/',
      },
      module: {
        rules: [
          {
            test: /\.html$/,
            exclude: /node_modules/,
            use: {
              loader: 'file-loader',
              query: {
                name: '[name].[ext]',
              },
            },
          },
          {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
              'style-loader',
              'css-loader',
            ],
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
              },
            ],
          },
          {
            test: /\.svg$/,
            loaders: ['babel-loader?presets[]=react', 'svg-jsx-loader'],
          },
        ],
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          },
        }),

        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          minChunks: Infinity,
          filename: 'vendor.bundle.js',
        }),

        new webpack.NamedModulesPlugin(),
      ],
      resolve: {
        extensions: [
          '.webpack-loader.js',
          '.web-loader.js',
          '.loader.js',
          '.js',
          '.react.js',
        ],
        modules: [
          'node_modules',
          DIRS.src,
        ],
      },
      target: 'web',
    },
    indexHtml(),
  ]);
}

export default config;
