var path = require('path');
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context:path.resolve('js'),
  entry:{
    about:'./about_page.js',
    home:'./home_page.js',
    contact:'./contact_page.js',
    mainBundle:['./utils', './app']
  },                // for one file use array not object ex. ['./utils','./app']
  output:{
    path:path.resolve('public/assets/'), // virtual directory when running the dev server, not on disk
    publicPath: '/assets/',
    filename:'[name].js'
  },
  plugins:[commonsPlugin, new ExtractTextPlugin("styles.css")],
  devServer:{
    contentBase:'public'
  },
  watch:true,
  module:{
    preLoaders:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'jshint-loader'
      }
    ],
    loaders:[
      {
        test:/\.es6$/,
        exclude:/node_modules/,
        loader:"babel-loader"
      },
      {
        test:/\.css/,
        exclude:/node_modules/,
        loader: ExtractTextPlugin.extract("style-loader","css-loader!autoprefixer-loader")
      },
      {
        test:/\.scss/,
        exclude:/node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      },
      {
        test:/\.less/,
        exclude:/node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader")
      },
      {
        test:/\.(png|jpg)/,
        exclude:/node_modules/,
        loader: 'url-loader?limit=10000' // In kb, if image is less than limit it will be requested inline and won't be a seperate request
      }
    ]
  },
  resolve:{
    extensions:['', '.js', '.es6']
  }
};