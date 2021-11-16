const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackInjector = require('html-webpack-injector');
const devMode = process.env.NODE_ENV !== 'production';

function r(p) {
	return path.resolve(__dirname, p);
}

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	watch: true,
	entry: {
		main: r('src/js/main.js'),
	},
	output: {
		path: r('assets'),
		filename: 'js/[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: r('src/js'),
				exclude: r('node_modules'),
				use: ['babel-loader'],
			},
			{
				test: /\.(sa|sc|c)ss$/i,
				use: [
					// devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		compress: true,
		port: 9000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
			title: 'GrapesJS React component feasibility research',
			files: {
				css: ['css/main.css'],
			},
		}),
		new HtmlWebpackInjector(),
		new MiniCssExtractPlugin(),
	],
	// .concat(devMode ? [] : [new MiniCssExtractPlugin()]),
};

console.log('process.env', process.env);
