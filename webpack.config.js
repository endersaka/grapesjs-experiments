const path = require('path');

function r(p) {
	return path.resolve(__dirname, p);
}

module.exports = {
	devtool: 'source-map',
	watch: true,
	entry: {
		main: r('src/js/main.js'),
	},
	output: {
		path: r('assets'),
		filename: 'js/[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: r('src/js'),
				exclude: r('node_modules'),
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				include: [
					r('src/css')
				],
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'css/[name].css'
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader?-url'
					}
				]
			}
		]
	},
	devServer: {
		contentBase: r('public'),
		port: 9000
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "webglfundamentals.org lessons",
			template: "index.html",
			files: {
				css: [
					'css/main.css'
				]
			}
		})
	]
};
