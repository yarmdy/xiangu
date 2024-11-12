// Generated using webpack-cli https://github.com/webpack/webpack-cli
import lodash from 'lodash';
import fs  from 'fs';
import path  from 'path';
import HtmlWebpackPlugin  from 'html-webpack-plugin';
import MiniCssExtractPlugin  from 'mini-css-extract-plugin';
import { title } from 'process';
import { fileURLToPath } from 'url';  // 用于将 url 转换为路径
import { dirname } from 'path';  // 用于获取目录路径

const __filename = fileURLToPath(import.meta.url);  // 获取当前文件路径
const __dirname = dirname(__filename);  // 获取当前文件的目录



const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = MiniCssExtractPlugin.loader;


/** @type {import('webpack').Configuration} */
const config = {
    entry: {
        home:'./src/home.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:"[name].js"
    },
    devServer: {
        open: '/home.html',
        host: 'localhost',
        hot:true,
        watchFiles: ['./src/**/*.html', './src/**/*.js', './src/**/*.css', './src/**/*.ts', './src/**/*.scss'],  // 监听HTML、JS、CSS文件变化
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/home.html',
            filename:"home.html",
            chunks: ['home'],
            templateParameters: (compilation, assets, options) => {
                
                return {
                    
                };
            }
        }),

        new MiniCssExtractPlugin(),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            {
                test: /\.txt/,
                type: 'asset/source',
            }

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    },
};



export default () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
// https://www.ychxmt.com/