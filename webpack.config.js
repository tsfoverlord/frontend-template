const path = require('path');
const HtmlWebapackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},

	plugins: [
		new HtmlWebapackPlugin({
			title: 'Common',
			template: './src/index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.(svg|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
			{
				test: /.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};
