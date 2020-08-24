export default {
	env: {
		es2020: true,
		node: true,
	},
	extends: [
		'airbnb-base',
		'prettier',
	],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
		parser: 'babel-eslint',
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
		'prettier/prettier': 'error',
		'import/prefer-default-export': 'off',
	},
}
