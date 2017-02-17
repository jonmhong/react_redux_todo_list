var webpack = require('webpack');
// this is a large js object with all configuration in it
// it is also located in the root directory

// a lot of webpack is we want it to do various tasks to multiple files

// one thing webpack wants is an entry
// you can have multiple entry points
module.exports = {
	devtool: 'inline-source-map', // run in your development environment but not production environment
	entry: [
		'webpack-hot-middleware/client', // webpack needs to know where to look again when there's a change 
		'./client/client.js' // this is our starting point
	],
	output: {  // we have to tell it where we want that file
		rpath: require("path").resolve("./dist"), // this gives it an abosolute path
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
	new webpack.optimize.OccurrenceOrderPlugin(),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin() // won't allow webpack continue to build if it encounters and error
	],
	module: {
		loaders: [
		{
			test: /\.js$/, //regex syntax: takes the file name and searches for .js and we want to run this loader on it. The $ means its at the end
			loader: 'babel-loader', // babel is a tool do a lot of different things to different objects. we have to tell babel what to do.
			exclude: /node_modules/,
			query: { // tells babel what to do for every JS file, we want to compile both JSX and ES6 to JS
				presets: ['react', 'es2015', 'react-hmre']
			}
		}
	    ]

	}
}