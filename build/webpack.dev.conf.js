'use strict'
const path = require('path')
const merge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
	mode: 'development',
    // cheap-module-eval-source-map is faster for development
    devtool: 'source-map',
    output: {
		path: path.join(__dirname, '..', 'example'),
		filename: 'cosweb.js'
	},

})

module.exports = devWebpackConfig