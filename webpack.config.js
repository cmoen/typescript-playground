const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: {
        main: [
            path.resolve("src", "index.tsx"),
            path.resolve("src", "styles", "app.scss")
        ]
    },
    mode:
        "development",

    output: {
        filename: "[name]-[hash].js",
        path: __dirname + "/dist"
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "styles/[name]-[hash].css"
        })
    ],

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.tsx?$/, loader: "ts-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            // lots of other rules here
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            autoprefixer: false,
                            minimize: process.env.npm_lifecycle_event === "build",
                            importLoaders: 3,
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            ident: "postcss",
                            plugins: () => [
                                autoprefixer({ browsers: ["last 2 versions", "> 2%", "ie >= 10"] })
                            ]
                        }
                    },
                    { loader: "resolve-url-loader?sourceMap" },
                    { loader: "sass-loader?sourceMap" }
                ]
            }
        ]
    }
};

