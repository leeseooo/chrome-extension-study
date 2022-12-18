const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    background: path.resolve(__dirname, "src", "background.ts"),
    content: path.resolve(__dirname, "src", "content.ts"),
    popup: path.resolve(__dirname, "src", "pages", "Popup", "index.tsx"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      cleanStaleWebpackAssets: true,
    }),
    new CopyPlugin({
      patterns: [{ from: ".", to: ".", context: "public" }],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/Popup/index.html",
      filename: "popup.html",
      cache: false,
    }),
  ],
};
