var webpack = require('webpack');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: 'build/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: "babel",
            exclude: [/node_modules/, /public/],
            query: {
                presets: ["react"]
            }
        }]
    }
};
