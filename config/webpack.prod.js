const path = require('path')

module.exports = {
	mode: "production",
	entry: path.resolve(__dirname, "../src", "app"),
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "bundle.js",
		publicPath: "/"
	},
	resolve: {extensions: ['.js', '.jsx']},
	devServer: { 
		host: '192.168.0.100', 
		port: '7788',
		historyApiFallback: true 
	},
	module: {rules: [
		{ test: /\.jsx?/, loader: 'babel-loader' },
		{ 
			test: /\.s?[ac]ss$/i, 
			use: ['style-loader', 'css-loader', 'sass-loader'] 
		}
	]}
}