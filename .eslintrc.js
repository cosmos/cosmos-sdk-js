module.exports = {
	parser: 'typescript-eslint-parser',
	plugins: [
		'typescript'
	],
	'env': {
		'browser': true,
		'commonjs': true,
		'es6': true,
		'node': true
	},
	'extends': [
		'eslint-config-alloy/typescript',
		'eslint:recommended',
	],
	// 'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 2017,
		'sourceType': 'module'
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [2, 'single', {
			'avoidEscape': true,
			'allowTemplateLiterals': true
		}],
		'semi': [
			'error',
			'never'
		],
		'no-console': 'off',
		'typescript/class-name-casing': 'error'
	}
}