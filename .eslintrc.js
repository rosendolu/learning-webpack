module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
	},
	extends: 'eslint:recommended',
	globals: {
		__dirname: 'readonly',
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
	},
	rules: {
		indent: ['error', 'tab', 2],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
	},
};
