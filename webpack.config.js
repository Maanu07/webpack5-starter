const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "src", "index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    // filename: "main.js",
    // filename: "[name].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: "Html Test File",
      filename: "index.html",
      template: path.resolve(__dirname, "src", "template.html"),
    }),
  ],

  // loaders
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(svg|jpg|jpeg|ico|png|gif|webp)$/,
        type: "asset/resource",
      },
    ],
  },

  // dev server configs
  devServer: {
    port: 3000,
    open: true,
    compress: true,
    hot: true,
  },
};
