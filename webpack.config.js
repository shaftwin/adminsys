var webpack               = require("webpack");
var HtmlWebpackPlugin     = require('html-webpack-plugin');
var path                  = require("path");

var webpackConfig = {
  entry: {
    app: [
      "webpack-dev-server/client?http://localhost:9898", // WebpackDevServer host and port
      "webpack/hot/only-dev-server",
      "./app.js"
    ],
  },
  devServer: {

    contentBase: "./build"
  },
  output: {
    path: "./build",
    filename: "bundle.js"
  },
  module: {
    loaders: [

      // IMPORTANT: we don"t want to process EVERY single JS file with babel
      // loader. We only want to process the files inside our app structure
      // otherwise this could get very slow or even fail.
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader", "babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff)$/,
        loader: 'url-loader?limit=8192',
        exclude: /node_modules/,
      },

      {test: /\.json$/, loader: "json-loader"},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.styl$/, loader: "style-loader!css-loader?modules!stylus-loader"},
    ]
  },
  resolve: {

    // Needed so you can require("a") instead of require("a.jsx")
    extensions: ["", ".js", ".jsx", ".json", ".css", ".styl"],

    // Let us do things like require("app/reducers/application")
    root: __dirname,

    // Whenever someone does import "react", resolve the one in the node_modules
    // at the top level, just in case a dependency also has react in its node_modules,
    // we don't want to be running to versions of react!!!
    alias: {
      react: path.join(__dirname, "node_modules/react")
    }
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ]
};


module.exports = webpackConfig;
