const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ development }) => ({
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
   },
    mode: development ? 'development' : 'production',
    entry: `${__dirname}/index.js`,
    devServer: {
        open: true,
        hot: true,
        compress: true,
        port: 8000,

    },
    output: {
        path: `${__dirname}`,
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
});