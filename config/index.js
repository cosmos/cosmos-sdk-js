module.exports = {
    dev: {
        proxyTable: {
            '/api': {
				target: 'https://192.168.1.215:26657',
				pathRewrite: {
					'^/api': '/'
				},
				secure: false
			},
        },
        // Various Dev Server settings
        host: '127.0.0.1', // can be overwritten by process.env.HOST
        port: 9010, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: true,
        errorOverlay: true,
        notifyOnErrors: false,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

        /**
         * Source Maps
         */

        // https://webpack.js.org/configuration/devtool/#development
        devtool: 'cheap-module-eval-source-map',
    }
}