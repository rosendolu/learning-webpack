// eslint-disable-next-line no-unused-vars

const { resolve, join } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

let mode = process.env.APP_SERVE_MODE;
mode = mode === 'dev' ? 'development' : 'production';

module.exports = {
	mode: mode,
	devtool: 'inline-source-map',
	devServer: {
		contentBase: join(__dirname, 'dist'),
		// publicPath: join(__dirname, 'dist'),
		hot: true,
	},
	entry: {
		app: './src/index.js',
		home: './src/home.js',
	},
	output: {
		path: join(__dirname, 'dist'),
		filename: '[name].[hash].js',
		filename: '[name].[hash].js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						outputPath: 'assets',
					},
				},
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({ template: './src/index.html' }),
		new HtmlWebpackPlugin({
			// Also generate a test.html
			filename: 'test.html',
			title: 'test',
		}),
	],
};
