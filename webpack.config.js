const path = require('path');

const standalone = {
  entry: path.join(__dirname, 'dist/browser', 'browser.js'),
  mode: 'production',
  // optimization: {
  //     minimize: false
  // },
  output: {
    filename: 'swarm-api.min.js',
    globalObject: 'typeof self !== \'undefined\' ? self : this',
    library: 'SwarmAPI',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: __dirname,
    umdNamedDefine: true
  },
  target: 'web',
  node: {
    fs: 'empty'
  }
};

module.exports = [standalone];
