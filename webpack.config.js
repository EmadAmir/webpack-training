const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

let production = process.env.NODE_ENV === "production";

let config = {
    // entry: {                                             // multiple file bundling
    //        index: "./src/index",
    //         home: "./src/home"
    //         },
    entry:[
        "./src/index",
        "./src/home"
    ],
    output:{
        // filename: "[name].js",                           // multiple file bundling
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    module:{

        rules:[
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: "ts-loader"

            },
            {
                test:/\.html$/,
                exclude: /node-modules/,
                use: "html-loader"
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
                generator: {
                    filename: "DistImages/[name][ext]",
                },
            },

            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ["style-loader","css-loader", "sass-loader"]           // back to first i.e, The css loader gets processed first and then the output of the CSS loader is fed to the Style-loader which is injected as js
                         
            },

        ],
    },
    plugins: [ 
                new HtmlWebpackPlugin({template: "./src/index.html"}),
                // new CopyWebpackPlugin({
                //     patterns: [{from: "./src/images", to: "images"}]
                // }),
        
             ],

    resolve:{                  
        extensions: [".ts",".js"]
    },

    devtool: "inline-source-map",

    mode: "development",

    devServer:{
        // liveReload: false,                                   //This will turn off the live reload by default the live reload is set to true
        watchFiles: ["src/**/*", "index.html"],                 //This will watch the files mentioned, if there is any file changes then it will trigger a live reload
        static:"./dist",
    },


};

if(production){
    config.mode = "production";
    config.devtool = "inline-source-map";

    // config = {

    //     module: {
    //         rules:[
    //             {
    //                 test: /\.scss$/,
    //                 exclude: /node_modules/,
    //                 use:[MiniCssExtractPlugin.loader, "css-loader", "sass-loader"] // using MiniCssExtractPlugin to extract the css into seperate file instead of injecting in js
    //             }
    //         ],
    //     },
    //     plugins: [new MiniCssExtractPlugin({filename:"bundle.css"})] //this plugin creates a seperate file for css and injects it to the HTML
    // }
}

module.exports = config;