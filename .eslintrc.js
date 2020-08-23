module.exports = {
	env: {
		es2020: true,
		node: true,
	},
	extends: [
		'airbnb-base',
	],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		indent: [
			2,
			'tab',
		],
		'no-tabs': 0,
		semi: [
			'error',
			'never',
		],
		'no-console': 0,
	},
}
