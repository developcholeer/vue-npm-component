var webpackCommon = require('./webpack.common.js')
const merge = require('webpack-merge')
const cfg = require('./webpack.cfg.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('./webpack.until.js')
module.exports = (env, argv) => {

  return merge(webpackCommon(env, argv), {
    mode: 'production', // 当mode值为'production'时，webpack-dev-server 变动刷新反应很慢
    devtool: 'cheap-module-eval-source-map',
    entry: {
      'app': resolve('./index.js')
     },
     output: {
      path: resolve('dist'),
      filename: `${cfg.build.assetsSubDirectory}/js/[name].[chunkhash].js`,
    },
    devServer: {
      port: cfg.dev.port,
      host:'localhost',
      openPage: 'test',
      proxy: cfg.dev.proxy
    },
    plugins: [
      new HtmlWebpackPlugin({
        baseTagUrl: resolve( './index.html') ,
        template: resolve( './index.html'),
        filename: 'index.html',
        chunks: ['app','vendor', 'commons', 'manifest'],
        inject: true,
        minify: argv.mode !== 'production' ? undefined : {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          minifyCSS: true,
          minifyJS: true,
        },
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          // exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: 'url-loader',
              // options: {
              //   limit: 8 * 1024,
              //   name: `img/[name]-[hash:7].[ext]`,
              // }
            }
          ]
        },
        {
          test: /\.(woff|svg|eot|ttf)\??.*$/,
          // exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'url-loader',
            // options: {
            //   name: `font/[name].[hash:7].[ext]`,
            //   limit: 8192
            // }
          }
        },
      ]
    }
  })
};


