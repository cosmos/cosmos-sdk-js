import CosWeb from './src/index'

(window as any).CosWeb = CosWeb
export default CosWeb

// (function (global) {
// 	console.log(module.exports)
// 	if (typeof module === 'object' && typeof module.exports === 'object') {
// 		console.log(1)
// 		module.exports = CosWeb
// 	} else {
// 		global.CosWeb = CosWeb
// 	}
// 	console.log(global)
// 	// Pass this if window is not defined yet
// })(typeof window !== 'undefined' ? window : this)

