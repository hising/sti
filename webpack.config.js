const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        "app": "./src/index.js",
        "app2": "./src/another.js",
    },

    output: {
        filename: "[name].js"
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    devServer: {
        disableHostCheck: true,
        hot: true
    }
};
