require('babel-register');

module.exports = function webpackConfig(env = {}) {
  if (env.production) {
    return require('./production')();
  }

  // Default to load the dev environment.
  return require('./development')();
}
