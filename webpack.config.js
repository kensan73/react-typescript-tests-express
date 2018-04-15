const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = {
    entry: './src/client/index.tsx',
    output: {
        filename: 'target/bundle.js',
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.scss'],
    },
    module: {
        loaders: [
            {
                test: /.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
            }, {
                test: /.js$/,
                loader: 'source-map-loader',
                enforce: 'pre',
            }, {
                test: /.scss$/,
                loader: ExtractTextPlugin.extract(({
                    fallback: 'style-loader',
                    use: [
                      'css-loader',
                      'sass-loader'
                    ]
                }))
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('target/bundle.css')
    ]
};

module.exports = webpack;