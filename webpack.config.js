const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
mode: 'development',
      entry: {
        bundle: './src/index.js',
      },
      devtool: 'source-map',
      devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
      },
    output: {
        filename: '[name] [contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
      },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
                ,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          title: 'webpack App',
          filename: 'index.html',
        }),
      ],
}