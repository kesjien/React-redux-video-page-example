var webpack = require("webpack"),
    path    = require("path"),
    outputPath;
outputPath = path.join(__dirname, "../src/js");
module.exports = {
    entry : {
      "bolding":"../src/js/bolding.js",
      "entry":"../src/js/entry.js"
    },
    output: {
        path: outputPath,
        filename: "bundle.js",
        publicPath: path.join(outputPath, '/')
    },
    module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['react', 'es2015']
      }
    }
    ]
  }
};