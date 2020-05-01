// eslint-disable-next-line no-unused-vars
const { resolve, join } = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

let mode = process.env.APP_SERVE_MODE;
mode = mode === 'dev' ? 'development' : 'production';

module.exports = {
	entry: './src/index.js',
	output: {
		path: join(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	mode: mode,
	module: {
		rules: [{ test: '/.txt$/', use: 'raw-loader' }],
	},
	plugins: [new htmlWebpackPlugin({ template: './src/index.html' })],
};
