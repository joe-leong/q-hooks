const merge = require('webpack-merge');
const common = require('../../webpack.common');
const path = require('path');

module.exports = merge(common, {
  entry: './es/index.js',
  output: {
    filename: '@fe-q/q-react-hooks.js',
    library: '@fe-q/q-react-hooks',
    path: path.resolve(__dirname, './dist'),
  },
});
