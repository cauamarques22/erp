const path = require("path"); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
    mode: "production",
    entry: {
        main: "./src/main.js",
        produtosIndex: "./src/assets/css/produtosIndex.css",
        global: "./src/assets/css/global.css",
        navbar: "./src/assets/css/navbar.css",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js" //vai criar um bundle com o nome de cada entrada
    },
    module: {
        rules: [
            {
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/env"]
                }
            }
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"] //Para múltiplos arquivos CSS
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: "src/assets/img", to: "images"}
            ]
        })
    ],
    devtool: "source-map"
}