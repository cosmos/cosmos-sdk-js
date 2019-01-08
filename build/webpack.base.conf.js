const path = require('path')

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	context: resolve('./'),
	entry: './src/index.ts',
	output: {
		path: resolve('dist'),
		filename: 'cosweb.js'
	},
	module: {
		rules: [
			{
				test: /\.(t|j)sx?$/,
				use: 'awesome-typescript-loader',
				exclude: /node_modules/
			},
			// {
			// 	test: /\.js$/,
			// 	loader: 'babel-loader',
			// 	include: [resolve('src'), resolve('test')]
			// },
			{
				test: /[\\\/]tweetnacl[\\\/]/,
				use: ['exports-loader', 'imports-loader']
			},
			{
				test: /[\\\/]tweetnacl-auth[\\\/]/,
				use: ['exports-loader', 'imports-loader']
			}
		],
		noParse: [
			/[\\\/]tweetnacl[\\\/]/,
			/[\\\/]tweetnacl-auth[\\\/]/
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	node: {
		// prevent webpack from injecting useless setImmediate polyfill because Vue
		// source contains it (although only uses it if it's native).
		setImmediate: false,
		// prevent webpack from injecting mocks to Node native modules
		// that does not make sense for the client
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
	}
}