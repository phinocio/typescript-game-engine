const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
	entry: {
		app: [
			'./src/js/app.ts',
			'./src/scss/app.scss'
		]
	},
	devtool: 'inline-source-map',
	output: {
		path: __dirname + '/dist/',
		filename: 'js/[name].js'
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			}),
			new OptimizeCSSAssetsPlugin({ cssProcessorOptions: { discardComments: { removeAll: true } }})
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
		}),
		new CleanWebpackPlugin(
			['dist/css', 'dist/js'], 
			{
				root: __dirname,
				verbose: true,
				dry: false
			}
		),
		//new ManifestPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js$/, 
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: 'css-loader', options: { sourceMap: true}},
					{ loader: 'sass-loader', options: { sourceMap: true } }
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
};