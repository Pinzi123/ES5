var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var webpack = require('webpack');
module.exports = {
  entry: {
    chess: "./ES6_Game/js/chessIndex.js",
    tinyHeart: "./ES6_Game/js/tinyHeartIndex.js",
    tetris: "./ES6_Game/js/tetrisIndex.js"
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new ExtractTextPlugin("css/[name].css"),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    }),
    // 把jquery作为全局变量插入到所有的代码中
    // 然后就可以直接在页面中使用jQuery了
    // new webpack.ProvidePlugin({
    //   commonFunc: 'commonFunc',
    // }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'chess.html',
      template: 'ES6_Game/chess.html',
      inject: 'body',
      title: '五子棋',
      chunks: ['chess']
    }),
    new HtmlWebpackPlugin({
      filename: 'tinyHeart.html',
      template: 'ES6_Game/tinyHeart.html',
      inject: 'body',
      title: '爱心鱼',
      chunks: ['tinyHeart']
    }),
    new HtmlWebpackPlugin({
      filename: 'tetrisIndex.html',
      template: 'ES6_Game/tetrisIndex.html',
      inject: 'body',
      title: '俄罗斯方块',
      chunks: ['tetris']
    })
  ],
  module: {
    loaders: [
      // {
      //   test: path.join(__dirname, 'es6'),
      //   loader: 'babel-loader',
      //   query: {
      //     presets: ['es2015']
      //   }
      // },
      {  test: /\.js$/,
       loader: "babel-loader",
       query: {presets: ['es2015']},
       exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      },
      // 图片处理
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: {
         loader: 'file-loader',
         options: {
           name: 'img/tetris/[hash:8].[ext]',
           publicPath: '../' //解决css中图片引用的相对路径错误问题
         }
       }
      }
    ]
  }
}
