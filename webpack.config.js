var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");



module.exports = {
  entry: {
      // "vendor": "./SiteAssets/tsapp/vendor.tsx",
    // "app": ["./SiteAssets/app/main","./SiteAssets/app/router"]
       "app": ['babel-polyfill',"./src/app/index.jsx"]
    //   "activity":['babel-polyfill',"./react-app/activity.jsx"],
    // "home":['babel-polyfill',"./react-app/home.jsx"]
  },
  devtool: "source-map",
  output: {
    path: __dirname,
    filename: "./dist/[name].bundle.js"
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".jsx", ".js"]
    // root: path.resolve('./src'),
    // extenstions: ['', '.js'],
    // modules: [path.resolve(__dirname, '/src'), 'node_modules/'],
    // moduleDirectories: ['node_modules'],
    //  extensions: ['', '.jsx', '.js']
  },
  // devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react','stage-2']
        }
      },
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      // Optionally extract less files
      // or any other compile-to-css language
      {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      }
    ]
    // loaders: [
    //   {
    //     test: /\.js?$/,
    //     exclude: /node_modules/,
    //     loaders:['babel'],
    //     preLoaders: [
    //         // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
    //         { test: /\.js$/, loader: "source-map-loader" }
    //     ],
    //     externals: {
    //       "react": "React",
    //       "react-dom": "ReactDOM"
    //       // "react-bootstrap": "Bootstrap"
    //     },
    //     // loaders: ['babel-loader?presets[]=react,presets[]=es2015']
    //     // query: {
    //     //   presets: ['react']
    //     // }
    //   }
    //   // ,
    //   // {
    //   //   test: /vendor\/.+\.(jsx|js)$/,
    //   //   loader: 'imports?jQuery=jquery,$=jquery,this=>window'
    //   // }
    // ]
  },
  plugins: [
     new ExtractTextPlugin("./dist/[name].css")
    //  new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./dist/vendor.bundle.js")
  ]
};
