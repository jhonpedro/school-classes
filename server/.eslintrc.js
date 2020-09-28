module.exports = {
	env: {
		es2020: true,
		node: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: ['prettier'],
	rules: {
		indent: ['error', 'tab'],
		semi: 0,
		'prettier/prettier': 'error',
		'no-tabs': 0,
		'no-console': 0,
		'class-methods-use-this': 0,
		'arrow-parens': 0,
		'import/first': 0,
		'no-param-reassign': 0,
	},
}
