const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  module:{
    rules:[
      // {
      //   test: /\.js/,
      //   exclude: /node_modules/,
      //   use:{
      //     loader: "babel-loader"
      //   }
      // },
      // {
      //   test: /\.html-loader/,
      //   use:{
      //     loader:"html-loader",
      //     options:{minize:true}
      //   }
      // }
    ]
  },
  plugins:[
    new HtmlWebPackPlugin({
      template:"./src/index.html",
      filename:"./index.html"
    })
  ]
}