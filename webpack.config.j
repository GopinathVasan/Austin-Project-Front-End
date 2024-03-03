const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Add your webpack configuration here
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      // Add your module rules here
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    // Add your plugins here
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  // Add the resolve property with the fallback property for the stream module
  resolve: {
    fallback: {
      stream: require.resolve("stream-browserify")
    }
  }
};