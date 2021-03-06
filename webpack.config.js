const path = require('path');

let webpack = require("webpack");

let plugins = []; // if using any plugins for both dev and production
let devPlugins = []; // if using any plugins for development

let prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: true
    }
  })
];

plugins = plugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
)

module.exports = {
  context: __dirname,
  entry: './hangman.js',
  output: {
    filename: './bundle.js'
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [
            {
                test:   /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            }
        ],
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-map'
};
