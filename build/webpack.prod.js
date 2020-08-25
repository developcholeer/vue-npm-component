const webpackCommon = require("./webpack.common.js");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const cfg = require("./webpack.cfg.js");
const { resolve } = require("./webpack.until.js");

module.exports = (env, argv) => {
    return merge(webpackCommon(env, argv), {
        mode: "production", // 当mode值为'production'时，webpack-dev-server 变动刷新反应很慢
        devtool: cfg.build.productionSourceMap ? "#source-map" : undefined,
        entry: {
            app: resolve("src/widge/index.js")
        },
        output: {
            path: resolve("src/dist"),
            filename: "index.js",
            libraryTarget: "umd", // 采用通用模块定义
            // library: 'List', // 库名称
            libraryExport: "default", // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
            globalObject: "this" // 兼容node和浏览器运行，避免window is not undefined情况
        },
        plugins: [
            new CleanWebpackPlugin(resolve("src/dist")),
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false
                    }
                },
                parallel: true
            }),
            new OptimizeCssAssetsPlugin({
                cssProcessorOptions: {
                    map: cfg.build.productionSourceMap ?
                        {
                            inline: false,
                            annotation: true
                        } :
                        undefined,
                    autoprefixer: { disable: true },
                    cssProcessor: require("cssnano"),
                    cssProcessorOptions: {
                        safe: true,
                        discardComments: { removeAll: true }
                    },
                    canPrint: true
                }
            })
        ],
        module: {
            rules: [
              {
                test: /\.(gif|png|jpe?g|svg)$/i,
                exclude: /(node_modules|bower_components)/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8 * 1024,
                      name: `img/[name]-[hash:7].[ext]`,
                    }
                  }
                ]
              },
              {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'url-loader',
                  options: {
                    name: `font/[name].[hash:7].[ext]`,
                    limit: 8192
                  }
                }
              },
            ]
          }
    });
};