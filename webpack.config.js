module.exports = {
  entry: {
    'index': './nodes/src/index.js',
  },
  output: {
    path: __dirname,
    filename: 'sample/static/sample/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:
        {
          presets:['react']
        }
      }
    ],

  },
  devServer: {
    contentBase: 'public'
  },

}
