
var webpack = require('webpack');
var path = require('path');



module.exports = {
  context: path.join(__dirname, "src"),
  devtool: 'cheap-module-eval-source-map',
  entry: [
   'webpack-hot-middleware/client', // WebpackDevServer host and port
  "./client.js",
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        
        loaders: ['react-hot', 'babel?' +JSON.stringify({
          plugins: [
            'transform-decorators-legacy',
            'react-html-attrs',
            'transform-class-properties'
          ],
          presets: ['es2015', 'react', 'stage-0'],
          env: {
            production: {
              presets: ['react-optimize']
            }
          }
        })],
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new webpack.HotModuleReplacementPlugin()
  ],
};
