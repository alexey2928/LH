module.exports = {
	mode: "development",
	entry: ["./client/index.js"],
	output: {
		path: __dirname,
		filename: "./public/bundle.js",
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-react", "@babel/preset-env"],
				},
			},
			{
				test: /\.(woff|woff2)$/,
				use: {
				  loader: 'url-loader',
				},
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				loader: 'file-loader',
				options: {
				  name: '[name].[ext]',
				  outputPath: 'images/',
				  publicPath: 'images/',
				},
			},
		],
	},
};
