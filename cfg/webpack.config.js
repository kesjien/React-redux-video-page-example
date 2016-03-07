var webpack = require("webpack"),
    path    = require("path"),
    outputPath;
outputPath = path.join(__dirname, "../src/js");
module.exports = {
    entry : {
      app: path.join(__dirname, '../src/js', 'bolding.js'),
      app: path.join(__dirname, '../src/js', 'entry.js'),
      /* "bolding":"../src/js/bolding.js",
      "entry":"../src/js/entry.js"*/
    },
    output: {
        path: outputPath,
        filename: "bundle.js",
        publicPath: path.join(outputPath, '/')
    },
    resolve: {
       root: [
         path.resolve(__dirname, '..', 'src'),
         path.resolve(__dirname, '..', '.'),
       ],
       modulesDirectories: [
            "node_modules",
            "js",
        ],
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015']
        }
      }]
    }
};