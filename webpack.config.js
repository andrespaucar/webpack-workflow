const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer');
const devMode = process.env.NODE_ENV == "development"
const {HotModuleReplacementPlugin} = require('webpack')
 
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    // devtool : 'cheap-module-source-map',
    devtool: 'eval-source-map',
    entry : './src/app.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.[hash].js'
    },
    devServer: {
        // compress: true
        hot: true,
        port: 4000, 
        overlay: {
            warnings: true,
            errors: true
        }
    },
    module:{
        rules:[
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    { 
                        loader: 'postcss-loader',
                        options: {
                            autoprefixer: {
                                browser: ["last 2 versions"]
                            },
                            plugins: () => [
                                autoprefixer
                            ]
                        } 
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg|webp)$/,
                use:[
                        {
                            loader:'file-loader',
                            options:{
                                name: '[folder]/[name].[ext]',
                                outputPath: 'assets/',
                                useRelativePath :true
                        }
                    },
                    {
                        loader: 'image-webpack-loader', 
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use:{
                    loader: "file-loader",
                    options:{
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts/',
                        useRelativePath :true,
                        esModule: false
                    }
                }  
             },
             
        ]
    },
    plugins:[ 
        new CleanWebpackPlugin(),
        new HotModuleReplacementPlugin(),
        new  HtmlWebpackPlugin({
            template : './src/index.html',
            // minify: {
            //     html5: false,
            //     collapseWhitespace: true,
            //     caseSensitive: true,
            //     removeComments: true,
            //     removeEmptyElements: true
            // }
        }),
        new  MiniCssExtractPlugin({
             //Para que genere el CSS y no estea todo en el JS
             filename: 'css/[name].[contenthash].css',
             chunkFilename: '[name].[contenthash].chunk.css',
            //  publicPath:'css/'
        }),
    ]
}