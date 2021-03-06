module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['prettier', 'react', 'react-hooks'],
	rules: {
		semi: 0,
		'prettier/prettier': 'error',
		'import/prefer-default-export': 0,
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/jsx-filename-extension': 0,
	},
}
