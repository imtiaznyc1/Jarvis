const path = require("path");
module.exports = {
  entry: {
    configViewer: "./src/view/app/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "configViewer"),
    filename: "[name].js"
  },
  devtool: "eval-source-map",
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        options: {}
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        // 
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader:'file-loader',
            // options: {
            //   limit:20000
            // }
          }
        ]
      }
    ]
  },
  performance: {
    hints: false
  }
};


