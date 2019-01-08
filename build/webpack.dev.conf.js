'use strict'
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('../config')

const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
	mode: 'development',
	// cheap-module-eval-source-map is faster for development
	devtool: 'source-map',
	entry: './index.ts',
	output: {
		path: path.join(__dirname, '..', 'example'),
		filename: 'cosweb.js'
	},
	devServer: {
		clientLogLevel: 'warning',
		hot: true,
		contentBase: false, // since we use CopyWebpackPlugin.
		compress: true,
		hot: true,
		contentBase: false, // since we use CopyWebpackPlugin.
		compress: true,
		host: config.dev.host,
		port: config.dev.port,
		open: config.dev.autoOpenBrowser,
		overlay: config.dev.errorOverlay
			? { warnings: false, errors: true }
			: false,
		publicPath: config.dev.assetsPublicPath,
		proxy: config.dev.proxyTable,
		quiet: true, // necessary for FriendlyErrorsPlugin
		watchOptions: {
			poll: false,
		}
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': require('../config/dev.env')
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
		new webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'example/index.html',
			inject: true
		}),
	]

})

module.exports = devWebpackConfig