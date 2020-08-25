
const webpack = require('webpack')
const { resolve } = require('./webpack.until.js')
const cfg = require('./webpack.cfg.js')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = (env, argv) => {
  return {
    resolve: {  //导入的时候不用写拓展名
      extensions: ['.js','vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
      }
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
              }
            }]
        },
        {
          test: /\.vue$/,
          use: [
            {
              loader: 'vue-loader',
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
          }
        },
        {
          test: /\.(css|sass|scss)$/,
          use: [
            'vue-style-loader',
            'style-loader',
            'css-loader', 
            'sass-loader'
          ]
        }
      ]
    },

    plugins: [
      new VueLoaderPlugin(),
      new webpack.LoaderOptionsPlugin({
        options: {
          htmlLoader: {
            root:resolve( './src') // 对于html中的绝对路径进行定位， /assets/a.jpg => path.resolve(__dirname, '/src/assets/a.jpg')
          }
        }
      }),
    ],
  }
}