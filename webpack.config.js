
var BundleTracker = require('webpack-bundle-tracker');
const path = require('path');
const fs = require('fs');
const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './frontendapp/src/ant-theme-vars.less'), 'utf8'));
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './frontendapp/src/index',
  output: {
    filename: 'main.js',
    path: __dirname + '/frontendapp/static/frontend'
  },
 

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          plugins: [
            ['import', { libraryName: "antd", style: true }]
          ]
        },

      },
     
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },

      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "less-loader",
            options: {
              modifyVars: themeVariables,
              javascriptEnabled: true

            }
          }
        ]
      },

    ]
  },



  plugins: [
    new BundleTracker({ path: __dirname, filename: 'webpack-stats.json' }),
    
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify()
    }),
    new webpack.optimize.ModuleConcatenationPlugin()  
  ],
  optimization: {
    minimizer: [new TerserPlugin({ /* additional options here */ })],
  },
};


