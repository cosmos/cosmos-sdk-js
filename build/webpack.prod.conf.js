'use strict'
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                    },
                    warning: 'verbose',
                    ecma: 6,
                    beautify: false,
                    comments: false,
                    mangle: false,
                    toplevel: false,
                    keep_classnames: true,
                    keep_fnames: true
                },
                sourceMap: false,
                parallel: true
            })
        ]
    }
    // plugins: [
    //     // new BundleAnalyzerPlugin()
    // ],
})

module.exports = webpackConfig