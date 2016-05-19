var webpack = require('webpack');
module.exports = {
  entry: './app.js',
  output: {
    path: '.',
    filename: 'bundle.js'
  },
  resolve: {
        modulesDirectories: [ 'bower_components' ]
  },
}
