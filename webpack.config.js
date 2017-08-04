var webpack = require('webpack')
var path = require('path')

module.exports = {
	entry: {
		app: './src/app.js'
	},
	output: {
		filename: 'build/bundle.js',
		sourceMapFilename: 'build/bundle.map'
	},
	externals: {
	    'react': 'React',
	    'react-dom': 'ReactDOM'
	},
	devtool: '#source-map',
	module: {
		loaders: [
			{
				loader:'babel',
				exclude: /(node_modules)/,
				query: {
					presets: ['react', 'es2015']
				}

			},
			{ test: /\.css$/, loader: "style-loader!css-loader" }
		]
	}
}