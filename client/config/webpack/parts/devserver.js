import webpack from 'webpack';
import path from 'path';

const stats = 'normal';

function devServer({ host, port }) {
  console.log(path.resolve(process.cwd(), 'src'));
  return {
    devServer: {
      contentBase: path.resolve(process.cwd(), 'src'),
      historyApiFallback: true,
      hot: true,
      stats,
      host,
      port,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ],
  };
}

export default devServer;
