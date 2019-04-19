const path = require("path");
const nodeExternals = require("webpack-node-externals");

const config = {
  entry: "./bin/www",
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  externals: [nodeExternals()]
};

module.exports = config;
